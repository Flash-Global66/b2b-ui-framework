import { StoryFn, Meta } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { GButton } from "../components/Button/src";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// CONSTANTS
import { action } from "@storybook/addon-actions";

export default {
  title: "Basic/Button",
  component: GButton,
  parameters: {
    docs: {
      description: {
        component: `
### Uso básico
Ejemplo de uso básico:
\`\`\` vue
<g-button variant="primary" title="Primary Button"/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // Current Props - Variant & Style
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Variante visual del botón",
      table: {
        type: { summary: "string" },
        category: "Principales",
      },
    },
    title: {
      control: "text",
      description: "Texto del botón (preferencia sobre el slot)",
      table: {
        category: "Principales",
        type: { summary: "string" },
        defaultValue: { summary: "Button Text" },
      },
    },

    // Behavior Props
    typeNative: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Tipo nativo del botón HTML",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
        category: "Comportamiento",
      },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el botón",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },
    loading: {
      control: "boolean",
      description: "Muestra estado de carga",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },

    // Iconos
    iconLeft: {
      control: "text",
      description:
        "Icono izquierdo renderizado utilizando el componente IconFont.\n\nVer [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.\n\nEjemplo 'solid check', 'regular user'",
      table: {
        category: "Iconos",
        type: { summary: "string" },
      },
    },
    showIconLeft: {
      control: "boolean",
      description: "Mostrar icono izquierdo",
      table: {
        category: "Iconos",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    iconRight: {
      control: "text",
      description:
        "Icono derecho renderizado utilizando el componente IconFont.\n\nVer [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.\n\nEjemplo 'solid arrow-right', 'regular star'",
      table: {
        category: "Iconos",
        type: { summary: "string" },
      },
    },
    showIconRight: {
      control: "boolean",
      description: "Mostrar icono derecho",
      table: {
        category: "Iconos",
        defaultValue: { summary: "false" },
      },
    },

    autofocus: {
      control: "boolean",
      description:
        "El botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",
      table: {
        category: "Comportamiento",
        type: { summary: "boolean" },
      },
    },
    download: {
      control: "text",
      description:
        "Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.\n\n ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.",
      table: {
        defaultValue: { summary: "undefined" },
        category: "Enlaces",
        type: { summary: "string" },
      },
    },

    // Link Props
    href: {
      control: "text",
      description: "Convierte el botón en un enlace",
      table: {
        category: "Enlaces",
        type: { summary: "string" },
      },
    },
    target: {
      control: "text",
      description: "Atributo target del enlace",
      table: {
        category: "Enlaces",
        type: { summary: "string" },
      },
    },

    // Deprecated Props
    size: {
      control: "select",
      options: ["large", "medium", "small", "tiny"],
      description: "⚠️ **Deprecado:** El botón ahora tiene un tamaño estándar único",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "small" },
        category: "Deprecado",
      },
    },
    type: {
      control: "select",
      options: ["default", "outlined", "ghost", "icon"],
      description: "⚠️ **Deprecado:** Use `variant` en su lugar",
      table: {
        category: "Deprecado",
        type: { summary: "string" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger", "info", "warning", "custom"],
      description: "⚠️ **Deprecado:** Use `variant` en su lugar",
      table: {
        category: "Deprecado",
        type: { summary: "string" },
      },
    },
    full: {
      control: "boolean",
      description: "Botón de ancho completo",
      table: {
        category: "Layout",
        type: { summary: "boolean" },
      },
    },

    // Accesibilidad
    ariaLabel: {
      control: "text",
      description: "Etiqueta accesible para el botón",
      table: {
        category: "Accesibilidad",
        type: { summary: "string" },
      },
    },
    // Events
    onClick: {
      description: "Se dispara al hacer clic en el botón. No se dispara si el botón está deshabilitado.",
      table: {
        category: "Events",
        type: { summary: "(event: Event) => void" },
      },
    },
    onMousedown: {
      description: "Se dispara cuando se presiona el botón del mouse. No se dispara si el botón está deshabilitado.",
      table: {
        category: "Events",
        type: { summary: "(event: Event) => void" },
      },
    },
    default: {
      constrol: "text",
      description: "Slot por defecto del botón",
      table: {
        category: "Slots",
        type: { summary: "string | Component" },
      },
    },
  },
} as Meta<typeof GButton>;

// Base template
const Template: StoryFn<typeof GButton> = (args) => ({
  components: { GButton },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown")),
    };
  },
  template: `
    <g-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `,
});

// Current API Stories
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  title: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  title: "Secondary Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  title: "Tertiary Button",
};

// States Stories
export const States = () => ({
  components: { GButton },
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Primary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="primary" title="Enabled"/>
          <g-button variant="primary" disabled title="Disabled"/>
          <g-button variant="primary" loading title="Loading"/>
        </div>
      </div>
      
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Secondary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="secondary" title="Enabled"/>
          <g-button variant="secondary" disabled title="Disabled"/>
          <g-button variant="secondary" loading title="Loading"/>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-bold">Tertiary Variant States</h3>
        <div class="flex gap-4">
          <g-button variant="tertiary" title="Enabled"/>
          <g-button variant="tertiary" disabled title="Disabled"/>
          <g-button variant="tertiary" loading title="Loading"/>
        </div>
      </div>
    </div>
  `,
});

// Add new story for icons
export const WithIcons = () => ({
  components: { GButton },
  template: `
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones con Iconos de Font Awesome</h3>
        <div class="flex gap-4">
          <g-button 
            variant="primary"
            title="Icono Izquierdo"
            show-icon-left
            icon-left="solid chevron-left"
          />
          
          <g-button 
            variant="primary"
            title="Icono Derecho"
            show-icon-right
            icon-right="solid chevron-right"
          />

          <g-button 
            variant="primary"
            title="Ambos Iconos"
            show-icon-left
            show-icon-right
            icon-left="solid chevron-left"
            icon-right="solid chevron-right"
          />
        </div>
      </div>
  `,
});

// Deprecated API Stories (with warnings)
export const DeprecatedAPI = () => ({
  components: { GButton, FontAwesomeIcon },
  template: `
    <div class="space-y-8">
      <div class="p-4 bg-yellow-100 text-yellow-800 rounded">
        ⚠️ Los siguientes ejemplos usan props deprecadas. Usar la nueva prop 'variant' en su lugar.
      </div>
      
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Propiedad 'color' Deprecada</h3>
        <div class="flex gap-4">
          <g-button color="primary">Primario</g-button>
          <g-button color="secondary">Secundario</g-button>
          <g-button color="danger">Peligro</g-button>
          <g-button color="info">Información</g-button>
          <g-button color="warning">Advertencia</g-button>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-bold">Propiedad 'type' Deprecada</h3>
        <div class="flex gap-4">
          <g-button type="default">Default</g-button>
          <g-button type="outlined">Outlined</g-button>
          <g-button type="ghost">Ghost</g-button>
          <g-button type="icon">
            <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
          </g-button>
        </div>
      </div>
    </div>
  `,
});

// Update size examples in stories
export const Sizes = () => ({
  components: { GButton },
  template: `
    <div class="space-y-4">
      <div class="p-4 bg-yellow-100 text-yellow-800 rounded">
        ⚠️ Las variantes de tamaño están deprecadas. Los botones ahora tienen un tamaño estándar único.
      </div>
      <div class="flex gap-4 items-center">
        <g-button variant="primary">Tamaño Estándar</g-button>
        <g-button variant="primary" size="tiny">Tiny (Deprecado)</g-button>
        <g-button variant="primary" size="medium">Medium (Deprecado)</g-button>
        <g-button variant="primary" size="large">Large (Deprecado)</g-button>
      </div>
    </div>
  `,
});















