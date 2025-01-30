import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

import { GInline } from "../components/Inline";
import { GConfigProvider } from "../components/ConfigProvider";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const meta: Meta<typeof GInline> = {
  title: "Data/Inline",
  component: GInline,
  parameters: {
    docs: {
      description: {
        component:
          "El componente `Inline` se utiliza para mostrar información en un formato compacto, con opciones para incluir un título, descripción, ícono y enlaces interactivos.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Título del componente `Inline`.",
      control: "text",
    },
    description: {
      description: "Texto de descripción principal del componente `Inline`.",
      control: "text",
    },
    showClose: {
      description: "Controla si se muestra el botón de cerrar.",
      control: "boolean",
      defaultValue: true,
    },
    icon: {
      description: "Ícono de FontAwesome que se muestra en el componente.",
      control: "text",
    },
    type: {
      description: "Tipo de estilo del componente `Inline`.",
      control: "select",
      options: ["success", "info", "warning", "error"],
      defaultValue: "success",
    },
    links: {
      description: "Lista de enlaces interactivos con etiquetas y acciones.",
      control: "object",
    },
    ariaLabel: {
      description: "Etiqueta ARIA para accesibilidad.",
      control: "text",
    },
  },
  args: {
    title: "Título",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    showClose: true,
    type: "success",
    links: [
      {
        label: "Enlace 1",
        action: () => alert("Acción 1"),
      },
      {
        label: "Enlace 2",
        action: () => alert("Acción 2"),
      },
    ],
    ariaLabel: "inline",
  },
};

export default meta;
type Story = StoryObj<typeof GInline>;

// Uso básico
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico del componente `Inline` con título, descripción y enlaces.",
      },
    },
  },
  render: (args) => ({
    components: { GInline, GConfigProvider, FontAwesomeIcon },
    setup() {
      function onClick() {
        console.log("onClick");
      }
      return { args, onClick };
    },
    template: `
      <g-config-provider>
        <g-inline
          title="Título"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
          :links="[
            {
              label: 'Link 1',
              action: onClick
            },
            {
              label: 'Link 2',
              action: onClick
            }
          ]"
          v-bind="args">
          <template #icon>
            <font-awesome-icon :icon="['fas', 'user']" />
          </template>
        </g-inline>
      </g-config-provider>
    `,
  }),
  args: {},
};


export const WithCustomIcon: Story = {
  name: "Con ícono personalizado",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente `Inline` con un ícono personalizado.",
      },
    },
  },
  render: (args) => ({
    components: { GInline, GConfigProvider, FontAwesomeIcon },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-inline
          title="Título"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
          v-bind="args">
          <template #icon>
            <font-awesome-icon :icon="['fas', 'star']" />
          </template>
        </g-inline>
      </g-config-provider>
    `,
  }),
  args: {
    icon: "star",
  },
};

export const WithoutCloseButton: Story = {
  name: "Sin botón de cerrar",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del componente `Inline` sin el botón de cerrar.",
      },
    },
  },
  render: (args) => ({
    components: { GInline, GConfigProvider },
    setup() {
      return { args };
    },
    template: `
      <g-config-provider>
        <g-inline
          title="Título"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
          v-bind="args"
        />
      </g-config-provider>
    `,
  }),
  args: {
    showClose: false,
  },
};