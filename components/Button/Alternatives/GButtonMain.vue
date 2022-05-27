<template>
  <button
    :class="{ [size]: true, [this.class]: true, 'rounded-full': rounded }"
    class="
      flex flex-col
      md:flex-row
      items-center
      justify-center
      text-gray-2
      font-semibold
      rounded-2xl
      text-xs
      shadow-button
      bg-white
      hover:bg-gray-9
      disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white
      px-5
    "
    data-test="button-primary"
  >
    <div
      class="
        w-8
        h-8
        rounded-full
        bg-blue-4
        flex
        items-center
        justify-center
        mr-3
      "
    >
      <fa-icon
        v-if="icon"
        :icon="icon"
        class="lg:inline text-lg text-white"
        data-test="button-primary-icon"
      ></fa-icon>
    </div>
    <span
      v-if="title"
      class="font-montserrat"
      data-test="button-primary-title"
      >{{ title }}</span
    >
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GButtonMain',
  props: {
    size: String,
    title: String,
    icon: String,
    class: String,
    rounded: Boolean,
  },
});
</script>
