<template>
  <font-awesome-icon v-if="selectedIcon" :icon="selectedIcon" />
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { debugWarn } from "element-plus/es/utils/index.mjs";;

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import type { IconString } from './types';
import * as SolidPro from './src/fas-solid-pro';
import * as SolidFree from './src/fas-solid-free';
import * as RegularPro from './src/far-regular-pro';
import * as LightPro from './src/fal-light-pro';
import * as BrandsFree from './src/fab-free';

// Registro de iconos
library.add(
  SolidPro,
  SolidFree,
  RegularPro,
  LightPro,
  BrandsFree
);

const props = defineProps({
  name: {
    type: String as PropType<IconString>,
    required: true
  }
});

const selectedIcon = computed(() => {
  const [weight, iconName] = props.name.split(' ');
  if (!iconName) {
    console.error('Icon name is invalid');
    debugWarn('IconFont', 'Icon name is invalid')
    return;
  };

  return `fa-${weight} fa-${iconName}`;
});
</script>