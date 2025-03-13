import{f as _}from"./index-BZmkVB_o.js";import{b as C,r as w,d as m,l as G,z as j,A as E,S as K,u as s,Y as L,n as k,T as S,p as O,I as x,Z as Y,m as M,J as q,K as H,M as J}from"./vue.esm-bundler-CH9yNyng.js";import{o as U,m as W,l as X}from"./ConfigProvider-CVsr_Nb2.js";import{d as h}from"./error-Cq9Fpw4b.js";import{_ as Z}from"./Icon-B6M9nJHU.js";import{u as Q}from"./index-BccPGGIL.js";import{c as ee}from"./use-form-item-BSwEs_HW.js";import{generateIconOptions as oe}from"./IconFont.stories-f_hxKbOn.js";import{a as N}from"./index-CRIi8hFt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./Segmented-DXHoK6nA.js";import"./index-DFiBxbdY.js";import"./event-BB_Ol6Sd.js";import"./index-EQ6ThY8V.js";import"./use-form-common-props-9nfe3vwH.js";import"./index-BrHHf138.js";import"./index-2dsPMYsa.js";import"./index-DxcuRkR-.js";import"./castArray-BN-XtI-Z.js";import"./_Uint8Array-D0cj8fVg.js";import"./_initCloneObject-CQteI-2K.js";import"./typescript-Bp3YSIOJ.js";import"./index-BervKESj.js";import"./index-DYzCgaMC.js";import"./index-ItzGEuCN.js";import"./Button-DXe_uWRw.js";const ne=U({disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:void 0},download:{type:String,default:void 0},variant:{type:String,default:"grey"},icon:{type:String,default:"solid check"},size:{type:String,default:"medium"},border:{type:Boolean,default:!1}}),te={click:e=>e instanceof MouseEvent,mousedown:e=>e instanceof MouseEvent};function ae(e){const t=["grey","black","blue"];(!C(e.variant)||!t.includes(e.variant))&&h("Icon Button",`Invalid prop "variant": expected one of ${t.join(", ")}, but received "${e.variant}".`),W(e.disabled)||h("Button",`Invalid prop "disabled": expected a boolean, but received "${typeof e.disabled}".`),e.icon&&!C(e.icon)&&h("Icon Button",`Invalid prop "icon": expected a string for icon name, but received "${typeof e.icon}".`)}const re=e=>{const t=w([]);let o=0;const p=r=>{if(e())return;const u=r.currentTarget.getBoundingClientRect(),d=r.clientX-u.left,a=r.clientY-u.top;o++;const i={id:o,x:d,y:a};t.value.push(i),Q(()=>c(i.id),700)},c=r=>{t.value=t.value.filter(l=>l.id!==r)};return{ripples:t,handleRipple:p,removeRipple:c}},ie=(e,t)=>{const o=m(()=>e.disabled),p=w();ee();const{ripples:c,handleRipple:r,removeRipple:l}=re(()=>o.value),u=m(()=>e.href?"a":"button"),d=m(()=>e.href?{}:{disabled:o.value,autofocus:e.autofocus}),a=m(()=>({...d.value,"aria-disabled":e.disabled,role:e.href?"link":"button",...e.href?{href:e.href,target:e.target,download:e.download}:{autofocus:e.autofocus},onClick:i,onMousedown:y,onPointerdown:r,onKeydown:[n=>n.key===" "&&(n.preventDefault(),i(n)),n=>n.key==="Enter"&&(n.preventDefault(),i(n))]})),i=n=>{if(o.value){n.preventDefault(),n.stopPropagation();return}t("click",n)},y=n=>{if(o.value){n.preventDefault();return}t("mousedown",n)};return{_ref:p,_disabled:o,_props:d,handleClick:i,handleMouseDown:y,ripples:c,handleRipple:r,removeRipple:l,componentId:u,allAttrs:a}},se={class:"hover-effect"},ce=["onAnimationend"],B=G({__name:"IconButton",props:ne,emits:te,setup(e,{emit:t}){const o=e,p=t;ae(o);const{_ref:c,componentId:r,ripples:l,removeRipple:u,allAttrs:d}=ie(o,p),a=X("icon-button",w("gui")),i=m(()=>[o.variant&&a.m(`variant-${o.variant}`),o.size&&a.m(o.size),o.border&&a.m("border")]),y=m(()=>[a.b(),...i.value,a.is("disabled",o.disabled),a.is("href",!!o.href)].flat().filter(Boolean));return(n,le)=>(k(),j(L(s(r)),K({ref_key:"_ref",ref:c},s(d),{class:y.value}),{default:E(()=>[S(s(Z),{name:n.icon,class:x(s(a).e("icon"))},null,8,["name","class"]),O("span",se,[S(Y,{name:"ripple"},{default:E(()=>[(k(!0),M(q,null,H(s(l),v=>(k(),M("div",{key:v.id,class:x(s(a).e("ripple")),style:J({left:v.x+"px",top:v.y+"px"}),onAnimationend:ue=>s(u)(v.id)},null,46,ce))),128))]),_:1})])]),_:1},16,["class"]))}});B.__docgenInfo={exportName:"default",displayName:"IconButton",description:"",tags:{},sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/IconButton/src/IconButton.vue"]};const je={title:"Basic/Icon Button",component:B,parameters:{docs:{description:{component:'\n### Uso básico\nEjemplo de uso básico:\n``` vue\n<g-icon-button variant="grey" name="solid check"/>\n```\n        '}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Variante tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Deshabilita el icono botón",table:{type:{summary:"boolean"},category:"Principales"}},icon:{control:"select",options:oe(),description:`Icono renderizado utilizando el componente IconFont.

Ver [IconFont](/?path=/docs/basic-iconfont--docs) para los iconos disponibles.

Ejemplo 'solid check''`,table:{type:{summary:"Iconos"},defaultValue:{summary:""}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:`Especifica que el elemento se descargará cuando el usuario haga clic en el enlace.

 ⚠️ **Nota:**  Solo funciona si la propiedad href está definida.`,table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},onClick:{description:"Se dispara al hacer clic en el icono botón. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},onMousedown:{description:"Se dispara cuando se presiona el icono botón del mouse. No se dispara si el icono botón está deshabilitado.",table:{category:"Events",type:{summary:"(event: Event) => void"}}},default:{constrol:"text",description:"Slot por defecto del icono botón",table:{category:"Slots",type:{summary:"string | Component"}}}}},I=e=>({components:{GIconButton:B},setup(){return{args:e,onClick:_(N("click")),onMousedown:_(N("mousedown"))}},template:`
    <g-icon-button 
      v-bind="args" 
      @click="onClick" 
      @mousedown="onMousedown"
    />
  `}),f=I.bind({});f.args={variant:"grey"};const b=I.bind({});b.args={variant:"black"};const g=I.bind({});g.args={variant:"blue"};var z,P,D;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var R,V,T;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(T=(V=b.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var $,A,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Ke=["grey","black","blue"];export{Ke as __namedExportsOrder,b as black,g as blue,je as default,f as grey};
