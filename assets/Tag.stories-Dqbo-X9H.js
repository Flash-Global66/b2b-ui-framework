import{a as w}from"./vue.esm-bundler-CH9yNyng.js";import{G as a}from"./index-CGK9l38B.js";import{G as n}from"./ConfigProvider-CVsr_Nb2.js";import{generateIconOptions as f}from"./IconFont.stories-f_hxKbOn.js";import"./Icon-B6M9nJHU.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Segmented-DXHoK6nA.js";import"./index-DFiBxbdY.js";import"./index-BccPGGIL.js";import"./event-BB_Ol6Sd.js";import"./index-EQ6ThY8V.js";import"./use-form-item-BSwEs_HW.js";import"./use-form-common-props-9nfe3vwH.js";import"./index-BrHHf138.js";import"./index-2dsPMYsa.js";import"./index-DxcuRkR-.js";import"./castArray-BN-XtI-Z.js";import"./_Uint8Array-D0cj8fVg.js";import"./_initCloneObject-CQteI-2K.js";import"./typescript-Bp3YSIOJ.js";import"./index-BervKESj.js";import"./index-DYzCgaMC.js";import"./index-ItzGEuCN.js";import"./Button-DXe_uWRw.js";const ae={title:"Data/Tag",component:a,parameters:{docs:{description:{component:`✨ \`GTag\` - Componente de etiqueta personalizable con íconos y opciones avanzadas.

> Este componente usa la versión \`2.9.5\` de Element Plus.

**Características principales:**

- Tamaños personalizables
- Tipos de etiqueta
- Temas de etiqueta
- Iconos personalizables
- Etiqueta cerrable
- Transiciones deshabilitables

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/b2b-ui-tag
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/b2b-ui-icon-font

📥 **Importación básica**

\`\`\`typescript
import { GTag } from '@flash-global66/b2b-ui-tag'
import '@flash-global66/b2b-ui-tag/tag.style.scss'
\`\`\`
`}}},argTypes:{size:{description:"Tamaño del tag",control:"select",options:["xs","sm","md"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"sm"}}},type:{description:"Tipo de tag",control:"select",options:["success","info","warning","error","grey"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"grey"}}},effect:{description:"Tema del tag",control:"select",options:["dark","light"],table:{category:"Apariencia",type:{summary:"string"},defaultValue:{summary:"light"}}},prefixIcon:{name:"prefix-icon",description:"Ícono al inicio del tag",control:"select",options:["",...f()],table:{category:"Iconos",type:{summary:"string"},defaultValue:{summary:"undefined"}}},suffixIcon:{name:"suffix-icon",description:"Ícono al final del tag",control:"select",options:["",...f()],table:{category:"Iconos",type:{summary:"string"},defaultValue:{summary:"undefined"}}},text:{description:"Texto a mostrar en el tag",control:"text",table:{category:"Contenido",type:{summary:"string"},defaultValue:{summary:"undefined"}}},closable:{description:"Habilita el botón de cerrar",control:"boolean",table:{category:"Comportamiento",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disableTransitions:{description:"Deshabilita las transiciones",control:"boolean",table:{category:"Comportamiento",type:{summary:"boolean"},defaultValue:{summary:"false"}}},close:{description:"Evento emitido al cerrar",action:"close",table:{category:"Métodos Expuestos",type:{summary:"Event",detail:"() => void"},defaultValue:{summary:"() => void"}},control:!1},click:{description:"Evento emitido al hacer clic",action:"click",table:{category:"Métodos Expuestos",type:{summary:"Event",detail:"() => void"},defaultValue:{summary:"() => void"}},control:!1},prefix:{description:"slot para el inicio del tag",table:{category:"Slots",type:{summary:"slot"}},control:!1},default:{description:"slot para el contenido del tag",table:{category:"Slots",type:{summary:"slot"}},control:!1},suffix:{description:"slot para el final del tag",table:{category:"Slots",type:{summary:"slot"}},control:!1}},args:{text:"Etiqueta",size:"sm",type:"success",effect:"light",prefixIcon:"",suffixIcon:"",closable:!1,disableTransitions:!1}},s={name:"Básico",render:t=>({components:{GTag:a,GConfigProvider:n},setup(){return{args:t}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-tag v-bind="args" />
        </div>
      </g-config-provider>
    `})},o={name:"Combinaciones de colores y tamaños",parameters:{docs:{description:{story:`Combinaciones de todos los colores y tamaños disponibles.

> - **📋 Nota**: Puedes copiar el código de cada tag haciendo clic en ellos.`}}},render:()=>({components:{GTag:a,GConfigProvider:n},setup(){return{state:w({types:["success","info","warning","error","grey"],sizes:["xs","sm","md"],effects:["dark","light"]}),copyTag:async(p,c,l)=>{const C=`<g-tag
  type="${p}"
  size="${c}"
  effect="${l}"
  text="Etiqueta"
  prefix-icon="solid check"
  suffix-icon="solid check"
/>`;try{await navigator.clipboard.writeText(C)}catch(E){console.error("Failed to copy: ",E)}}}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="effect in state.effects" :key="effect">
                <g-tag
                  :type="type"
                  :size="size"
                  :effect="effect"
                  text="Etiqueta"
                  prefix-icon="solid check"
                  suffix-icon="solid check"
                  @click="() => copyTag(type, size, effect)"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},i={name:"Banderas como slots al inicio y al final",parameters:{docs:{description:{story:"Banderas como slots al inicio y al final del tag."}}},render:()=>({components:{GTag:a,GConfigProvider:n},setup(){return{}},template:`
    <g-config-provider>
      <div class="flex flex-row gap-4">
        <g-tag
          type="success"
          size="sm"
          effect="light"
        >
          <template #prefix>
            <span class="w-3 h-3 rounded-full">
              <img src="https://flagcdn.com/co.svg" alt="Venezuela" class="w-3 h-3 rounded-full object-cover" />
            </span>
          </template>
          <template #default>COP</template>
        </g-tag>
        <g-tag
          type="info"
          size="sm"
          effect="light"
        >
          <template #default>USD</template>
          <template #suffix>
            <span class="w-3 h-3 rounded-full">
              <img src="https://flagcdn.com/us.svg" alt="Venezuela" class="w-3 h-3 rounded-full object-cover" />
            </span>
          </template>
        </g-tag>
      </div>
    </g-config-provider>`})},r={name:"Tags eliminables",parameters:{docs:{description:{story:"Tags que se pueden eliminar al hacer clic en el botón de cerrar."}}},render:()=>({components:{GTag:a,GConfigProvider:n},setup(){const t=[{text:"Tag 1",type:"warning",effect:"light"},{text:"Tag 2",type:"grey",effect:"light"},{text:"Tag 3",type:"success",effect:"light"},{text:"Tag 4",type:"info",effect:"light"},{text:"Tag 5",type:"error",effect:"light"},{text:"Tag 6",type:"warning",effect:"dark"},{text:"Tag 7",type:"grey",effect:"dark"},{text:"Tag 8",type:"success",effect:"dark"},{text:"Tag 9",type:"info",effect:"dark"},{text:"Tag 10",type:"error",effect:"dark"}],e=w([...t]);return{dynamicTags:e,handleClose:c=>{if(e.length===1){e.splice(-1,1,...t);return}e.splice(e.findIndex(l=>l.text===c),1)}}},template:`
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-tag
            v-for="(tag, index) in dynamicTags"
            :key="tag.text"
            :type="tag.type"
            :effect="tag.effect"
            :text="tag.text"
            :disable-transitions="false"
            closable
            @close="() => handleClose(tag.text)"
          />
        </div>
      </g-config-provider>
    `})};var d,g,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GTag,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-tag v-bind="args" />
        </div>
      </g-config-provider>
    \`
  })
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var y,u,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Combinaciones de colores y tamaños',
  parameters: {
    docs: {
      description: {
        story: \`Combinaciones de todos los colores y tamaños disponibles.

> - **📋 Nota**: Puedes copiar el código de cada tag haciendo clic en ellos.\`
      }
    }
  },
  render: () => ({
    components: {
      GTag,
      GConfigProvider
    },
    setup() {
      const state = reactive({
        types: ['success', 'info', 'warning', 'error', 'grey'],
        sizes: ['xs', 'sm', 'md'],
        effects: ['dark', 'light']
      });
      const copyTag = async (type: string, size: string, effect: string) => {
        const text = \`<g-tag
  type="\${type}"
  size="\${size}"
  effect="\${effect}"
  text="Etiqueta"
  prefix-icon="solid check"
  suffix-icon="solid check"
/>\`;
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      };
      return {
        state,
        copyTag
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div v-for="type in state.types" :key="type" class="flex flex-row gap-6 items-center justify-center">
            <div v-for="size in state.sizes" :key="size" class="flex flex-col gap-4">
              <div v-for="effect in state.effects" :key="effect">
                <g-tag
                  :type="type"
                  :size="size"
                  :effect="effect"
                  text="Etiqueta"
                  prefix-icon="solid check"
                  suffix-icon="solid check"
                  @click="() => copyTag(type, size, effect)"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,b,T;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Banderas como slots al inicio y al final',
  parameters: {
    docs: {
      description: {
        story: \`Banderas como slots al inicio y al final del tag.\`
      }
    }
  },
  render: () => ({
    components: {
      GTag,
      GConfigProvider
    },
    setup() {
      return {};
    },
    template: \`
    <g-config-provider>
      <div class="flex flex-row gap-4">
        <g-tag
          type="success"
          size="sm"
          effect="light"
        >
          <template #prefix>
            <span class="w-3 h-3 rounded-full">
              <img src="https://flagcdn.com/co.svg" alt="Venezuela" class="w-3 h-3 rounded-full object-cover" />
            </span>
          </template>
          <template #default>COP</template>
        </g-tag>
        <g-tag
          type="info"
          size="sm"
          effect="light"
        >
          <template #default>USD</template>
          <template #suffix>
            <span class="w-3 h-3 rounded-full">
              <img src="https://flagcdn.com/us.svg" alt="Venezuela" class="w-3 h-3 rounded-full object-cover" />
            </span>
          </template>
        </g-tag>
      </div>
    </g-config-provider>\`
  })
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var h,k,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Tags eliminables',
  parameters: {
    docs: {
      description: {
        story: \`Tags que se pueden eliminar al hacer clic en el botón de cerrar.\`
      }
    }
  },
  render: () => ({
    components: {
      GTag,
      GConfigProvider
    },
    setup() {
      const initTags = [{
        text: 'Tag 1',
        type: 'warning',
        effect: 'light'
      }, {
        text: 'Tag 2',
        type: 'grey',
        effect: 'light'
      }, {
        text: 'Tag 3',
        type: 'success',
        effect: 'light'
      }, {
        text: 'Tag 4',
        type: 'info',
        effect: 'light'
      }, {
        text: 'Tag 5',
        type: 'error',
        effect: 'light'
      }, {
        text: 'Tag 6',
        type: 'warning',
        effect: 'dark'
      }, {
        text: 'Tag 7',
        type: 'grey',
        effect: 'dark'
      }, {
        text: 'Tag 8',
        type: 'success',
        effect: 'dark'
      }, {
        text: 'Tag 9',
        type: 'info',
        effect: 'dark'
      }, {
        text: 'Tag 10',
        type: 'error',
        effect: 'dark'
      }];
      const dynamicTags = reactive([...initTags]);
      const handleClose = (tag: string) => {
        if (dynamicTags.length === 1) {
          dynamicTags.splice(-1, 1, ...initTags);
          return;
        }
        dynamicTags.splice(dynamicTags.findIndex(item => item.text === tag), 1);
      };
      return {
        dynamicTags,
        handleClose
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-row gap-4">
          <g-tag
            v-for="(tag, index) in dynamicTags"
            :key="tag.text"
            :type="tag.type"
            :effect="tag.effect"
            :text="tag.text"
            :disable-transitions="false"
            closable
            @close="() => handleClose(tag.text)"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const se=["Basic","allCombination","prefixAndSuffix","closableDynamic"];export{s as Basic,se as __namedExportsOrder,o as allCombination,r as closableDynamic,ae as default,i as prefixAndSuffix};
