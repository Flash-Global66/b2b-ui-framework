import{f as s}from"./index-imBTNTrX.js";import{_ as r}from"./Button-1XQhNvEa.js";import{generateIconOptions as c}from"./IconFont.stories-DEMKnYib.js";import{a as l}from"./index-CM9FzEWq.js";import"./vue.esm-bundler-BWLFJ3YM.js";import"./ConfigProvider-DfgpcNWx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./Icon-XKrN76pS.js";import"./index.es-C8evZRbd.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./index-CdJoONYj.js";import"./index-j6CJlXut.js";import"./castArray-B4BJdNV7.js";import"./index-BbqbSJR7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./Segmented-B6TxAPfg.js";import"./index-Clbg1Cmp.js";import"./event-BB_Ol6Sd.js";import"./index-lmL9CkRO.js";import"./use-form-common-props-Bn6XiUqq.js";import"./constants-Dnj8X3EN.js";import"./index-CDPhiV_6.js";import"./use-form-common-props-0yetkxkH.js";import"./index-Dhja97U_.js";import"./typescript-Bp3YSIOJ.js";import"./index-GlymeP5r.js";import"./index-C63O9-vN.js";import"./index-BjLWKBtf.js";const O={title:"Basic/Button",component:r,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-button variant="primary" title="Primary Button"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Variante visual del botón",table:{type:{summary:"string"},category:"Principales"}},title:{control:"text",description:"Texto del botón (preferencia sobre el slot)",table:{category:"Principales",type:{summary:"string"},defaultValue:{summary:"Button Text"}}},typeNative:{control:"select",options:["button","submit","reset"],description:"Tipo nativo del botón HTML",table:{type:{summary:"string"},defaultValue:{summary:"button"},category:"Comportamiento"}},disabled:{control:"boolean",description:"Deshabilita el botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Muestra estado de carga",table:{category:"Comportamiento",type:{summary:"boolean"}}},iconLeft:{control:"select",options:c(),description:`Icono izquierdo renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},iconRight:{control:"select",options:c(),description:`Icono derecho renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid arrow-right'`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},full:{control:"boolean",description:"Botón de ancho completo",table:{category:"Layout",type:{summary:"boolean"}}},ariaLabel:{control:"text",description:"Etiqueta accesible para el botón",table:{category:"Accesibilidad",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el botón. No se dispara si el botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el botón del mouse. No se dispara si el botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},default:{constrol:"text",description:"Slot por defecto del botón",table:{category:"Slots",type:{summary:"string | Component"}}},"Deprecated Info":{table:{category:"Deprecated",order:999},description:"⚠️ Las props 'size', 'type' y 'color' estan deprecadas . Utilizar prop 'variant'."}}},i=d=>({components:{GButton:r},setup(){return{args:d,onClick:s(l("click")),onMousedown:s(l("mousedown"))}},template:`
    <g-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `}),t=i.bind({});t.args={variant:"primary",title:"Primary Button"};const o=i.bind({});o.args={variant:"secondary",title:"Secondary Button"};const e=i.bind({});e.args={variant:"tertiary",title:"Tertiary Button"};const n=()=>({components:{GButton:r},template:`
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
  `}),a=()=>({components:{GButton:r},template:`
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones con Iconos</h3>
        <div class="flex gap-4">
          <g-button 
            variant="primary"
            title="Icono Izquierdo"
            icon-left="solid chevron-left"
          />
          
          <g-button 
            variant="primary"
            title="Icono Derecho"
            icon-right="solid chevron-right"
          />

          <g-button 
            variant="primary"
            title="Ambos Iconos"
            icon-left="solid chevron-left"
            icon-right="solid chevron-right"
          />
        </div>
      </div>
  `});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButton
  },
  setup() {
    return {
      args,
      onClick: fn(action('click')),
      onMousedown: fn(action('mousedown'))
    };
  },
  template: \`
    <g-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButton
  },
  setup() {
    return {
      args,
      onClick: fn(action('click')),
      onMousedown: fn(action('mousedown'))
    };
  },
  template: \`
    <g-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GButton
  },
  setup() {
    return {
      args,
      onClick: fn(action('click')),
      onMousedown: fn(action('mousedown'))
    };
  },
  template: \`
    <g-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GButton
  },
  template: \`
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
  \`
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GButton
  },
  template: \`
      <div class="space-y-2">
        <h3 class="text-lg font-bold">Botones con Iconos</h3>
        <div class="flex gap-4">
          <g-button 
            variant="primary"
            title="Icono Izquierdo"
            icon-left="solid chevron-left"
          />
          
          <g-button 
            variant="primary"
            title="Icono Derecho"
            icon-right="solid chevron-right"
          />

          <g-button 
            variant="primary"
            title="Ambos Iconos"
            icon-left="solid chevron-left"
            icon-right="solid chevron-right"
          />
        </div>
      </div>
  \`
})`,...a.parameters?.docs?.source}}};const U=["Primary","Secondary","Tertiary","States","WithIcons"];export{t as Primary,o as Secondary,n as States,e as Tertiary,a as WithIcons,U as __namedExportsOrder,O as default};
