import{o as ce,e as We,V as Ce,r as m,l as ne,w as te,u as n,R as be,b as Xe,W as Me,G as S,B as de,n as F,a4 as Ye,T as ae,z as He,g as Je,c as M,f as xe,m as q,I as K,p as oe,J as B,M as ke,K as Ze,L as Qe,C as _,P as eo,O as ze,U as oo,a1 as to,S as ao,aa as lo,a2 as no}from"./vue.esm-bundler-BWLFJ3YM.js";import{j as Ve,v as so,o as ue,h as le,w as io,l as Ge,m as ro,L as co,M as uo,N as go,b as po,G as R}from"./ConfigProvider-DfgpcNWx.js";import{i as fo,u as mo,E as bo,a as vo}from"./index-BhZWXNXQ.js";import{_ as Co}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Oe,a as yo}from"./index-RrZjGXbA.js";import{P as pe}from"./vnode-B_lBN2mU.js";import{U as Ne}from"./event-BB_Ol6Sd.js";import{u as Ae}from"./index-j6CJlXut.js";import{b as ve}from"./style-BhjGsvQW.js";import{u as Te}from"./index-BbqbSJR7.js";import{_ as ho}from"./Icon-XKrN76pS.js";import{_ as O}from"./Button-1XQhNvEa.js";import{c as Do}from"./refs-B7debGDq.js";import"./error-Cq9Fpw4b.js";import"./scroll-Cwh7ui4M.js";import"./index.es-C8evZRbd.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./index-CdJoONYj.js";import"./castArray-B4BJdNV7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";const Eo=(e,o,l,t)=>{let d={offsetX:0,offsetY:0};const i=A=>{const y=A.clientX,E=A.clientY,{offsetX:h,offsetY:D}=d,a=e.value.getBoundingClientRect(),s=a.left,u=a.top,f=a.width,C=a.height,g=document.documentElement.clientWidth,I=document.documentElement.clientHeight,x=-s+h,G=-u+D,P=g-s-f+h,L=I-u-C+D,T=$=>{let p=h+$.clientX-y,V=D+$.clientY-E;t?.value||(p=Math.min(Math.max(p,x),P),V=Math.min(Math.max(V,G),L)),d={offsetX:p,offsetY:V},e.value&&(e.value.style.transform=`translate(${ve(p)}, ${ve(V)})`)},k=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",k)},b=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",i)},v=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",i)},c=()=>{d={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ce(()=>{We(()=>{l.value?b():v()})}),Ce(()=>{v()}),{resetPosition:c}},fe="focus-trap.focus-after-trapped",me="focus-trap.focus-after-released",xo="focus-trap.focusout-prevented",we={cancelable:!0,bubbles:!1},ko={cancelable:!0,bubbles:!1},Be="focusAfterTrapped",Fe="focusAfterReleased",_e=Symbol("elFocusTrap"),ye=m(),ge=m(0),he=m(0);let se=0;const je=e=>{const o=[],l=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const d=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||d?NodeFilter.FILTER_SKIP:t.tabIndex>=0||t===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;l.nextNode();)o.push(l.currentNode);return o},Se=(e,o)=>{for(const l of e)if(!Vo(l,o))return l},Vo=(e,o)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Ao=e=>{const o=je(e),l=Se(o,e),t=Se(o.reverse(),e);return[l,t]},To=e=>e instanceof HTMLInputElement&&"select"in e,j=(e,o)=>{if(e&&e.focus){const l=document.activeElement;let t=!1;Ve(e)&&!fo(e)&&!e.getAttribute("tabindex")&&(e.setAttribute("tabindex","-1"),t=!0),e.focus({preventScroll:!0}),he.value=window.performance.now(),e!==l&&To(e)&&o&&e.select(),Ve(e)&&t&&e.removeAttribute("tabindex")}};function Ie(e,o){const l=[...e],t=e.indexOf(o);return t!==-1&&l.splice(t,1),l}const wo=()=>{let e=[];return{push:t=>{const d=e[0];d&&t!==d&&d.pause(),e=Ie(e,t),e.unshift(t)},remove:t=>{e=Ie(e,t),e[0]?.resume?.()}}},Bo=(e,o=!1)=>{const l=document.activeElement;for(const t of e)if(j(t,o),document.activeElement!==l)return},Pe=wo(),Fo=()=>ge.value>he.value,ie=()=>{ye.value="pointer",ge.value=window.performance.now()},Le=()=>{ye.value="keyboard",ge.value=window.performance.now()},So=()=>(ce(()=>{se===0&&(document.addEventListener("mousedown",ie),document.addEventListener("touchstart",ie),document.addEventListener("keydown",Le)),se++}),Ce(()=>{se--,se<=0&&(document.removeEventListener("mousedown",ie),document.removeEventListener("touchstart",ie),document.removeEventListener("keydown",Le))}),{focusReason:ye,lastUserFocusTimestamp:ge,lastAutomatedFocusTimestamp:he}),re=e=>new CustomEvent(xo,{...ko,detail:e}),Re=ne({name:"GFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Be,Fe,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:o}){const l=m();let t,d;const{focusReason:i}=So();mo(a=>{e.trapped&&!b.paused&&o("release-requested",a)});const b={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},v=a=>{if(!e.loop&&!e.trapped||b.paused)return;const{code:s,altKey:u,ctrlKey:f,metaKey:C,currentTarget:g,shiftKey:I}=a,{loop:x}=e,G=s===bo.tab&&!u&&!f&&!C,P=document.activeElement;if(G&&P){const L=g,[T,k]=Ao(L);if(T&&k){if(!I&&P===k){const p=re({focusReason:i.value});o("focusout-prevented",p),p.defaultPrevented||(a.preventDefault(),x&&j(T,!0))}else if(I&&[T,L].includes(P)){const p=re({focusReason:i.value});o("focusout-prevented",p),p.defaultPrevented||(a.preventDefault(),x&&j(k,!0))}}else if(P===L){const p=re({focusReason:i.value});o("focusout-prevented",p),p.defaultPrevented||a.preventDefault()}}};Me(_e,{focusTrapRef:l,onKeydown:v}),te(()=>e.focusTrapEl,a=>{a&&(l.value=a)},{immediate:!0}),te([l],([a],[s])=>{a&&(a.addEventListener("keydown",v),a.addEventListener("focusin",y),a.addEventListener("focusout",E)),s&&(s.removeEventListener("keydown",v),s.removeEventListener("focusin",y),s.removeEventListener("focusout",E))});const c=a=>{o(Be,a)},A=a=>o(Fe,a),y=a=>{const s=n(l);if(!s)return;const u=a.target,f=a.relatedTarget,C=u&&s.contains(u);e.trapped||f&&s.contains(f)||(t=f),C&&o("focusin",a),!b.paused&&e.trapped&&(C?d=u:j(d,!0))},E=a=>{const s=n(l);if(!(b.paused||!s))if(e.trapped){const u=a.relatedTarget;!so(u)&&!s.contains(u)&&setTimeout(()=>{if(!b.paused&&e.trapped){const f=re({focusReason:i.value});o("focusout-prevented",f),f.defaultPrevented||j(d,!0)}},0)}else{const u=a.target;u&&s.contains(u)||o("focusout",a)}};async function h(){await be();const a=n(l);if(a){Pe.push(b);const s=a.contains(document.activeElement)?t:document.activeElement;if(t=s,!a.contains(s)){const f=new Event(fe,we);a.addEventListener(fe,c),a.dispatchEvent(f),f.defaultPrevented||be(()=>{let C=e.focusStartEl;Xe(C)||(j(C),document.activeElement!==C&&(C="first")),C==="first"&&Bo(je(a),!0),(document.activeElement===s||C==="container")&&j(a)})}}}function D(){const a=n(l);if(a){a.removeEventListener(fe,c);const s=new CustomEvent(me,{...we,detail:{focusReason:i.value}});a.addEventListener(me,A),a.dispatchEvent(s),!s.defaultPrevented&&(i.value=="keyboard"||!Fo()||a.contains(document.activeElement))&&j(t??document.body),a.removeEventListener(me,A),Pe.remove(b)}}return ce(()=>{e.trapped&&h(),te(()=>e.trapped,a=>{a?h():D()})}),Ce(()=>{e.trapped&&D(),l.value&&(l.value.removeEventListener("keydown",v),l.value.removeEventListener("focusin",y),l.value.removeEventListener("focusout",E),l.value=void 0)}),{onKeydown:v}}});function Io(e,o,l,t,d,i){return S(e.$slots,"default",{handleKeydown:e.onKeydown})}const Po=Co(Re,[["render",Io]]);Re.__docgenInfo={displayName:"GFocusTrap",exportName:"default",description:"",tags:{},props:[{name:"loop",type:{name:"boolean"}},{name:"trapped",type:{name:"boolean"}},{name:"focusTrapEl",type:{name:"HTMLElement"}},{name:"focusStartEl",type:{name:"'container' | 'first' | HTMLElement"},defaultValue:{func:!1,value:"'first'"}}],events:[{name:"focusin"},{name:"focusout"},{name:"focusout-prevented"},{name:"release-requested"}],slots:[{name:"default",scoped:!0,bindings:[{name:"handle-keydown",title:"binding"}]}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/focus-trap/focus-trap.vue"]};const Lo=ue({to:{type:le([String,Object]),required:!0},disabled:Boolean}),$e=ne({__name:"teleport",props:Lo,setup(e){return(o,l)=>o.disabled?S(o.$slots,"default",{key:0}):(F(),de(Ye,{key:1,to:o.to},[S(o.$slots,"default")],8,["to"]))}});$e.__docgenInfo={exportName:"default",displayName:"teleport",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/teleport/teleport.vue"]};const Mo=io($e),zo=ue({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:le([String,Array,Object])},zIndex:{type:le([String,Number])}}),Go={click:e=>e instanceof MouseEvent},Oo="overlay",No=ne({name:"GOverlay",props:zo,emits:Go,setup(e,{slots:o,emit:l}){const t=Ge(Oo),d=c=>{l("click",c)},{onClick:i,onMousedown:b,onMouseup:v}=Oe(e.customMaskEvent?void 0:d);return()=>e.mask?ae("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:b,onMouseup:v},[S(o,"default")],pe.STYLE|pe.CLASS|pe.PROPS,["onClick","onMouseup","onMousedown"]):He("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[S(o,"default")])}}),_o=No,Ue=Symbol("dialogInjectionKey"),qe=ue({alignCenter:{type:Boolean,default:!0},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"},width:{type:[String,Number]},sizeMode:{type:String,default:"default",validator:e=>["default","fixed","adaptive"].includes(e)},footerButtons:{type:Array,default:()=>[],validator:e=>Array.isArray(e)}}),jo={close:()=>!0,buttonClick:e=>e};function Ro(e){e.draggable&&e.fullscreen,e.width&&(e.fullscreen||e.sizeMode),e.footerButtons&&e.footerButtons.length>3}const $o=ue({...qe,appendToBody:{type:Boolean,default:!1},appendTo:{type:le([String,Object]),default:"body"},beforeClose:{type:le(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!0},ariaLevel:{type:String,default:"2"}}),Uo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Ne]:e=>ro(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},qo=(e,o,{closeOnClickModal:l,closeOnPressEscape:t})=>{const i=Je().emit,{nextZIndex:b}=co();let v="";const c=Ae(),A=Ae(),y=m(!1),E=m(!1),h=m(!1),D=m(e.zIndex??b()),a=M(()=>e.footerButtons?.slice(0,3)||[]),s=M(()=>a.value.length===3?"layout-dual-row":"layout-single-column");let u,f;const C=uo("namespace",go),g=M(()=>{const w={},Ee=`--${C.value}-dialog`;return e.fullscreen||(e.top&&(w[`${Ee}-margin-top`]=e.top),e.width&&(w[`${Ee}-width`]=ve(e.width))),w}),I=M(()=>e.alignCenter?{display:"flex"}:{});function x(){i("opened")}function G(){i("closed"),i(Ne,!1),e.destroyOnClose&&(h.value=!1)}function P(){i("close")}function L(){f?.(),u?.(),e.openDelay&&e.openDelay>0?{stop:u}=Te(()=>p(),e.openDelay):p()}function T(){u?.(),f?.(),e.closeDelay&&e.closeDelay>0?{stop:f}=Te(()=>V(),e.closeDelay):V()}const k=()=>{e.showClose&&(e.beforeClose?e.beforeClose(V):V())};function $(){l.value&&k()}function p(){po&&(y.value=!0)}function V(){y.value=!1}function De(){i("openAutoFocus")}function r(){i("closeAutoFocus")}function N(w){w.detail?.focusReason==="pointer"&&w.preventDefault()}e.lockScroll&&yo(y);function U(){t.value&&k()}return te(()=>e.modelValue,w=>{w?(E.value=!1,L(),h.value=!0,D.value=vo(e.zIndex)?b():D.value++,be(()=>{i("open"),o.value&&(o.value.parentElement.scrollTop=0,o.value.parentElement.scrollLeft=0,o.value.scrollTop=0)})):y.value&&T()}),te(()=>e.fullscreen,w=>{o.value&&(w?(v=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=v)}),ce(()=>{e.modelValue&&(y.value=!0,h.value=!0,L())}),{afterEnter:x,afterLeave:G,beforeLeave:P,handleClose:k,onModalClick:$,close:T,doClose:V,onOpenAutoFocus:De,onCloseAutoFocus:r,onCloseRequested:U,onFocusoutPrevented:N,titleId:c,bodyId:A,closed:E,style:g,overlayDialogStyle:I,rendered:h,visible:y,zIndex:D,displayButtons:a,buttonLayoutClass:s}},Ko=["id"],Wo=["aria-level"],Ke=ne({__name:"DialogContent",props:qe,emits:jo,setup(e,{expose:o,emit:l}){const t=e,d=l;Ro(t);const{dialogRef:i,headerRef:b,bodyId:v,ns:c,style:A,displayButtons:y,buttonLayoutClass:E}=xe(Ue),{focusTrapRef:h}=xe(_e),D=M(()=>{const g=t.fullscreen?"fullscreen":t.sizeMode||"default";return[c.b(),c.is("draggable",t.draggable),c.is("align-center",t.alignCenter),c.is(g)]}),a=Do(h,i),s=M(()=>t.draggable&&!t.fullscreen),u=M(()=>t.overflow),{resetPosition:f}=Eo(i,i,s,u);o({resetPosition:f});const C=()=>{d("close")};return(g,I)=>(F(),q("div",{ref:n(a),class:B(D.value),style:ze(n(A)),tabindex:"-1"},[g.showClose?(F(),q("header",{key:0,ref_key:"headerRef",ref:b,class:B([n(c).e("header"),g.headerClass])},[g.showClose?(F(),q("button",{key:0,"aria-label":"Close",class:B(n(c).e("headerbtn")),type:"button",onClick:C},[ae(n(ho),{name:"regular times",class:B(n(c).e("close"))},null,8,["class"])],2)):K("",!0)],2)):K("",!0),oe("div",{id:n(v),class:B([n(c).e("body"),g.bodyClass])},[oe("div",null,[g.$slots.image?(F(),q("div",{key:0,class:B(n(c).e("image"))},[S(g.$slots,"image")],2)):K("",!0),g.title?(F(),q("span",{key:1,class:B(n(c).e("title")),role:"heading","aria-level":g.ariaLevel},ke(g.title),11,Wo)):K("",!0),oe("div",{class:B(n(c).e("content"))},[S(g.$slots,"default")],2)])],10,Ko),oe("footer",{class:B([n(c).e("footer"),g.footerClass])},[S(g.$slots,"footer",{},()=>[t.footerButtons?.length?(F(),q("div",{key:0,class:B([n(c).e("footer-buttons"),n(E)])},[(F(!0),q(Ze,null,Qe(n(y),(x,G)=>(F(),de(n(O),{key:G,variant:x.variant,full:"",onClick:x.onClick},{default:_(()=>[eo(ke(x.text),1)]),_:2},1032,["variant","onClick"]))),128))],2)):K("",!0)])],2)],6))}});Ke.__docgenInfo={exportName:"default",displayName:"DialogContent",description:"",tags:{},expose:[{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Dialog/DialogContent.vue"]};const Xo=["aria-label","aria-labelledby","aria-describedby"],z=ne({__name:"Dialog",props:$o,emits:Uo,setup(e,{expose:o,emit:l}){const t=e,d=Ge("dialog"),i=m(),b=m(),v=m(),c=M(()=>t.showClose&&t.closeOnClickModal),A=M(()=>t.showClose&&t.closeOnPressEscape),{visible:y,titleId:E,bodyId:h,style:D,overlayDialogStyle:a,rendered:s,zIndex:u,afterEnter:f,afterLeave:C,beforeLeave:g,handleClose:I,onModalClick:x,onOpenAutoFocus:G,onCloseAutoFocus:P,onCloseRequested:L,onFocusoutPrevented:T,displayButtons:k,buttonLayoutClass:$}=qo(t,i,{closeOnClickModal:c,closeOnPressEscape:A});Me(Ue,{dialogRef:i,headerRef:b,bodyId:h,ns:d,rendered:s,style:D,displayButtons:k,buttonLayoutClass:$});const p=Oe(x),V=M(()=>t.draggable&&!t.fullscreen);return o({visible:y,dialogContentRef:v,resetPosition:()=>{v.value?.resetPosition()}}),(r,N)=>(F(),de(n(Mo),{to:r.appendTo,disabled:r.appendTo!=="body"?!1:!r.appendToBody},{default:_(()=>[ae(oo,{name:"dialog-fade",onAfterEnter:n(f),onAfterLeave:n(C),onBeforeLeave:n(g)},{default:_(()=>[to(ae(n(_o),{"custom-mask-event":"",mask:r.modal,"overlay-class":r.modalClass,"z-index":n(u)},{default:_(()=>[oe("div",{role:"dialog","aria-modal":"true","aria-label":r.title||void 0,"aria-labelledby":r.title?void 0:n(E),"aria-describedby":n(h),class:B(`${n(d).namespace.value}-overlay-dialog`),style:ze(n(a)),onClick:N[0]||(N[0]=(...U)=>n(p).onClick&&n(p).onClick(...U)),onMousedown:N[1]||(N[1]=(...U)=>n(p).onMousedown&&n(p).onMousedown(...U)),onMouseup:N[2]||(N[2]=(...U)=>n(p).onMouseup&&n(p).onMouseup(...U))},[ae(n(Po),{loop:"",trapped:n(y),"focus-start-el":"container",onFocusAfterTrapped:n(G),onFocusAfterReleased:n(P),onFocusoutPrevented:n(T),onReleaseRequested:n(L)},{default:_(()=>[n(s)?(F(),de(Ke,ao({key:0,ref_key:"dialogContentRef",ref:v},r.$attrs,{"align-center":r.alignCenter,draggable:V.value,overflow:r.overflow,fullscreen:r.fullscreen,"header-class":r.headerClass,"body-class":r.bodyClass,"footer-class":r.footerClass,"show-close":r.showClose,title:r.title,"aria-level":r.ariaLevel,width:r.width,"size-mode":r.sizeMode,"footer-buttons":r.footerButtons,onClose:n(I)}),lo({default:_(()=>[S(r.$slots,"default")]),_:2},[r.$slots.image?{name:"image",fn:_(()=>[S(r.$slots,"image")]),key:"0"}:void 0,r.$slots.footer?{name:"footer",fn:_(()=>[S(r.$slots,"footer")]),key:"1"}:void 0]),1040,["align-center","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","width","size-mode","footer-buttons","onClose"])):K("",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Xo)]),_:3},8,["mask","overlay-class","z-index"]),[[no,n(y)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});z.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},expose:[{name:"visible",tags:[{title:"description",content:"whether the dialog is visible"}]},{name:"dialogContentRef"},{name:"resetPosition"}],slots:[{name:"image"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Dialog/Dialog.vue"]};const At={title:"Data/Dialog",component:z,argTypes:{modelValue:{control:"boolean",description:"Controla la visibilidad del dialog",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Título del dialog",table:{defaultValue:{summary:""}}},width:{control:"text",description:"Ancho del dialog. Requiere size-mode='fixed'.",table:{defaultValue:{summary:"undefined"}}},sizeMode:{control:"select",options:["default","fixed","adaptive"],description:`Controla el comportamiento del ancho del dialog:
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
      `}}}},Yo=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1),l=()=>{o.value=!1};return{args:e,dialogVisible:o,handleClose:l,processFooterButtons:()=>!e.footerButtons||e.footerButtons.length===0?[{text:"Aceptar",onClick:l,variant:"primary"},{text:"Cancelar",onClick:()=>o.value=!1,variant:"secondary"}]:e.footerButtons.map(d=>({...d,onClick:()=>{o.value=!1}}))}},template:`
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
  `}),Ho=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Jo=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Zo=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),Qo=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),et=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),ot=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1);return{args:e,dialogVisible:o,handleClose:()=>{o.value=!1}}},template:`
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
  `}),tt=e=>({components:{GDialog:z,GConfigProvider:R,GButton:O},setup(){const o=m(!1),l=m(!1),t=m(!1);return{args:e,defaultDialogVisible:o,fixedDialogVisible:l,adaptiveDialogVisible:t,closeDefaultDialog:()=>{o.value=!1},closeFixedDialog:()=>{l.value=!1},closeAdaptiveDialog:()=>{t.value=!1}}},template:`
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
  `}),W=Yo.bind({});W.args={title:"Dialog Básico",showClose:!0,footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};W.parameters={docs:{description:{story:"Dialog básico con contenido de texto y dos botones de acción."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const X=Ho.bind({});X.args={title:"Dialog con Imagen",showClose:!0,sizeMode:"default",footerButtons:[{text:"Aceptar",onClick:()=>{},variant:"primary"},{text:"Cancelar",onClick:()=>{},variant:"secondary"}]};X.parameters={docs:{description:{story:"Dialog con imagen y botones configurados mediante la prop footerButtons."},source:{code:`
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
<\/script>`}}};const Y=Jo.bind({});Y.args={title:"Mensaje Importante",showClose:!1,sizeMode:"default"};Y.parameters={docs:{description:{story:"Dialog sin botón de cerrar, con texto y un solo botón."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const H=Zo.bind({});H.args={title:"Dialog con Ancho Personalizado",showClose:!0,width:"800",sizeMode:"fixed"};H.parameters={docs:{description:{story:"Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const J=Qo.bind({});J.args={title:"Dialog Adaptable",showClose:!0,sizeMode:"adaptive"};J.parameters={docs:{description:{story:"Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const Z=et.bind({});Z.args={title:"Dialog con Botones",showClose:!0};Z.parameters={docs:{description:{story:"Dialog con dos botones."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const Q=ot.bind({});Q.args={title:"Dialog con Tres Botones",showClose:!0};Q.parameters={docs:{description:{story:"Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna."},source:{code:`
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
<\/script>`,language:"html",type:"auto"}}};const ee=tt.bind({});ee.args={showClose:!0};ee.parameters={docs:{description:{story:"Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive."},source:{code:`
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
</g-dialog>`,language:"html",type:"auto"}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => ({
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
})`,...W.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => ({
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
})`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => ({
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
})`,...H.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => ({
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
})`,...J.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => ({
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
})`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`args => ({
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
})`,...ee.parameters?.docs?.source}}};const Tt=["Basic","WithImage","NoCloseButton","CustomWidth","WithLargeImage","TwoButtonsStacked","ThreeButtonsLayout","SizeModeComparison"];export{W as Basic,H as CustomWidth,Y as NoCloseButton,ee as SizeModeComparison,Q as ThreeButtonsLayout,Z as TwoButtonsStacked,X as WithImage,J as WithLargeImage,Tt as __namedExportsOrder,At as default};
