<template>
  <component
    :is="tag"
    :id="groupId"
    :class="compKls"
    role="group"
    :aria-label="!isLabeledByFormItem ? ariaLabel || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, toRefs, watch } from 'vue'
import { pick } from 'lodash-unified'
import { UPDATE_MODEL_EVENT, useNamespace } from 'element-plus'
import { debugWarn } from 'element-plus/es/utils/index.mjs'
import { useFormItem, useFormItemInputId } from 'element-plus/es/components/form/index'
import { checkboxGroupEmits, checkboxGroupProps, klsByType } from './checkbox-group'
import { checkboxGroupContextKey } from './constants'

import type { CheckboxGroupValueType } from './checkbox-group'

defineOptions({
  name: 'GuiCheckboxGroup'
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const ns = useNamespace('checkbox')

const { formItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem
})

const changeEvent = async (value: CheckboxGroupValueType) => {
  console.log('props', props)
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  console.log('value', value)
  emit('change', value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  }
})

const klsByLayout: klsByType = {
  horizontal: 'flex flex-row gap-4',
  vertical: 'flex flex-col gap-4'
}

const compKls = computed(() => {
  return [ns.b('group'), klsByLayout[props.layout]]
})

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), ['size', 'min', 'max', 'disabled', 'validateEvent']),
  modelValue,
  changeEvent
})

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)
</script>
