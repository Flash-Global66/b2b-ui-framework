import type { Meta, StoryObj } from "@storybook/vue3";
import { nextTick, ref } from "vue";

import { GInline } from "../components/Inline";
import { GInput } from "../components/Input/src/index";
import { GConfigProvider } from "../components/ConfigProvider";
import { GButton } from "../components/Button/src/index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const meta: Meta<typeof GInline> = {
  title: "Data/Inline",
  component: GInline,
  parameters: {
    docs: {
      description: {
        component:
          "",
      },
    },
  },
  argTypes: {},
  args: {}
};

export default meta;
type Story = StoryObj<typeof GInline>;

// Uso básico
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: ''
      }
    }
  },
  render: (args) => ({
    components: { GInline, GConfigProvider, FontAwesomeIcon },
    setup() {
      function onClick() {
        console.log('onClick');
      }
      return { args, onClick };
    },
    template: `
      <g-config-provider>
        <g-inline
          title="Título"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. lorem ipsum dolor sit amet,  lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris"
          :links="[
            {
              label: 'Link 1',
              action: onClick
            },
            {
              label: 'Link 2',
              action: onClick
            }
          ]"
          v-bind="args">
          <template #icon>
            <font-awesome-icon :icon="['fas', 'user']" />
          </template>
        </g-inline>
      </g-config-provider>
    `,
  }),
  args: {}
};
