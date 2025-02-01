import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import { fn } from "@storybook/test";

// COMPONENTS
import { GCheckbox, GCheckbox2 } from '../components/Checkbox';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';



export default {
  title: 'Components/Checkbox',
  component: GCheckbox2,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    border: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
    },
    label: {
      control: 'text',
    },
    modelValue: {
      control: 'boolean',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GCheckbox2, GConfigProvider },
  setup() {
    console.log('args', args)
    return { args };
  },
  template: `
    <g-config-provider>
      <g-checkbox2
        v-bind="args"
        @update:modelValue="val => args.modelValue = val"
      />
    </g-config-provider>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
  disabled: false,
  indeterminate: false,
  border: false,
  size: 'default',
  modelValue: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  modelValue: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...Default.args,
  indeterminate: true,
  label: 'aver'
};

export const Bordered = Template.bind({});
Bordered.args = {
  ...Default.args,
  border: true,
  size: 'medium',
};

export const WithSlotContent = Template.bind({});
WithSlotContent.args = {
  ...Default.args,
  labelSlot: 'Custom Label Content',
};