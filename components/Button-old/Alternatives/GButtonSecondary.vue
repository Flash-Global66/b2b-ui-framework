<template>
  <button
    :class="{ [size]: true, [this.class]: true, 'rounded-full': rounded }"
    class="
      flex
      items-center
      justify-center
      text-white
      font-semibold
      rounded
      text-sm
      bg-green-2
      hover:bg-green-3
      active:bg-green-1
      disabled:bg-green-5
      px-5
    "
    data-test="button-secondary"
  >
    <fa-icon
      v-if="icon"
      :icon="icon"
      class="lg:inline hidden text-xl mr-3"
      data-test="button-secondary-icon"
    ></fa-icon>
    <span v-if="title" data-test="button-secondary-title">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GButtonSecondary',
  props: {
    size: String,
    title: String,
    icon: String,
    class: String,
    rounded: Boolean,
  },
});
</script>
