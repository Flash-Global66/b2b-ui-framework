import type { Meta, StoryObj } from '@storybook/vue3';
import { Icon } from '../components/Icon';
import { GInput } from '../components/Input/src';
import { GButton } from '../components/Button/src';
import { GConfigProvider } from '../components/ConfigProvider';
import iconSet from '../components/Icon/selection.json';
import { computed, ref } from 'vue';

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
    color: '#565F75'
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

export const IconGallery: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de iconos disponibles en el sistema. Incluye buscador y permite copiar el nombre del icono al hacer clic.'
      }
    }
  },
  render: () => ({
    components: { Icon, GConfigProvider, GInput, GButton },
    setup() {
      const searchTerm = ref('')
      const icons = iconSet.icons.map(icon => ({
        name: icon.properties.name,
      }))

      const filteredIcons = computed(() => {
        if (!searchTerm.value) return icons
        return icons.filter(icon => 
          icon.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        ) || {}
      })

      const copyIconName = (iconName: string) => {
        navigator.clipboard.writeText(iconName)
          .then(() => {
            alert(`🫡"${iconName}" copiado al portapapeles!`)
          })
          .catch(() => {
            alert('No se pudo copiar el nombre del icono')
          })
      }

      const clearSearch = () => {
        searchTerm.value = ''
      }

      return { 
        icons: filteredIcons, 
        copyIconName,
        searchTerm,
        clearSearch 
      }
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-2 p-4 border-b sticky top-0">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
              size="small"
            >
              <template #prefix>
                <icon name="search" size="16px" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
              size="small"
            >
              Limpiar
            </g-button>
          </div>

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
        </div>
      </g-config-provider>
    `
  })
}