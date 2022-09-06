<template>
  <div class="relative font-montserrat">
    <label
      class="absolute z-10 duration-200 transition-all text-gray-4 px-3"
      :class="[
        isVisible || isValue ? 'top-2 text-xs translate-y-0' : 'top-1/2 -translate-y-1/2 text-base',
      ]"
      :style="{ marginLeft: `${prefixWidth}px`}"
      @click="onClick">
      {{ label }}
    </label>
    <el-select
      ref="refSelect"
      popper-class="!z-100"
      :suffix-icon="IconArrow"
      :clear-icon="IconTimes"
      v-bind="{ ...$attrs, ...$props }"
      :placeholder="label ? ' ' : placeholder"
      @change="onChange"
      @visible-change="onVisibleChange"
      @remove-tag="(event) => $emit('remove-tag', event)"
      @clear="(event) => $emit('clear', event)"
      @blur="onBlur"
      @focus="onFocus"
    >
      <!--
        @slot customize default content
      -->
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <!--
        @slot customize default content
      -->
      <slot />
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, PropType, ref, watch, computed } from 'vue';
import { ElSelect } from 'element-plus';

// ICONS
import IconArrow from './components/IconArrow.vue';
import IconTimes from './components/IconTimes.vue';

// TYPES
import { TypeRadioSize } from './select.type';


export default defineComponent({
  name: 'Select',
  components: {
    ElSelect,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'change',
    'visible-change',
    'remove-tag',
    'clear',
    'blur',
    'focus',
  ],
  props: {
    /**
     * whether Select is disabled
     */
     disabled: {
      type: Boolean,
      default: false
    },
    /**
     * unique identity key name for value, required when value is an object
     */
     'value-key': {
      type: String,
      default: ''
    },
    /**
     * size of Input
    */
    size: {
      type: String as PropType<TypeRadioSize>,
      default: '',
    },
    /**
     * whether select can be cleared
     */
     clearable: {
      type: Boolean,
      default: false
    },
    /**
     *  the name attribute of select input
     */
     name: {
      type: String,
      default: '',
    },
    /**
     *  the autocomplete attribute of select input
     */
     autocomplete: {
      type: String,
      default: false,
    },
    /**
     *  As a requirement you must not declare the label
     */
     placeholder: {
      type: String,
      default: ' ',
    },
    /**
     *  the label
    */
    label: {
      type: String,
      default: '',
    },
    /**
     *  whether Select is filterable
    */
    filterable: {
      type: Boolean,
      default: false,
    },
    /**
     *  whether creating new items is allowed. To use this, filterable must be true
    */
    'allow-create': {
      type: Boolean,
      default: false,
    },
    /**
     *  custom filter method
    */
    'filter-method': {
      type: Function
    },
    /**
     * whether Select is loading data from server
    */
    loading: {
    type: Boolean,
    default: false,
    },
    /**
     * displayed text while loading data from server
    */
     'loading-text': {
      type: String,
      default: '',
     },
    /**
      * displayed text when no data matches the filtering query, you can also use slot empty
    */
    'no-match-text': {
      type: String,
      default: 'Sin datos coincidentes',
    },
    /**
      * displayed text when there is no options, you can also use slot empty
    */
    'no-data-text': {
      type: String,
      default: 'Sin datos',
    },
    /**
      * select first matching option on enter key. Use with filterable or remote
    */
    'default-first-option': {
      type: Boolean,
      default: false,
    },
    /**
      * whether select dropdown is teleported to the body
    */
    teleported: {
      type: Boolean,
      default: false,
    },
    /**
      * when select dropdown is inactive and persistent is false, select dropdown will be destroyed
    */
    persistent: {
      type: Boolean,
      default: false,
    },
    /**
      * for non-filterable Select, this prop decides if the option menu pops up when the input is focused
    */
    'automatic-dropdown': {
      type: Boolean,
      default: false,
    },
    /**
      * whether the width of the dropdown is the same as the input
    */
    'fit-input-width': {
      type: Boolean,
      default: false,
    },
    /**
      * whether to trigger form validation
    */
    'validate-event': {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit, slots }) {
    const refSelect = ref();

    const isVisible = ref(false);
    const isValue = ref(false);
    const prefixWidth = ref(0);

    watch(() => refSelect.value, (rf) => {
      console.log('que', rf);
      // prefixWidth.value = rf.prefixWidth;
    })

    onMounted(() => {
      nextTick(() => {
        const refEl = refSelect.value && refSelect.value.$el
        if (!refEl) return
        
        if (slots.prefix) {
          const prefix = refEl.querySelector('.g-input__prefix')
          prefixWidth.value = prefix.getBoundingClientRect().width;
        }
      })
    });

    const styleInputInner = computed(() => {
      return props.label && (isVisible.value || isValue.value) ? '-8px' : '0px';
    });

    function onClick() {
      refSelect.value.toggleMenu();
    };

    function onFocus(event: EventTarget & HTMLInputElement) {
      emit('focus', event);
    }

    function onBlur(event: EventTarget & HTMLInputElement) {
      /**
       * Success event.
       *
       * @event success
       * @property {string} content content of the first prop passed to the event
       * @property {object} example the demo example
       */
      emit('blur', event);
    }

    function onChange(event) {
      const valuesFalse = ['', ``, null, undefined, NaN]

      if (valuesFalse.includes(event)) {
        isValue.value = false;
      } else {
        isValue.value = true;
      }

      emit('change', event);
    }

    function onVisibleChange(event: boolean) {
      isVisible.value = event;
    }

    return {
      refSelect,
      onClick,
      onFocus,
      onBlur,
      onChange,
      isVisible,
      isValue,
      onVisibleChange,

      styleInputInner,
      prefixWidth,

      IconArrow,
      IconTimes,
    }
  }
});
</script>

<style lang="scss">
.g-select {
  .g-input {
    .g-input__inner {
      bottom: v-bind(styleInputInner);
    }
  }
}
</style>
