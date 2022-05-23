<template>
  <div
    class="text-[11px] text-white text-center rounded-full px-4"
    :class="backgroundClass"
  >
    {{text}}
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { PillType } from './types/pill.types';
export default defineComponent({
  name: 'Pill',
  props: {
    type: {
      default: PillType.Normal
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const backgroundClass = computed(() => ({
      'bg-blue-3': props.type == PillType.Normal,
      'bg-green-1': props.type == PillType.Success,
      'bg-red-6': props.type == PillType.Error,
    }));
    return {
      backgroundClass,
    };
  },
});
</script>
