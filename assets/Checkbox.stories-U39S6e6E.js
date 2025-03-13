import{r as x}from"./vue.esm-bundler-CH9yNyng.js";import{_ as h}from"./checkbox-group-BrCVunAU.js";import{G as C}from"./ConfigProvider-CVsr_Nb2.js";import"./index-EQ6ThY8V.js";import"./event-BB_Ol6Sd.js";import"./use-form-common-props-9nfe3vwH.js";import"./use-form-item-BSwEs_HW.js";import"./index-BrHHf138.js";import"./error-Cq9Fpw4b.js";import"./isEqual-Bvtq4mIv.js";import"./_Uint8Array-D0cj8fVg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={title:"Form/Checkbox/Single",component:h,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{modelValue:{description:"Valor del modelo (v-model)",table:{type:{summary:"number | string | boolean"},category:"Principales"}},label:{description:"Etiqueta del checkbox cuando se usa dentro de un grupo",control:"text",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},value:{description:"Valor del checkbox cuando se usa dentro de un grupo",control:"object",table:{category:"Principales",type:{summary:"string | boolean | number | object"}}},trueValue:{description:"Valor cuando está activado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},falseValue:{description:"Valor cuando está desactivado",control:"text",table:{category:"Valores",type:{summary:"string | number"}}},indeterminate:{description:"Estado visual indeterminado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},checked:{description:"Indica si el checkbox está activado",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"Atributo name nativo",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},id:{description:"ID nativo del input",control:"text",table:{category:"Atributos HTML",type:{summary:"string"}}},tabindex:{description:"Orden de tabulación",control:"number",table:{category:"Atributos HTML",type:{summary:"string | number"}}},validateEvent:{description:"Activa la validación del formulario",control:"boolean",table:{category:"Validación",type:{summary:"boolean"},defaultValue:{summary:"true"}}},ariaControls:{description:"ID de los elementos controlados (ARIA)",control:"text",table:{category:"Accesibilidad",type:{summary:"string"}}},"onUpdate:modelValue":{description:"Se emite al actualizar el valor",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},onChange:{description:"Se emite al cambiar el estado",table:{category:"Eventos",type:{summary:"number | string | boolean"}}},default:{description:"Slot personalizado para el contenido del checkbox",table:{category:"Slots",type:{summary:"slot"}}}},args:{disabled:!1,indeterminate:!1,checked:!1,validateEvent:!0,label:"Etiqueta del checkbox",value:"Valor del checkbox",name:"checkbox-name",id:"checkbox-id"}},n=(t,{argTypes:f})=>({props:Object.keys(f),components:{GCheckbox:h,GConfigProvider:C},setup(){const k=x(t.modelValue);return{args:t,value:k}},template:`
    <g-config-provider>
      <g-checkbox
        v-bind="args"
        v-model="value"
      />
    </g-config-provider>
  `}),e=n.bind({});e.args={label:"Default Checkbox",disabled:!1,indeterminate:!1,modelValue:!1};e.parameters={docs:{description:{story:"Checkbox básico en su estado inicial no seleccionado. Muestra la funcionalidad principal con una etiqueta estándar."}}};const o=n.bind({});o.args={...e.args,checked:!0};o.parameters={docs:{description:{story:"Checkbox en estado seleccionado. Ejemplo de uso con `v-model` vinculado a un valor verdadero. Ideal para mostrar opciones activadas por defecto."}}};const a=n.bind({});a.args={...e.args,disabled:!0};a.parameters={docs:{description:{story:"Checkbox deshabilitado no interactivo. Útil para estados donde la acción no está disponible temporalmente. Se combina con otros estados como checked o indeterminate."}}};const r=n.bind({});r.args={...e.args,indeterminate:!0};r.parameters={docs:{description:{story:"Estado visual indeterminado (ni chequeado ni deschequeado). Usado comúnmente en selecciones parciales o grupos con múltiples opciones. Requiere control programático."}}};var s,c,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: CheckboxProps, {
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
})`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`(args: CheckboxProps, {
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
})`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: CheckboxProps, {
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
})`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,y,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(args: CheckboxProps, {
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
})`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const M=["Default","Checked","Disabled","Indeterminate"];export{o as Checked,e as Default,a as Disabled,r as Indeterminate,M as __namedExportsOrder,_ as default};
