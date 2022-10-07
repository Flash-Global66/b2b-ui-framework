import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { Select } from '../components/Select';
import { GSelectOption } from '../components/SelectOption';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

export default {
  title: `${Grouping.FORM}/Select`,
  component: Select,
  subcomponents: { GSelectOption },
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
    size: { 
      control: { 
        type: 'select',
      },
      options: Object.values(EnumRadioSize),
      table: {
        type: { summary: 'String' } 
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
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args, selected) => {
  return {
    components: { Select, GSelectOption, GConfigProvider },
    setup() {
      const selected = ref('');

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

      return {
        args,
        selected,
        options,
        onChange,
      };
    },
    template: `
      <g-config-provider>
        <div class="p-7 h-80">
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
        </div>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});