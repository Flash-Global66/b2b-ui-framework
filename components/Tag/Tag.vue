<template>
  <el-tag
    v-bind="{ ...$attrs, ...$props }"
    @click="$emit('click')"
    @close="$emit('close')"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </el-tag>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { ElTag, componentSizes } from 'element-plus';

export default defineComponent({
  name: 'GTag',
  components: {
    ElTag,
  },
  props: {
  /**
   * @description type of Tag
   */
   type: {
    type: String,
    values: ['success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  /**
   * @description whether Tag can be removed
   */
  closable: Boolean,
  /**
   * @description whether to disable animations
   */
  disableTransitions: Boolean,
  /**
   * @description whether Tag has a highlighted border
   */
  hit: Boolean,
  /**
   * @description background color of the Tag
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description size of Tag
   */
  size: {
    type: String,
    values: componentSizes,
    default: '',
  },
  /**
   * @description whether Tag is rounded
   */
  round: Boolean,
  },
  setup: () => {
    
    return;
  },
});
</script>