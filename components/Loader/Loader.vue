<template>
  <transition name="fade">
    <div
      class="
        fixed
        top-0
        left-0
        z-[300]
        overflow
        flex
        w-full
        h-full
        justify-center
        items-center
      "
      style="background-color: rgba(4, 16, 66, 0.8)"
      v-if="show"
    >
      <img src="./assets/img/preloader.gif" class="h-12" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loader',
  props: {
    show: {
      default: false,
      type: Boolean,
    },
  },
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply duration-500;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
