import { StoryFn, Meta } from "@storybook/vue3";
import Avatar from '../components/Avatar/Avatar.vue';

export default {
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => ({
  components: { Avatar },
  template: `<Avatar v-bind="args"/>`,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
Default.args = {
  text: 'JA'
};