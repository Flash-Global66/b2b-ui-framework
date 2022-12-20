import { StoryFn, Meta } from "@storybook/vue3";
import { GButtonCard } from '../components/ButtonCard';

// CONSTANTS
import { Grouping } from '../constants/grouping';
import { action } from "@storybook/addon-actions";

export default {
  title: `${Grouping.BASIC}/Button Card`,
  component: GButtonCard,
  argTypes: {},
  args: {
    title: 'Hola es el titulo',
    subtitle: 'Este es el subtitulo',
    icon: ['fad', 'copy'],
  }
} as Meta<typeof GButtonCard>;

const Template: StoryFn<typeof GButtonCard> = (args) => ({
  components: { GButtonCard },
  template: `
    <g-button-card
      :icon="['fad', 'copy']"
      @click="onClick"
      v-bind="args"
    />
  `,
  setup() {
    return {
      args,
      onClick: action('click'),
    };
  },
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    description: {
      component: `Commonly used button.`,
    },
  },
};
