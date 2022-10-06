import { Meta, StoryFn } from '@storybook/vue3';
import { PropType } from 'vue';

import { ConfigProvider } from '../components/ConfigProvider';
// import { TypeLanguage } from '../components/ConfigProvider/types/locale';
import es from 'element-plus/dist/locale/es.mjs'
import pt from 'element-plus/dist/locale/pt-br.mjs'

// CONSTANTS
import { Grouping } from '../constants/grouping';

export default {
  title: `${Grouping.CONFIG}/Config Provider`,
  component: ConfigProvider,
} as Meta<typeof ConfigProvider>;

const Template: StoryFn<typeof ConfigProvider> = (args) => ({
  components: { ConfigProvider },
  template: `<config-provider v-bind="args"> </config-provider>`,
  setup() {
    return { args };
  }
});

export const Default = Template.bind({});
Default.args = {
  locale: es
};

