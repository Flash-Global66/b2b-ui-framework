import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { GCheckbox, GCheckboxGroup } from '../components/Checkbox'
import { GConfigProvider } from '../components/ConfigProvider'
import { CheckboxGroupProps } from '../components/Checkbox/checkbox-group'

const meta: Meta<typeof GCheckboxGroup> = {
  title: 'Form/Checkbox/Group',
  component: GCheckboxGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Grupo de checkboxes que permite selección múltiple con validación y configuración visual.'
      }
    }
  },
  argTypes: {
    // Valores
    modelValue: {
      description: 'Valores seleccionados (v-model)',
      control: 'object',
      table: {
        type: {
          summary: 'CheckboxGroupValueType',
          detail: 'Array<string | number | boolean>'
        },
        defaultValue: { summary: '[]' }
      }
    },

    // Estados
    disabled: {
      description: 'Deshabilita todo el grupo',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    // Validación
    min: {
      description: 'Mínimo de checkboxes seleccionados',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' }
      }
    },
    max: {
      description: 'Máximo de checkboxes seleccionados',
      control: { type: 'number', min: 1 },
      table: {
        type: { summary: 'number' }
      }
    },
    validateEvent: {
      description: 'Activa validación de formulario',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },

    // Apariencia
    size: {
      description: 'Tamaño de los checkboxes',
      control: 'select',
      options: ['small', 'default', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    layout: {
      description: 'Diseño del grupo',
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: 'layoutType', detail: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' }
      }
    },

    // Configuración avanzada
    tag: {
      description: 'Elemento HTML contenedor',
      control: 'select',
      options: ['div', 'span', 'fieldset'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' }
      }
    },

    // Accesibilidad
    ariaLabel: {
      description: 'Etiqueta ARIA para el grupo',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },

    // Eventos
    'onUpdate:modelValue': {
      description: 'Se emite al actualizar los valores',
      table: {
        category: 'events',
        type: {
          summary: 'CheckboxGroupValueType',
          detail: 'Array<string | number | boolean>'
        }
      }
    },
    onChange: {
      description: 'Se emite al cambiar la selección',
      table: {
        category: 'events',
        type: {
          summary: 'CheckboxGroupValueType',
          detail: 'Array<string | number | boolean>'
        }
      }
    },

    // Slots
    default: {
      description: 'Slot para contenido personalizado de cada checkbox',
      table: {
        category: 'slots',
        type: {
          summary: 'scope: { item: CheckboxOption, checked: boolean }'
        }
      }
    }
  },
  args: {
    modelValue: [],
    disabled: false,
    size: 'default',
    layout: 'horizontal',
    tag: 'div',
    min: undefined,
    max: undefined,
    validateEvent: true,
    ariaLabel: 'Grupo de opciones'
  } as Partial<CheckboxGroupProps>
} // Aserción de tipo explícita

export default meta

type Story = StoryObj<typeof GCheckboxGroup>

const Template: Story = {
  render: (args) => ({
    components: { GCheckboxGroup, GCheckbox, GConfigProvider },
    setup() {
      console.log('args', args)
      const selectedValues = ref([])
      console.log('selectedValues', selectedValues)
      return { args, selectedValues }
    },
    template: `
    <g-config-provider>
      <g-checkbox-group 
        v-bind="args"
        v-model="selectedValues"
      >
        <g-checkbox label="Importaciones" value="Value A" />
        <g-checkbox label="Inversiones" value="Value B" />
        <g-checkbox label="Exportaciones" value="Value C" />
        <g-checkbox label="Transferencias" value="Value D" />
        <g-checkbox label="Otros" value="Value E" />
      </g-checkbox-group>
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valores seleccionados: {{ selectedValues }}
      </div>
    </g-config-provider>
    `
  })
}

export const Basic: Story = {
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Grupo de checkboxes básico. Muestra la funcionalidad principal de selección múltiple con valores en array. Los checkboxes se muestran en línea por defecto.'
      }
    }
  }
}

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
    modelValue: ['Value A']
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo completo deshabilitado. Todos los checkboxes están no interactivos. Útil para estados donde la selección no está disponible temporalmente.'
      }
    }
  }
}

export const WithLimits: Story = {
  ...Template,
  args: {
    min: 1,
    max: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo con restricciones de selección. Permite definir mínimo (1) y máximo (2) de opciones seleccionables. Muestra validación automática al exceder los límites.'
      }
    }
  }
}

export const VerticalLayout: Story = {
  ...Template,
  args: {
    layout: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado.'
      }
    }
  }
}

// export const DifferentSizes: Story = {
//   render: (args) => ({
//     components: { GCheckboxGroup, GCheckbox, GConfigProvider },
//     setup() {
//       const sizes = ['large', 'default', 'small'] as const
//       const values = reactive<string[][]>([[], [], []])

//       watchEffect(() => {
//         console.log('values', values)
//         console.log('args', args)
//       })

//       return { args, sizes, values }
//     },
//     template: `
//     <GConfigProvider>
//       <div style="display: flex; flex-direction: column; gap: 20px;">
//         <div v-for="(size, index) in sizes" :key="size">
//           <GCheckboxGroup
//             v-model="values[index]"
//             :size="size"
//           >
//             <GCheckbox :label="size + '1'">{{ size }} Size 1</GCheckbox>
//             <GCheckbox :label="size + '2'">{{ size }} Size 2</GCheckbox>
//           </GCheckboxGroup>
//         </div>
//       </div>
//     </GConfigProvider>
//     `
//   })
// }
