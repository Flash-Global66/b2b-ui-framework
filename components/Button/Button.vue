<template>
  <component
    :is="componentId"
    :class="classes"
  >
    hola
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export type ButtonType = 'default' | 'ghost' | 'dashed' | 'text';
export type ButtonShape = 'default' | 'circle' | 'round';

export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export default defineComponent({
  name: 'GButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    nativeType: {
      type: String as PropType<ButtonHTMLType>,
      default: 'button'
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'default',
    },
    size: String,
    disabled: { type: Boolean, default: undefined },
    full: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    href: String,
    target: String,
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
    },
    onMousedown: {
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup (props) {
    const componentId = computed(() => {
      return !props.link ? 'button' : 'a';
    })

    const classes = computed(() => {
      return {
        'prueba': true,
      };
    });

    return {
      componentId,
      classes
    };
  }
});

</script>