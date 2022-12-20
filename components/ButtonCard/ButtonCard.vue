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
  width: {
    type: String,
    default: 'max-w-[300px]'
  },
  height: {
    type: String,
    default: 'h-44'
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
    :class="width"
    class="w-full"
    @click="onClick">
    <div
      class="rounded-xl flex flex-col justify-center items-center border-[1px] duration-200 group"
      :class="[
        disabled
          ? 'cursor-not-allowed bg-transparent border-gray-7'
          : 'cursor-pointer bg-white shadow-md border-transparent hover:border-blue-3',
        height,
      ]"
    >
      <slot name="image">
        <div
          :class="{ 'w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center': iconRounded }">
          <fa-icon class="text-blue-1 text-5xl duration-200 group-hover:text-gray-3" :icon="icon" />
        </div>
      </slot>

      <slot name="title">
        <p
          :class="disabled ? 'text-gray-5' : 'text-blue-1'"
          class="duration-200 text-gray-2 font-normal text-lg text-center w-4/5 mt-3 leading-6 group-hover:text-gray-3"
          v-html="title"
        />
      </slot>
    </div>
    <slot name="subtitle">
      <p
        class="text-center font-normal text-sm mt-4"
        :class="disabled ? 'text-gray-4' : 'text-gray-2'"
        v-html="subtitle"
      />
    </slot>
  </section>
</template>