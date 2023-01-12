<script lang='ts'>
export default { name: 'GCollapseContent' }
</script>

<script lang='ts' setup>
import { faCommentsDollar } from '@fortawesome/pro-solid-svg-icons';
import { provide, ref, watch, PropType } from 'vue';
import { ProviderGCollapse } from './config/providerCollapse';

const props = defineProps({
  modelValue: {
    type: Number as PropType<number | string | null>,
    default: null,
  },
  default: {
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
  preventDefault: {
    type: Boolean,
    default: false,
  },
  
})

const emit = defineEmits(['update:modelValue', 'click-item']);

const count = ref(0);
const active = ref(props.modelValue || props.default);
const accordion = ref(props.accordion);
const disabled = ref(props.disabled);
const preventDefault = ref(props.preventDefault);

watch(
  () => props.modelValue,
  (newValue) => {
    active.value = newValue;
  }
);

const setActiveItem = (item: string | number | null, visible: boolean) => {
  emit('click-item', {
    itemOld: active.value,
    item,
    visible,
  });

  if (!props.preventDefault) {
    active.value = item;
    emit('update:modelValue', item);
  };

}

provide(ProviderGCollapse, {
  count,
  active,
  accordion,
  disabled,
  preventDefault,
  setActiveItem,
});
</script>

<template>
  <div class="gui-accordion">
    <slot></slot>
  </div>
</template>
