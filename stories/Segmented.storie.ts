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
    <g-segmented v-bind="args">
      Hola
    </g-segmented/>
  </g-config-provider>
  `,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
Default.args = {
  text: 'JA'
};