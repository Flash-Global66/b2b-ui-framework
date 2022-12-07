<template>
  <section>
    <el-config-provider namespace="gui">
      <!--
        @slot customize default content
      -->
      <slot />
    </el-config-provider>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElConfigProvider } from 'element-plus';
import es from 'element-plus/dist/locale/es.mjs';

// TYPES
import { TypeLanguage } from './config-type';

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