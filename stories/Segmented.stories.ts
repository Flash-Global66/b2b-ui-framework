import { ref } from "vue";
import { StoryFn, Meta } from "@storybook/vue3";

import { GSegmented } from '../components/Segmented';
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: 'Data/Segmented',
  component: GSegmented,
} as Meta<typeof GSegmented>;

const Template: StoryFn<typeof GSegmented> = (args) => ({
  components: { GSegmented, GConfigProvider },
  template: `
  <g-config-provider>
    <g-segmented v-model="value" :options="options" size="large"></g-segmented>
  </g-config-provider>
  `,
  setup() {
    const value = ref('Mon')

    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return { args, options, value };
  }
});

export const Default = Template.bind({});
Default.args = {
  text: 'JA'
};