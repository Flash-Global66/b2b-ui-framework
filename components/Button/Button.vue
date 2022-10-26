<template>
  <component
    :is="componentId"
    :type="typeNative"
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
import { ButtonNativeType } from 'element-plus';
import { computed, defineComponent, PropType } from 'vue';
import { ButtonSize, ButtonColor, ButtonType } from './button.type';

export default defineComponent({
  name: 'GButton',
  props: {
    typeNative: {
      type: String as PropType<ButtonNativeType>,
      default: 'button',
    },
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
    disabled: {
      type: Boolean,
      default: false,
    },
    full: { 
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
          'gui-button--outlined': props.type === 'outlined',
          'gui-button--ghost': props.type === 'ghost',
          'gui-button--full': props.full,
          'gui-button--href': props.href,
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