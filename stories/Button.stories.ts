import { StoryFn, Meta } from "@storybook/vue3";
import { GButton } from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// CONSTANTS
import { Grouping } from '../constants/grouping';
import { action } from "@storybook/addon-actions";

export default {
  title: `${Grouping.BASIC}/Button`,
  component: GButton,
  argTypes: {
    typeNative: {
      options: ['reset', 'submit', 'button'],
    },
    type: {
      options: ['default', 'outlined', 'ghost', 'icon'],
    },
    color: {
      options: ['primary', 'secondary', 'danger', 'info', 'custom'],
    },
    size: {
      options: ['large', 'medium', 'small', 'tiny', 'custom'],
    },
  },
  args: {
    default: 'texto de un botón',
  }
} as Meta<typeof GButton>;

const Template: StoryFn<typeof GButton> = (args) => ({
  components: { GButton },
  template: `
    <g-button v-bind="args" @click="onClick" @mousedown="onMousedown">
      {{ args.default }}
    </g-button>
  `,
  setup() {
    return {
      args,
      onClick: action('click'),
      onMousedown: action('mousedown'),
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

const TemplateColor: StoryFn<typeof GButton> = (args) => ({
  components: { GButton },
  template: `
    <div class="flex gap-6 items-center">
      <g-button v-bind="args" size="large">
        Primary
      </g-button>
      <g-button v-bind="args" color="secondary" size="medium">
        Secondary
      </g-button>
      <g-button v-bind="args" color="danger" size="small">
        Danger
      </g-button>
      <g-button v-bind="args" color="info" size="tiny">
        Info
      </g-button>
      <g-button v-bind="args" color="custom" class="border-purple-600 bg-purple-600 text-white">
        Custom
      </g-button>
    </div>
  `,
  setup() {
    return { args };
  },
});

export const Outlined = TemplateColor.bind({});
Outlined.args = {
  type: 'outlined',
};

export const Ghost = TemplateColor.bind({});
Ghost.args = {
  type: 'ghost',
};


const TemplateIcon: StoryFn<typeof GButton> = (args) => ({
  components: { GButton, FontAwesomeIcon },
  template: `
    <div class="flex gap-6 items-center">
      <g-button v-bind="args" size="large">
        <FontAwesomeIcon
          :icon="['fas', 'arrow-right']"
        />
      </g-button>
      <g-button v-bind="args" color="secondary" size="medium">
        <FontAwesomeIcon
          :icon="['far', 'search']"
        />
      </g-button>
      <g-button v-bind="args" color="danger" size="small">
        <FontAwesomeIcon
          :icon="['fas', 'home']"
        />
      </g-button>
      <g-button v-bind="args" color="info" size="tiny">
        <FontAwesomeIcon
          :icon="['fas', 'lock']"
        />
      </g-button>
      <g-button v-bind="args" color="custom" size="custom" class="border-purple-600 bg-purple-600 text-white w-20 h-20">
        <FontAwesomeIcon
          :icon="['fas', 'arrow-right']"
        />
      </g-button>
    </div>
  `,
  setup() {
    const args = {
      type: 'icon',
    }

    return { args };
  },
});

export const Icon = TemplateIcon.bind({});

const TemplateCustom: StoryFn<typeof GButton> = (args) => ({
  components: { GButton, FontAwesomeIcon },
  template: `
    <g-button class="justify-between" full>
      Lorem ipsum
      <FontAwesomeIcon
        class="ml-4"
        :icon="['fas', 'arrow-right']"
      />
    </g-button>
  `,
});

export const CustomContent = TemplateCustom.bind({});