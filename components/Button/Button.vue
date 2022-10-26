<template>
  <component
    :is="componentId"
    :type="typeNative"
    :href="href"
    :target="target"
    :download="download"
    :autofocus="autofocus"
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
    /**
     * same as native button's type 
     * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type" target="blank">link</a> <br />
     * `reset / button / submit`
    */
    typeNative: {
      type: String as PropType<ButtonNativeType>,
      default: 'button',
    },
    /**
     * 	button type `default / outlined / ghost / icon`
    */
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    /**
     * button color <br /> 
     * `primary / secondary / danger / info / custom` <br /> 
     * by adding `custom` you can use class to customize the colors with tailwindcss
    */
    color: {
      type: String as PropType<ButtonColor>,
      default: 'primary'
    },
    /**
     * size button `large / medium / small / tiny`
     */
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium'
    },
    /**
     * disable the button
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * width 100% button
     */
    full: { 
      type: Boolean,
      default: false
    },
    /**
     * Specifies that a button should automatically get focus when the page loads. 
     * only if the `href` is disabled.
     */
     autofocus: { 
      type: Boolean,
      default: false
    },
    /**
     * If you write an href the component behaves with an `a`. 
     * Specifies the URL of the page the link goes to
     */
    href: {
      type: String,
      default: undefined,
    },
    /**
     * Specifies where to open the linked document <br />
     * only if the `href` is active
     */
    target: String,
    /**
     * 	Specifies that the target will be downloaded when a user clicks on the hyperlink. <br />
     *  only if the `href` is active.
     */
     download: String,
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
        `gui-button--${props.type}`,
        {
          'gui-button--disabled': props.disabled,
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