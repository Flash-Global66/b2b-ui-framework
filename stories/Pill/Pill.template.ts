import { StoryFn, Meta } from "@storybook/vue3";
import { Pill } from '../../components/Pill';

const Template: StoryFn<typeof Pill> = (args) => ({
  components: { Pill },
  template: `<Pill v-bind="args">`,
  setup() {
    return { args };
  }
});

export {Template}