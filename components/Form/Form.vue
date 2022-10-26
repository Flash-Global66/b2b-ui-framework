<template>
  <el-form
    ref="form"
    v-bind="{ ...$attrs, ...$props }"
    hide-required-asterisk
    @validate="(event) => $emit('validate', event)"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { ElForm } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

export default defineComponent({
  name: 'GForm',
  components: {
    ElForm,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'validate',
    /**
     * Validate specified fields.
    */
    'validateField',
    /**
      * Reset specified fields and remove validation result.
    */
   'resetFields',
    /**
      * Scroll to the specified fields.
    */
    'scrollToField',
    /**
     * Clear validation message for specified fields.
     * @property {number} newValue new value set
    */
    'clearValidate',
  ],
  props: {
    /**
     * Whether to disable all components in this form. If set to true, it will override the disabled prop of the inner component.
     */
     disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Validation rules of form.
     */
     rules: {
      type: Object ,
      default: () => ({})
    },
    /**
     * Whether to show the error message.
     */
     showMessage: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to display an icon indicating the validation result.
     */
     statusIcon: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to trigger validation when the rules prop is changed.
     */
     validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    /**
     * When validation fails, scroll to the first error form entry.
     */
     scrollToError: {
      type: Boolean,
      default: false
    },
  },
  setup() {
    const form = ref<FormInstance>();
    return {
      form,
    }
  }
});
</script>

<style lang="scss">
</style>
