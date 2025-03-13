import{r as y}from"./vue.esm-bundler-CH9yNyng.js";import{a as m,_ as v}from"./radio-group-LIMPpzwB.js";import{G as V}from"./ConfigProvider-CVsr_Nb2.js";import"./event-BB_Ol6Sd.js";import"./index-EQ6ThY8V.js";import"./use-form-common-props-9nfe3vwH.js";import"./use-form-item-BSwEs_HW.js";import"./index-BrHHf138.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R={title:"Form/Radio/Group",component:m,parameters:{docs:{description:{component:`
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
        `},defaultValue:{summary:"[]"},category:"Principales"}},modelValue:{description:"Valor seleccionado (v-model)",control:"text",table:{type:{summary:"string | number | boolean"},category:"Principales"}},name:{description:"Atributo name para agrupar los radios",control:"text",table:{type:{summary:"string"},category:"Validación"}},validateEvent:{description:"Activa validación de formulario",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Validación"}},ariaLabel:{description:"Etiqueta ARIA para el grupo",control:"text",table:{type:{summary:"string"},category:"Accesibilidad"}},id:{description:"ID HTML nativo",control:"text",table:{type:{summary:"string"},category:"Accesibilidad"}},default:{description:"Slot para contenido personalizado de cada checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{options:[],modelValue:"",disabled:!1,layout:"horizontal",validateEvent:!0,name:"radio-group",ariaLabel:"Grupo de opciones exclusivas",id:"custom-radio-group"}},r={render:b=>({components:{GRadioGroup:m,GRadio:v,GConfigProvider:V},setup(){const g=y("Value B");return{args:b,selectedValue:g,options:[{value:"Value A",label:"Importaciones"},{value:"Value B",label:"Inversiones"},{value:"Value C",label:"Exportaciones"},{value:"Value D",label:"Transferencias",disabled:!0},{value:"Value E",label:"Otros"}]}},template:`
    <g-config-provider>
      <g-radio-group 
        v-bind="args"
        v-model="selectedValue"
        :options="options"
      />
      <div class="text-3 text-primary-txt font-medium mt-5">
        Valor seleccionado: {{ selectedValue }}
      </div>
    `})},e={...r,args:{},parameters:{docs:{description:{story:"Grupo básico de radios con selección única. Muestra el funcionamiento básico del v-model con valores string."}}}},o={...r,args:{disabled:!0,modelValue:"ValueA"},parameters:{docs:{description:{story:"Grupo completo deshabilitado. Todos los radios están no interactivos excepto los que tienen disabled individual."}}}},a={...r,args:{layout:"vertical"},parameters:{docs:{description:{story:"Radios apilados verticalmente. Controlado mediante la propiedad `layout: vertical`. Ideal para formularios con espacio vertical limitado."}}}};var t,i,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Grupo básico de radios con selección única. Muestra el funcionamiento básico del v-model con valores string.'
      }
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,n,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const z=["Basic","DisabledGroup","VerticalLayout"];export{e as Basic,o as DisabledGroup,a as VerticalLayout,z as __namedExportsOrder,R as default};
