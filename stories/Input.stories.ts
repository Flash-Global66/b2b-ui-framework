
import type { Meta, StoryObj } from "@storybook/vue3";
import { GInput, InputInstance } from "../components/Input";
import { GConfigProvider } from "../components/ConfigProvider";
import { reactive, ref } from "vue";

const meta: Meta<InputInstance> = {
  title: "Form/Input",
  component: GInput,
  parameters: {
    docs: {
      description: {
        component: `El componente Input es un campo de entrada enriquecido que soporta:
        
- Etiquetas flotantes (floating labels)
- Validación integrada
- Estados de carga y error
- Íconos prefix y suffix
- Texto de ayuda
- Límite de caracteres
- Formateo de entrada
- Modo contraseña con visibilidad toggle

### Importación

\`\`\`typescript
import { GInput } from '@flash-global66/b2b-ui-framework'
\`\`\`

### Uso con v-model

\`\`\`vue
<template>
  <g-input v-model="value" label="Nombre" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
\`\`\`
`
      }
    }
  },
  argTypes: {
    // Props principales
    modelValue: {
      description: "Valor del input (v-model)",
      control: "text",
    },
    label: {
      description: "Etiqueta flotante del input",
      control: "text",
    },
    type: {
      description: "Tipo de input",
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"],
      defaultValue: "text"
    },
    prefixIcon: {
      description: "Ícono al inicio del input",
      control: "text"
    },
    suffixIcon: {
      description: "Ícono al final del input",
      control: "text"
    },
    showPassword: {
      description: "Muestra/oculta el contenido del campo password",
      control: "boolean"
    },
    formatter: {
      description: "Función para formatear el valor de entrada",
      table: {
        type: { summary: "(value: string) => string" }
      }
    },
    parser: {
      description: "Función para parsear el valor antes de emitirlo",
      table: {
        type: { summary: "(value: string) => string" }
      }
    },
    ref: {
      description: "Referencia al elemento raíz",
      table: {
        category: "Expuesto",
        type: { summary: "HTMLElement" }
      }
    },
    isComposing: {
      description: "Estado de composición del input",
      table: {
        category: "Expuesto",
        type: { summary: "boolean" }
      }
    },
    focus: {
      description: "Enfoca el input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    blur: {
      description: "Quita el foco del input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    select: {
      description: "Selecciona todo el texto del input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    },
    clear: {
      description: "Limpia el valor del input",
      table: {
        category: "Expuesto",
        type: { summary: "() => void" }
      }
    }
  }
};
export default meta;
type Story = StoryObj<InputInstance>;

// Ejemplo Básico
export const Basic: Story = {
  name: "Básico",
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const name = ref('')
      const email = ref('')
      const phone = ref('')
      
      return { name, email, phone }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input v-model="name" label="Nombre" placeholder="Ingrese su nombre" />
          <g-input v-model="email" label="Email" type="email" placeholder="ejemplo@dominio.com" />
          <g-input v-model="phone" label="Teléfono" type="tel" placeholder="999888777" />
        </div>
      </g-config-provider>
    `
  })
};
export const PaymentForm: Story = {
  name: "Formulario de Pago",
  parameters: {
    docs: {
      description: {
        story: `
- **Número de Tarjeta**: 
  - Usa formatter/parser para formateo automático XXXX XXXX XXXX XXXX
  - Prefix-icon: credit-card
  - Maxlength: 19 caracteres (16 números + 3 espacios)

- **Titular**: 
  - Campo de texto simple
  - Prefix-icon: user
  - Placeholder guía al usuario sobre el formato esperado

- **Fecha Vencimiento**: 
  - Prefix-icon: calendar
  - Maxlength: 5 caracteres (formato MM/YY)

- **CVV**: 
  - Tipo password con toggle de visibilidad
  - Prefix-icon: lock
  - Maxlength: 4 dígitos
  - Incluye showPassword para alternar visibilidad

### Formateo de Tarjeta

El input de tarjeta implementa formatter/parser para mejor experiencia:

\`\`\`typescript
// Formatea visualmente: 4111111111111111 -> 4111 1111 1111 1111
const formatCardNumber = (value: string) => {
  if (!value) return ''
  const numbers = value.replace(/\s/g, '')
  const groups = numbers.match(/.{1,4}/g) || []
  return groups.join(' ')
}

// Mantiene datos limpios: 4111 1111 1111 1111 -> 4111111111111111
const parseCardNumber = (value: string) => {
  return value.replace(/\s/g, '')
}
\`\`\`
`
      }
    }
  },
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const formData = reactive({
        cardNumber: '',
        titular: '',
        expDate: '',
        cvv: ''
      })

      const formatCardNumber = (value: string) => {
        if (!value) return ''
        const numbers = value.replace(/\s/g, '')
        const groups = numbers.match(/.{1,4}/g) || []
        return groups.join(' ')
      }

      const parseCardNumber = (value: string) => {
        return value.replace(/\s/g, '')
      }
      
      return { 
        formData,
        formatCardNumber,
        parseCardNumber
      }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <div class="grid grid-cols-2 gap-4">
            <g-input 
              v-model="formData.cardNumber"
              label="Número de Tarjeta"
              placeholder="1234 5678 9012 3456"
              maxlength="19"
              prefix-icon="regular credit-card"
              :formatter="formatCardNumber"
              :parser="parseCardNumber"
            />
            <g-input 
              v-model="formData.titular"
              label="Titular"
              placeholder="Como aparece en la tarjeta"
              prefix-icon="regular user"
            />
            <g-input 
              v-model="formData.expDate"
              label="Fecha Vencimiento"
              placeholder="MM/YY"
              maxlength="5"
              prefix-icon="regular calendar"
            />
            <g-input 
              v-model="formData.cvv"
              label="CVV"
              type="password"
              maxlength="4"
              show-password
              prefix-icon="regular lock"
            />
          </div>

          <div class="bg-gray-100 p-4 rounded">
            <pre class="text-sm">{{ formData }}</pre>
          </div>
        </div>
      </g-config-provider>
    `
  })
};

export const States: Story = {
  name: "Estados",
  parameters: {
    docs: {
      description: {
        story: `Los inputs pueden tener diferentes estados que indican su comportamiento y apariencia:

- **Enabled**: Estado inicial del input, listo para recibir datos
- **Completed**: Cuando el input ya contiene datos ingresados
- **Disabled**: Input deshabilitado, no permite interacción
- **Readonly**: Permite ver pero no modificar el contenido
- **Evento**: Input controlado por eventos externos (ej: modal)
- **Error**: Muestra estado de error con mensaje
- **Loading**: Estado de carga durante operaciones asíncronas`
      }
    }
  },
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const states = reactive({
        enabled: '',
        completed: 'Input con contenido',
        disabled: 'Input deshabilitado',
        readonly: 'Input readonly',
        event: '',
        error: '',
        loading: 'Input loading'
      })

      function handleClick(e: MouseEvent) {
        alert('Click en el input')
      }
      
      return { states, handleClick }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            v-model="states.enabled"
            label="Enabled"
            help-text="Input en estado inicial, listo para recibir datos"
          />
          <g-input 
            v-model="states.completed"
            label="Completed"
            help-text="Input que ya contiene información ingresada"
          />
          <g-input 
            v-model="states.disabled"
            label="Disabled"
            disabled
            help-text="Input deshabilitado, no permite ninguna interacción"
          />
          <g-input 
            v-model="states.readonly"
            label="Readonly"
            readonly
            help-text="Permite ver pero no modificar el contenido"
          />
          <g-input 
            v-model="states.event"
            label="Evento"
            is-event
            @click="handleClick"
            suffix-icon="regular chevron-down"
            help-text="Click para abrir modal de selección"
          />
          <g-input 
            v-model="states.error"
            label="Error"
            message-error="Este campo contiene un error"
            help-text="Ejemplo de input con estado de error"
          />
          <g-input 
            v-model="states.loading"
            label="Loading"
            loading
            help-text="Estado durante operaciones asíncronas"
          />
        </div>
      </g-config-provider>
    `
  })
};

