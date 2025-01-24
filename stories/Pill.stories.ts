import type { Meta, StoryObj } from "@storybook/vue3";
import { nextTick, ref } from "vue";

import { GPill } from "../components/Pill";
import { GInput } from "../components/Input/src/index";
import { GConfigProvider } from "../components/ConfigProvider";
import { GButton } from "../components/Button/src/index";

const meta: Meta<typeof GPill> = {
  title: "Data/Pill",
  component: GPill,
  parameters: {
    docs: {
      description: {
        component:
          "Componente tipo etiqueta que permite mostrar información de estado o categorización.",
      },
    },
  },
  argTypes: {
    text: {
      description: "Texto a mostrar en la píldora",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      description: "Tipo de píldora",
      control: "select",
      options: ["primary", "success", "info", "warning", "danger"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      description: "Tamaño de la píldora",
      control: "select",
      options: ["small", "default", "large"],
      table: {
        type: { summary: "string" },
      },
    },
    closable: {
      description: "Habilita la opción de cerrar la píldora",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    round: {
      description: "Hace que la píldora tenga bordes redondeados",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    color: {
      description: "Color de fondo personalizado",
      control: "color",
      table: {
        type: { summary: "string" },
      },
    },
    effect: {
      description: "Efecto visual de la píldora",
      control: "select",
      options: ["dark", "light", "plain"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "light" },
      },
    },
    onClose: {
      description: "Se emite al hacer clic en el botón de cerrar",
      table: {
        type: { summary: "function" },
        category: "events",
      },
    },
    onClick: {
      description: "Se emite al hacer clic en la píldora",
      table: {
        type: { summary: "function" },
        category: "events",
      },
    },
    default: {
      description: "Contenido personalizado de la píldora",
      table: {
        type: { summary: "slot" },
        category: "slots",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GPill>;

// Uso básico
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'El componente Pill puede mostrar texto de dos formas: usando la prop `text` o mediante el slot default. Si se proporciona contenido en el slot, este tendrá prioridad sobre la prop text.'
      }
    }
  },
  render: (args) => ({
    components: { GPill, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-pill v-bind="args" />
      </g-config-provider>
    `,
  }),
  args: {
    text: 'Píldora básica',
    type: 'primary'
  }
};

// Píldoras eliminables
export const Removable: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Las píldoras pueden ser eliminables añadiendo la prop `closable`. Al hacer clic en el botón de cierre se mostrará una confirmación antes de eliminar la píldora.'
      }
    }
  },
  render: (args) => ({
    components: { GPill, GConfigProvider },
    setup() {
      interface PillItem {
        name: string
        type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
      }

      const pills = ref<PillItem[]>([
        { name: 'Píldora 1', type: 'primary' },
        { name: 'Píldora 2', type: 'success' },
        { name: 'Píldora 3', type: 'info' },
        { name: 'Píldora 4', type: 'warning' },
        { name: 'Píldora 5', type: 'danger' }
      ])

      const handleClose = (index: number) => {
        if (confirm('¿Desea eliminar esta píldora?')) {
          pills.value.splice(index, 1)
        }
      }

      return { args, pills, handleClose }
    },
    template: `
      <g-config-provider>
        <div class="flex gap-2">
          <g-pill
            v-for="(pill, index) in pills"
            :key="pill.name"
            :text="pill.name"
            :type="pill.type"
            closable
            @close="handleClose(index)"
          />
        </div>
      </g-config-provider>
    `
  }),
  args: {
    closable: true
  }
}
// Píldoras dinámicas
export const Dynamic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de manejo dinámico de píldoras con la capacidad de agregar nuevas mediante un input.'
      }
    }
  },
  render: () => ({
    components: { GPill, GConfigProvider, GInput, GButton },
    setup() {
      const inputValue = ref('')
      const dynamicPills = ref(['Píldora 1', 'Píldora 2', 'Píldora 3'])
      const inputVisible = ref(false)
      const inputRef = ref()

      const handleClose = (tag: string) => {
        dynamicPills.value.splice(dynamicPills.value.indexOf(tag), 1)
      }

      const showInput = () => {
        inputVisible.value = true
        nextTick(() => {
          inputRef.value?.focus()
        })
      }

      const handleInputConfirm = () => {
        if (inputValue.value) {
          dynamicPills.value.push(inputValue.value)
        }
        inputVisible.value = false
        inputValue.value = ''
      }

      return { 
        inputValue,
        dynamicPills,
        inputVisible,
        inputRef,
        handleClose,
        showInput,
        handleInputConfirm
      }
    },
    template: `
      <g-config-provider>
        <div class="flex gap-2 items-center">
          <g-pill
            v-for="pill in dynamicPills"
            :key="pill"
            :text="pill"
            closable
            @close="handleClose(pill)"
          />
          <g-input
            v-if="inputVisible"
            ref="inputRef"
            v-model="inputValue"
            class="w-40"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <g-button 
            v-else
            size="tiny"
            @click="showInput"
          >
            + Nueva píldora
          </g-button>
        </div>
      </g-config-provider>
    `
  })
}

// Tamaños
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Diferentes tamaños disponibles para las píldoras.",
      },
    },
  },
  render: () => ({
    components: { GPill, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-x-2">
          <g-pill size="small" text="Pequeña" />
          <g-pill text="Normal" />
          <g-pill size="large" text="Grande" />
        </div>
      </g-config-provider>
    `,
  }),
};

// Redondeadas
export const Rounded: Story = {
  parameters: {
    docs: {
      description: {
        story: "Píldoras con bordes completamente redondeados.",
      },
    },
  },
  render: () => ({
    components: { GPill, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-x-2">
          <g-pill round text="Redondeada" />
          <g-pill round type="success" text="Redondeada" />
          <g-pill round type="info" text="Redondeada" />
        </div>
      </g-config-provider>
    `,
  }),
};
