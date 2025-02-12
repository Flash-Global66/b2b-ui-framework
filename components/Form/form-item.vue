<template>
  <div ref="formItemRef" :class="formItemClasses">
    <slot />
    <transition :name="ns.e('fade')" mode="out-in">
      <div :class="ns.e('content-error')">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <span :class="ns.e('error')">
            {{ validateMessage }}
          </span>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  useSlots,
  watch,
} from 'vue'
import AsyncValidator from 'async-validator'
import { clone } from 'lodash-unified'
import { refDebounced } from '@vueuse/core'
import {
  ensureArray,
  getProp,
  isArray,
  isFunction,
  isString,
  Arrayable,
} from 'element-plus/es/utils/index.mjs'
import { useNamespace } from 'element-plus'
import { formItemProps } from './form-item'
import { formContextKey, formItemContextKey } from './constants'

import type { RuleItem } from 'async-validator'
import type {
  FormItemContext,
  FormItemRule,
  FormValidateFailure,
} from './types'
import type { FormItemValidateState } from './form-item'

defineOptions({
  name: 'FormItem',
})
const props = defineProps(formItemProps)

const formContext = inject(formContextKey, undefined)
const parentFormItemContext = inject(formItemContextKey, undefined)

const ns = useNamespace('form-item')

const inputIds = ref<string[]>([])

const validateState = ref<FormItemValidateState>('')
const validateStateDebounced = refDebounced(validateState, 100)
const validateMessage = ref('')
const formItemRef = ref<HTMLDivElement>()
// special inline value.
let initialValue: any = undefined
let isResettingField = false

const formItemClasses = computed(() => [
  ns.b(),
  ns.is('error', validateState.value === 'error'),
  ns.is('validating', validateState.value === 'validating'),
  ns.is('success', validateState.value === 'success'),
])

const propString = computed(() => {
  if (!props.prop) return ''
  return isString(props.prop) ? props.prop : props.prop.join('.')
})

const labelFor = computed<string | undefined>(() => {
  return (
    props.for || (inputIds.value.length === 1 ? inputIds.value[0] : undefined)
  )
})

const isNested = !!parentFormItemContext

const fieldValue = computed(() => {
  const model = formContext?.model
  if (!model || !props.prop) {
    return
  }
  return getProp(model, props.prop).value
})

const normalizedRules = computed(() => {
  const { required } = props

  const rules: FormItemRule[] = []

  if (props.rules) {
    rules.push(...ensureArray(props.rules))
  }

  const formRules = formContext?.rules
  if (formRules && props.prop) {
    const _rules = getProp<Arrayable<FormItemRule> | undefined>(
      formRules,
      props.prop
    ).value
    if (_rules) {
      rules.push(...ensureArray(_rules))
    }
  }

  if (required !== undefined) {
    const requiredRules = rules
      .map((rule, i) => [rule, i] as const)
      .filter(([rule]) => Object.keys(rule).includes('required'))

    if (requiredRules.length > 0) {
      for (const [rule, i] of requiredRules) {
        if (rule.required === required) continue
        rules[i] = { ...rule, required }
      }
    } else {
      rules.push({ required })
    }
  }

  return rules
})

const validateEnabled = computed(() => normalizedRules.value.length > 0)

const getFilteredRule = (trigger: string) => {
  const rules = normalizedRules.value
  return (
    rules
      .filter((rule) => {
        if (!rule.trigger || !trigger) return true
        if (isArray(rule.trigger)) {
          return rule.trigger.includes(trigger)
        } else {
          return rule.trigger === trigger
        }
      })
      // exclude trigger
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ trigger, ...rule }): RuleItem => rule)
  )
}

const isRequired = computed(() =>
  normalizedRules.value.some((rule) => rule.required)
)

const shouldShowError = computed(
  () =>
    validateStateDebounced.value === 'error' &&
    props.showMessage &&
    !props.showMessageChild
)

const shouldShowErrorChild = computed(
  () =>
    validateStateDebounced.value === 'error' &&
    props.showMessageChild &&
    !props.showMessage
)

const setValidationState = (state: FormItemValidateState) => {
  validateState.value = state
}

const onValidationFailed = (error: FormValidateFailure) => {
  const { errors, fields } = error
  if (!errors || !fields) {
    console.error(error)
  }

  setValidationState('error')
  validateMessage.value = errors
    ? errors?.[0]?.message ?? `${props.prop} es requerido`
    : ''

  formContext?.emit('validate', props.prop!, false, validateMessage.value)
}

const onValidationSucceeded = () => {
  setValidationState('success')
  formContext?.emit('validate', props.prop!, true, '')
}

const doValidate = async (rules: RuleItem[]): Promise<true> => {
  const modelName = propString.value
  console.log('modelName', modelName)
  const validator = new AsyncValidator({
    [modelName]: rules,
  })
  return validator
    .validate({ [modelName]: fieldValue.value }, { firstFields: true })
    .then(() => {
      onValidationSucceeded()
      return true as const
    })
    .catch((err: FormValidateFailure) => {
      onValidationFailed(err as FormValidateFailure)
      return Promise.reject(err)
    })
}

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  // skip validation if its resetting
  if (isResettingField || !props.prop) {
    return false
  }

  const hasCallback = isFunction(callback)
  if (!validateEnabled.value) {
    callback?.(false)
    return false
  }

  const rules = getFilteredRule(trigger)
  if (rules.length === 0) {
    callback?.(true)
    return true
  }

  setValidationState('validating')

  return doValidate(rules)
    .then(() => {
      callback?.(true)
      return true as const
    })
    .catch((err: FormValidateFailure) => {
      const { fields } = err
      callback?.(false, fields)
      return hasCallback ? false : Promise.reject(fields)
    })
}

const clearValidate: FormItemContext['clearValidate'] = () => {
  setValidationState('')
  validateMessage.value = ''
  isResettingField = false
}

const resetField: FormItemContext['resetField'] = async () => {
  const model = formContext?.model
  if (!model || !props.prop) return

  const computedValue = getProp(model, props.prop)

  // prevent validation from being triggered
  isResettingField = true

  computedValue.value = clone(initialValue)

  await nextTick()
  clearValidate()

  isResettingField = false
}

const addInputId: FormItemContext['addInputId'] = (id: string) => {
  if (!inputIds.value.includes(id)) {
    inputIds.value.push(id)
  }
}

const removeInputId: FormItemContext['removeInputId'] = (id: string) => {
  inputIds.value = inputIds.value.filter((listId) => listId !== id)
}

watch(
  () => props.error,
  (val) => {
    validateMessage.value = val || ''
    setValidationState(val ? 'error' : '')
  },
  { immediate: true }
)

watch(
  () => props.validateStatus,
  (val) => setValidationState(val || '')
)

const context: FormItemContext = reactive({
  ...toRefs(props),
  $el: formItemRef,
  validateState,
  inputIds,
  fieldValue,
  shouldShowError,
  shouldShowErrorChild,
  validateMessage,
  addInputId,
  removeInputId,
  resetField,
  clearValidate,
  validate,
})

provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = clone(fieldValue.value)
  }
})

onBeforeUnmount(() => {
  formContext?.removeField(context)
})

defineExpose({
  /**
   * @description Validation message.
   */
  validateMessage,
  /**
   * @description Whether to show error message in form item.
   */
  shouldShowError,
  /**
   * @description Whether to show error message in the child of form item.
   */
  shouldShowErrorChild,
  /**
   * @description Validation state.
   */
  validateState,
  /**
   * @description Validate form item.
   */
  validate,
  /**
   * @description Remove validation status of the field.
   */
  clearValidate,
  /**
   * @description Reset current field and remove validation result.
   */
  resetField,
})
</script>
