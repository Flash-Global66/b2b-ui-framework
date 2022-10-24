<template>
  <button
    :type="typeAction"
    class="
      flex flex-row
      items-center
      justify-between
      w-full
      sm:w-40
      text-white
      font-semibold
      rounded
      text-sm
      bg-blue-3
      hover:bg-blue-4
      active:bg-blue-1
      disabled:bg-blue-6
      px-5
      py-3
    "
  >
    {{ title }}
    <fa-icon icon="arrow-right" class="text-sm" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'GButtonNext',
  props: {
    typeAction: String,
    title: String,
  },
});
</script>
