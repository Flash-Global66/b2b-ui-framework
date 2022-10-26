import { StoryFn, Meta } from "@storybook/vue3";
import { GButton } from '../components/Button';

// CONSTANTS
import { Grouping } from '../constants/grouping';

export default {
  title: `${Grouping.Data}/Button`,
  component: GButton,
  argTypes: {
    type: {
      options: ['reset', 'submit', 'button', undefined],
    },
    color: {
      options: ['primary', 'secondary', 'danger', 'default'],
    },
    size: {
      options: ['large', 'medium', 'small', 'tiny', ''],
    },
  }
} as Meta<typeof GButton>;

const Template: StoryFn<typeof GButton> = (args) => ({
  components: { GButton },
  template: `
    <g-button v-bind="args">que paso</g-button>
  `,
  setup() {
    return { args };
  },
});

export const Primary = Template.bind({});
Primary.args = {};