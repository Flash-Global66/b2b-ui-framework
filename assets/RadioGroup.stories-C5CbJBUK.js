import{r as l}from"./vue.esm-bundler-BWLFJ3YM.js";import{a as t,_ as n}from"./radio-group-SuTIp1TG.js";import{G as d}from"./ConfigProvider-DfgpcNWx.js";import"./index-CdJoONYj.js";import"./index-j6CJlXut.js";import"./castArray-B4BJdNV7.js";import"./error-Cq9Fpw4b.js";import"./index-BbqbSJR7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./event-BB_Ol6Sd.js";import"./index-lmL9CkRO.js";import"./use-form-common-props-0yetkxkH.js";import"./index-CDPhiV_6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Form/Radio/Group",component:t,parameters:{docs:{description:{component:`
### Uso básico
Grupo de radios que permite selección única con validación. Los radios puedesn agregarse como hijos usando slots 
o mediante la propiedad \`options\`.

Ejemplo con slots:
\`\`\`vue
<g-radio-group 
  v-bind="args"
  v-model="selectedValue"
>
  <g-radio label="Importaciones" value="ValueA" />
  <g-radio label="Inversiones" value="ValueB" />
</g-radio-group>
\`\`\`

Ejemplo con opciones predefinidas:
\`\`\`vue
<g-radio-group
  v-bind="args"
  v-model="selectedValue"
  :options="options"
/>
\`\`\`
        `}}},argTypes:{disabled:{description:"Deshabilita todo el grupo",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Estados"}},layout:{description:"Diseño del grupo",control:"select",options:["horizontal","vertical"],table:{type:{summary:"layoutType",detail:"'horizontal' | 'vertical'"},defaultValue:{summary:"horizontal"},category:"Apariencia"}},options:{description:"Array de opciones para construir el grupo de checkboxes",control:"object",table:{type:{summary:"Option[]",detail:`
          type Option = {
value: string | number | boolean
label?: string | number
disabled?: boolean
}
        `},defaultValue:{summary:"[]"},category:"Principales"}},modelValue:{description:"Valor seleccionado (v-model)",control:"text",table:{type:{summary:"string | number | boolean"},category:"Principales"}},name:{description:"Atributo name para agrupar los radios",control:"text",table:{type:{summary:"string"},category:"Validación"}},validateEvent:{description:"Activa validación de formulario",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Validación"}},ariaLabel:{description:"Etiqueta ARIA para el grupo",control:"text",table:{type:{summary:"string"},category:"Accesibilidad"}},id:{description:"ID HTML nativo",control:"text",table:{type:{summary:"string"},category:"Accesibilidad"}},default:{description:"Slot para contenido personalizado de cada checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{options:[],modelValue:"",disabled:!1,layout:"horizontal",validateEvent:!0,name:"radio-group",ariaLabel:"Grupo de opciones exclusivas",id:"custom-radio-group"}},r={render:i=>({components:{GRadioGroup:t,GRadio:n,GConfigProvider:d},setup(){const s=l("Value B");return{args:i,selectedValue:s,options:[{value:"Value A",label:"Importaciones"},{value:"Value B",label:"Inversiones"},{value:"Value C",label:"Exportaciones"},{value:"Value D",label:"Transferencias",disabled:!0},{value:"Value E",label:"Otros"}]}},template:`
    <g-config-provider>
      <g-radio-group 
        v-bind="args"
        v-model="selectedValue"
        :options="options"
      />
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valor seleccionado: {{ selectedValue }}
      </div>
    `})},e={...r,args:{},parameters:{docs:{description:{story:"Grupo básico de radios con selección única. Muestra el funcionamiento básico del v-model con valores string."}}}},o={...r,args:{disabled:!0,modelValue:"ValueA"},parameters:{docs:{description:{story:"Grupo completo deshabilitado. Todos los radios están no interactivos excepto los que tienen disabled individual."}}}},a={...r,args:{layout:"vertical"},parameters:{docs:{description:{story:"Radios apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Grupo básico de radios con selección única. Muestra el funcionamiento básico del v-model con valores string.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true,
    modelValue: 'ValueA'
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo completo deshabilitado. Todos los radios están no interactivos excepto los que tienen disabled individual.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Radios apilados verticalmente. Controlado mediante la propiedad \`layout: vertical\`. Ideal para formularios con espacio vertical limitado.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const _=["Basic","DisabledGroup","VerticalLayout"];export{e as Basic,o as DisabledGroup,a as VerticalLayout,_ as __namedExportsOrder,I as default};
