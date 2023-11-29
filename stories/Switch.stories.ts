import { Meta, StoryFn } from '@storybook/vue3';
import { GSwitch } from '../components/Switch';

// CONSTANTS
import { Grouping } from '../constants/grouping';

// COMPONENTS
import { GConfigProvider } from '../components/ConfigProvider';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

export default {
  title: `${Grouping.Data}/Switch`,
  component: GSwitch,
} as Meta<typeof GSwitch>;

const Template: StoryFn<typeof GSwitch> = (args) => ({
  components: { GSwitch, GConfigProvider },
  template: /* html */ `
    <g-config-provider>
      <div class="flex gap-3">
        <g-switch v-model="value" v-bind="args" />
      </div>
    </g-config-provider>
  `,
    setup() {
      const value = ref(false)

      return {
        args,
        value,
        onChange: action('change'),
      };
    },
});

export const Default = Template.bind({});
