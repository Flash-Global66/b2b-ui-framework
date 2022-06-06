<template>
  <el-config-provider :namespace="provider_el.NAME_SPACE">
    <el-radio
      v-bind="{ ...$attrs, ...$props }"
      @change="(event) => $emit('change', event)"
    >
      <!--
        @slot customize default content
      -->
      <slot />
    </el-radio>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElConfigProvider, ElRadio } from "element-plus";

// TYPES
import { TypeRadioSize, EnumRadioSize } from './types/type';

// CONSTANTS
import { provider_el } from '../../constants/provider';

export default defineComponent({
  name: 'Radio',
  components: {
    ElConfigProvider,
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
      type: String as PropType<EnumRadioSize>,
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
  setup () {
    return {
      provider_el,
    }
  }
});
</script>

<style lang="scss">
.g-radio {
  &.g-radio--custom {
    --radio-input-size: v-bind(sizeCustom);
  }
}
</style>