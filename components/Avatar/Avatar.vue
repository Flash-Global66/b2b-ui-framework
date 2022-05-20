<template>
  <div
    class="flex items-center justify-center rounded-full h-10 w-10 font-montserrat"
    :class="{ 'border-2 border-blue-2 bg-blue-3 bg-opacity-10': !url }"
  >
    <img v-if="url" :src="url" class="rounded-full h-10 w-10" />
    <span v-else class="text-blue-1 text-lg font-semibold uppercase">{{
      text.trim() || 'G66'
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Avatar',
  props: {
    url: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'G66',
    },
  },
});
</script>

<style lang="scss" scoped></style>