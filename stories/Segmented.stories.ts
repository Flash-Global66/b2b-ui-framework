import type { Meta, StoryObj } from '@storybook/vue3';

import { GSegmented } from '../components/Segmented';
import { GConfigProvider } from '../components/ConfigProvider';
import { ref } from 'vue';

const meta: Meta<typeof GSegmented> = {
  title: 'Data/Segmented',
  component: GSegmented,
  parameters: {
    docs: {
      description: {
        component: 'Componente de selección que permite elegir entre múltiples opciones.'
      }
    }
  },
  argTypes: {
    direction: {
      description: 'Dirección del componente segmentado',
      control: 'select',
      options: ['vertical', 'horizontal'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' }
      }
    },
    options: {
      description: 'Opciones del segmentado',
      control: 'object',
      table: {
        type: { summary: 'Option[]' }
      }
    },
    modelValue: {
      description: 'Valor del modelo (v-model)',
      table: {
        type: { summary: 'string | number | boolean' }
      }
    },
    block: {
      description: 'Ajusta el ancho al contenedor padre',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      description: 'Tamaño del componente',
      control: 'select',
      options: ['small', 'default', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    disabled: {
      description: 'Deshabilita el componente',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    validateEvent: {
      description: 'Activa la validación del formulario',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    id: {
      description: 'ID nativo del input',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    name: {
      description: 'Atributo name nativo',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    ariaLabel: {
      description: 'Etiqueta ARIA para accesibilidad',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Se emite cuando cambia el valor seleccionado',
      table: {
        type: { summary: 'string | number | boolean' },
        category: 'events'
      }
    },
    'onChange': {
      description: 'Se emite cuando el usuario cambia la selección',
      table: {
        type: { summary: 'string | number | boolean' },
        category: 'events'
      }
    },
    default: {
      description: 'Slot personalizado para el contenido de cada opción',
      table: {
        type: { summary: 'slot' },
        category: 'slots'
      },
    },
  },
  args: {
    options: [
      { label: 'Persona', value: 'person' },
      { label: 'Empresa', value: 'company' },
    ],
    block: false,
    size: 'default',
    disabled: false,
    validateEvent: true,
    id: '',
    name: '',
  }
};

export default meta;
type Story = StoryObj<typeof GSegmented>;

export const Primary: Story = {
  render: (args) => ({
    components: { GSegmented , GConfigProvider},
    setup() {
      const value = ref('person')
      return { args, value };
    },
    template: `
      <g-config-provider>
        <g-segmented
          v-model="value"
          :options="options"
          v-bind="args"
        />
      </g-config-provider>
    `,
  }),
  args: {},
};