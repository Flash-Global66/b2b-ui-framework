<template>
  <el-dialog
    v-bind="{ ...$attrs, ...$props }"
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="$emit('close')"
    @closed="$emit('closed')"
    @open-auto-focus="$emit('open-auto-focus')"
    @close-auto-focus="$emit('close-auto-focus')"
  >

    <!--
      @slot Drawer's Content
    -->
    <slot />

    <template #header>
      <!--
        @slot Drawer header section; Replacing this removes the title, but does not remove the close button.
      -->
      <slot name="header" />
    </template>
    <template #footer>
      <!--
        @slot Drawer footer Section.
      -->
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
});
</script>
