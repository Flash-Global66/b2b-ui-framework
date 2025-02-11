import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

// COMPONENTS
import { GDialog } from '../components/Dialog';
import { GButton } from '../components/Button/src';

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider';

export default {
  title: 'Data/Dialog',
  component: GDialog,
  argTypes: {
    'v-model': {
      description: 'binding value.',
      table: {
        type: { summary: 'Number, String' }
      }
    },
  },
  args: {
    label: 'Nombre',
  },
} as Meta<typeof GDialog>;

const Template: StoryFn<typeof GDialog> = (args, selected) => {
  return {
    components: { GDialog, GConfigProvider, GButton },
    setup() {
      const dialogVisible = ref(true);

      function handleClose() {
        console.log('close padre')
      }

      return {
        args,
        dialogVisible,
        handleClose,
      };
    },
    template: `
      <g-config-provider>
        <g-button @click="dialogVisible = true"> Open </g-button>

        <g-dialog
          v-model="dialogVisible"
          title="Advertencia"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem"
          width="500px"
          draggable
        >
          
          <template #footer>
            <div class="cursor-pointer px-5 py-6" @click="dialogVisible = false">Ok</div>
          </template>
        </g-dialog>
      </g-config-provider>
    `,
  }
};

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    description: {
      component: `Dialog pops up a dialog box, and it's quite customizable.`,
    },
  },
};

