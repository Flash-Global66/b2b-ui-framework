<script lang="ts">
  export default { name: 'GInputCode' };
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, toRef, onBeforeUpdate, computed } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/pro-solid-svg-icons';

const props = defineProps({
  password: {
    type: Boolean,
    default: false,
  },
  textError: {
    type: String,
    default: '',
  },
  hideTextError: {
    type: Boolean,
    default: false,
  },
  fields: {
    type: Number,
    default: 4,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: true,
  },
  iconPassword: {
    type: Boolean,
    default: true,
  },
  classInput: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['change', 'complete']);

const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const values = ref<string[]>([]);
const iRefs = ref<number[]>([]);
const inputs = ref<HTMLInputElement[]>([]);
const fields = toRef(props, 'fields');
const autoFocusIndex = ref(0);
const autoFocus = true;
const showPassword = ref(true);
const currentFocus = ref(-1);
const isComplete = ref(false);

const initVals = () => {
  let vals: string[] = [];

  if (values?.value?.length) {
    for (let i = 0; i < fields.value; i++) {
      vals.push(values.value[i] || '');
    }
    autoFocusIndex.value =
      values.value.length >= fields.value ? 0 : values.value.length;
  } else {
    vals = Array(fields.value).fill('');
  }

  iRefs.value = [];
  for (let i = 0; i < fields.value; i++) {
    iRefs.value.push(i + 1);
  }
  values.value = vals;
};

const styleInputCode = computed(() => {
  if (!!props.textError) return 'text-red-1';

  if(isComplete.value) return 'text-green-3';

  return 'text-blue-3';
});

const classContentInput = (index: number) => {
  if (!props.password || !showPassword.value) return '';

  if (index !== currentFocus.value && !values.value[index].length) return 'circle';
  if (index !== currentFocus.value && values.value[index].length) return 'point';

  return '';
}


function onFocus (e, index: number) {
  currentFocus.value = index;
  e.target.select(e);
};

function onBlur () {
  currentFocus.value = -1;
};

const onValueChange = (e) => {
  const index = parseInt(e.target.dataset.id);
  e.target.value = e.target.value.replace(/[^\d]/gi, '');

  if (e.target.value === '' || !e.target.validity.valid) {
    return;
  }

  let next;
  const value: string = e.target.value;
  values.value = Object.assign([], values.value);

  if (value.length > 1) {
    let nextIndex = value.length + index - 1;
    if (nextIndex >= fields.value) {
      nextIndex = fields.value - 1;
    }
    next = iRefs.value[nextIndex];
    const split = value.split('');
    split.forEach((item, i) => {
      const cursor = index + i;
      if (cursor < fields.value) {
        values.value[cursor] = item;
      }
    });
  } else {
    next = iRefs.value[index + 1];
    values.value[index] = value;
  }
  if (next) {
    const element = inputs.value[next];
    element.focus();
    element.select();
  }
  triggerChange(values.value);
};

const onPaste = (e) => {
  const code = e.clipboardData.getData('text');

  if (!isNaN(code) && code.length === 6) {
    const codeSplit = code.split('');

    for (let i = 0; i < fields.value; i++) {
      values.value[i] = codeSplit[i];
    }

    inputs.value[fields.value-1].focus();
  }
}

const onKeyDown = (e) => {
  const index = parseInt(e.target.dataset.id);

  const prevIndex = index - 1;
  const nextIndex = index + 1;
  const prev = iRefs.value[prevIndex];
  const next = iRefs.value[nextIndex];
  switch (e.keyCode) {
    case KEY_CODE.backspace: {
      e.preventDefault();
      const vals = [...values.value];
      if (values.value[index]) {
        vals[index] = '';
        values.value = vals;
        triggerChange(vals);
      } else if (prev) {
        vals[prevIndex] = '';
        inputs.value[prev].focus();
        values.value = vals;
        triggerChange(vals);
      }
      break;
    }
    case KEY_CODE.left:
      e.preventDefault();
      if (prev) {
        inputs.value[prev].focus();
      }
      break;
    case KEY_CODE.right:
      e.preventDefault();
      if (next) {
        inputs.value[next].focus();
      }
      break;
    case KEY_CODE.up:
    case KEY_CODE.down:
      e.preventDefault();
      break;
    default:
      // this.handleKeys[index] = true;
      break;
  }
};

const triggerChange = (val = values.value) => {
  const value = val.join('');
  isComplete.value = value.length >= fields.value;
  emit('change', value);
  emit('complete', isComplete.value);
};

const setInputs = (el, index) => {
  if (el) inputs.value[index] = el as HTMLInputElement;
};

initVals();

onBeforeUpdate(() => {
  inputs.value = [];
});
</script>

<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col md:flex-row items-center">
      <div class="flex space-x-3 md:space-x-6">
        <div v-for="(item, index) in values" :key="index"
          class="gui-password-item"
          :class="[
            { 'password': password },
            { 'error': !!textError },
            { 'success': isComplete },
            { 'disabled': disabled },
            classContentInput(index)
          ]">
          <input
            :ref="(el) => setInputs(el, index + 1)"
            class="appearance-none"
            :class="[classInput ?
              classInput :
              `border-2 border-solid border-white h-16 w-16 md:w-20 md:h-20 rounded-2xl text-center shadow-input text-2xl font-semibold ${styleInputCode}`
            ]"
            type="tel"
            pattern="[0-9]"
            :autoFocus="autoFocus && index === autoFocusIndex"
            :data-id="index"
            :value="item"
            :required="props.required"
            :disabled="props.disabled"
            maxlength="1"
            @input="onValueChange"
            @focus="(e) => onFocus(e, index)"
            @blur="onBlur"
            @keydown="onKeyDown"
            @paste="onPaste"
          />
        </div>
      </div>
      <div
        v-if="password && iconPassword"
        @click="showPassword = !showPassword"
        class="flex items-center text-2xl md:text-3xl text-gray-3 cursor-pointer select-none mt-4 md:mt-0 md:ml-6">

        <font-awesome-icon v-if="!showPassword" :icon="faEye" />
        <font-awesome-icon v-else :icon="faEyeSlash" />

        <p class="ml-3 text-base md:hidden">
          {{ showPassword ? 'Mostrar' : 'Ocultar' }}
        </p>
      </div>
    </div>

    <!-- 
      @slot error custom message error.
     -->
    <slot name="error">
      <p v-if="!!textError && !hideTextError" class="mt-4 text-center text-red-1 text-base">
        {{ textError }}
      </p>
    </slot>
  </section>
</template>

