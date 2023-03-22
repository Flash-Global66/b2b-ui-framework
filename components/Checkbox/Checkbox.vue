<template>
  <div class="gui-checkbox-wrapper">
    <el-checkbox
      v-bind="{ ...$attrs, ...$props }"
      :class="{ 'gui-checkbox-rounded': rounded }"
      @change="(event) => $emit('change', event)"
    >
      <!--
        @slot customize default content
      -->
      <slot />
    </el-checkbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElCheckbox } from "element-plus";

// TYPES
import { TypeCheckboxSize } from './checkbox.type';

export default defineComponent({
  name: 'Checkbox',
  components: {
    ElCheckbox,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'change'
  ],
  props: {
    /**
     * whether checkbox is rounded
     */
    rounded: {
      type: Boolean,
      default: false
    },
    /**
     * whether checkbox is disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * size of the checkbox
    */
    size: {
      type: String as PropType<TypeCheckboxSize>,
      default: '',
    },
    /**
     *  the value of checkbox
    */
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    /**
     *  native 'name' attribute
     */
    name: {
      type: String,
      default: '',
    },
    /**
     * Set indeterminate state, only responsible for style control
     */
    indeterminate: Boolean,
    /**
     * if the Checkbox is checked
     */
    checked: Boolean,
    /**
     * value of the Checkbox if it's checked
     */
    trueLabel: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * value of the Checkbox if it's not checked
     */
    falseLabel: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * input id
     */
    id: {
      type: String,
      default: undefined,
    },
    /**
     * same as [aria-controls](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), takes effect when `indeterminate` is `true`
     */
    controls: {
      type: String,
      default: undefined,
    },
    /**
     * whether to add a border around Checkbox
     */
    border: Boolean,
    /**
     * input tabindex
     */
    tabindex: [String, Number],
    /**
     * whether to trigger form validation
     */
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
