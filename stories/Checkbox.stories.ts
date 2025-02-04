import { Meta, StoryFn, StoryObj } from '@storybook/vue3'

// COMPONENTS
import { GCheckbox } from '../components/Checkbox'

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider'
import { CheckboxProps } from '../components/Checkbox/checkbox'

const meta: Meta<typeof GCheckbox> = {
  title: 'Form/Checkbox/Single',
  component: GCheckbox,
  parameters: {
    docs: {
      description: {
        component: 'Componente de selección que permite activar o desactivar una opción.'
      }
    }
  },
  argTypes: {
    // Valores
    modelValue: {
      description: 'Valor del modelo (v-model)',
      table: {
        type: { summary: 'number | string | boolean' }
      }
    },
    label: {
      description: 'Etiqueta del checkbox cuando se usa dentro de un grupo',
      control: 'text',
      table: {
        type: {
          summary: 'string | boolean | number | object'
        }
      }
    },
    value: {
      description: 'Valor del checkbox cuando se usa dentro de un grupo',
      control: 'object',
      table: {
        type: {
          summary: 'string | boolean | number | object'
        }
      }
    },
    trueValue: {
      description: 'Valor cuando está activado',
      control: 'text',
      table: {
        type: { summary: 'string | number' }
      }
    },
    falseValue: {
      description: 'Valor cuando está desactivado',
      control: 'text',
      table: {
        type: { summary: 'string | number' }
      }
    },

    // Estados
    indeterminate: {
      description: 'Estado visual indeterminado',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    checked: {
      description: 'Indica si el checkbox está activado',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
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
    errorMessage: {
      description: 'Mensaje de error',
      control: 'text',
      table: {
        type: { summary:'string' }
      }
    },

    // Apariencia
    border: {
      description: 'Añade un borde alrededor del checkbox',
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

    // Atributos HTML
    name: {
      description: 'Atributo name nativo',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    id: {
      description: 'ID nativo del input',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    tabindex: {
      description: 'Orden de tabulación',
      control: 'number',
      table: {
        type: { summary: 'string | number' }
      }
    },

    // Validación
    validateEvent: {
      description: 'Activa la validación del formulario',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },

    // Accesibilidad
    ariaControls: {
      description: 'ID de los elementos controlados (ARIA)',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },

    // Eventos
    'onUpdate:modelValue': {
      description: 'Se emite al actualizar el valor',
      table: {
        category: 'events',
        type: { summary: 'number | string | boolean' }
      }
    },
    onChange: {
      description: 'Se emite al cambiar el estado',
      table: {
        category: 'events',
        type: { summary: 'number | string | boolean' }
      }
    },

    // Slots
    default: {
      description: 'Slot personalizado para el contenido del checkbox',
      table: {
        category: 'slots',
        type: { summary: 'slot' }
      }
    }
  },
  args: {
    disabled: false,
    border: false,
    indeterminate: false,
    checked: false,
    validateEvent: true,
    size: 'default',
    label: 'Etiqueta del checkbox',
    value: 'valor-checkbox',
    name: 'checkbox-name',
    id: 'checkbox-id',
    errorMessage: ''
  } as Partial<CheckboxProps>
}

export default meta
type Story = StoryObj<typeof GCheckbox>

const Template: StoryFn<CheckboxProps> = (args: CheckboxProps, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GCheckbox, GConfigProvider },
  setup() {
    return { args }
  },
  template: `
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="args.checked"
      />
    </g-config-provider>
  `
})

export const Default: Story = Template.bind({})
Default.args = {
  label: 'Default Checkbox',
  disabled: false,
  indeterminate: false,
  border: false,
  size: 'default',
  modelValue: false,
} as CheckboxProps
Default.parameters = {
  docs: {
    description: {
      story: 'Checkbox básico en su estado inicial no seleccionado. Muestra la funcionalidad principal con una etiqueta estándar.'
    }
  }
}

export const Checked: Story = Template.bind({})
Checked.args = {
  ...Default.args,
  modelValue: true
} as CheckboxProps
Checked.parameters = {
  docs: {
    description: {
      story: 'Checkbox en estado seleccionado. Ejemplo de uso con `v-model` vinculado a un valor verdadero. Ideal para mostrar opciones activadas por defecto.'
    }
  }
}

export const Disabled: Story = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true
} as CheckboxProps
Disabled.parameters = {
  docs: {
    description: {
      story: 'Checkbox deshabilitado no interactivo. Útil para estados donde la acción no está disponible temporalmente. Se combina con otros estados como checked o indeterminate.'
    }
  }
}

export const Indeterminate: Story = Template.bind({})
Indeterminate.args = {
  ...Default.args,
  indeterminate: true
} as CheckboxProps
Indeterminate.parameters = {
  docs: {
    description: {
      story: 'Estado visual indeterminado (ni chequeado ni deschequeado). Usado comúnmente en selecciones parciales o grupos con múltiples opciones. Requiere control programático.'
    }
  }
}

export const Bordered: Story = Template.bind({})
Bordered.args = {
  ...Default.args,
  border: true,
  size: 'default'
} as CheckboxProps
Bordered.parameters = {
  docs: {
    description: {
      story: 'Checkbox con borde visible. Ideal para interfaces que requieren mayor énfasis visual. El tamaño se controla con la propiedad `size`.'
    }
  }
}

export const Error: Story = Template.bind({})
Error.args = {
  ...Default.args,
  errorMessage: 'Mensaje ejemplo de error'
} as CheckboxProps
Error.parameters = {
  docs: {
    description: {
      story: 'Checkbox en estado de error con mensaje de validación. Usado en formularios para indicar entradas inválidas. El mensaje se muestra debajo del componente.'
    }
  }
}
