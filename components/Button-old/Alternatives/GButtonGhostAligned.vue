<template>
  <button
    :class="{ [size]: true, [this.class]: true, 'rounded-full': rounded }"
    class="
      flex
      items-center
      justify-between
      rounded
      lg:text-base
      text-sm text-gray-4
      hover:text-gray-2
      px-5
    "
    data-test="button-ghost-aligned"
  >
    <fa-icon
      v-if="icon"
      :icon="icon"
      class="lg:inline mr-3"
      data-test="button-ghost-aligned-icon"
    ></fa-icon>
    <span
      v-if="title"
      class="font-semibold text-sm"
      data-test="button-ghost-aligned-title"
      >{{ title }}</span
    >
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GButtonGhostAligned',
  props: {
    size: String,
    title: String,
    icon: String,
    class: String,
    rounded: Boolean,
  },
});
</script>
