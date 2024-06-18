import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import { fn } from "@storybook/test";

// COMPONENTS
import { GCheckbox } from '../components/Checkbox';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: 'Form/Checkbox/Single',
  component: GCheckbox,
  argTypes: {
    'v-model': {
      description: 'binding value.',
      table: {
        type: { summary: 'Number, String, Boolean' }
      }
    },
    // slots
    default: {
      control: { type: 'text' },
      table: {
        type: { summary: 'String, Components' }
      }
    },
    // events
    change: {
      control: { type: null },
      table: {
        type: { summary: 'String, Number, Boolean' }
      }
    },
    // props
    label: {
      control: {
        type: null
      },
      table: {
        defaultValue: { summary: 'Option A' },
      }
    },
    disabled: {
      control: {
        type: 'boolean'
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
  },
  // values for the default
  args: {
    size: '',
    label: 'Términos y condiciones',
    default: 'Términos y condiciones',
    disabled: false,
    name: '',
  },
  parameters: {
    docs: {
      description: {
        component: `Radio should not have too many options. Otherwise, use the Select component instead. Creating a radio component is easy, you just need to bind a variable to Radio's \`v-model\`. It equals to the value of label of the chosen radio. The type of \`label\` is \`String, Number or Boolean\`.`,
      },
    },
  },
} as Meta<typeof GCheckbox>;

const Template: StoryFn<typeof GCheckbox> = (args) => {
  return {
    components: { GCheckbox, GConfigProvider },
    setup() {
      const selected = ref('')

      return {
        args,
        selected,
        onChange: fn(action('change')),
      };
    },
    template: `
      <g-config-provider>
        <div class="flex items-center gap-x-8">
          <g-checkbox v-model="selected" @change="onChange" class="custom" v-bind="args">
            {{ args.default }}
          </g-checkbox>
        </div>
      </g-config-provider>
    `,
  }
};


export const Default = Template.bind({});