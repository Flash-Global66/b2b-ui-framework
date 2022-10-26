<template>
  <component
    :is="componentId"
    :type="type"
    :href="href"
    :target="target"
    :class="classes"
    @click="onClick"
    @mousedown="onMouseDown"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ButtonSize, ButtonColor, ButtonType } from './button.type';

export default defineComponent({
  name: 'GButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'button',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium'
    },
    color: {
      type: String as PropType<ButtonColor>,
      default: 'default'
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    full: { 
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: undefined,
    },
    target: String,
  },
  emits: ['click', 'mousedown'],
  setup (props, { emit }) {
    const componentId = computed(() => {
      return !props.href ? 'button' : 'a';
    })

    const classes = computed(() => {
      return [
        'gui-button',
        `gui-button--${props.size}`,
        `gui-button--${props.color}`,
        {
          'gui-button--disabled': props.disabled,
          'gui-button--outlined': props.outlined,
          'gui-button--full': props.full,
          'gui-button--href': props.href,
          'gui-button--text': props.text,
        }
      ]
    });

    function onClick(event: Event) {
      if (props.disabled) {
        event.preventDefault();
        return;
      }
      emit('click', event);
    };

    function onMouseDown(event: Event) {
      if (props.disabled) {
        event.preventDefault();
        return;
      }
      emit('mousedown', event);
    };

    return {
      onClick,
      onMouseDown,
      componentId,
      classes
    };
  }
});

</script>