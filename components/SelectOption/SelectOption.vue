<template>
  <el-option
    v-bind="{ ...$attrs, ...$props }"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </el-option>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElOption } from 'element-plus';

// TYPES
import { TypeRadioSize } from './select-option.type';

export default defineComponent({
  name: 'Option',
  components: {
    ElOption,
  },
  props: {
    /**
     * whether option is disabled
    */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     *  label of option, same as value if omitted
    */
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    /**
     *  value of option
    */
    value: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
  },
});
</script>
