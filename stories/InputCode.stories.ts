import { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { GInputCode } from '../components/InputCode';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: `${Grouping.FORM}/Input Code`,
  component: GInputCode,
  argTypes: {
    password: { 
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  }
} as Meta<typeof GInputCode>;

const Template: StoryFn<typeof GInputCode> = (args, selected) => {
  return {
    components: { GInputCode, GConfigProvider },
    setup() {
      const codeCompleted = ref(false);
      const codeOTP = ref('');

      const status = computed(() => {
        if (!!args.textError) return 'Error';
        if (codeCompleted.value) return 'Completo';
        return 'Incompleto'
      })

      function onChangeCode(code: string) {
        codeOTP.value = code;
        action('change');
      }
      
      function onComplete(e: boolean) {
        codeCompleted.value = e;
        action('complete');
      }
      

      return {
        codeCompleted,
        codeOTP,
        status,
        args,
        onChangeCode,
        onComplete,
      };
    },
    template: `
      <g-config-provider>
        <p class="text-center mb-4 text-gray-2">Estado: {{ status }}</p>
        <g-input-code
          v-bind="args"
          @complete="onComplete"
          @change="onChangeCode"
        />
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      component: ``,
    },
  },
};
