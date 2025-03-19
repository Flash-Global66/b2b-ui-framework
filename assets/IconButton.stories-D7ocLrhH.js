import{f as _}from"./index-imBTNTrX.js";import{b as C,r as w,c as m,l as P,B as z,C as E,S as D,u as s,Y as R,n as k,T as S,p as V,J as x,Z as T,m as M,K as $,L as F,O as A}from"./vue.esm-bundler-BWLFJ3YM.js";import{o as G,m as j,l as L}from"./ConfigProvider-DfgpcNWx.js";import{d as h}from"./error-Cq9Fpw4b.js";import{_ as O}from"./Icon-XKrN76pS.js";import{u as K}from"./index-BbqbSJR7.js";import{u as Y}from"./use-form-item-C_lH8tdx.js";import{generateIconOptions as q}from"./IconFont.stories-DEMKnYib.js";import{a as N}from"./index-CM9FzEWq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-C8evZRbd.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./constants-Dnj8X3EN.js";import"./index-j6CJlXut.js";import"./Segmented-B6TxAPfg.js";import"./index-CdJoONYj.js";import"./castArray-B4BJdNV7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./index-Clbg1Cmp.js";import"./event-BB_Ol6Sd.js";import"./index-lmL9CkRO.js";import"./use-form-common-props-Bn6XiUqq.js";import"./index-CDPhiV_6.js";import"./use-form-common-props-0yetkxkH.js";import"./index-Dhja97U_.js";import"./typescript-Bp3YSIOJ.js";import"./index-GlymeP5r.js";import"./index-C63O9-vN.js";import"./index-BjLWKBtf.js";import"./Button-1XQhNvEa.js";const H=G({disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:void 0},download:{type:String,default:void 0},variant:{type:String,default:"grey"},icon:{type:String,default:"solid check"},size:{type:String,default:"medium"},border:{type:Boolean,default:!1}}),J={click:e=>e instanceof MouseEvent,mousedown:e=>e instanceof MouseEvent};function U(e){const t=["grey","black","blue"];(!C(e.variant)||!t.includes(e.variant))&&h("Icon Button",`Invalid prop "variant": expected one of ${t.join(", ")}, but received "${e.variant}".`),j(e.disabled)||h("Button",`Invalid prop "disabled": expected a boolean, but received "${typeof e.disabled}".`),e.icon&&!C(e.icon)&&h("Icon Button",`Invalid prop "icon": expected a string for icon name, but received "${typeof e.icon}".`)}const W=e=>{const t=w([]);let o=0;const p=r=>{if(e())return;const u=r.currentTarget.getBoundingClientRect(),d=r.clientX-u.left,a=r.clientY-u.top;o++;const i={id:o,x:d,y:a};t.value.push(i),K(()=>c(i.id),700)},c=r=>{t.value=t.value.filter(l=>l.id!==r)};return{ripples:t,handleRipple:p,removeRipple:c}},X=(e,t)=>{const o=m(()=>e.disabled),p=w();Y();const{ripples:c,handleRipple:r,removeRipple:l}=W(()=>o.value),u=m(()=>e.href?"a":"button"),d=m(()=>e.href?{}:{disabled:o.value,autofocus:e.autofocus}),a=m(()=>({...d.value,"aria-disabled":e.disabled,role:e.href?"link":"button",...e.href?{href:e.href,target:e.target,download:e.download}:{autofocus:e.autofocus},onClick:i,onMousedown:y,onPointerdown:r,onKeydown:[n=>n.key===" "&&(n.preventDefault(),i(n)),n=>n.key==="Enter"&&(n.preventDefault(),i(n))]})),i=n=>{if(o.value){n.preventDefault(),n.stopPropagation();return}t("click",n)},y=n=>{if(o.value){n.preventDefault();return}t("mousedown",n)};return{_ref:p,_disabled:o,_props:d,handleClick:i,handleMouseDown:y,ripples:c,handleRipple:r,removeRipple:l,componentId:u,allAttrs:a}},Z={class:"hover-effect"},Q=["onAnimationend"],B=P({__name:"IconButton",props:H,emits:J,setup(e,{emit:t}){const o=e,p=t;U(o);const{_ref:c,componentId:r,ripples:l,removeRipple:u,allAttrs:d}=X(o,p),a=L("icon-button",w("gui")),i=m(()=>[o.variant&&a.m(`variant-${o.variant}`),o.size&&a.m(o.size),o.border&&a.m("border")]),y=m(()=>[a.b(),...i.value,a.is("disabled",o.disabled),a.is("href",!!o.href)].flat().filter(Boolean));return(n,ee)=>(k(),z(R(s(r)),D({ref_key:"_ref",ref:c},s(d),{class:y.value}),{default:E(()=>[S(s(O),{name:n.icon,class:x(s(a).e("icon"))},null,8,["name","class"]),V("span",Z,[S(T,{name:"ripple"},{default:E(()=>[(k(!0),M($,null,F(s(l),v=>(k(),M("div",{key:v.id,class:x(s(a).e("ripple")),style:A({left:v.x+"px",top:v.y+"px"}),onAnimationend:oe=>s(u)(v.id)},null,46,Q))),128))]),_:1})])]),_:1},16,["class"]))}});B.__docgenInfo={exportName:"default",displayName:"IconButton",description:"",tags:{},sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/IconButton/src/IconButton.vue"]};const Ve={title:"Basic/Icon Button",component:B,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-icon-button variant="grey" icon="solid check"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Variante tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Deshabilita el icono botón",table:{type:{summary:"boolean"},category:"Principales"}},icon:{control:"select",options:q(),description:`Icono renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el icono botón. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el icono botón del mouse. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}}}},I=e=>({components:{GIconButton:B},setup(){return{args:e,onClick:_(N("click")),onMousedown:_(N("mousedown"))}},template:`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `}),f=I.bind({});f.args={variant:"grey"};const b=I.bind({});b.args={variant:"black"};const g=I.bind({});g.args={variant:"blue"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GIconButton
  },
  setup() {
    return {
      args,
      onClick: fn(action("click")),
      onMousedown: fn(action("mousedown"))
    };
  },
  template: \`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  \`
})`,...g.parameters?.docs?.source}}};const Te=["grey","black","blue"];export{Te as __namedExportsOrder,b as black,g as blue,Ve as default,f as grey};
