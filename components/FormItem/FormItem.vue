<template>
  <section class="g-form-item-wrapper">
    <el-form-item
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
  
    </el-form-item>
    <slot name="append" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElFormItem } from 'element-plus';

export default defineComponent({
  name: 'GFormItem',
  components: {
    ElFormItem,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'resetField',
  ],
  // props: {
  //   /**
  //    * A key of model. It could be an array of property paths (e.g ['a', 'b', 0]). In the use of validate and resetFields method, the attribute is required.
  //    */
  //   //  prop: {
  //   //   type: String as PropType<string | string[]>,
  //   //   default: ''
  //   // },
  //   /**
  //     * Validation rules of form, see the following table, more advanced usage at async-validator.
  //   */
  //   // rules: {
  //   //   type: Object,
  //   //   default: () => ({})
  //   // },
  //   /**
  //    * Field error message, set its value and the field will validate error and show this message immediately.
  //    */
  //   //  error: {
  //   //   type: String,
  //   //   default: ''
  //   // },
  //   /**
  //    * Whether to show the error message.
  //    */
  //   //  showMessage: {
  //   //   type: Boolean,
  //   //   default: true
  //   // },
  //   /**
  //    * Whether to trigger validation when the rules prop is changed.
  //    */
  //   //  size: {
  //   //   type: String as PropType<string | string[]>,
  //   //   default: 'default',
  //   // },
  // },
});
</script>

<style lang="scss">
</style>
