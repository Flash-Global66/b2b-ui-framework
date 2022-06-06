<template>
  <el-config-provider :namespace="provider_el.NAME_SPACE">
    <el-radio-group
      v-bind="{ ...$attrs, ...$props }"
      @change="(event) => $emit('change', event)"
    >
      <!--
        @slot customize default content
      -->
      <slot />
    </el-radio-group>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElConfigProvider, ElRadioGroup } from "element-plus";

// TYPES
import { TypeRadioSize, EnumRadioSize } from '../Radio/types/type';

// CONSTANTS
import { provider_el } from '../../constants/provider';

export default defineComponent({
  name: 'RadioGroup',
  components: {
    ElRadioGroup,
    ElConfigProvider,
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
  },
  setup() {
    return {
      provider_el,
    }
  }
});
</script>