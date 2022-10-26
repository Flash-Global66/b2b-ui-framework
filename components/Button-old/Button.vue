<template>
  <component
    :is="type"
    :title="title"
    :size="size"
    :icon="icon"
    :class="cssClass"
    :type="typeColor"
  ></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Primary from './Alternatives/Primary.vue';
import PrimaryAligned from './Alternatives/GButtonPrimaryAligned.vue';
import Secondary from './Alternatives/GButtonSecondary.vue';
import Ghost from './Alternatives/GButtonGhost.vue';
import GhostAligned from './Alternatives/GButtonGhostAligned.vue';
import Outlined from './Alternatives/GButtonOutlined.vue';
import Next from './Alternatives/GButtonNext.vue';
import Main from './Alternatives/GButtonMain.vue';

import {
  ButtonColor,
  ButtonSize,
  ButtonType
} from './types/button.type';

export default defineComponent({
  name: 'Button',
  props: {
    cssClass: { type: String, default: '' },
    type: { type: Object as () => ButtonType, default: ButtonType.Primary },
    size: { 
      type: Object as () => ButtonSize, 
      default: ButtonSize.M
    },
    title: { type: String, default: 'Button' },
    icon: { type: String },
    typeColor: {
      type: String as () => ButtonColor,
      default: ButtonColor.Primary,
    },
  },
  components: {
    Primary,
    PrimaryAligned,
    Secondary,
    Ghost,
    GhostAligned,
    Outlined,
    Next,
    Main,
  },
});
</script>
