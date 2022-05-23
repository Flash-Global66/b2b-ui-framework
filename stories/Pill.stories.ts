import { StoryFn, Meta } from "@storybook/vue3";
import Pill from '../components/Pill/Pill.vue';
import { PillType } from "../components/Pill/types/pill.types";

export default {
  component: Pill,
} as Meta<typeof Pill>;

const Template: StoryFn<typeof Pill> = (args) => ({
  components: { Pill },
  template: `<Pill v-bind="args">`,
  setup() {
    return { args };
  }
});

export const Normal = Template.bind({});
Normal.args = {
  type: PillType.Normal,
  text: 'Normal'
};

export const Success = Template.bind({});
Success.args = {
  type: PillType.Success,
  text: 'Success'
};

export const Error = Template.bind({});
Error.args = {
  type: PillType.Error,
  text: 'Error'
};