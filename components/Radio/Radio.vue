<template>
  <el-radio
    v-bind="{ ...$attrs, ...$props }"
    @change="(event) => $emit('change', event)"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </el-radio>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElRadio } from "element-plus";

// TYPES
import { TypeRadioSize } from './types/type';

export default defineComponent({
  name: 'Radio',
  components: {
    ElRadio,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'change'
  ],
  props: {
    /**
     * whether Radio is disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * size of the Radio
    */
    size: {
      type: String as PropType<TypeRadioSize>,
      default: '',
    },
    /** 
     * Custom size must activate the custom size type
     */
    sizeCustom: {
      type: String,
      default: '30px',
    },
    /**
     *  the value of Radio
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
  },
});
</script>

<style lang="scss">
@use "./styles/index";
.g-radio {
  &.g-radio--custom {
    --radio-input-size: v-bind(sizeCustom);
  }
}
</style>