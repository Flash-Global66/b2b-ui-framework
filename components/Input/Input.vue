<template>
  <div @click="onClick" class="gui-input-wrapper">
    <label
      v-if="label"
      class="gui-input-label"
      :class="styleLabel"
      :style="{ marginLeft: `${prefixWidth}px`}">
      {{ label }}
    </label>

    <el-input
      ref="refInput"
      :class="{ 'h-14' : type !== 'textarea' }"
      v-bind="{ ...attrsCustom, ...$props }"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @compositionstart="onCompositionStart"
      @compositionupdate="onCompositionUpdate"
      @compositionend="onCompositionEnd"
      @input="onInput"
      @keydown="onKeydown"
      @keypress="onKeypress"
    >
      <!--
        @slot content as Input prefix, only works when type is not 'textarea'
        @slot customize default content
        @slot content as Input suffix, only works when type is not 'textarea'
      -->
      <!-- <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template> -->
      <slot />
    </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, PropType, onMounted, nextTick, useAttrs } from 'vue';
import { ElInput } from 'element-plus';

export default defineComponent({
  name: 'GInput',
  components: {
    ElInput,
  },
  props: {
    /**
      * type of input
    */
    type: {
      type: String,
      default: 'text',
    },
    /**
      * rows of textarea native
    */
    rows: {
      type: Number,
      default: 5,
    },
    /**
     * the max length
     */
     maxlength: {
      type: [String, Number],
      default: ''
    },
    /**
     * same as minlength in native input
     */
     minlength: {
      type: [String, Number],
      default: ''
    },
    /**
     * whether show word count, only works when type is 'text' or 'textarea'
     */
     showWordLimit: {
      type: Boolean,
      default: false
    },
    /**
     * placeholder of Input
     */
     placeholder: {
      type: String,
      default: undefined,
    },
    /**
     *  the label
    */
    label: {
      type: String,
      default: '',
    },
    /**
     * Whether to trigger validation when the rules prop is changed.
     */
     size: {
      type: String,
      default: undefined,
    },
    /**
     * whether to show toggleable password input.
     */
     showPassword: {
      type: Boolean,
      default: false,
    },
    /**
     * whether to show clear button
     */
     clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * whether Input is disabled
     */
     disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * same as readonly in native input
     */
     readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * remove rounded corners from the right side to join with another component.
     */
     joinRight: {
      type: Boolean,
      default: false,
    },
    /**
     * remove rounded edges from left side to join with another component.
     */
     joinLeft: {
      type: Boolean,
      default: false,
    },
    /**
     * specifies the format of the value presented input.(only works when type is 'text')
     */
    autocomplete: {
      type: String,
      default: 'off',
    },
    /**
     * specifies the format of the value presented input.(only works when type is 'text')
     * Ex: (value: string | number) => string
     */
    formatter: {
      type: Function,
    },
    /**
     * specifies the value extracted from formatter input.(only works when type is 'text')
     * Ex: (string) => string
     */
    parser: {
      type: Function,
    },
    /**
     * input tabindex
     */
    tabindex: {
      type: [String, Number],
      default: 0,
    },
    /**
     * whether to trigger form validation
     */
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'resetField',
    'change',
    'focus',
    'blur',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'mouseleave',
    'mouseenter',
    'keydown',
    'input',
    'keypress',
  ],
  setup(props, { emit, slots, attrs }) {
    const refInput = ref();
    const isValue = ref(false);
    const prefixWidth = ref(0);
    const suffixWidth = ref(0);
    const attrsCustom = computed(() => {
      const excludeKeys = ['class'];
      return Object.fromEntries(Object.entries(attrs).filter(
        ([key]) => {
          return !excludeKeys.includes(key);
        }
      ));
    });

    const passwordIconShow = computed(
      () => props.showPassword || props.clearable ? '26px' : 'auto'
    )

    const styleLabel = computed(
      () => {
        if (props.type === 'textarea') {
          return isValue.value ? 'label__textarea--active' : 'label__textarea--no-active';
        } else {
          return isValue.value ? 'label--active' : 'label--no-active';
        }
      }
    )

    const inputInnerStyleButton = computed(() => {
      return props.label && isValue.value ? '-8px' : '0px';
    });

    const inputInnerStyleOpacity = computed(() => {
      if (!props.label) return '1';
      return props.label && isValue.value ? '1' : '0';
    });

    const labelStyleWidth = computed(() => {
      return `${suffixWidth.value + prefixWidth.value}px`;
    });

    const inputRounded = computed(() => {
      const rounded = 0.375;

      if (props.joinRight && props.joinLeft) return '0';

      if (props.joinLeft) return `0 ${rounded}rem ${rounded}rem 0`;

      if (props.joinRight) return `${rounded}rem 0 0 ${rounded}rem`;

      return `${rounded}rem ${rounded}rem ${rounded}rem ${rounded}rem`;
    });

    onMounted(() => {
      nextTick(() => {
        const refEl = refInput.value && refInput.value.$el
        if (!refEl) return

        isValue.value = !!attrs.modelValue;

        if (slots.prefix) {
          const prefix = refEl.querySelector('.gui-input__prefix')
          prefixWidth.value = prefix.getBoundingClientRect().width;
        }

        if (slots.suffix || props.showPassword || props.clearable) {
          const suffix = refEl.querySelector('.gui-input__suffix')
          suffixWidth.value = suffix.getBoundingClientRect().width;
        }
      })
    });

    function onClick() {
      if (props.disabled || props.readonly) return;
      refInput.value.focus();
      isValue.value = true;
    };

    function onChange(event: Event) {
      emit('change', event);
    }

    function onFocus(event: Event) {
      emit('focus', event);
      isValue.value = true;
    }

    function onBlur (event: Event) {
      emit('blur', event);
      const value = (event.target as HTMLInputElement)?.value;
      isValue.value = !!value;
    }

    function onCompositionStart (event: CompositionEvent) {
      emit('compositionstart', event);
    }

    function onCompositionUpdate (event: CompositionEvent) {
      emit('compositionupdate', event);
    }

    function onCompositionEnd (event: CompositionEvent) {
      emit('compositionend', event);
    }

    function onKeydown (event: KeyboardEvent) {
      emit('keydown', event)
    }

    function onInput (event: string) {
      emit('input', event)
    }

    function onKeypress (event: KeyboardEvent) {
      emit('keypress', event)
    }

    return {
      refInput,
      isValue,
      prefixWidth,
      inputInnerStyleButton,
      inputInnerStyleOpacity,
      attrsCustom,
      labelStyleWidth,
      passwordIconShow,
      inputRounded,
      styleLabel,
      onChange,
      onClick,
      onBlur,
      onFocus,
      onCompositionStart,
      onCompositionUpdate,
      onCompositionEnd,
      onKeydown,
      onInput,
      onKeypress,
    }
  }
});
</script>

<style lang="scss">
.gui-input-wrapper {
  .gui-input {
    .gui-input__inner {
      bottom: v-bind(inputInnerStyleButton);
      opacity: v-bind(inputInnerStyleOpacity);
    }
    .gui-input__suffix {
      width: v-bind(passwordIconShow);
    }
    .gui-input__wrapper {
      border-radius: v-bind(inputRounded);
    }
  }
  .gui-input-label {
    width: calc(100% - v-bind(labelStyleWidth));
  }
}
</style>
