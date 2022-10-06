import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { GInput } from '../components/Input';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { ConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/types/type';

export default {
  title: `${Grouping.FORM}/Input`,
  component: GInput,
  argTypes: {
    'v-model': {
      description: 'binding value.',
      table: {
        type: { summary: 'Number, String' } 
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
    label: 'Nombre',
  },
} as Meta<typeof GInput>;

const Template: StoryFn<typeof GInput> = (args, selected) => {
  return {
    components: { GInput, ConfigProvider },
    setup() {
      const name = ref('');

      return {
        args,
        name
      };
    },
    template: `
      <config-provider>
        <g-input
          v-model="name"
          v-bind="args"
        >
        </g-input>
      </config-provider>
    `,
  }
};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      component: `When there are plenty of options, use a drop-down menu to display and select desired ones.`,
    },
  },
};

/**
 * variante
 */
export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    description: {
      story: `Disable the Input with the \`disabled\` attribute.`,
    },
  },
};

/**
 * variante
 */
export const Clearable = Template.bind({});

Clearable.args = {
  clearable: true,
};

Clearable.parameters = {
  docs: {
    description: {
      story: `Make the Input clearable with the \`clearable\` attribute.`,
    },
  },
};