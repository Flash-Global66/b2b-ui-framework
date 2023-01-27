<template>
  <el-dialog
    v-bind="{ ...$attrs, ...$props }"
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="onClose"
    @closed="$emit('closed')"
    @open-auto-focus="$emit('open-auto-focus')"
    @close-auto-focus="$emit('close-auto-focus')"
    :show-close="false"
  >

    <!--
      @slot Dialog Content
    -->
    <slot>
      <section
        v-if="!$slots.default"
        v-html="description"
        class="gui-dialog__description px-5"
      />
    </slot>

    <!--
      @slot Dialog head
    -->
    <template #header="propsSlot">
      <slot name="head" v-bind="propsSlot">
        <!--
          @slot Dialog head title
        -->
        <slot name="head-title" v-bind="propsSlot">
          <h4
            v-if="title.length"
            :id="propsSlot.titleId"
            class="gui-dialog__title">
            {{ title }}
          </h4>
        </slot>

        <!--
          @slot Dialog head close
        -->
        <slot name="head-close" v-bind="propsSlot">
          <div
            v-if="!hideClose"
            class="gui-dialog__head-close"
            @click="propsSlot.close">
            <fa-icon :icon="['far', 'times']" class="text-gray-4 text-xl" />
          </div>
        </slot>
      </slot>
    </template>
    <template #footer>
      <!--
        @slot Dialog footer
      -->
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import {
  ElDialog,
  DialogBeforeCloseFn,
} from "element-plus";

export default defineComponent({
  name: 'GDialog',
  components: {
    ElDialog,
  },
  emits: [
    /**
     * triggers when the Dialog opens
     */
    'open',
    /**
     * triggers when the Dialog opening animation ends
     */
    'opened',
    /**
     * triggers when the Dialog closes
     */
    'close',
    /**
     * 	triggers when the Dialog closing animation ends
     */
    'closed',
    /**
     * 	triggers after Dialog opens and content focused
     */
    'open-auto-focus',
    /**
     * 	triggers after Dialog closed and content focused
     */
    'close-auto-focus',
  ],
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    hideClose: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function as PropType<DialogBeforeCloseFn>,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    top: {
      type: String,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    modalClass: String,
    width: {
      type: [String, Number],
    },
    zIndex: {
      type: Number,
    },
    trapFocus: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    function onClose () {
      console.log('close')
      emit('close')
    }

    return {
      onClose,
    }
  }
});
</script>
