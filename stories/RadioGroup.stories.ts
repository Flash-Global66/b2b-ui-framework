import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import { fn } from "@storybook/test";

// COMPONENTS
import { GRadio } from '../components/Radio';
import { GRadioGroup } from '../components/RadioGroup';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

export default {
  title: 'Form/Radio/Group',
  component: GRadioGroup,
  subcomponents: { GRadio },
  argTypes: {
    'v-model': {
      description: 'binding value.',
      table: {
        type: { summary: 'Number, String, Boolean' }
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
    // props
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
  args: {
    size: '',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Suitable for choosing from some mutually exclusive options. **Note:** Combine \`g-radio-group\` with \`g-radio\` to display a radio group. Bind a variable with \`v-model\` of \`g-radio-group\` element and set label value in \`g-radio\`. It also provides change event with the current value as its parameter.`,
      },
    },
  },
} as Meta<typeof GRadio>;

const Template: StoryFn<typeof GRadio> = (args, selected) => {
  return {
    components: { GRadio, GRadioGroup, GConfigProvider },
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
        <g-radioGroup
          class="flex items-center gap-x-8"
          v-model="selected"
          v-bind="args"
          @change="onChange"
        >
          <g-radio label="female">
            Femenino
          </g-radio>
          <g-radio label="male">
            Masculino
          </g-radio>
          <g-radio label="non-binary">
            No binario
          </g-radio>
        </g-radioGroup>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});