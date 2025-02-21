<template>
  <el-teleport :to="appendTo" :disabled="appendTo !== 'body' ? false : !appendToBody">
    <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave" @before-leave="beforeLeave">
      <el-overlay 
        v-show="visible" 
        custom-mask-event 
        :mask="modal" 
        :overlay-class="modalClass" 
        :z-index="zIndex"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-label="title || undefined"
          :aria-labelledby="!title ? titleId : undefined"
          :aria-describedby="bodyId"
          :class="`${ns.namespace.value}-overlay-dialog`"
          :style="overlayDialogStyle"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <el-focus-trap
            loop
            :trapped="visible"
            focus-start-el="container"
            @focus-after-trapped="onOpenAutoFocus"
            @focus-after-released="onCloseAutoFocus"
            @focusout-prevented="onFocusoutPrevented"
            @release-requested="onCloseRequested"
          >
            <dialog-content 
              v-if="rendered"
              ref="dialogContentRef"
              v-bind="$attrs"
              :center="center"
              :align-center="alignCenter"
              :close-icon="closeIcon"
              :draggable="draggable"
              :overflow="overflow"
              :fullscreen="fullscreen"
              :show-close="showClose"
              :title="title"
              :aria-level="headerAriaLevel"
              :width="width"
              :size-mode="sizeMode"
              @close="handleClose"
            >
              <template v-if="$slots.image" #image>
                <slot name="image" />
              </template>

              <slot />


              <template v-if="$slots.footer" #footer>
                <slot name="footer" />
              </template>
            </dialog-content>
          </el-focus-trap>
        </div>
      </el-overlay>
    </transition>
  </el-teleport>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { ElOverlay, useNamespace, useSameTarget } from "element-plus";
import { ElFocusTrap } from "../focus-trap";
import { ElTeleport } from "../teleport";
import { dialogInjectionKey } from "./constants";
import { dialogEmits, dialogProps } from "./dialog";
import { useDialog } from "./use-dialog";
import DialogContent from './DialogContent.vue';

const props = defineProps(dialogProps);
const emit = defineEmits(dialogEmits);

const ns = useNamespace("dialog");
const dialogRef = ref<HTMLElement>();
const headerRef = ref<HTMLElement>();
const dialogContentRef = ref();

const closeOnClickModal = computed(() => props.showClose && props.closeOnClickModal);
const closeOnPressEscape = computed(() => props.showClose && props.closeOnPressEscape);

const {
  visible,
  titleId,
  bodyId,
  style,
  overlayDialogStyle,
  rendered,
  zIndex,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onCloseRequested,
  onFocusoutPrevented,
} = useDialog(props, dialogRef, {
  closeOnClickModal,
  closeOnPressEscape,
});

provide(dialogInjectionKey, {
  dialogRef,
  headerRef,
  bodyId,
  ns,
  rendered,
  style,
});

const overlayEvent = useSameTarget(onModalClick);

const draggable = computed(() => props.draggable && !props.fullscreen);

const resetPosition = () => {
  dialogContentRef.value?.resetPosition();
};

defineExpose({
  /** @description whether the dialog is visible */
  visible,
  dialogContentRef,
  resetPosition,
});
</script>

