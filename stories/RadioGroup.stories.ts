import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { Radio } from '../components/Radio';
import { RadioGroup } from '../components/RadioGroup';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/types/type';

export default {
  title: `${Grouping.FORM}/${Grouping.RADIO}/Group`,
  component: RadioGroup,
  subcomponents: { Radio },
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
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args, selected) => {
  return {
    components: { Radio, RadioGroup, GConfigProvider },
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
          <Radio label="female">
            Femenino
          </Radio>
          <Radio label="male">
            Masculino
          </Radio>
          <Radio label="non-binary">
            No binario
          </Radio>
        </RadioGroup>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});