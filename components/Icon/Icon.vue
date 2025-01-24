<script lang="ts">
export default { name: 'IconCustom' };
</script>

<script lang="ts" setup>
import { Icomoon } from "vue-icomoon";
import iconSet from "./selection.json";
import { PropType } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<string | number>,
    default: "1em",
  },
  color: String,
  style: Object,
  title: String,
  class: {
    type: [String, Object, Array] as PropType<string | Record<string, boolean> | Array<string | Record<string, boolean>>>,
    default: "",
  },
  disableFill: Boolean,
  removeInitialStyle: Boolean,
});

</script>

<template>
  <icomoon v-if="name" :iconSet="iconSet" v-bind="{ ...props }" />
</template>
