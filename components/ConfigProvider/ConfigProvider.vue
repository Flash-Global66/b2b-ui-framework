<template>
  <el-config-provider
    v-bind="{ ...$attrs, ...$props }"
    namespace="g"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElConfigProvider } from 'element-plus';
import es from 'element-plus/dist/locale/es.mjs';

// TYPES
import { TypeLanguage } from './types/locale';

export default defineComponent({
  name: 'ConfigProvider',
  components: {
    ElConfigProvider,
  },
  props: {
    /**
     * global Initial zIndex
     */
     zIndex: {
      type: Number,
      default: '-'
    },
    /**
     * Locale Object
     */
     locale: {
      type: Object as PropType<TypeLanguage>,
      default: es,
    },
  },
});
</script>