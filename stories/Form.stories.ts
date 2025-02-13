import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, reactive } from "vue";
import { GForm, GFormItem } from "../components/Form";
import { GInput } from "../components/Input";
import { GConfigProvider } from "../components/ConfigProvider";

const meta: Meta<typeof GForm> = {
  title: "Form/Form",
  component: GForm,
  parameters: {
    docs: {
      description: {
        component: "El componente `Form` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables.",
      },
    },
  },
  argTypes: {
    model: {
      description: 'Objeto de datos del formulario',
      control: 'object',
      table: {
        type: { summary: 'object' },
      }
    },
    rules: {
      description: "Reglas de validación para los campos del formulario",
      control: "object",
    },
    disabled: {
      description: "Deshabilita todos los campos del formulario",
      control: "boolean",
      defaultValue: false,
    },
    validateOnRuleChange: {
      description: "Validar cuando cambian las reglas",
      control: "boolean",
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof GForm>;

// Historia Principal
export const Primary: Story = {
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del formulario con validaciones.'
      }
    }
  },
  render: () => ({
    components: { GForm, GFormItem, GInput, GConfigProvider },
    setup() {
      const formRef = ref();
      const formData = reactive({
        nombre: '',
        email: ''
      });

      const rules = {
        nombre: [
          { required: true, message: 'El nombre es requerido', trigger: 'blur' },
          { min: 3, message: 'Mínimo 3 caracteres', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'El email es requerido', trigger: 'blur' },
          { type: 'email', message: 'Email inválido', trigger: 'blur' }
        ]
      };

      return { formRef, formData, rules };
    },
    template: `
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules">
          <g-form-item prop="nombre">
            <g-input v-model="formData.nombre" label="Nombre" />
          </g-form-item>
          <g-form-item prop="email">
            <g-input v-model="formData.email" label="Email" />
          </g-form-item>
        </g-form>
      </g-config-provider>
    `
  })
};

// Validación en Tiempo Real
export const LiveValidation: Story = {
  name: 'Validación en Tiempo Real',
  parameters: {
    docs: {
      description: {
        story: 'Formulario con validación mientras el usuario escribe.'
      }
    }
  },
  render: () => ({
    components: { GForm, GFormItem, GInput, GConfigProvider },
    setup() {
      const formData = reactive({
        usuario: ''
      });

      const rules = {
        usuario: [
          { required: true, message: 'Usuario requerido', trigger: 'change' }
        ]
      };

      return { formData, rules };
    },
    template: `
      <g-config-provider>
        <g-form :model="formData" :rules="rules" validate-on-rule-change>
          <g-form-item prop="usuario">
            <g-input v-model="formData.usuario" label="Usuario" />
          </g-form-item>
        </g-form>
      </g-config-provider>
    `
  })
};

// Mensajes de Ayuda
export const HelpMessages: Story = {
  name: 'Mensajes de Ayuda',
  parameters: {
    docs: {
      description: {
        story: 'Formulario con mensajes de ayuda para guiar al usuario.'
      }
    }
  },
  render: () => ({
    components: { GForm, GFormItem, GInput, GConfigProvider },
    template: `
      <g-config-provider>
        <g-form>
          <g-form-item>
            <g-input 
              label="Nombre"
              help-text="Este campo aparecerá en tu perfil público"
            />
          </g-form-item>
        </g-form>
      </g-config-provider>
    `
  })
};

// Formulario Deshabilitado
export const DisabledForm: Story = {
  name: 'Formulario Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un formulario completamente deshabilitado.'
      }
    }
  },
  render: () => ({
    components: { GForm, GFormItem, GInput, GConfigProvider },
    template: `
      <g-config-provider>
        <g-form disabled>
          <g-form-item>
            <g-input label="Campo Deshabilitado" />
          </g-form-item>
        </g-form>
      </g-config-provider>
    `
  })
};
