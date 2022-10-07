import { Meta, StoryFn } from '@storybook/vue3';
import { reactive, ref } from 'vue';
import { action } from '@storybook/addon-actions';
import type { FormInstance, FormRules } from 'element-plus';

// COMPONENTS
import { GForm } from '../components/Form';
import { GFormItem } from '../components/FormItem';
import { GInput } from '../components/Input';
import { Select } from '../components/Select';
import { GSelectOption } from '../components/SelectOption';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

export default {
  title: `${Grouping.FORM}/Form`,
  component: GForm,
  subcomponents: { GFormItem },
  argTypes: {
    'v-model': {
      description: 'binding value.',
      table: {
        type: { summary: 'Number, String, Boolean, Object' } 
      }
    },
    // slots
    default: {
      control: { type: null },
      table: {
        type: { summary: 'Components' } 
      }
    },
    // events
    change: {
      control: { type: null },
      table: {
        type: { summary: 'String, Number, Boolean' } 
      }
    },
  },
  args: {
    size: '',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: `When there are plenty of options, use a drop-down menu to display and select desired ones.`,
      },
    },
  },
} as Meta<typeof GForm>;

const Template: StoryFn<typeof GForm> = (args, selected) => {
  return {
    components: { GForm, GFormItem, GInput, GConfigProvider, Select, GSelectOption },
    setup() {

      const ruleFormRef = ref<FormInstance>()
      const ruleForm = reactive({
        name: '',
      })

      const rules = reactive<FormRules>({
        name: [
          { required: true, message: 'Campo requerido', trigger: 'blur' },
          { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
        ],
      });

      async function onReset(formEl: FormInstance | undefined) {
        if (!formEl?.form) return
        formEl.form.resetFields();
      }

      async function onSend(formEl: FormInstance | undefined) {
        // console.log('formEl', formEl);
        console.log('ruleFormRef', ruleFormRef.value);
        // const form = ruleFormRef.value?.form
        const form = ruleFormRef.value?.form
        console.log('form', form);
        if (!form) return
        await form.validate((valid, fields) => {
          if (valid) {
            console.log('submit!')
          } else {
            console.log('error submit!', fields)
          }
        })
      }

      const selected = ref('Option1');

      const options = [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
        {
          value: 'Option6',
          label: 'Option6',
        },
        {
          value: 'Option7',
          label: 'Option7',
        },
        {
          value: 'Option8',
          label: 'Option8',
        },
        {
          value: 'Option9',
          label: 'Option9',
        },
        {
          value: 'Option10',
          label: 'Option10',
        },
      ];

      function onChange() {
        action('change');
      }

      function setFormat (value) {
        return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      function setParser (value) {
        return value.replace(/\$\s?|(,*)/g, '');
      }

      return {
        ruleFormRef,
        rules,
        ruleForm,
        args,
        selected,
        options,
        onChange,
        onSend,
        onReset,
        setFormat,
        setParser,
      };
    },
    template: `
      <g-config-provider>
        <div class="p-7 h-80 bg-gray-10">
          <g-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            v-bind="args"
          >
            <div class="flex items-center gap-10">
              <g-form-item prop="name">
                <g-input
                  label="Nombre"
                  v-model="ruleForm.name">
                </g-input>
              </g-form-item>

              <g-form-item prop="name">
                <Select
                  class="flex items-center gap-x-8"
                  v-model="selected"
                  v-bind="args"
                  label="Seleccionar"
                  @change="onChange"
                >
                  <g-select-option
                    v-for="item in options"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </g-select-option>
                </Select>
              </g-form-item>
            </div>
          </g-form>

          <button @click="onSend(ruleFormRef)">Validar</button>
          -
          <button @click="onReset(ruleFormRef)">Reset</button>
        </div>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});