import{_ as o}from"./radio-group-SuTIp1TG.js";import{G as t}from"./ConfigProvider-DfgpcNWx.js";import"./vue.esm-bundler-BWLFJ3YM.js";import"./index-CdJoONYj.js";import"./index-j6CJlXut.js";import"./castArray-B4BJdNV7.js";import"./error-Cq9Fpw4b.js";import"./index-BbqbSJR7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./event-BB_Ol6Sd.js";import"./index-lmL9CkRO.js";import"./use-form-common-props-0yetkxkH.js";import"./index-CDPhiV_6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={title:"Form/Radio/Single",component:o,parameters:{docs:{description:{component:`
Uso básico
Componente de selección única entre un grupo de opciones.

Ejemplo básico:
\`\`\`vue
<g-radio v-model="selected" label="Opción 1" value="1" />
\`\`\`
`}}},argTypes:{modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"string | number | boolean"},category:"Principales"}},label:{description:"Etiqueta visible del radio",control:"text",table:{category:"Principales",type:{summary:"string | number | boolean"}}},value:{description:"Valor único del radio",control:"object",table:{category:"Principales",type:{summary:"string | number | boolean"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"Atributo name nativo para agrupación",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite al actualizar la selección",table:{category:"Eventos",type:{summary:"string | number | boolean"}}},onChange:{description:"Se emite al cambiar la selección",table:{category:"Eventos",type:{summary:"string | number | boolean"}}},default:{description:"Slot para contenido personalizado para radio",table:{category:"Slots",type:{summary:"slot"}}}},args:{disabled:!1,label:"Etiqueta del radio",modelValue:!1,value:"valor-radio",name:"radio-group"}},i=(a,{argTypes:r})=>({props:Object.keys(r),components:{GRadio:o,GConfigProvider:t},setup(){return{args:a}},template:`
    <g-config-provider>
      <g-radio v-bind="args" v-model="args.modelValue" />
    </g-config-provider>
  `}),e=i.bind({});e.args={label:"Opción predeterminada"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: RadioProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GRadio,
    GConfigProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <g-config-provider>
      <g-radio v-bind="args" v-model="args.modelValue" />
    </g-config-provider>
  \`
})`,...e.parameters?.docs?.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,P as default};
