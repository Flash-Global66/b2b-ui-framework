import type { Meta, StoryObj } from "@storybook/vue3";
import { GPill } from "../components/Pill";
import { GConfigProvider } from "../components/ConfigProvider";
import { ref } from "vue";

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
        story: "Uso básico de la píldora con diferentes tipos y colores.",
      },
    },
  },
  render: () => ({
    components: { GPill, GConfigProvider },
    template: `
      <g-config-provider>
        <div class="space-x-2">
          <g-pill text="Primary" />
          <g-pill type="success" text="Success" />
          <g-pill type="info" text="Info" />
          <g-pill type="warning" text="Warning" />
          <g-pill type="danger" text="Danger" />
          <g-pill color="#6366f1" text="Custom" />
        </div>
      </g-config-provider>
    `,
  }),
};

// Píldoras eliminables
export const Removable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Píldoras que pueden ser eliminadas mediante un botón de cierre.",
      },
    },
  },
  render: () => ({
    components: { GPill, GConfigProvider },
    setup() {
      const handleClose = () => {
        console.log("Píldora cerrada");
      };
      return { handleClose };
    },
    template: `
      <g-config-provider>
        <div class="space-x-2">
          <g-pill 
            closable
            text="Removible"
            @close="handleClose"
          />
          <g-pill 
            closable
            type="success"
            text="Removible"
            @close="handleClose"
          />
        </div>
      </g-config-provider>
    `,
  }),
};

// Píldoras dinámicas
export const Dynamic: Story = {
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de manejo dinámico de píldoras.",
      },
    },
  },
  render: () => ({
    components: { GPill, GConfigProvider },
    setup() {
      const pills = ref(["Tag 1", "Tag 2", "Tag 3"]);
      const handleClose = (index: number) => {
        pills.value.splice(index, 1);
      };
      const addPill = () => {
        pills.value.push(`Tag ${pills.value.length + 1}`);
      };
      return { pills, handleClose, addPill };
    },
    template: `
      <g-config-provider>
        <div class="space-y-4">
          <div class="space-x-2">
            <g-pill
              v-for="(pill, index) in pills"
              :key="index"
              :text="pill"
              closable
              @close="handleClose(index)"
            />
          </div>
          <button @click="addPill">Añadir píldora</button>
        </div>
      </g-config-provider>
    `,
  }),
};

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
