import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

// COMPONENTS
import { GSelect } from '../components/Select';
import { GSelectOption } from '../components/SelectOption';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: `${Grouping.FORM}/Select`,
  component: GSelect,
  subcomponents: { GSelectOption },
  parameters: {
    docs: {
      description: {
        component: `When there are plenty of options, use a drop-down menu to display and select desired ones.`,
      },
    },
  },
} as Meta<typeof GSelect>;

const Template: StoryFn<typeof GSelect> = (args, selected) => {
  return {
    components: { GSelect, GSelectOption, GConfigProvider },
    setup() {
      const selected = ref('');

      const options = [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
        {
          value: 'Option6',
          label: 'Option6',
        },
        {
          value: 'Option7',
          label: 'Option7',
        },
        {
          value: 'Option8',
          label: 'Option8',
        },
        {
          value: 'Option9',
          label: 'Option9',
        },
        {
          value: 'Option10',
          label: 'Option10',
        },
      ];

      return {
        args,
        selected,
        options,
        onChange: action('change'),
        onFocus: action('focus'),
        onBlur: action('blur'),
        onVisible: action('visible-change'),
        onRemoteTag: action('remove-tag'),
        onClear: action('clear'),
      };
    },
    template: `
      <g-config-provider>
        <div class="p-7 h-80">
          <g-select
            class="flex items-center gap-x-8"
            v-model="selected"
            v-bind="args"
            label="Seleccionar"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @clear="onClear"
            @visible-change="onVisible"
            @remove-tag="onRemoteTag"
          >
            <g-select-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </g-select-option>
          </g-select>
        </div>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});