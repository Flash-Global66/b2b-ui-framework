<template>
  <button
    :class="{ [size]: true, [this.class]: true, 'rounded-full': rounded }"
    class="
      flex
      items-center
      justify-between
      text-white
      rounded
      text-sm
      bg-blue-3
      hover:bg-blue-4
      active:bg-blue-1
      disabled:bg-blue-6'
      px-5
      disabled:bg-blue-5
    "
    data-test="button-primary-aligned"
  >
    <span
      v-if="title"
      class="font-semibold text-sm"
      data-test="button-primary-aligned-title"
      >{{ title }}</span
    >

    <fa-icon
      v-if="icon"
      :icon="icon"
      class="lg:inline ml-3"
      data-test="button-primary-aligned-icon"
    ></fa-icon>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GButtonPrimaryAligned',
  props: {
    size: String,
    title: String,
    icon: String,
    class: String,
    rounded: Boolean,
  },
});
</script>
