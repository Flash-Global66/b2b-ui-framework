<script lang='ts'>
export default { name: 'GCollapseContent' }
</script>

<script lang='ts' setup>
import { provide, ref, watch, PropType } from 'vue';
import { ProviderGCollapse } from './config/providerCollapse';

const props = defineProps({
  modelValue: {
    type: Number as PropType<number | string | null>,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  accordion: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'click-item']);

const count = ref(0);
const active = ref(props.modelValue);
const accordion = ref(props.accordion);
const disabled = ref(props.disabled);

watch(
  () => props.modelValue,
  (newValue) => {
    active.value = newValue;
  }
);

const setActiveItem = (item: string | number | null, visible: boolean) => {
  active.value = item;
  emit('update:modelValue', item);
  emit('click-item', {
    item,
    visible,
  });
}

provide(ProviderGCollapse, {
  count,
  active,
  accordion,
  disabled,
  setActiveItem,
});
</script>

<template>
  <div class="gui-accordion">
    <slot></slot>
  </div>
</template>
