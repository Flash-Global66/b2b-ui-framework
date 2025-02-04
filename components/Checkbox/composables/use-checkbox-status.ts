import { computed, inject, isRef, ref, toRaw } from 'vue'
import { isEqual } from 'lodash-unified'
import { useFormSize } from 'element-plus/es/components/form/index.mjs'
import { isArray, isBoolean, isObject, isPropAbsent } from 'element-plus/es/utils/index.mjs'
import { checkboxGroupContextKey } from '../constants'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from '../composables'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isFocused = ref(false)
  const isError = computed<boolean>(() => {
    if (props.errorMessage && !props.checked) return true
    return false
  })
  const actualValue = computed(() => {
    // In version 2.x, if there's no props.value, props.label will act as props.value
    // In version 3.x, remove this computed value, use props.value instead.
    if (!isPropAbsent(props.value)) {
      return props.value
    }
    return props.label
  })
  // const isChecked = computed<boolean>(() => {
  const isChecked = computed<boolean>(() => {
    const value = model.value

    if (isBoolean(value)) return value
    if (isArray(value)) return checkArrayContainsValue(value, actualValue.value)
    if (value != null) return value === props.trueValue

    return Boolean(value)
  })

  // Función helper para manejar lógica de arrays
  const checkArrayContainsValue = (array: unknown[], targetValue: unknown): boolean => {
    const rawArray = array.map(toRaw)
    const rawTarget = isRef(targetValue) ? toRaw(targetValue.value) : targetValue

    return isObject(rawTarget)
      ? rawArray.some((item) => isEqual(item, toRaw(rawTarget)))
      : rawArray.includes(rawTarget)
  }

  const checkboxButtonSize = useFormSize(
    computed(() => checkboxGroup?.size?.value),
    {
      prop: true
    }
  )
  const checkboxSize = useFormSize(computed(() => checkboxGroup?.size?.value))

  const hasOwnLabel = computed<boolean>(() => {
    return !!slots.default || !isPropAbsent(actualValue.value)
  })

  return {
    actualValue,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    isChecked,
    isError,
    isFocused
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
