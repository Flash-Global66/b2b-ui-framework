<template>
  <div
    class="
      flex
      items-center
      justify-center
      rounded-full
      h-10
      w-10
      font-montserrat
      relative
    "
    :class="[
      !url && !solid ? 'bg-blue-3/10' : 'bg-blue-1', 
      { 'border-2 border-blue-1' : !url }
    ]"
  >
    <img v-if="url" :src="url" class="rounded-full h-10 w-10" />
    <span
      v-else
      :class="[solid ? 'text-white' : 'text-blue-1']"
      class="text-lg font-medium uppercase">
      {{ text.trim() || "G81" }}
    </span>
    <img
      v-if="hasLogo"
      class="w-4 h-4 absolute bottom-0 left-7"
      :src="logoUrl"
      alt="global66 small icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import companyIcon from './assets/global66-small-icon.svg';

export default defineComponent({
  name: "Avatar",
  props: {
    url: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "G66",
    },
    hasLogo: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
      default: companyIcon
    },
    solid: {
      type: Boolean,
      default: false,
    }
  },
});
</script>
