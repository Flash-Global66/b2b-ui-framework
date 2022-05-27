<template>
  <button
    :class="{ [size]: true, [this.class]: true, 'rounded-full': rounded }"
    class="
      flex
      items-center
      justify-center
      font-semibold
      text-sm text-blue-3
      active:text-blue-1
      hover:text-blue-4
      disabled:text-blue-6'
      px-5
      btn
    "
    data-test="button-ghost"
  >
    <fa-icon
      v-if="icon"
      :icon="icon"
      class="lg:inline hidden text-xl mr-3"
      data-test="button-ghost-icon"
    ></fa-icon>
    <span v-if="title" data-test="button-ghost-title">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GButtonGhost',
  props: {
    size: String,
    title: String,
    icon: String,
    class: String,
    rounded: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  &:focus-visible {
    @apply outline-none;
  }
}
</style>