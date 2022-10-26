import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { GRadio } from '../components/Radio';
import { RadioGroup } from '../components/RadioGroup';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

export default {
  title: `${Grouping.FORM}/${Grouping.RADIO}/Group`,
  component: RadioGroup,
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
    components: { GRadio, RadioGroup, GConfigProvider },
    setup() {
      const selected = ref('')
      return {
        args,
        selected,
        onChange: action('change'),
      };
    },
    template: `
      <g-config-provider>
        <RadioGroup
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
        </RadioGroup>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});