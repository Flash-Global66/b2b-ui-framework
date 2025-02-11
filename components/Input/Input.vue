<template>
  <div
    :class="[containerKls]"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div ref="wrapperRef" :class="ns.e('wrapper')">
      <div ref="prefixRef" :class="ns.e('prefix')">
        <slot name="prefix">
          <g-icon-font
            v-if="prefixIcon"
            :class="ns.e('prefix-icon')"
            :name="prefixIcon"
          />
        </slot>
      </div>
      
      <div
        :class="
          [ns.e('label'),
          { 'dynamic-label': !Boolean(nativeInputValue) || !isFocused } ]
        ">
        {{ label }}
      </div>

      <input
        :id="inputId"
        ref="input"
        :class="ns.e('inner')"
        v-bind="attrs"
        :minlength="minlength"
        :maxlength="maxlength"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="ariaLabel"
        :placeholder="placeholder"
        :style="inputStyle"
        :form="form"
        :autofocus="autofocus"
        :role="containerRole"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @change="handleChange"
        @keydown="handleKeydown"
      />

      <!-- suffix slot -->
      <slot name="suffix">
        <span v-if="suffixVisible" :class="ns.e('suffix')">
          <g-icon-font
            v-if="suffixIcon && !(showClear || showPwdVisible)"
            :class="ns.e('suffix-icon')"
            :name="suffixIcon"
          />
  
          <g-icon-font
            v-if="showClear"
            :class="[ns.e('icon'), ns.e('clear')]"
            name="regular times"
            @mousedown.prevent="NOOP"
            @click="clear"
          />
          
          <g-icon-font
            v-if="showPwdVisible"
            :class="[ns.e('icon'), ns.e('password')]"
            name="light equals"
            @click="handlePasswordVisible"
          />
        </span>
      </slot>
    </div>
    <div :class="ns.e('help')">
      <div :class="ns.e('help-text')">{{ helpText }}</div>
      <span v-if="isWordLimitVisible" :class="ns.e('help-count')">
        {{ textLength }}/{{ maxlength }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  toRef,
  useAttrs as useRawAttrs,
  useSlots,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { GIconFont } from '@flash-global66/b2b-ui-icon-font';
import { isNil } from 'lodash-unified'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
  useFormSize,
  useAttrs,
  useComposition,
  useCursor,
  useFocusController,
  useNamespace,
  UPDATE_MODEL_EVENT,
} from 'element-plus'
import {
  NOOP,
  ValidateComponentsMap,
  debugWarn,
  isClient,
  isObject,
} from 'element-plus/es/utils/index.mjs'

import { inputEmits, inputProps } from './input'
import type { StyleValue } from 'vue'

type TargetElement = HTMLInputElement

defineOptions({
  name: 'Input',
  inheritAttrs: false,
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const rawAttrs = useRawAttrs()
const attrs = useAttrs()
const slots = useSlots()

const containerKls = computed(() => [
  ns.b(),
  ns.is('disabled', inputDisabled.value),
  ns.is('exceed', inputExceed.value),
  ns.is('content', !!nativeInputValue.value),
  ns.is('focus', isFocused.value),
  ns.is('disabled', inputDisabled.value),
  {
    [ns.m('prefix')]: props.prefixIcon,
    [ns.m('suffix')]: props.suffixIcon || props.clearable || props.showPassword,
    [ns.bm('suffix', 'password-clear')]:
      showClear.value && showPwdVisible.value,
    [ns.b('hidden')]: props.type === 'hidden',
  },
  rawAttrs.class,
])

const leftPrefix = ref<string | undefined>(undefined)
const prefixRef = ref<HTMLElement | null>(null);

const updatePrefixPosition = () => {
  if (!props.prefixIcon) {
    leftPrefix.value = '0';
    return;
  }
  
  requestAnimationFrame(() => {
    const leftRef = prefixRef.value?.getBoundingClientRect().width;
    leftPrefix.value = `${leftRef}px`;
  });
};

useResizeObserver(prefixRef, updatePrefixPosition);


const { form: elForm, formItem: elFormItem } = useFormItem()
const { inputId } = useFormItemInputId(props, {
  formItemContext: elFormItem,
})
const inputDisabled = useFormDisabled()
const ns = useNamespace('input')

const input = shallowRef<HTMLInputElement>()

const hovering = ref(false)
const passwordVisible = ref(false)
const countStyle = ref<StyleValue>()

const _ref = computed(() => input.value)

// wrapperRef for type="text", handleFocus and handleBlur for type="textarea"
const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
  input,
  {
    beforeFocus() {
      return inputDisabled.value
    },
    afterBlur() {
      if (props.validateEvent) {
        elFormItem?.validate?.('blur').catch((err) => debugWarn(err))
      }
    },
  }
)

const needStatusIcon = computed(() => elForm?.statusIcon ?? false)
const validateState = computed(() => elFormItem?.validateState || '')
const validateIcon = computed(
  () => validateState.value && ValidateComponentsMap[validateState.value]
)
const passwordIcon = computed(() =>
  passwordVisible.value ? 'IconView' : 'IconHide'
)
const containerStyle = computed<StyleValue>(() => [
  rawAttrs.style as StyleValue,
])

const nativeInputValue = computed(() =>
  isNil(props.modelValue) ? '' : String(props.modelValue)
)
const showClear = computed(
  () =>
    props.clearable &&
    !props.showPassword &&
    !inputDisabled.value &&
    !props.readonly &&
    !!nativeInputValue.value &&
    (isFocused.value || hovering.value)
)
const showPwdVisible = computed(
  () =>
    props.showPassword &&
    !inputDisabled.value &&
    !!nativeInputValue.value &&
    (!!nativeInputValue.value || isFocused.value)
)
const isWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    !!props.maxlength &&
    props.type === 'text' &&
    !inputDisabled.value &&
    !props.readonly &&
    !props.showPassword
)
const textLength = computed(() => nativeInputValue.value.length)
const inputExceed = computed(
  () =>
    // show exceed style if length of initial value greater then maxlength
    !!isWordLimitVisible.value && textLength.value > Number(props.maxlength)
)
const suffixVisible = computed(
  () =>
    !!props.suffixIcon ||
    showClear.value ||
    props.showPassword
)

const [recordCursor, setCursor] = useCursor(input)

const setNativeInputValue = () => {
  const input = _ref.value
  const formatterValue = props.formatter
    ? props.formatter(nativeInputValue.value)
    : nativeInputValue.value
  if (!input || input.value === formatterValue) return
  input.value = formatterValue
}

const handleInput = async (event: Event) => {
  recordCursor()

  let { value } = event.target as TargetElement

  if (props.formatter) {
    value = props.parser ? props.parser(value) : value
  }

  // should not emit input during composition
  // see: https://github.com/ElemeFE/element/issues/10516
  if (isComposing.value) return

  // hack for https://github.com/ElemeFE/element/issues/8548
  // should remove the following line when we don't support IE
  if (value === nativeInputValue.value) {
    setNativeInputValue()
    return
  }

  emit(UPDATE_MODEL_EVENT, value)
  emit('input', value)

  // ensure native input value is controlled
  // see: https://github.com/ElemeFE/element/issues/12850
  await nextTick()
  setNativeInputValue()
  setCursor()
}

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}

const {
  isComposing,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
} = useComposition({ emit, afterComposition: handleInput })

const handlePasswordVisible = () => {
  recordCursor()
  passwordVisible.value = !passwordVisible.value
  // The native input needs a little time to regain focus
  setTimeout(setCursor)
}

const focus = () => input.value?.focus()

const blur = () => input.value?.blur()

const handleMouseLeave = (evt: MouseEvent) => {
  hovering.value = false
  emit('mouseleave', evt)
}

const handleMouseEnter = (evt: MouseEvent) => {
  hovering.value = true
  emit('mouseenter', evt)
}

const handleKeydown = (evt: KeyboardEvent) => {
  emit('keydown', evt)
}

const select = () => {
  input.value?.select()
}

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      elFormItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)

// native input value is set explicitly
// do not use v-model / :value in template
// see: https://github.com/ElemeFE/element/issues/14521
watch(nativeInputValue, () => setNativeInputValue())

// when change between <input> and <textarea>,
// update DOM dependent value and styles
// https://github.com/ElemeFE/element/issues/14857
watch(
  () => props.type,
  async () => {
    await nextTick()
    setNativeInputValue()
  }
)

onMounted(() => {
  if (!props.formatter && props.parser) {
    debugWarn(
      'ElInput',
      'If you set the parser, you also need to set the formatter.'
    )
  }
  setNativeInputValue()
})

defineExpose({
  /** @description HTML input element */
  input,

  /** @description is input composing */
  isComposing,

  /** @description HTML input element native method */
  focus,
  /** @description HTML input element native method */
  blur,
  /** @description HTML input element native method */
  select,
  /** @description clear input value */
  clear
})
</script>

<style lang="scss">
.dynamic-label {
  left: calc(v-bind(leftPrefix) + 16px);
}
</style>
