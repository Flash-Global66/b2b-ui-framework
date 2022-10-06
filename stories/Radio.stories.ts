import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { ElConfigProvider } from 'element-plus';
import { Radio } from '../components/Radio';

// TYPES
import { EnumRadioSize } from '../components/Radio/types/type';

// CONSTANTS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: `${Grouping.FORM}/${Grouping.RADIO}/Single`,
  component: Radio,
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
    label: 'Option A',
    default: 'Option A',
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
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => {
  return {
    components: { Radio, GConfigProvider },
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
        <div class="flex items-center gap-x-8">
          <Radio v-model="selected" @change="onChange" class="custom" v-bind="args">
            {{ args.default }}
          </Radio>
          <Radio v-model="selected" @change="onChange" label="Option B">
            Option B
          </Radio>
          <Radio v-model="selected" @change="onChange" label="Option C">
            Option C
          </Radio>
          <Radio v-model="selected" label="Option D" disabled>
            Option D
          </Radio>
        </div>
      </g-config-provider>
    `,
  }
};


export const Default = Template.bind({});