import{f as s}from"./index-BZmkVB_o.js";import{_ as r}from"./Button-DXe_uWRw.js";import{generateIconOptions as c}from"./IconFont.stories-f_hxKbOn.js";import{a as l}from"./index-CRIi8hFt.js";import"./vue.esm-bundler-CH9yNyng.js";import"./ConfigProvider-CVsr_Nb2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./error-Cq9Fpw4b.js";import"./Icon-B6M9nJHU.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./index-BccPGGIL.js";import"./use-form-item-BSwEs_HW.js";import"./Segmented-DXHoK6nA.js";import"./index-DFiBxbdY.js";import"./event-BB_Ol6Sd.js";import"./index-EQ6ThY8V.js";import"./use-form-common-props-9nfe3vwH.js";import"./index-BrHHf138.js";import"./index-2dsPMYsa.js";import"./index-DxcuRkR-.js";import"./castArray-BN-XtI-Z.js";import"./_Uint8Array-D0cj8fVg.js";import"./_initCloneObject-CQteI-2K.js";import"./typescript-Bp3YSIOJ.js";import"./index-BervKESj.js";import"./index-DYzCgaMC.js";import"./index-ItzGEuCN.js";const et={title:"Basic/Button",component:r,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-button variant="primary" title="Primary Button"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Variante visual del botón",table:{type:{summary:"string"},category:"Principales"}},title:{control:"text",description:"Texto del botón (preferencia sobre el slot)",table:{category:"Principales",type:{summary:"string"},defaultValue:{summary:"Button Text"}}},typeNative:{control:"select",options:["button","submit","reset"],description:"Tipo nativo del botón HTML",table:{type:{summary:"string"},defaultValue:{summary:"button"},category:"Comportamiento"}},disabled:{control:"boolean",description:"Deshabilita el botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},loading:{control:"boolean",description:"Muestra estado de carga",table:{category:"Comportamiento",type:{summary:"boolean"}}},iconLeft:{control:"select",options:c(),description:`Icono izquierdo renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},iconRight:{control:"select",options:c(),description:`Icono derecho renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid arrow-right'`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},full:{control:"boolean",description:"Botón de ancho completo",table:{category:"Layout",type:{summary:"boolean"}}},ariaLabel:{control:"text",description:"Etiqueta accesible para el botón",table:{category:"Accesibilidad",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el botón. No se dispara si el botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el botón del mouse. No se dispara si el botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},default:{constrol:"text",description:"Slot por defecto del botón",table:{category:"Slots",type:{summary:"string | Component"}}},"Deprecated Info":{table:{category:"Deprecated",order:999},description:"⚠️ Las props 'size', 'type' y 'color' estan deprecadas . Utilizar prop 'variant'."}}},i=B=>({components:{GButton:r},setup(){return{args:B,onClick:s(l("click")),onMousedown:s(l("mousedown"))}},template:`
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
  `});var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,f;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => ({
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
})`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,E,w;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
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
})`,...(w=(E=a.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const nt=["Primary","Secondary","Tertiary","States","WithIcons"];export{t as Primary,o as Secondary,n as States,e as Tertiary,a as WithIcons,nt as __namedExportsOrder,et as default};
