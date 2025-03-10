import { Meta, StoryObj } from '@storybook/vue3'
import { reactive, ref } from 'vue'

// COMPONENTS
import { GTag, TagInstance } from '../components/tag-2'

// CONFIG
import { GConfigProvider } from '../components/ConfigProvider'
import { generateIconOptions } from './IconFont.stories'

const meta = {
  title: 'Data/Tag2',
  component: GTag,
  parameters: {
    docs: {
      description: {
        component: `✨ \`GSelect\` - Componente de selección interactivo y personalizable
    
Un campo de selección moderno con funcionalidades avanzadas para formularios dinámicos. Ideal para integrar listas locales/remotas y manejar selecciones complejas.

> Este componente usa la versión \`2.9.3\` de Element Plus.

**Características principales:**

- Etiquetas flotantes: Diseño limpio que muestra la etiqueta sobre el campo al enfocar
- Validación integrada: Sistema de errores automatizado con mensajes personalizables
- Estado de error: Destaca campos inválidos con feedback visual inmediato
- Íconos prefix: Añade contexto visual con íconos personalizados al inicio del campo
- Texto de ayuda: Mensajes descriptivos bajo el campo para guiar al usuario
- Opciones personalizadas: Diseña plantillas únicas para cada ítem de la lista
- Búsqueda dinámica: Filtra opciones en tiempo real con buscador integrado
- Datos remotos: Carga opciones desde APIs externas con paginación opcional
- Selección múltiple: Permite elegir varios valores con tags removibles

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/b2b-ui-select
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/b2b-ui-tag
> - @flash-global66/b2b-ui-icon-font
> - element-plus/es/components/tooltip/index <span style="color: rgb(227 83 83);font-size: 13px;">(se necesita crear @flash-global66/b2b-ui-tooltip)</span>

📥 **Importación básica**

\`\`\`typescript
import { GSelect } from '@flash-global66/b2b-ui-select'
import '@flash-global66/b2b-ui-input/select.style.scss'

// tipos si son necesarios
import type { OptionType } from '@flash-global66/b2b-ui-select'
\`\`\`
`
      }
    }
  },
  argTypes: {
    size: {
      description: 'Tamaño del tag',
      control: 'select',
      options: ['xs', 'sm', 'md'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' }
      }
    },
    type: {
      description: 'Tipo de tag',
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'grey'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'grey' }
      }
    },
    effect: {
      description: 'Tema del tag',
      control: 'select',
      options: ['dark', 'light'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' }
      }
    },
    prefixIcon: {
      name: 'prefix-icon',
      description: 'Ícono al inicio del tag',
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    suffixIcon: {
      name: 'suffix-icon',
      description: 'Ícono al final del tag',
      control: 'select',
      options: ['', ...generateIconOptions()],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    text: {
      description: 'Texto a mostrar en el tag',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    closable: {
      description: 'Habilita el botón de cerrar',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disableTransitions: {
      description: 'Deshabilita las transiciones',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    close: {
      description: 'Evento emitido al cerrar',
      action: 'close',
      table: {
        type: { summary: 'Event', detail: '() => void' }
      }
    },
    click: {
      description: 'Evento emitido al hacer clic',
      action: 'click',
      table: {
        type: { summary: 'Event', detail: '() => void' }
      }
    },
    prefix: {
      description: 'slot para el inicio del tag',
      table: {
        type: { summary: 'slot' }
      },
      control: false
    },
    default: {
      description: 'slot para el contenido del tag',
      table: {
        type: { summary: 'slot' }
      },
      control: false
    },
    suffix: {
      description: 'slot para el final del tag',
      table: {
        type: { summary: 'slot' }
      },
      control: false
    }
  },
  args: {
    text: 'Etiqueta',
    size: 'sm',
    type: 'success',
    effect: 'light'
  }
}
export default meta
type Story = StoryObj<TagInstance>

export const Basic: Story = {
  name: 'Básico',
  render: (args) => ({
    components: { GTag, GConfigProvider },
    setup() {
      return { args }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-tag v-bind="args" />
        </div>
      </g-config-provider>
    `
  })
}

export const withAllProps: Story = {
  name: 'Personalizado de opciones con props',
  parameters: {
    docs: {
      description: {
        story: ` Este select es personalizado con opciones que incluyen íconos, descripciones y estados de deshabilitado.

- Muestra ícono y descripción
- Opciones deshabilitadas
- Búsqueda de opciones
- Largo de opciones personalizado`
      }
    }
  },
  render: () => ({
    components: { GTag, GConfigProvider },
    setup() {
      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

      const value = ref()
      const value2 = ref()
      const options = Array.from({ length: 1000 }).map((_, idx) => ({
        value: `Option ${idx + 1}`,
        title: `${initials[idx % 10]}${idx} - option ${idx + 1}`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim elementum, sagittis velit eu, feugiat sem. Sed lacinia tincidunt lacinia.`,
        icon: idx % 2 === 0 ? 'regular bolt' : 'regular user',
        disabled: idx % 3 === 0 && idx !== 0
      }))

      const aver = () => {
        console.log('aver')
      }

      return { value, options, value2, aver }
    },
    template: `
      <g-config-provider>
        <div class="flex flex-row gap-4 items-center flex-wrap">
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            text="prueba"
          />
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="success"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="success"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="success"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="info"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="info"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="info"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="warning"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="warning"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="warning"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="error"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="error"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="error"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="grey"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="grey"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="grey"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="success"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="success"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="success"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="info"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="info"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="info"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="warning"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="warning"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="md"
            type="warning"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="xs"
            type="error"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            size="sm"
            type="error"
            effect="dark"
          >
            cualquier cosa
          </g-tag>
          <g-tag
            prefix-icon="regular check"
            suffix-icon="regular check"
            :closable="true"
            size="md"
            type="error"
            effect="dark"
            @close="aver"
          >
            cualquier cosa
          </g-tag>
        </div>
      </g-config-provider>
    `
  })
}
