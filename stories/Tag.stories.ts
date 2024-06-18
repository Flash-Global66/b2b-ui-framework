import { Meta, StoryFn } from '@storybook/vue3';
import { GTag } from '../components/Tag';

// COMPONENTS
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: 'Data/Tag',
  component: GTag,
} as Meta<typeof GTag>;

const Template: StoryFn<typeof GTag> = (args) => ({
  components: { GTag, GConfigProvider },
  template: /* html */ `
    <g-config-provider>
      <div class="flex gap-3">
        <g-tag v-bind="args">Tag 01</g-tag>
        <g-tag type="success">Tag 02</g-tag>
        <g-tag type="warning">Tag 03</g-tag>
        <g-tag type="danger">Tag 04</g-tag>
        <g-tag type="info">Tag 05</g-tag>
      </div>
    </g-config-provider>
  `,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
