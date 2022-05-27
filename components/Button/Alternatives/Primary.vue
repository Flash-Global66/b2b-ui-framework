<template>
  <button
    :class="classObject"
    class="flex items-center justify-center text-white font-semibold rounded text-sm bg-blue-3 hover:bg-blue-4 active:bg-blue-1 disabled:cursor-not-allowed disabled:bg-blue-6 px-5"
    data-test="button-primary"
  >
    <FontAwesomeIcon
      v-if="icon"
      :icon="icon"
      class="lg:inline hidden text-xl mr-3"
      data-test="button-primary-icon"
    ></FontAwesomeIcon>
    <span v-if="title" data-test="button-primary-title">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from 'vue';
import { ButtonSize } from '../types/button.type';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: 'Primary',
  components: {
    FontAwesomeIcon
  },
  props: {
    size: {
      type: Object as () => ButtonSize, 
      default: ButtonSize.M
    },
    title: String,
    icon: { type: String },
    cssClass: {type:String, default: ''},
  },
  setup(props) {
    const classObject = reactive({
      [ButtonSize[props.size]]: true,
      [props.cssClass]: true
    })
    return {
      classObject
    }
  }
});
</script>
