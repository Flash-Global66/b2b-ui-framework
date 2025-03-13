import{o as ue,e as Co,V as ye,r as m,l as se,w as ae,u as n,R as ve,b as yo,W as no,E as P,z as ce,n as I,a4 as ho,T as le,x as Do,g as Eo,d as M,f as xe,m as q,H as K,p as te,I as S,L as ke,J as xo,K as ko,A as _,O as Vo,M as so,U as Ao,_ as wo,S as To,aa as Bo,$ as Fo}from"./vue.esm-bundler-CH9yNyng.js";import{j as Ve,A as So,o as ge,h as ne,w as Io,l as io,m as Po,J as Lo,K as zo,L as Mo,b as Go,G as R}from"./ConfigProvider-CVsr_Nb2.js";import{i as Oo,u as No,E as _o,a as jo}from"./index-Cr5Bs5Fe.js";import{_ as Ro}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as ro,a as $o}from"./index-BU_YIpz4.js";import{P as fe}from"./vnode-CDtqzCuO.js";import{U as co}from"./event-BB_Ol6Sd.js";import{u as Ae}from"./use-form-item-BSwEs_HW.js";import{b as Ce}from"./style-Dd3mC4oU.js";import{u as we}from"./index-BccPGGIL.js";import{_ as Uo}from"./Icon-B6M9nJHU.js";import{_ as O}from"./Button-DXe_uWRw.js";import{c as qo}from"./refs-D1jqa3hJ.js";import"./error-Cq9Fpw4b.js";import"./scroll-TL91Ez5k.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";const Ko=(e,o,l,t)=>{let r={offsetX:0,offsetY:0};const s=w=>{const y=w.clientX,x=w.clientY,{offsetX:h,offsetY:D}=r,a=e.value.getBoundingClientRect(),i=a.left,c=a.top,u=a.width,C=a.height,p=document.documentElement.clientWidth,L=document.documentElement.clientHeight,T=-i+h,B=-c+D,k=p-i-u+h,z=L-c-C+D,F=$=>{let f=h+$.clientX-y,A=D+$.clientY-x;t!=null&&t.value||(f=Math.min(Math.max(f,T),k),A=Math.min(Math.max(A,B),z)),r={offsetX:f,offsetY:A},e.value&&(e.value.style.transform=`translate(${Ce(f)}, ${Ce(A)})`)},V=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",V)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",V)},b=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",s)},v=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",s)},g=()=>{r={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ue(()=>{Co(()=>{l.value?b():v()})}),ye(()=>{v()}),{resetPosition:g}},me="focus-trap.focus-after-trapped",be="focus-trap.focus-after-released",Wo="focus-trap.focusout-prevented",Te={cancelable:!0,bubbles:!1},Xo={cancelable:!0,bubbles:!1},Be="focusAfterTrapped",Fe="focusAfterReleased",uo=Symbol("elFocusTrap"),he=m(),pe=m(0),De=m(0);let ie=0;const go=e=>{const o=[],l=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const r=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||r?NodeFilter.FILTER_SKIP:t.tabIndex>=0||t===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;l.nextNode();)o.push(l.currentNode);return o},Se=(e,o)=>{for(const l of e)if(!Ho(l,o))return l},Ho=(e,o)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Yo=e=>{const o=go(e),l=Se(o,e),t=Se(o.reverse(),e);return[l,t]},Jo=e=>e instanceof HTMLInputElement&&"select"in e,j=(e,o)=>{if(e&&e.focus){const l=document.activeElement;let t=!1;Ve(e)&&!Oo(e)&&!e.getAttribute("tabindex")&&(e.setAttribute("tabindex","-1"),t=!0),e.focus({preventScroll:!0}),De.value=window.performance.now(),e!==l&&Jo(e)&&o&&e.select(),Ve(e)&&t&&e.removeAttribute("tabindex")}};function Ie(e,o){const l=[...e],t=e.indexOf(o);return t!==-1&&l.splice(t,1),l}const Zo=()=>{let e=[];return{push:t=>{const r=e[0];r&&t!==r&&r.pause(),e=Ie(e,t),e.unshift(t)},remove:t=>{var r,s;e=Ie(e,t),(s=(r=e[0])==null?void 0:r.resume)==null||s.call(r)}}},Qo=(e,o=!1)=>{const l=document.activeElement;for(const t of e)if(j(t,o),document.activeElement!==l)return},Pe=Zo(),et=()=>pe.value>De.value,re=()=>{he.value="pointer",pe.value=window.performance.now()},Le=()=>{he.value="keyboard",pe.value=window.performance.now()},ot=()=>(ue(()=>{ie===0&&(document.addEventListener("mousedown",re),document.addEventListener("touchstart",re),document.addEventListener("keydown",Le)),ie++}),ye(()=>{ie--,ie<=0&&(document.removeEventListener("mousedown",re),document.removeEventListener("touchstart",re),document.removeEventListener("keydown",Le))}),{focusReason:he,lastUserFocusTimestamp:pe,lastAutomatedFocusTimestamp:De}),de=e=>new CustomEvent(Wo,{...Xo,detail:e}),po=se({name:"GFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Be,Fe,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:o}){const l=m();let t,r;const{focusReason:s}=ot();No(a=>{e.trapped&&!b.paused&&o("release-requested",a)});const b={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},v=a=>{if(!e.loop&&!e.trapped||b.paused)return;const{code:i,altKey:c,ctrlKey:u,metaKey:C,currentTarget:p,shiftKey:L}=a,{loop:T}=e,B=i===_o.tab&&!c&&!u&&!C,k=document.activeElement;if(B&&k){const z=p,[F,V]=Yo(z);if(F&&V){if(!L&&k===V){const f=de({focusReason:s.value});o("focusout-prevented",f),f.defaultPrevented||(a.preventDefault(),T&&j(F,!0))}else if(L&&[F,z].includes(k)){const f=de({focusReason:s.value});o("focusout-prevented",f),f.defaultPrevented||(a.preventDefault(),T&&j(V,!0))}}else if(k===z){const f=de({focusReason:s.value});o("focusout-prevented",f),f.defaultPrevented||a.preventDefault()}}};no(uo,{focusTrapRef:l,onKeydown:v}),ae(()=>e.focusTrapEl,a=>{a&&(l.value=a)},{immediate:!0}),ae([l],([a],[i])=>{a&&(a.addEventListener("keydown",v),a.addEventListener("focusin",y),a.addEventListener("focusout",x)),i&&(i.removeEventListener("keydown",v),i.removeEventListener("focusin",y),i.removeEventListener("focusout",x))});const g=a=>{o(Be,a)},w=a=>o(Fe,a),y=a=>{const i=n(l);if(!i)return;const c=a.target,u=a.relatedTarget,C=c&&i.contains(c);e.trapped||u&&i.contains(u)||(t=u),C&&o("focusin",a),!b.paused&&e.trapped&&(C?r=c:j(r,!0))},x=a=>{const i=n(l);if(!(b.paused||!i))if(e.trapped){const c=a.relatedTarget;!So(c)&&!i.contains(c)&&setTimeout(()=>{if(!b.paused&&e.trapped){const u=de({focusReason:s.value});o("focusout-prevented",u),u.defaultPrevented||j(r,!0)}},0)}else{const c=a.target;c&&i.contains(c)||o("focusout",a)}};async function h(){await ve();const a=n(l);if(a){Pe.push(b);const i=a.contains(document.activeElement)?t:document.activeElement;if(t=i,!a.contains(i)){const u=new Event(me,Te);a.addEventListener(me,g),a.dispatchEvent(u),u.defaultPrevented||ve(()=>{let C=e.focusStartEl;yo(C)||(j(C),document.activeElement!==C&&(C="first")),C==="first"&&Qo(go(a),!0),(document.activeElement===i||C==="container")&&j(a)})}}}function D(){const a=n(l);if(a){a.removeEventListener(me,g);const i=new CustomEvent(be,{...Te,detail:{focusReason:s.value}});a.addEventListener(be,w),a.dispatchEvent(i),!i.defaultPrevented&&(s.value=="keyboard"||!et()||a.contains(document.activeElement))&&j(t??document.body),a.removeEventListener(be,w),Pe.remove(b)}}return ue(()=>{e.trapped&&h(),ae(()=>e.trapped,a=>{a?h():D()})}),ye(()=>{e.trapped&&D(),l.value&&(l.value.removeEventListener("keydown",v),l.value.removeEventListener("focusin",y),l.value.removeEventListener("focusout",x),l.value=void 0)}),{onKeydown:v}}});function tt(e,o,l,t,r,s){return P(e.$slots,"default",{handleKeydown:e.onKeydown})}const at=Ro(po,[["render",tt]]);po.__docgenInfo={displayName:"GFocusTrap",exportName:"default",description:"",tags:{},props:[{name:"loop",type:{name:"boolean"}},{name:"trapped",type:{name:"boolean"}},{name:"focusTrapEl",type:{name:"HTMLElement"}},{name:"focusStartEl",type:{name:"'container' | 'first' | HTMLElement"},defaultValue:{func:!1,value:"'first'"}}],events:[{name:"focusin"},{name:"focusout"},{name:"focusout-prevented"},{name:"release-requested"}],slots:[{name:"default",scoped:!0,bindings:[{name:"handle-keydown",title:"binding"}]}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/focus-trap/focus-trap.vue"]};const lt=ge({to:{type:ne([String,Object]),required:!0},disabled:Boolean}),fo=se({__name:"teleport",props:lt,setup(e){return(o,l)=>o.disabled?P(o.$slots,"default",{key:0}):(I(),ce(ho,{key:1,to:o.to},[P(o.$slots,"default")],8,["to"]))}});fo.__docgenInfo={exportName:"default",displayName:"teleport",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/teleport/teleport.vue"]};const nt=Io(fo),st=ge({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:ne([String,Array,Object])},zIndex:{type:ne([String,Number])}}),it={click:e=>e instanceof MouseEvent},rt="overlay",dt=se({name:"GOverlay",props:st,emits:it,setup(e,{slots:o,emit:l}){const t=io(rt),r=g=>{l("click",g)},{onClick:s,onMousedown:b,onMouseup:v}=ro(e.customMaskEvent?void 0:r);return()=>e.mask?le("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:b,onMouseup:v},[P(o,"default")],fe.STYLE|fe.CLASS|fe.PROPS,["onClick","onMouseup","onMousedown"]):Do("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[P(o,"default")])}}),ct=dt,mo=Symbol("dialogInjectionKey"),bo=ge({alignCenter:{type:Boolean,default:!0},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"},width:{type:[String,Number]},sizeMode:{type:String,default:"default",validator:e=>["default","fixed","adaptive"].includes(e)},footerButtons:{type:Array,default:()=>[],validator:e=>Array.isArray(e)}}),ut={close:()=>!0,buttonClick:e=>e};function gt(e){e.draggable&&e.fullscreen,e.width&&(e.fullscreen||e.sizeMode),e.footerButtons&&e.footerButtons.length>3}const pt=ge({...bo,appendToBody:{type:Boolean,default:!1},appendTo:{type:ne([String,Object]),default:"body"},beforeClose:{type:ne(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),ft={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[co]:e=>Po(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},mt=(e,o,{closeOnClickModal:l,closeOnPressEscape:t})=>{const s=Eo().emit,{nextZIndex:b}=Lo();let v="";const g=Ae(),w=Ae(),y=m(!1),x=m(!1),h=m(!1),D=m(e.zIndex??b()),a=M(()=>{var E;return((E=e.footerButtons)==null?void 0:E.slice(0,3))||[]}),i=M(()=>a.value.length===3?"layout-dual-row":"layout-single-column");let c,u;const C=zo("namespace",Mo),p=M(()=>{const E={},oe=`--${C.value}-dialog`;return e.fullscreen||(e.top&&(E[`${oe}-margin-top`]=e.top),e.width&&(E[`${oe}-width`]=Ce(e.width))),E}),L=M(()=>e.alignCenter?{display:"flex"}:{});function T(){s("opened")}function B(){s("closed"),s(co,!1),e.destroyOnClose&&(h.value=!1)}function k(){s("close")}function z(){u==null||u(),c==null||c(),e.openDelay&&e.openDelay>0?{stop:c}=we(()=>f(),e.openDelay):f()}function F(){c==null||c(),u==null||u(),e.closeDelay&&e.closeDelay>0?{stop:u}=we(()=>A(),e.closeDelay):A()}const V=()=>{e.showClose&&(e.beforeClose?e.beforeClose(A):A())};function $(){l.value&&V()}function f(){Go&&(y.value=!0)}function A(){y.value=!1}function Ee(){s("openAutoFocus")}function d(){s("closeAutoFocus")}function N(E){var oe;((oe=E.detail)==null?void 0:oe.focusReason)==="pointer"&&E.preventDefault()}e.lockScroll&&$o(y);function U(){t.value&&V()}return ae(()=>e.modelValue,E=>{E?(x.value=!1,z(),h.value=!0,D.value=jo(e.zIndex)?b():D.value++,ve(()=>{s("open"),o.value&&(o.value.parentElement.scrollTop=0,o.value.parentElement.scrollLeft=0,o.value.scrollTop=0)})):y.value&&F()}),ae(()=>e.fullscreen,E=>{o.value&&(E?(v=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=v)}),ue(()=>{e.modelValue&&(y.value=!0,h.value=!0,z())}),{afterEnter:T,afterLeave:B,beforeLeave:k,handleClose:V,onModalClick:$,close:F,doClose:A,onOpenAutoFocus:Ee,onCloseAutoFocus:d,onCloseRequested:U,onFocusoutPrevented:N,titleId:g,bodyId:w,closed:x,style:p,overlayDialogStyle:L,rendered:h,visible:y,zIndex:D,displayButtons:a,buttonLayoutClass:i}},bt=["id"],vt=["aria-level"],vo=se({__name:"DialogContent",props:bo,emits:ut,setup(e,{expose:o,emit:l}){const t=e,r=l;gt(t);const{dialogRef:s,headerRef:b,bodyId:v,ns:g,style:w,displayButtons:y,buttonLayoutClass:x}=xe(mo),{focusTrapRef:h}=xe(uo),D=M(()=>{const p=t.fullscreen?"fullscreen":t.sizeMode||"default";return[g.b(),g.is("draggable",t.draggable),g.is("align-center",t.alignCenter),g.is(p)]}),a=qo(h,s),i=M(()=>t.draggable&&!t.fullscreen),c=M(()=>t.overflow),{resetPosition:u}=Ko(s,s,i,c);o({resetPosition:u});const C=()=>{r("close")};return(p,L)=>(I(),q("div",{ref:n(a),class:S(D.value),style:so(n(w)),tabindex:"-1"},[p.showClose?(I(),q("header",{key:0,ref_key:"headerRef",ref:b,class:S([n(g).e("header"),p.headerClass])},[p.showClose?(I(),q("button",{key:0,"aria-label":"Close",class:S(n(g).e("headerbtn")),type:"button",onClick:C},[le(n(Uo),{name:"regular times",class:S(n(g).e("close"))},null,8,["class"])],2)):K("",!0)],2)):K("",!0),te("div",{id:n(v),class:S([n(g).e("body"),p.bodyClass])},[te("div",null,[p.$slots.image?(I(),q("div",{key:0,class:S(n(g).e("image"))},[P(p.$slots,"image")],2)):K("",!0),p.title?(I(),q("span",{key:1,class:S(n(g).e("title")),role:"heading","aria-level":p.ariaLevel},ke(p.title),11,vt)):K("",!0),te("div",{class:S(n(g).e("content"))},[P(p.$slots,"default")],2)])],10,bt),te("footer",{class:S([n(g).e("footer"),p.footerClass])},[P(p.$slots,"footer",{},()=>{var T;return[(T=t.footerButtons)!=null&&T.length?(I(),q("div",{key:0,class:S([n(g).e("footer-buttons"),n(x)])},[(I(!0),q(xo,null,ko(n(y),(B,k)=>(I(),ce(n(O),{key:k,variant:B.variant,full:"",onClick:B.onClick},{default:_(()=>[Vo(ke(B.text),1)]),_:2},1032,["variant","onClick"]))),128))],2)):K("",!0)]})],2)],6))}});vo.__docgenInfo={exportName:"default",displayName:"DialogContent",description:"",tags:{},expose:[{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Dialog/DialogContent.vue"]};const Ct=["aria-label","aria-labelledby","aria-describedby"],G=se({__name:"Dialog",props:pt,emits:ft,setup(e,{expose:o,emit:l}){const t=e,r=io("dialog"),s=m(),b=m(),v=m(),g=M(()=>t.showClose&&t.closeOnClickModal),w=M(()=>t.showClose&&t.closeOnPressEscape),{visible:y,titleId:x,bodyId:h,style:D,overlayDialogStyle:a,rendered:i,zIndex:c,afterEnter:u,afterLeave:C,beforeLeave:p,handleClose:L,onModalClick:T,onOpenAutoFocus:B,onCloseAutoFocus:k,onCloseRequested:z,onFocusoutPrevented:F,displayButtons:V,buttonLayoutClass:$}=mt(t,s,{closeOnClickModal:g,closeOnPressEscape:w});no(mo,{dialogRef:s,headerRef:b,bodyId:h,ns:r,rendered:i,style:D,displayButtons:V,buttonLayoutClass:$});const f=ro(T),A=M(()=>t.draggable&&!t.fullscreen);return o({visible:y,dialogContentRef:v,resetPosition:()=>{var d;(d=v.value)==null||d.resetPosition()}}),(d,N)=>(I(),ce(n(nt),{to:d.appendTo,disabled:d.appendTo!=="body"?!1:!d.appendToBody},{default:_(()=>[le(Ao,{name:"dialog-fade",onAfterEnter:n(u),onAfterLeave:n(C),onBeforeLeave:n(p)},{default:_(()=>[wo(le(n(ct),{"custom-mask-event":"",mask:d.modal,"overlay-class":d.modalClass,"z-index":n(c)},{default:_(()=>[te("div",{role:"dialog","aria-modal":"true","aria-label":d.title||void 0,"aria-labelledby":d.title?void 0:n(x),"aria-describedby":n(h),class:S(`${n(r).namespace.value}-overlay-dialog`),style:so(n(a)),onClick:N[0]||(N[0]=(...U)=>n(f).onClick&&n(f).onClick(...U)),onMousedown:N[1]||(N[1]=(...U)=>n(f).onMousedown&&n(f).onMousedown(...U)),onMouseup:N[2]||(N[2]=(...U)=>n(f).onMouseup&&n(f).onMouseup(...U))},[le(n(at),{loop:"",trapped:n(y),"focus-start-el":"container",onFocusAfterTrapped:n(B),onFocusAfterReleased:n(k),onFocusoutPrevented:n(F),onReleaseRequested:n(z)},{default:_(()=>[n(i)?(I(),ce(vo,To({key:0,ref_key:"dialogContentRef",ref:v},d.$attrs,{"align-center":d.alignCenter,draggable:A.value,overflow:d.overflow,fullscreen:d.fullscreen,"header-class":d.headerClass,"body-class":d.bodyClass,"footer-class":d.footerClass,"show-close":d.showClose,title:d.title,"aria-level":d.ariaLevel,width:d.width,"size-mode":d.sizeMode,"footer-buttons":d.footerButtons,onClose:n(L)}),Bo({default:_(()=>[P(d.$slots,"default")]),_:2},[d.$slots.image?{name:"image",fn:_(()=>[P(d.$slots,"image")]),key:"0"}:void 0,d.$slots.footer?{name:"footer",fn:_(()=>[P(d.$slots,"footer")]),key:"1"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):K("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ct)]),_:3},8,["mask","overlay-class","z-index"]),[[Fo,n(y)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});G.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},expose:[{name:"visible",tags:[{title:"description",content:"whether the dialog is visible"}]},{name:"dialogContentRef"},{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Dialog/Dialog.vue"]};const Kt={title:"Data/Dialog",component:G,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,table:{defaultValue:{summary:"default"}}},draggable:{control:"boolean",description:"Permite arrastrar el dialog. No compatible con fullscreen",table:{defaultValue:{summary:"false"}}},fullscreen:{control:"boolean",description:"El dialog ocupa toda la pantalla",table:{defaultValue:{summary:"false"}}},showClose:{control:"boolean",description:"Mostrar botón de cerrar",table:{defaultValue:{summary:"true"}}},alignCenter:{control:"boolean",description:"Alinear el dialog horizontal y verticalmente",table:{defaultValue:{summary:"true"}}},appendToBody:{control:"boolean",description:"Añadir el dialog directamente al body del documento",table:{defaultValue:{summary:"false"}}},headerClass:{control:"text",description:"Clases CSS personalizadas para el header",table:{defaultValue:{summary:""}}},bodyClass:{control:"text",description:"Clases CSS personalizadas para el body",table:{defaultValue:{summary:""}}},footerClass:{control:"text",description:"Clases CSS personalizadas para el footer",table:{defaultValue:{summary:""}}},ariaLevel:{control:"text",description:"Nivel de encabezado ARIA para el título",table:{defaultValue:{summary:"2"}}},closeOnClickModal:{control:"boolean",description:"Si el dialog se cierra al hacer clic en el overlay",table:{defaultValue:{summary:"true"}}},closeOnPressEscape:{control:"boolean",description:"Si el dialog se cierra al presionar ESC",table:{defaultValue:{summary:"true"}}},destroyOnClose:{control:"boolean",description:"Destruir el contenido del dialog cuando se cierra",table:{defaultValue:{summary:"false"}}},footerButtons:{control:"object",description:`Array de configuración para los botones del footer (máximo 3 botones). Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,table:{defaultValue:{summary:"[]"},type:{summary:"Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>"}}}},parameters:{docs:{description:{component:`
# Dialog Component

El componente Dialog proporciona una ventana modal configurable para mostrar información y acciones:

## Características
- Tres modos de tamaño: default, fixed y adaptive
- Soporte para imágenes y contenido personalizado
- Configuración flexible de botones en el footer (máximo 3)

## Instalación

\`\`\`bash
yarn add @flash-global66/b2b-ui-dialog
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/b2b-ui-button
- @flash-global66/b2b-ui-icon-font
- @flash-global66/b2b-ui-focus-trap
- @flash-global66/b2b-ui-teleport
- @flash-global66/b2b-ui-overlay

Nota: Asegúrate de tener instaladas estas dependencias para que el componente funcione correctamente y sus archivos sass respectivos importados.

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/b2b-ui-dialog/dialog.styles.scss" as *;
\`\`\`

## Uso básico

\`\`\`html
<template>
  <g-button @click="dialogVisible = true">Abrir Dialog</g-button>

  <g-dialog
    v-model="dialogVisible"
    title="Título del Dialog"
    :footer-buttons="buttons"
    @close="closeDialog"
  >
    Contenido del Dialog
  </g-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { GDialog } from '@flash-global66/b2b-ui-dialog';
import { GButton } from '@flash-global66/b2b-ui-button';

const dialogVisible = ref(false);
const closeDialog = () => {
  dialogVisible.value = false;
};
const buttons = [
  {
    text: 'Aceptar',
    onClick: closeDialog,
    variant: 'primary'
  },
  {
    text: 'Cancelar',
    onClick: closeDialog,
    variant: 'secondary'
  }
];
<\/script>
\`\`\`

## Layout de botones
- Con 3 botones: Se muestran 2 botones en la primera fila y 1 botón centrado debajo
- Con 2 botones: Se muestran uno encima del otro
- Con 1 botón: Ocupa todo el ancho disponible
      `}}}},yt=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1),l=()=>{o.value=!1};return{args:e,dialogVisible:o,handleClose:l,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:l,variant:"primary"},{text:"Cancelar",onClick:()=>o.value=!1,variant:"secondary"}]:e.footerButtons.map(r=>({...r,onClick:()=>{o.value=!1}}))}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Básico</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        :footer-buttons="processFooterButtons()"
        @close="handleClose"
        append-to-body
      >
        <p>Este es un dialog básico con contenido de texto simple.</p>
      </g-dialog>
    </g-config-provider>
  `}),ht=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Imagen"
        append-to-body
        @close="handleClose"
      >
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
            />
        </template>
        <p>Este dialog muestra una imagen con un mensaje.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),Dt=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog sin Botón Cerrar</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Mensaje Importante"
        :show-close="false"
        append-to-body
        @close="handleClose"
      >
        <p class="text-center">Este dialog es un mensaje importante que requiere confirmación del usuario.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),Et=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Ancho</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Ancho Personalizado"
        width="800"
        size-mode="fixed"
        append-to-body
        @close="handleClose"
      >
        <p>Este dialog tiene un ancho personalizado de 800px.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),xt=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen Grande</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog Adaptable"
        size-mode="adaptive"
        @close="handleClose"
        append-to-body
      >
        <template #image> 
          <img 
            src="https://placehold.co/800x600"
            alt="Imagen grande de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `}),kt=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 2 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Botones"
        :footer-buttons="[
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra dos botones.</p>
      </g-dialog>
    </g-config-provider>
  `}),Vt=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 3 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Tres Botones"
        :footer-buttons="[
          {
            text: 'Guardar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          },
          {
            text: 'Ver detalles',
            onClick: handleClose,
            variant: 'tertiary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
      </g-dialog>
    </g-config-provider>
  `}),At=e=>({components:{GDialog:G,GConfigProvider:R,GButton:O},setup(){const o=m(!1),l=m(!1),t=m(!1);return{args:e,defaultDialogVisible:o,fixedDialogVisible:l,adaptiveDialogVisible:t,closeDefaultDialog:()=>{o.value=!1},closeFixedDialog:()=>{l.value=!1},closeAdaptiveDialog:()=>{t.value=!1}}},template:`
    <g-config-provider>
      <div class="flex flex-wrap gap-4">
        <g-button @click="defaultDialogVisible = true">Modo Default</g-button>
        <g-button @click="fixedDialogVisible = true">Modo Fixed</g-button>
        <g-button @click="adaptiveDialogVisible = true">Modo Adaptive</g-button>
      </div>
      
      <!-- Dialog con modo DEFAULT -->
      <g-dialog
        v-model="defaultDialogVisible"
        title="Dialog - Modo Default"
        size-mode="default"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeDefaultDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeDefaultDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeDefaultDialog"
      >
        <p>Este dialog utiliza el modo <strong>default</strong>. Tiene un ancho máximo predefinido y se ajusta a pantallas más pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo FIXED -->
      <g-dialog
        v-model="fixedDialogVisible"
        title="Dialog - Modo Fixed"
        size-mode="fixed"
        width="600px"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeFixedDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeFixedDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeFixedDialog"
      >
        <p>Este dialog utiliza el modo <strong>fixed</strong> con un ancho de 600px. No tiene restricciones de ancho máximo, pero se adaptará en pantallas pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo ADAPTIVE -->
      <g-dialog
        v-model="adaptiveDialogVisible"
        title="Dialog - Modo Adaptive"
        size-mode="adaptive"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeAdaptiveDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeAdaptiveDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeAdaptiveDialog"
      >
        <template #image>
          <img 
            src="https://placehold.co/600x300"
            alt="Imagen de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog utiliza el modo <strong>adaptive</strong>. Se adapta automáticamente al contenido, respetando un tamaño mínimo y máximo.</p>
      </g-dialog>
    </g-config-provider>
  `}),W=yt.bind({});W.args={title:"Dialog Básico",showClose:!0,footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};W.parameters={docs:{description:{story:"Dialog básico con contenido de texto y dos botones de acción."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Básico"
    :show-close="true"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => dialogVisible = false,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este es un dialog básico con contenido de texto simple.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const X=ht.bind({});X.args={title:"Dialog con Imagen",showClose:!0,sizeMode:"default",footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};X.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Imagen"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleConfirm,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/112x112"
        alt="Imagen"
      />
    </template>
    <p>Este dialog muestra una imagen con un mensaje.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
const handleConfirm = () => {
  dialogVisible.value = false;
};
<\/script>`}}};const H=Dt.bind({});H.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};H.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Mensaje Importante"
    :show-close="false"
    @close="handleClose"
  >
    <p>Este dialog solo se cierra con el botón de acción.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entiendo</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const Y=Et.bind({});Y.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};Y.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Ancho Personalizado"
    width="800"
    size-mode="fixed"
    :show-close="true"
    @close="handleClose"
  >
    <p>Este dialog tiene un ancho personalizado de 800px.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Aceptar</g-button>
        <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const J=xt.bind({});J.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};J.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Adaptable"
    size-mode="adaptive"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/800x600"
        alt="Imagen grande de ejemplo"
        class="rounded"
      />
    </template>
    <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entendido</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const Z=kt.bind({});Z.args={title:"Dialog con Botones",showClose:!0};Z.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Botones"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => dialogVisible = false,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este dialog muestra dos botones.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const Q=Vt.bind({});Q.args={title:"Dialog con Tres Botones",showClose:!0};Q.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Tres Botones"
    :footer-buttons="[
      {
        text: 'Guardar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      },
      {
        text: 'Ver detalles',
        onClick: handleClose,
        variant: 'tertiary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
  </g-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
<\/script>`,language:"html",type:"auto"}}};const ee=At.bind({});ee.args={showClose:!0};ee.parameters={docs:{description:{story:"Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive."},source:{code:`
<!-- MODO DEFAULT -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Default"
  size-mode="default"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <p>Este dialog utiliza el modo default con ancho máximo predefinido.</p>
</g-dialog>

<!-- MODO FIXED -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Fixed"
  size-mode="fixed"
  width="600px"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <p>Este dialog utiliza el modo fixed con un ancho específico de 600px.</p>
</g-dialog>

<!-- MODO ADAPTIVE -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Adaptive"
  size-mode="adaptive"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <template #image>
    <img src="https://placehold.co/600x300" alt="Imagen de ejemplo" class="rounded" />
  </template>
  <p>Este dialog utiliza el modo adaptive que se adapta al contenido.</p>
</g-dialog>`,language:"html",type:"auto"}}};var ze,Me,Ge;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    const processFooterButtons = () => {
      if (!args.footerButtons || args.footerButtons.length === 0) {
        return [{
          text: 'Aceptar',
          onClick: handleClose,
          variant: 'primary'
        }, {
          text: 'Cancelar',
          onClick: () => dialogVisible.value = false,
          variant: 'secondary'
        }];
      }
      return args.footerButtons.map(button => ({
        ...button,
        onClick: () => {
          dialogVisible.value = false;
        }
      }));
    };
    return {
      args,
      dialogVisible,
      handleClose,
      processFooterButtons
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Básico</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        :footer-buttons="processFooterButtons()"
        @close="handleClose"
        append-to-body
      >
        <p>Este es un dialog básico con contenido de texto simple.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(Ge=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var Oe,Ne,_e;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Imagen"
        append-to-body
        @close="handleClose"
      >
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
            />
        </template>
        <p>Este dialog muestra una imagen con un mensaje.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(_e=(Ne=X.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var je,Re,$e;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog sin Botón Cerrar</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Mensaje Importante"
        :show-close="false"
        append-to-body
        @close="handleClose"
      >
        <p class="text-center">Este dialog es un mensaje importante que requiere confirmación del usuario.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...($e=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};var Ue,qe,Ke;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Ancho</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Ancho Personalizado"
        width="800"
        size-mode="fixed"
        append-to-body
        @close="handleClose"
      >
        <p>Este dialog tiene un ancho personalizado de 800px.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(Ke=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var We,Xe,He;J.parameters={...J.parameters,docs:{...(We=J.parameters)==null?void 0:We.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen Grande</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog Adaptable"
        size-mode="adaptive"
        @close="handleClose"
        append-to-body
      >
        <template #image> 
          <img 
            src="https://placehold.co/800x600"
            alt="Imagen grande de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(He=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:He.source}}};var Ye,Je,Ze;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 2 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Botones"
        :footer-buttons="[
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra dos botones.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(Ze=(Je=Z.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Qe,eo,oo;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const dialogVisible = ref(false);
    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      args,
      dialogVisible,
      handleClose
    };
  },
  template: \`
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 3 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Tres Botones"
        :footer-buttons="[
          {
            text: 'Guardar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          },
          {
            text: 'Ver detalles',
            onClick: handleClose,
            variant: 'tertiary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(oo=(eo=Q.parameters)==null?void 0:eo.docs)==null?void 0:oo.source}}};var to,ao,lo;ee.parameters={...ee.parameters,docs:{...(to=ee.parameters)==null?void 0:to.docs,source:{originalSource:`args => ({
  components: {
    GDialog,
    GConfigProvider,
    GButton
  },
  setup() {
    const defaultDialogVisible = ref(false);
    const fixedDialogVisible = ref(false);
    const adaptiveDialogVisible = ref(false);
    const closeDefaultDialog = () => {
      defaultDialogVisible.value = false;
    };
    const closeFixedDialog = () => {
      fixedDialogVisible.value = false;
    };
    const closeAdaptiveDialog = () => {
      adaptiveDialogVisible.value = false;
    };
    return {
      args,
      defaultDialogVisible,
      fixedDialogVisible,
      adaptiveDialogVisible,
      closeDefaultDialog,
      closeFixedDialog,
      closeAdaptiveDialog
    };
  },
  template: \`
    <g-config-provider>
      <div class="flex flex-wrap gap-4">
        <g-button @click="defaultDialogVisible = true">Modo Default</g-button>
        <g-button @click="fixedDialogVisible = true">Modo Fixed</g-button>
        <g-button @click="adaptiveDialogVisible = true">Modo Adaptive</g-button>
      </div>
      
      <!-- Dialog con modo DEFAULT -->
      <g-dialog
        v-model="defaultDialogVisible"
        title="Dialog - Modo Default"
        size-mode="default"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeDefaultDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeDefaultDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeDefaultDialog"
      >
        <p>Este dialog utiliza el modo <strong>default</strong>. Tiene un ancho máximo predefinido y se ajusta a pantallas más pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo FIXED -->
      <g-dialog
        v-model="fixedDialogVisible"
        title="Dialog - Modo Fixed"
        size-mode="fixed"
        width="600px"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeFixedDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeFixedDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeFixedDialog"
      >
        <p>Este dialog utiliza el modo <strong>fixed</strong> con un ancho de 600px. No tiene restricciones de ancho máximo, pero se adaptará en pantallas pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo ADAPTIVE -->
      <g-dialog
        v-model="adaptiveDialogVisible"
        title="Dialog - Modo Adaptive"
        size-mode="adaptive"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeAdaptiveDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeAdaptiveDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeAdaptiveDialog"
      >
        <template #image>
          <img 
            src="https://placehold.co/600x300"
            alt="Imagen de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog utiliza el modo <strong>adaptive</strong>. Se adapta automáticamente al contenido, respetando un tamaño mínimo y máximo.</p>
      </g-dialog>
    </g-config-provider>
  \`
})`,...(lo=(ao=ee.parameters)==null?void 0:ao.docs)==null?void 0:lo.source}}};const Wt=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];export{W as Basic,Y as CustomWidth,H as NoCloseButton,ee as SizeModeComparison,Q as ThreeButtonsLayout,Z as TwoButtonsStacked,X as WithImage,J as WithLargeImage,Wt as __namedExportsOrder,Kt as default};
