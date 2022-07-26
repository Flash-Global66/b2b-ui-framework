import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// STYLES
import '../components/Radio/styles/index.scss';

// COMPONENTS
import { ElConfigProvider } from 'element-plus';
import { Radio } from '../components/Radio';

// TYPES
import { EnumRadioSize } from '../components/Radio/types/type';

// CONSTANTS
import { Grouping } from '../constants/grouping';

// CONFIG
import { configElement } from '@flash-global66/b2b-ui-config-element';

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
        options: [...Object.keys(EnumRadioSize), 'custom'],
      },
      table: {
        type: { summary: 'String' } 
      }
    },
  },
  // values for the default
  args: {
    size: 'default',
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
    components: { Radio, ElConfigProvider },
    setup() {
      const selected = ref('')

      return {
        args,
        configElement,
        selected,
        onChange: action('change'),
      };
    },
    template: `
      <el-config-provider :namespace="configElement.NAME_SPACE">
        <div class="flex items-center gap-x-8">
          <Radio v-model="selected" @change="onChange" v-bind="args">
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
      </el-config-provider>
    `,
  }
};


export const Default = Template.bind({});