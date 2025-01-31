import type { Meta, StoryObj } from '@storybook/vue3';
import { GIconFont, ICON_SETS } from '../components/IconFont';
import { GConfigProvider } from '../components/ConfigProvider';

function generateIconOptions () {
  const options: string[] = [];
  
  Object.entries(ICON_SETS).forEach(([weight, icons]) => {
    icons.forEach(item => {
      options.push(`${weight} ${item}`);
    });
  });
  
  return options;
};

const meta: Meta<typeof GIconFont> = {
  title: 'Basic/IconFont',
  component: GIconFont,
  argTypes: {
    name: {
      description: 'Nombre del icono con su peso',
      control: 'select',
      options: generateIconOptions(),
    },
  },
  args: {
    name: 'solid user'
  }
} as Meta;

export default meta;
type Story = StoryObj<typeof GIconFont>;

// Uso básico
export const Primary: Story = {
  name: 'Uso básico',
  parameters: {
    docs: {
      description: {
        story: `
### Formato del nombre
El nombre del icono debe seguir el formato: "weight icon-name"

### Pesos disponibles:

### Ejemplo:
\`\`\`vue
<icon-font name="solid user" />
<icon-font name="regular user" />
<icon-font name="brands github" />
\`\`\`
        `
      }
    }
  },
  render: (args) => ({
    components: { GIconFont, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-icon-font class="text-10 text-primary" v-bind="args" />
      </g-config-provider>
    `
  })
};
