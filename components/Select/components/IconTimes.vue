<template>
  <font-awesome-icon :icon="['far', 'times-circle']" />
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: 'IconArrow',
  components: {
    FontAwesomeIcon
  },
});
</script>