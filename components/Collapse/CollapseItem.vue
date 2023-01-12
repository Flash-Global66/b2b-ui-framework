<script lang='ts'>
export default { name: 'GCollapseItem' }
</script>

<script lang='ts' setup>
import { ref, inject, computed, watch } from 'vue';
import {
  ProviderGCollapse,
  initialGCollapse,
} from './config/providerCollapse';

const props = defineProps({
  classHead: {
    type: String,
    default: '',
  },
  classIcon: {
    type: String,
    default: '',
  },
  classContent: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['open', 'close', 'opened', 'closed', 'click']);

const { count, active, disabled, accordion, setActiveItem } = inject(
  ProviderGCollapse,
  initialGCollapse
);

const itemKey = ref<number | string | null>(props.name ? props.name : count.value++);
const visible = ref(Boolean(active.value === itemKey.value));

const isDisabled = computed(() => disabled.value || props.disabled)

const stylesHeadCustom = computed(() => {
  return [
    props.classHead.length ? props.classHead : 'flex w-full justify-between border-solid border-2 border-gray-18 px-6 py-3 rounded-xl flex-1 items-center',
    !props.classHead.length && isDisabled.value ? 'bg-gray-18 text-gray-4' : 'bg-white text-gray-1 font-medium',
    isDisabled.value ? 'cursor-not-allowed select-none' : 'cursor-pointer',
  ]
})

const stylesIconCustom = computed(() => {
  return [
    props.classIcon.length ? props.classIcon : 'flex items-center text-xl',
    isDisabled.value ? 'text-gray-5' : 'text-gray-3',
    { 'active-icon': visible.value },
  ]
})

watch(
  active,
  () => (visible.value = Boolean(active.value === itemKey.value))
)

function toggleVisibility (e: Event) {
  e.preventDefault();
  if (isDisabled.value) return;

  visible.value = !visible.value
  !accordion && visible && (active.value = itemKey.value)
  setActiveItem(itemKey.value, visible.value);
}

function onBeforeEnter(el: HTMLElement) {
  el.style.height = '0px';
}

function onEnter(el: HTMLElement) {
  emit('open');
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px';
  });
}

function onAfterEnter(el: HTMLElement) {
  emit('opened');
  el.style.height = el.scrollHeight + 'px';
}

function onBeforeLeave(el: HTMLElement) {
  el.style.height = el.scrollHeight + 'px';
}

function onLeave(el: HTMLElement) {
  emit('close');
  requestAnimationFrame(() => {
    el.style.height = '0';
  });
}

function onAfterLeave(el: HTMLElement) {
  emit('close');
  requestAnimationFrame(() => {
    el.style.height = '0';
  });
}
</script>

<template>
  <section>
    <div @click="toggleVisibility">
      <slot name="head" :active="visible" :disabled="disabled">
        <button :class="[stylesHeadCustom, { active: visible }]" :aria-disabled="disabled">
          <slot name="title" :active="visible" :disabled="disabled">
            {{ title }}
          </slot>
          <slot name="icon" :active="visible" :disabled="disabled">
            <div :class="[...stylesIconCustom, 'duration-200',]">
              <fa-icon :icon="['fas', 'chevron-right']" />
            </div>
          </slot>
        </button>
      </slot>
    </div>

    <transition
      name="gui-collapse"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"

      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-show="visible" :class="classContent">
        <slot name="content"></slot>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
* {
  will-change: height;
}

.active-icon {
  @apply rotate-90;
}
</style>

<style>
.gui-collapse-enter-active,
.gui-collapse-leave-active {
  transition: height .3s ease-in-out;
  overflow: hidden;
}
.gui-collapse-enter,
.gui-collapse-leave-to {
  height: 0;
}
</style>
