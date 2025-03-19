import{r as l}from"./vue.esm-bundler-BWLFJ3YM.js";import{_ as s}from"./checkbox-group-Df-2OPh6.js";import{G as d}from"./ConfigProvider-DfgpcNWx.js";import"./index-lmL9CkRO.js";import"./index-j6CJlXut.js";import"./event-BB_Ol6Sd.js";import"./index-CdJoONYj.js";import"./castArray-B4BJdNV7.js";import"./error-Cq9Fpw4b.js";import"./index-BbqbSJR7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./use-form-common-props-Bn6XiUqq.js";import"./constants-Dnj8X3EN.js";import"./index-CDPhiV_6.js";import"./isEqual-CqKdly6z.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const j={title:"Form/Checkbox/Single",component:s,parameters:{docs:{description:{component:`
El componente \`GCheckbox\` es un elemento de selección que permite activar o desactivar una opción.

### Instalación
\`\`\`bash
yarn add @flash-global66/b2b-ui-checkbox
\`\`\`

### Importación

\`\`\`typescript
import { GCheckbox } from '@flash-global66/b2b-ui-checkbox'
import '@flash-global66/b2b-ui-checkbox/checkbox.styles.scss'
\`\`\`

### Ejemplo básico:
\`\`\`html
<g-checkbox v-model="checked" label="Acepto los términos" />
\`\`\`
        `}}},argTypes:{modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"number | string | boolean"},category:"Principales"}},label:{description:"Etiqueta del checkbox cuando se usa dentro de un grupo",control:"text",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},value:{description:"Valor del checkbox cuando se usa dentro de un grupo",control:"object",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},trueValue:{description:"Valor cuando está activado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},falseValue:{description:"Valor cuando está desactivado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},indeterminate:{description:"Estado visual indeterminado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},checked:{description:"Indica si el checkbox está activado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"Atributo name nativo",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},id:{description:"ID nativo del input",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},tabindex:{description:"Orden de tabulación",control:"number",table:{category:"Atributos HTML",type:{summary:"string | number"}}},validateEvent:{description:"Activa la validación del formulario",control:"boolean",table:{category:"Validación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},ariaControls:{description:"ID de los elementos controlados (ARIA)",control:"text",table:{category:"Accesibilidad",type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite al actualizar el valor",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},onChange:{description:"Se emite al cambiar el estado",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},default:{description:"Slot personalizado para el contenido del checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{disabled:!1,indeterminate:!1,checked:!1,validateEvent:!0,label:"Etiqueta del checkbox",value:"Valor del checkbox",name:"checkbox-name",id:"checkbox-id"}},n=(t,{argTypes:c})=>({props:Object.keys(c),components:{GCheckbox:s,GConfigProvider:d},setup(){const i=l(t.modelValue);return{args:t,value:i}},template:`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  `}),e=n.bind({});e.args={label:"Default Checkbox",disabled:!1,indeterminate:!1,modelValue:!1};e.parameters={docs:{description:{story:"Checkbox básico en su estado inicial no seleccionado. Muestra la funcionalidad principal con una etiqueta estándar."}}};const o=n.bind({});o.args={...e.args,checked:!0};o.parameters={docs:{description:{story:"Checkbox en estado seleccionado. Ejemplo de uso con `v-model` vinculado a un valor verdadero. Ideal para mostrar opciones activadas por defecto."}}};const a=n.bind({});a.args={...e.args,disabled:!0};a.parameters={docs:{description:{story:"Checkbox deshabilitado no interactivo. Útil para estados donde la acción no está disponible temporalmente. Se combina con otros estados como checked o indeterminate."}}};const r=n.bind({});r.args={...e.args,indeterminate:!0};r.parameters={docs:{description:{story:"Estado visual indeterminado (ni chequeado ni deschequeado). Usado comúnmente en selecciones parciales o grupos con múltiples opciones. Requiere control programático."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: CheckboxProps, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    GCheckbox,
    GConfigProvider
  },
  setup() {
    const value = ref(args.modelValue);
    return {
      args,
      value
    };
  },
  template: \`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  \`
})`,...r.parameters?.docs?.source}}};const S=["Default","Checked","Disabled","Indeterminate"];export{o as Checked,e as Default,a as Disabled,r as Indeterminate,S as __namedExportsOrder,j as default};
