import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, reactive } from "vue";
import { GFormItem, GForm } from "../components/Form";
import { GInput } from "../components/Input";
import { GButton } from "../components/Button/src";
import { GConfigProvider } from "../components/ConfigProvider";

const meta: Meta<typeof GFormItem> = {
  title: "Form/Form/Item",
  component: GFormItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
El componente \`GFormItem\` es un contenedor para elementos de formulario que controla los errores de validación y muestra mensajes de error cuando es necesario.

### Dependencias
Este componente está diseñado para funcionar dentro de un componente \`Form\`. Para ver la documentación completa del sistema de formularios, visita la [documentación de Form](/docs/form-form--docs).`
      }
    }
  },
  argTypes: {
    prop: {
      description: "Nombre del campo en el modelo de datos",
      control: "text",
      table: {
        type: { summary: "string | string[]" }
      }
    },
    rules: {
      description: "Reglas de validación específicas para este campo",
      control: "object",
      table: {
        type: { summary: "FormItemRule | FormItemRule[]" }
      }
    },
    showMessage: {
      description: "Mostrar mensaje de error en el FormItem",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'false' }
      }
    },
    showMessageChild: {
      description: "Mostrar mensaje de error en el componente hijo",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'true' }
      }
    },
  }
};

export default meta;
type Story = StoryObj<typeof GFormItem>;

export const CombinedRules: Story = {
  name: "Combinación de Reglas",
  parameters: {
    docs: {
      description: {
        story: `Las reglas de validación pueden definirse tanto en el Form padre como en el FormItem individual.
        
#### Validación por eventos
El atributo \`validate-event\` controla si el componente de entrada dispara la validación automáticamente en eventos como 'change' o 'blur'.
- Cuando \`validate-event="false"\`: La validación solo ocurrirá al llamar manualmente al método validate().
- Cuando \`validate-event="true"\` (por defecto): La validación se dispara automáticamente en eventos de entrada.`
      }
    }
  },
  render: () => ({
    components: { GForm, GFormItem, GInput, GConfigProvider, GButton },
    setup() {
      const formRef = ref();
      const formData = reactive({
        nombre: "",
        apellido: "",
        edad: ""
      });

      const rules = {
        nombre: [
          { required: true, message: "El nombre es requerido", trigger: "blur" },
          { min: 5, message: "Mínimo 5 caracteres", trigger: "blur" }
        ],
        apellido: [
          { required: true, message: "El apellido es requerido", trigger: "blur" }
        ]
      };

      async function handleSubmit() {
        if (!formRef.value) return;

        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log("submit!", fields);
          } else {
            console.log("error submit!", fields);
          }
        });
      }

      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }

      return { formRef, formData, rules, handleSubmit, handleReset };
    },
    template: `
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules">
          <g-form-item prop="nombre">
            <g-input 
              v-model="formData.nombre" 
              label="Nombre"
              placeholder="Ingrese su nombre"
              help-text="Mínimo 5 caracteres"
              :validate-event="false"
            />
          </g-form-item>
          
          <g-form-item prop="apellido">
            <g-input 
              v-model="formData.apellido" 
              label="Apellido"
              placeholder="Ingrese su apellido"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item 
            prop="edad"
            :rules="[
              { required: true, message: 'La edad es requerida' },
              { 
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('Ingrese una edad'));
                  } else if (Number(value) < 18) {
                    callback(new Error('Debe ser mayor de edad'));
                  } else {
                    callback();
                  }
                }
              }
            ]"
          >
            <g-input 
              v-model="formData.edad" 
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>

          <div style="margin-top: 20px">
            <g-button type="primary" @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" style="margin-left: 10px">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `
  })
};