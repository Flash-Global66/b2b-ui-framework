<template>
  <button
    :class="[size, this.class, rounded ? 'rounded-full' : '', type]"
    class="
      flex
      items-center
      justify-center
      font-semibold
      rounded
      text-sm
      border
      disabled:cursor-not-allowed
      px-5
      duration-300
    "
    data-test="button-outlined"
  >
    <fa-icon
      v-if="icon"
      :icon="icon"
      class="lg:inline hidden text-xl mr-3"
      data-test="button-outlined-icon"
    ></fa-icon>
    <span v-if="title" data-test="button-outlined-title">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';

import { ButtonTypeColorEnum } from '../enum/button.enum';

export default defineComponent({
  name: 'GButtonOutlined',
  props: {
    size: String,
    title: String,
    icon: String,
    class: String,
    type: String,
    rounded: Boolean,
  },
  setup(props, { attrs }) {
    let colorBtn: ComputedRef<string> = computed(() => {
      let color = '';
      switch (props.type) {
        case ButtonTypeColorEnum.Warning:
          color = 'warning';
          break;
        default:
          color = 'primary';
          break;
      }
      return color;
    });

    return {
      colorBtn,
    };
  },
});
</script>

<style lang="scss" scoped>
.primary {
  @apply border-blue-3 text-blue-3 active:border-blue-1 active:text-blue-1 hover:text-blue-4 hover:border-blue-4 disabled:text-blue-6 disabled:border-blue-6;
}
.warning {
  @apply border-yellow-6 text-yellow-6 active:border-yellow-1 active:text-yellow-1 hover:text-yellow-5 hover:border-yellow-5 disabled:text-yellow-2 disabled:border-yellow-2;
}
</style>
