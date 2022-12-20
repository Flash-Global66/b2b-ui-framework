<script lang='ts'>
export default { name: 'GButtonCard' }
</script>

<script lang='ts' setup>

defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  icon: {
    type: Array,
    default: () => [''],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconRounded: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: ''
  },
})

const emit = defineEmits(['click'])

function onClick (event: Event) {
  event.preventDefault();
  emit('click');
}
</script>

<template>
  <section
    @click="onClick"
    class="rounded-xl flex flex-col justify-center items-center border-[1px] duration-200 group"
    :class="[
      disabled
        ? 'cursor-not-allowed bg-transparent border-gray-7'
        : 'cursor-pointer bg-white shadow-md border-transparent hover:border-blue-3',
      height.length ? height : 'min-h-[200px]',
    ]"
  >
    <slot name="image">
      <div :class="{ 'w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center': iconRounded }">
        <fa-icon class="text-blue-1 text-5xl duration-200 group-hover:text-gray-3" :icon="icon" />
      </div>
    </slot>

    <slot name="title">
      <h4
        :class="disabled ? 'text-gray-5' : 'text-gray-2'"
        class=" font-semibold text-xl leading-6 mb-2 text mt-5"
        v-html="title"
      />
    </slot>
    <slot name="subtitle">
      <p
        :class="disabled ? 'text-gray-5' : 'text-gray-2'"
        class="leading-6 text"
        v-html="subtitle"
      />
    </slot>
  </section>
</template>

<style lang="scss" scoped>
.text {
  @apply group-hover:text-gray-3 duration-200 w-4/5 text-center
}
</style>