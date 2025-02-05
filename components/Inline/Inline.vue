<script lang="ts" setup>
import {
  ButtonNativeType,
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
  useAriaProps,
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
  useFormSize,
  useId,
  useNamespace,
  useSizeProp,
} from "element-plus";
import { computed, defineComponent, PropType, reactive, ref, watch } from "vue";
import { GIconFont } from '@flash-global66/b2b-ui-icon-font';
import { useActiveElement, useResizeObserver } from "@vueuse/core";
import { inlineProps } from "./inline";
import { isObject } from "element-plus/es/utils/types.mjs";
import { debugWarn } from "element-plus/es/utils/index.mjs";;

const props = defineProps(inlineProps)

const visible = ref(true);

const ns = useNamespace('inline')
const inlineSize = useFormSize()

const inlineRef = ref<HTMLElement | null>(null)

const inlineClass = computed(() => [
  ns.b(),
  ns.m(inlineSize.value),
  ns.m(props.type),
  ns.m('transition'),
])

async function onClose() {
  inlineRef.value?.classList.add('gui-inline--transition-leave-active');
  await new Promise(resolve => setTimeout(resolve, 400));
  visible.value = false;
}

</script>


<template>
  <div
    v-if="visible"
    :class="inlineClass"
    ref="inlineRef"
    :aria-label="ariaLabel || 'inline'"
  >
    <g-icon-font
      aria-label="icon informative"
      :class="[ns.e('icon')]" :name="icon"
    />
    <div class="">
      <h3 :class="[ns.e('title')]"> {{ title }} </h3>
      <p v-if="description" :class="[ns.e('description')]">
        <slot>
          {{ description }}
        </slot>
      </p>
      <div
        v-if="links.length"
        role="group"
        :class="[ns.e('links')]"
      >
        <button
          v-for="(link, idx) in links"
          :key="idx"
          @click="link.action" 
          :class="[ns.e('link')]"
          :aria-label="link.ariaLabel || link.label"
          type="button"
        >
          {{ link.label }}
        </button>
      </div>
    </div>
    <g-icon-font
      v-if="!hideClose"
      role="button"
      aria-label="close inline"
      @click="onClose"
      :class="ns.e('close')"
      name="regular times"
    />
  </div>
</template>