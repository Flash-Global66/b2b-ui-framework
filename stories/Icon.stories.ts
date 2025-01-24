import type { Meta, StoryObj } from '@storybook/vue3';
import { Icon } from '../components/Icon';
import { GConfigProvider } from '../components/ConfigProvider';
import iconSet from '../components/Icon/selection.json';

const meta: Meta<typeof Icon> = {
  title: 'Basic/Icono',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Componente de iconos basado en Icomoon que permite mostrar iconos vectoriales escalables.'
      }
    }
  },
  argTypes: {
    name: {
      description: 'Nombre del icono a mostrar',
      control: 'select',
      options: iconSet.icons.map(icon => icon.properties.name)
    },
    size: {
      description: 'Tamaño del icono',
      control: 'text',
      defaultValue: '1em'
    },
    color: {
      description: 'Color del icono',
      control: 'color'
    }
  },
  args: {
    name: 'users',
    size: '3em',
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Uso básico
export const Primary: Story = {
  name: 'Uso básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico de uso del componente Icon. Permite personalizar el tamaño y color del icono.'
      }
    }
  },
  render: (args) => ({
    components: { Icon, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <icon v-bind="args" />
      </g-config-provider>
    `
  }),
};

// Galería de iconos
export const IconGallery: Story = {
  name: 'Galería de iconos',
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de iconos disponibles en el sistema. Haz clic en cualquier icono para copiar su nombre.'
      }
    }
  },
  render: () => ({
    components: { Icon, GConfigProvider },
    setup() {
      const icons = iconSet.icons.map(icon => ({
        name: icon.properties.name,
      }));

      const copyIconName = (iconName: string) => {
        navigator.clipboard.writeText(iconName)
          .then(() => {
            alert(`🫡"${iconName}" copiado al portapapeles!`)
          })
          .catch(() => {
            alert('No se pudo copiar el nombre del icono')
          })
      }

      return { icons, copyIconName };
    },
    template: `
      <g-config-provider>
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
          <div 
            v-for="icon in icons" 
            :key="icon.name"
            class="flex bg-white flex-col items-center justify-center p-4 border rounded hover:bg-gray-50 cursor-pointer"
            @click="copyIconName(icon.name)"
          >
            <icon :name="icon.name" class="text-9 text-grey-600" />
            <span class="mt-2 text-xs text-center text-gray-600">{{ icon.name }}</span>
          </div>
        </div>
      </g-config-provider>
    `
  })
};