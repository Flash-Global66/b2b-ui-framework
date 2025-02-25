import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

// COMPONENTS
import { GDialog } from "../components/Dialog";
import { GButton } from "../components/Button/src";
import { GConfigProvider } from "../components/ConfigProvider";

export default {
  title: "Data/Dialog",
  component: GDialog,
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "Controla la visibilidad del dialog",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    title: {
      control: "text",
      description: "Título del dialog",
      table: {
        defaultValue: { summary: "" },
      },
    },
    width: {
      control: "text",
      description: "Ancho del dialog.",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
    sizeMode: {
      control: "select",
      options: ["default", "fixed", "adaptive"],
      description: `Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,
      table: {
        defaultValue: { summary: "default" },
      },
    },
    draggable: {
      control: "boolean",
      description: "Permite arrastrar el dialog. No compatible con fullscreen",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    fullscreen: {
      control: "boolean",
      description: "El dialog ocupa toda la pantalla",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    showClose: {
      control: "boolean",
      description: "Mostrar botón de cerrar",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    center: {
      control: "boolean",
      description: "Alinear header y footer al centro",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    alignCenter: {
      control: "boolean",
      description: "Alinear el dialog horizontal y verticalmente",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    headerClass: {
      control: "text",
      description: "Clases CSS personalizadas para el header",
      table: {
        defaultValue: { summary: "" },
      },
    },
    bodyClass: {
      control: "text",
      description: "Clases CSS personalizadas para el body",
      table: {
        defaultValue: { summary: "" },
      },
    },
    footerClass: {
      control: "text",
      description: "Clases CSS personalizadas para el footer",
      table: {
        defaultValue: { summary: "" },
      },
    },
    ariaLevel: {
      control: "text",
      description: "Nivel de encabezado ARIA para el título",
      table: {
        defaultValue: { summary: "2" },
      },
    },
    footerButtons: {
      control: 'object',
      description: `Array de configuración para los botones del footer. Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,
      table: {
        defaultValue: { summary: "[]" },
        type: {
          summary: "Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>",
        }
      }
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
El componente Dialog proporciona una ventana modal:
- Tres modos de tamaño: default, fixed y adaptive
- Soporte para imágenes y contenido personalizado
        `,
      },
    },
  },
} as Meta<typeof GDialog>;

const BasicTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return { args, dialogVisible, handleClose };
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Básico</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        :footer-buttons="[
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este es un dialog básico con contenido de texto simple.</p>
      </g-dialog>
    </g-config-provider>
  `,
});

const ImageDialogTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose,
    };
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Imagen"
        append-to-body
        @close="handleClose"
      >
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
            />
        </template>
        <p>Este dialog muestra una imagen con un mensaje.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `,
});

const NoCloseButtonTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return { args, dialogVisible, handleClose };
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog sin Botón Cerrar</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Mensaje Importante"
        :show-close="false"
        append-to-body
        @close="handleClose"
      >
        <p class="text-center">Este dialog es un mensaje importante que requiere confirmación del usuario.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `,
});

const CustomWidthTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return { args, dialogVisible, handleClose };
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Ancho</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Ancho Personalizado"
        width="800"
        size-mode="fixed"
        append-to-body
        @close="handleClose"
      >
        <p>Este dialog tiene un ancho personalizado de 800px.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `,
});

// Agregar este template nuevo
const LargeImageTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return { args, dialogVisible, handleClose };
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen Grande</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog Adaptable"
        size-mode="adaptive"
        @close="handleClose"
        append-to-body
      >
        <template #image> 
          <img 
            src="https://placehold.co/800x600"
            alt="Imagen grande de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `,
});

export const Basic = BasicTemplate.bind({});
Basic.args = {
  title: "Dialog Básico",
  showClose: true,
};
Basic.parameters = {
  docs: {
    description: {
      story: "Dialog básico con contenido de texto y dos botones de acción.",
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Básico"
    :show-close="true"
    @close="handleClose"
  >
    <p>Este dialog básico con contenido de texto simple.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Aceptar</g-button>
        <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: "html",
      type: "auto",
    },
  },
};

export const WithImage = ImageDialogTemplate.bind({});
WithImage.args = {
  title: "Dialog con Imagen",
  showClose: true,
  sizeMode: "default",
  footerButtons: [
    {
      text: 'Aceptar',
      onClick: () => {},
      variant: 'primary'
    },
    {
      text: 'Cancelar',
      onClick: () => {},
      variant: 'secondary'
    }
  ]
};
WithImage.parameters = {
  docs: {
    description: {
      story: "Dialog con imagen y botones configurados mediante la prop footerButtons.",
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Imagen"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleConfirm,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/112x112"
        alt="Imagen"
      />
    </template>
    <p>Este dialog muestra una imagen con un mensaje.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
const handleConfirm = () => {
  dialogVisible.value = false;
};
</script>`,
    }
  }
};

export const NoCloseButton = NoCloseButtonTemplate.bind({});
NoCloseButton.args = {
  title: "Mensaje Importante",
  showClose: false,
  sizeMode: "default",
};
NoCloseButton.parameters = {
  docs: {
    description: {
      story: "Dialog sin botón de cerrar, con texto y un solo botón.",
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Mensaje Importante"
    :show-close="false"
    @close="handleClose"
  >
    <p>Este dialog solo se cierra con el botón de acción.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entiendo</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: "html",
      type: "auto",
    },
  },
};

export const CustomWidth = CustomWidthTemplate.bind({});
CustomWidth.args = {
  title: "Dialog con Ancho Personalizado",
  showClose: true,
  width: "800",
  sizeMode: "fixed",
};
CustomWidth.parameters = {
  docs: {
    description: {
      story: "Dialog con ancho personalizado definido a 800px.",
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Ancho Personalizado"
    width="800"
    size-mode="fixed"
    :show-close="true"
    @close="handleClose"
  >
    <p>Este dialog tiene un ancho personalizado de 800px.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Aceptar</g-button>
        <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: "html",
      type: "auto",
    },
  },
};

export const WithLargeImage = LargeImageTemplate.bind({});
WithLargeImage.args = {
  title: "Dialog Adaptable",
  showClose: true,
  sizeMode: "adaptive",
};
WithLargeImage.parameters = {
  docs: {
    description: {
      story: "Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable.",
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Adaptable"
    size-mode="adaptive"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/800x600"
        alt="Imagen grande de ejemplo"
        class="rounded"
      />
    </template>
    <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entendido</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: "html",
      type: "auto",
    },
  },
};
