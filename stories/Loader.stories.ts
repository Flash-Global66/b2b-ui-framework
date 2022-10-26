import { StoryFn, Meta } from "@storybook/vue3";
import { Loader } from '../components/Loader';

// CONSTANTS
import { Grouping } from '../constants/grouping';

export default {
  title: `${Grouping.FEEDBACK}/Loader`,
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => ({
  components: { Loader },
  template: `<Loader v-bind="args"/>`,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
Default.args = {
  show: true
};