
import type { Meta, StoryObj } from "@storybook/vue3";
import { GInput, InputInstance } from "../components/Input";
import { GConfigProvider } from "../components/ConfigProvider";
import { ref } from "vue";

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
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input label="Nombre" placeholder="Ingrese su nombre" />
          <g-input label="Email" type="email" placeholder="ejemplo@dominio.com" />
          <g-input label="Teléfono" type="tel" placeholder="+51 999888777" />
        </div>
      </g-config-provider>
    `
  })
};

// Ejemplo con Validación
export const WithValidation: Story = {
  name: "Con Validación",
  render: () => ({
    components: { GInput, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            label="Email Corporativo" 
            type="email"
            help-text="Debe ser un email corporativo válido"
            placeholder="usuario@empresa.com"
          />
          <g-input 
            label="Contraseña"
            type="password"
            show-password
            help-text="Mínimo 8 caracteres, incluir números y símbolos"
          />
        </div>
      </g-config-provider>
    `
  })
};

// Ejemplo de Formulario de Pago
export const PaymentForm: Story = {
  name: "Formulario de Pago",
  render: () => ({
    components: { GInput, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="grid grid-cols-2 gap-4">
          <g-input 
            label="Número de Tarjeta"
            placeholder="1234 5678 9012 3456"
            maxlength="19"
            prefix-icon="regular credit-card"
          />
          <g-input 
            label="Titular"
            placeholder="Como aparece en la tarjeta"
            prefix-icon="regular user"
          />
          <g-input 
            label="Fecha Vencimiento"
            placeholder="MM/YY"
            maxlength="5"
            prefix-icon="regular calendar"
          />
          <g-input 
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

// Ejemplo de Estados
export const States: Story = {
  name: "Estados",
  render: () => ({
    components: { GInput, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input 
            label="Normal"
            value="Input normal"
          />
          <g-input 
            label="Deshabilitado"
            value="Input deshabilitado"
            disabled
          />
          <g-input 
            label="Solo lectura"
            value="Input readonly"
            readonly
          />
          <g-input 
            label="Con error"
            value="Input con error"
            class="is-error"
            help-text="Este campo contiene un error"
          />
          <g-input 
            label="Cargando"
            value="Input loading"
            loading
          />
        </div>
      </g-config-provider>
    `
  })
};
