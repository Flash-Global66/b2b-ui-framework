
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
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const cardNumber = ref('')
      const titular = ref('')
      const expDate = ref('')
      const cvv = ref('')
      
      return { cardNumber, titular, expDate, cvv }
    },
    template: `
      <g-config-provider>
        <div class="grid grid-cols-2 gap-4">
          <g-input 
            v-model="cardNumber"
            label="Número de Tarjeta"
            placeholder="1234 5678 9012 3456"
            maxlength="19"
            prefix-icon="solid credit-card"
          />
          <g-input 
            v-model="titular"
            label="Titular"
            placeholder="Como aparece en la tarjeta"
            prefix-icon="regular user"
          />
          <g-input 
            v-model="expDate"
            label="Fecha Vencimiento"
            placeholder="MM/YY"
            maxlength="5"
            prefix-icon="regular calendar"
          />
          <g-input 
            v-model="cvv"
            label="CVV"
            type="password"
            maxlength="4"
            show-password
            prefix-icon="regular lock"
          />
        </div>
      </g-config-provider>
    `
  })
};

export const States: Story = {
  name: "Estados",
  render: () => ({
    components: { GInput, GConfigProvider },
    setup() {
      const states = reactive({
        normal: 'Input normal',
        disabled: 'Input deshabilitado',
        readonly: 'Input readonly',
        event: '',
        error: 'Input con error',
        loading: 'Input loading'
      })

      function handleClick (e) {
        console.log('Click en el input', e)
      }
      
      return { states, handleClick }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            v-model="states.normal"
            label="Normal"
          />
          <g-input 
            v-model="states.disabled"
            label="Deshabilitado"
            disabled
          />
          <g-input 
            v-model="states.readonly"
            label="Solo lectura"
            readonly
          />
          <g-input 
            v-model="states.event"
            label="Input evento"
            is-event
            @click="handleClick"
            suffix-icon="regular chevron-down"
          />
          <g-input 
            v-model="states.error"
            label="Con error"
            message-error="Este campo contiene un error"
          />
          <g-input 
            v-model="states.loading"
            label="Cargando"
            loading
          />
        </div>
      </g-config-provider>
    `
  })
};
