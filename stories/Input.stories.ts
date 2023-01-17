import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// COMPONENTS
import { GInput } from '../components/Input';

// HELPERS
import { Grouping } from '../constants/grouping';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

// TYPES
import { EnumRadioSize } from '../components/Radio/radio.type';

export default {
  title: `${Grouping.FORM}/Input`,
  component: GInput,
  argTypes: {
    'v-model': {
      description: 'binding value.',
      table: {
        type: { summary: 'Number, String' } 
      }
    },
    size: { 
      control: { 
        type: 'select',
      },
      options: Object.values(EnumRadioSize),
      table: {
        type: { summary: 'String' } 
      }
    },
  },
  args: {
    label: 'Nombre',
  },
} as Meta<typeof GInput>;

const Template: StoryFn<typeof GInput> = (args, selected) => {
  return {
    components: { GInput, GConfigProvider },
    setup() {
      const name = ref('');

      return {
        args,
        name,
        onKeydown: action('keydown'),
      };
    },
    template: `
      <g-config-provider>
        <g-input
          v-model="name"
          v-bind="args"
          @keydown="onKeydown"
        >
        </g-input>
      </g-config-provider>
    `,
  }
};

const TemplateTextarea: StoryFn<typeof GInput> = (args, selected) => {
  return {
    components: { GInput, GConfigProvider },
    setup() {
      const message = ref('');

      return {
        args,
        message,
        onKeydown: action('change'),
      };
    },
    template: `
      <g-config-provider>
        <g-input
          v-model="message"
          v-bind="args"
          label="Mensaje"
          type="textarea"
        >
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      component: `When there are plenty of options, use a drop-down menu to display and select desired ones.`,
    },
  },
};

/**
 * variante
 */
export const Textarea = TemplateTextarea.bind({});

Textarea.args = {
  type: 'textarea',
};

Textarea.parameters = {
  docs: {
    description: {
      story: `Disable the Input with the \`disabled\` attribute.`,
    },
  },
};

/**
 * variante
 */
export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    description: {
      story: `Disable the Input with the \`disabled\` attribute.`,
    },
  },
};

/**
 * variante
 */
export const Clearable = Template.bind({});

Clearable.args = {
  clearable: true,
};

Clearable.parameters = {
  docs: {
    description: {
      story: `Make the Input clearable with the \`clearable\` attribute.`,
    },
  },
};

const TemplateSlots: StoryFn<typeof GInput> = (args, selected) => {
  return {
    components: { GInput, GConfigProvider, FontAwesomeIcon },
    setup() {
      const name = ref('');

      return {
        args,
        name,
        onKeydown: action('keydown'),
      };
    },
    template: `
      <g-config-provider>
        <div class="grid grid-cols-1 gap-4">
          <g-input
            v-model="name"
            label="Buscar"
            @keydown="onKeydown"
          >
            <template #prefix>
              <FontAwesomeIcon
                :icon="['fas', 'search']"
              />
            </template>
          </g-input>

          <g-input
            v-model="name"
            label="Suscribirse"
            @keydown="onKeydown"
          >
            <template #suffix>
              <FontAwesomeIcon
                :icon="['fas', 'arrow-right']"
              />
            </template>
          </g-input>

          <g-input
            v-model="name"
            @keydown="onKeydown"
          >
            <template #prefix>
              <div class="pr-2">
                Como estas?
              </div>
            </template>
          </g-input>

          <g-input
            v-model="name"
            label="Buscar..."
            @keydown="onKeydown"
          >
            <template #suffix>
              Enter
            </template>
          </g-input>
        </div>
      </g-config-provider>
    `,
  }
};

export const Slots = TemplateSlots.bind({});

Slots.args = {
};

Slots.parameters = {
  docs: {
    description: {
      story: `\`Prefix\`: Content as Input prefix, only works when type is not 'textarea' -  \`Suffix\`: Content as Input suffix, only works when type is not 'textarea.'`,
    },
  },
};