import{l as S,c,r as T,u as p,B as F,n as C,C as b,G as h,I as E,m as N,J as H,M as $,P as z,S as D,T as J,F as K}from"./vue.esm-bundler-BWLFJ3YM.js";import{a as W}from"./index-CM9FzEWq.js";import{f as q}from"./index-imBTNTrX.js";import{d as g}from"./dropdown-16ltEPFk.js";import{u as a,a as P,E as Q}from"./index-flFu8xNe.js";import{m as X,o as Y,l as Z,w as _,D as ee,G as y}from"./ConfigProvider-DfgpcNWx.js";import{_ as te}from"./plugin-vue_export-helper-CqGSI99y.js";import{b as ne}from"./style-BhjGsvQW.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as w}from"./Button-1XQhNvEa.js";import{G}from"./index-93gitCH4.js";import{G as k}from"./SelectOption-BQ-YQorJ.js";import"./index-BhZWXNXQ.js";import"./icon-CJSgHkRQ.js";import"./index-CI-tzdnq.js";import"./index-lmL9CkRO.js";import"./index-j6CJlXut.js";import"./index-BjLWKBtf.js";import"./index-CpX1h__I.js";import"./constants-Dnj8X3EN.js";import"./error-Cq9Fpw4b.js";import"./Icon-XKrN76pS.js";import"./index.es-C8evZRbd.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./index-CdJoONYj.js";import"./castArray-B4BJdNV7.js";import"./index-BbqbSJR7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./index-l7aitTEb.js";import"./event-BB_Ol6Sd.js";import"./raf-jRu1D0G2.js";import"./browser-BNBlLTRa.js";import"./typescript-Bp3YSIOJ.js";import"./util-B2mB0_6C.js";import"./index-Clbg1Cmp.js";import"./index-C63O9-vN.js";import"./debounce-kvJk9OHn.js";import"./index-DOEepscu.js";import"./_baseIteratee-BZ8uME3r.js";import"./isEqual-CqKdly6z.js";import"./index-BNOysvgY.js";import"./index-CNp7UpgZ.js";import"./index-S6iShBIJ.js";import"./index-BcVnClcl.js";import"./use-form-common-props-Bn6XiUqq.js";import"./index-CDPhiV_6.js";import"./use-form-item-C_lH8tdx.js";import"./scroll-Cwh7ui4M.js";const re=Y({trigger:P.trigger,placement:g.placement,disabled:P.disabled,visible:a.visible,transition:a.transition,popperOptions:g.popperOptions,tabindex:g.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ie={"update:visible":t=>X(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},ae="onUpdate:visible",pe=S({name:"ElPopover"}),se=S({...pe,props:re,emits:ie,setup(t,{expose:n,emit:i}){const r=t,B=c(()=>r[ae]),s=Z("popover"),l=T(),o=c(()=>{var e;return(e=p(l))==null?void 0:e.popperRef}),A=c(()=>[{width:ne(r.width)},r.popperStyle]),x=c(()=>[s.b(),r.popperClass,{[s.m("plain")]:!!r.content}]),R=c(()=>r.transition===`${s.namespace.value}-fade-in-linear`),j=()=>{var e;(e=l.value)==null||e.hide()},U=()=>{i("before-enter")},M=()=>{i("before-leave")},I=()=>{i("after-enter")},L=()=>{i("update:visible",!1),i("after-leave")};return n({popperRef:o,hide:j}),(e,we)=>(C(),F(p(Q),D({ref_key:"tooltipRef",ref:l},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(x),"popper-style":p(A),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(R),"onUpdate:visible":p(B),onBeforeShow:U,onBeforeHide:M,onShow:I,onHide:L}),{content:b(()=>[e.title?(C(),N("div",{key:0,class:H(p(s).e("title")),role:"title"},$(e.title),3)):E("v-if",!0),h(e.$slots,"default",{},()=>[z($(e.content),1)])]),default:b(()=>[e.$slots.reference?h(e.$slots,"reference",{key:0}):E("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var le=te(se,[["__file","popover.vue"]]);const V=(t,n)=>{const i=n.arg||n.value,r=i?.popperRef;r&&(r.triggerRef=t)};var ce={mounted(t,n){V(t,n)},updated(t,n){V(t,n)}};const de="popover",me=ee(ce,de),ue=_(le,{directive:me}),O=S({name:"GPopover",components:{ElPopover:ue},emits:["show","before-enter","after-enter","hide","before-leave","after-leave"],props:{trigger:P.trigger,placement:g.placement,disabled:{type:Boolean},visible:{type:Boolean,default:null},transition:{type:String,default:"gui-fade-in-linear"},"popper-options":{type:Object,default:()=>({})},tabindex:{type:[Number,String],default:0},content:{type:String,default:""},"popper-style":{type:[String,Array,Object]},"popper-class":{type:[String,Array,Object]},teleported:{type:Boolean,default:!0},title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},"show-after":{type:Number,default:0},"hide-after":{type:Number,default:200},"auto-close":{type:Number,default:0},"show-arrow":{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}}),fe={class:"gui-popover-wrapper"};function ve(t,n,i,r,B,s){const l=K("el-popover");return C(),N("div",fe,[J(l,D({...t.$attrs,...t.$props},{onShow:n[0]||(n[0]=o=>t.$emit("show",o)),onBeforeEnter:n[1]||(n[1]=o=>t.$emit("before-enter",o)),onAfterEnter:n[2]||(n[2]=o=>t.$emit("after-enter",o)),onHide:n[3]||(n[3]=o=>t.$emit("hide",o)),onBeforeLeave:n[4]||(n[4]=o=>t.$emit("before-leave",o)),onAfterLeave:n[5]||(n[5]=o=>t.$emit("after-leave",o))}),{reference:b(()=>[h(t.$slots,"reference")]),default:b(()=>[h(t.$slots,"default")]),_:3},16)])}const f=oe(O,[["render",ve]]);O.__docgenInfo={displayName:"GPopover",exportName:"default",description:"",tags:{},props:[{name:"trigger",description:"how the popover is triggered\n`click/hover/contextmenu`",type:{name:"useTooltipTriggerProps.trigger",func:!0}},{name:"placement",description:"popover placement <br />\n`top/top-start/top-end` <br />\n`bottom/bottom-start/bottom-end` <br />\n`left/left-start/left-end` <br /> \n`right/right-start/right-end`",type:{name:"dropdownProps.placement",func:!0}},{name:"disabled",description:"whether Popover is disabled",type:{name:"boolean"}},{name:"visible",description:"whether popover is visible <br />\n`visible / v-model:visible`",type:{name:"boolean | null"},defaultValue:{func:!1,value:"null"}},{name:"transition",description:"popover transition animation.",type:{name:"string"},defaultValue:{func:!1,value:"'gui-fade-in-linear'"}},{name:"popper-options",description:`parameters for 
<a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a>`,type:{name:"Partial<Options>"},defaultValue:{func:!0,value:"() => ({})"}},{name:"tabindex",description:`<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">
 tabindex
</a> of Popover`,type:{name:"number | string"},defaultValue:{func:!1,value:"0"}},{name:"content",description:"popover content, can be replaced with a default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"popper-style",description:"custom style popper",type:{name:"StyleValue"}},{name:"popper-class",description:"custom class name for popover",type:{name:"ClassType"}},{name:"teleported",description:"whether popover dropdown is teleported to the body",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",description:"popover title",type:{name:"string"}},{name:"width",description:"popover width",type:{name:"string|number"},defaultValue:{func:!1,value:"150"}},{name:"offset",description:"popover offset",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"show-after",description:"delay of appearance, in millisecond",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"hide-after",description:"delay of disappear, in millisecond",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"auto-close",description:"timeout in milliseconds to hide tooltip",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"show-arrow",description:"whether a tooltip arrow is displayed or not.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",description:"when popover inactive and persistent is false , popover will be destroyed",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"onUpdate:visible",type:{name:"(visible: boolean) => void"}}],events:[{name:"show",description:"triggers when popover shows"},{name:"before-enter",description:"triggers when the entering transition before"},{name:"after-enter",description:"triggers when the entering transition ends"},{name:"hide",description:"triggers when popover hides"},{name:"before-leave",description:"triggers when the leaving transition before"},{name:"after-leave",description:"triggers when the leaving transition ends"}],slots:[{name:"default",description:"default text content of popover"},{name:"reference",description:"reference HTML element that triggers popover"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Popover/Popover.vue"]};const ht={title:"Feedback/Popover",component:f,argTypes:{placement:{options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],defaultValue:"top-start"},trigger:{options:["click","hover","contextmenu"],defaultValue:"hover"}},args:{content:"this is content, this is content, this is content",width:200,title:"Title",placement:"top-start",trigger:"hover"},parameters:{docs:{description:{component:"The trigger attribute is used to define how popover is triggered: `hover`, `click`, `contextmenu`. If you want to manually control it, you can set `:visible`."}}}},ge=t=>({components:{GPopover:f,GConfigProvider:y,GButton:w},setup(){return{args:t,onChange:q(W("change"))}},template:`
      <g-config-provider>
        <div class="flex items-center justify-center gap-3 h-72 px-10">

          <g-popover v-bind="args">
            <template #reference>
              <g-button class="w-56">Action</g-button>
            </template>
          </g-popover>

        </div>
      </g-config-provider>
    `}),v=ge.bind({}),be=()=>({components:{GPopover:f,GConfigProvider:y,GButton:w,GSelectOption:k,GSelect:G},template:`
    <g-config-provider>
      <div class="flex gap-3 h-72">
        <g-popover
          placement="bottom-start"
          :width="400"
          trigger="click"
        >
          <template #reference>
            <g-button class="w-56">
              Click
            </g-button>
          </template>

          <div>
            <g-select
              class="flex items-center gap-x-8"
              v-model="selected"
              label="Seleccionar"
              border
            >
              <g-select-option
                v-for="item in options"
                :key="item.numberType"
                :label="item.nameDisplay"
                :value="item.numberType"
              />
            </g-select>
          </div>
        </g-popover>
      </div>
    </g-config-provider>
  `,setup(){return{selected:T("CC"),options:[{nameDisplay:"Cédula de Ciudadanía",numberType:"CC"},{nameDisplay:"Cédula de Extranjería",numberType:"CE"},{nameDisplay:"Pasaporte",numberType:"PASS"},{nameDisplay:"Permiso Especial de Permanencia",numberType:"PEP"}]}}}),d=be.bind({});d.parameters={docs:{description:{story:"Other components/elements can be nested in popover."}}};const he=()=>({components:{GPopover:f,GConfigProvider:y,GButton:w,GSelectOption:k,GSelect:G},template:`
    <g-config-provider>
      <div class="flex gap-3 h-72">
        <g-popover
          :visible="visible"
          placement="bottom-start"
          title="Title manual"
          :width="200"
        >
          <template #reference>
            <g-button class="w-56" @click="visible = !visible">
              Manual
            </g-button>
          </template>
          <div>
            <p class="mb-2">this is content, this is content, this is content</p>
            <g-button color="secondary" size="tiny" @click="visible = false">
              ok
            </g-button>
          </div>
        </g-popover>
      </div>
    </g-config-provider>
  `,setup(){return{visible:T(!1)}}}),m=he.bind({});m.parameters={docs:{description:{story:"Of course, you can nest other operations. It's more light-weight than using a dialog."}}};const ye=()=>({components:{GPopover:f,GConfigProvider:y,GButton:w,GSelectOption:k,GSelect:G},template:`
    <g-config-provider>
      <div class="flex gap-3 h-72">
        <g-popover
          title="Title contextmenu"
          :width="200"
          trigger="contextmenu"
          content="this is content, this is content, this is content"
        >
          <template #reference>
            <g-button class="w-56">contextmenu</g-button>
          </template>
        </g-popover>
      </div>
    </g-config-provider>
  `,setup(){}}),u=ye.bind({});u.parameters={docs:{description:{story:"Can be used as a context menu by right-clicking."}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  return {
    components: {
      GPopover,
      GConfigProvider,
      GButton
    },
    setup() {
      return {
        args,
        onChange: fn(action('change'))
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center justify-center gap-3 h-72 px-10">

          <g-popover v-bind="args">
            <template #reference>
              <g-button class="w-56">Action</g-button>
            </template>
          </g-popover>

        </div>
      </g-config-provider>
    \`
  };
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GPopover,
    GConfigProvider,
    GButton,
    GSelectOption,
    GSelect
  },
  template: \`
    <g-config-provider>
      <div class="flex gap-3 h-72">
        <g-popover
          placement="bottom-start"
          :width="400"
          trigger="click"
        >
          <template #reference>
            <g-button class="w-56">
              Click
            </g-button>
          </template>

          <div>
            <g-select
              class="flex items-center gap-x-8"
              v-model="selected"
              label="Seleccionar"
              border
            >
              <g-select-option
                v-for="item in options"
                :key="item.numberType"
                :label="item.nameDisplay"
                :value="item.numberType"
              />
            </g-select>
          </div>
        </g-popover>
      </div>
    </g-config-provider>
  \`,
  setup() {
    const selected = ref('CC');
    const options = [{
      "nameDisplay": "Cédula de Ciudadanía",
      "numberType": "CC"
    }, {
      "nameDisplay": "Cédula de Extranjería",
      "numberType": "CE"
    }, {
      "nameDisplay": "Pasaporte",
      "numberType": "PASS"
    }, {
      "nameDisplay": "Permiso Especial de Permanencia",
      "numberType": "PEP"
    }];
    return {
      selected,
      options
    };
  }
})`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GPopover,
    GConfigProvider,
    GButton,
    GSelectOption,
    GSelect
  },
  template: \`
    <g-config-provider>
      <div class="flex gap-3 h-72">
        <g-popover
          :visible="visible"
          placement="bottom-start"
          title="Title manual"
          :width="200"
        >
          <template #reference>
            <g-button class="w-56" @click="visible = !visible">
              Manual
            </g-button>
          </template>
          <div>
            <p class="mb-2">this is content, this is content, this is content</p>
            <g-button color="secondary" size="tiny" @click="visible = false">
              ok
            </g-button>
          </div>
        </g-popover>
      </div>
    </g-config-provider>
  \`,
  setup() {
    const visible = ref(false);
    return {
      visible
    };
  }
})`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GPopover,
    GConfigProvider,
    GButton,
    GSelectOption,
    GSelect
  },
  template: \`
    <g-config-provider>
      <div class="flex gap-3 h-72">
        <g-popover
          title="Title contextmenu"
          :width="200"
          trigger="contextmenu"
          content="this is content, this is content, this is content"
        >
          <template #reference>
            <g-button class="w-56">contextmenu</g-button>
          </template>
        </g-popover>
      </div>
    </g-config-provider>
  \`,
  setup() {}
})`,...u.parameters?.docs?.source}}};const yt=["Default","RichContent","NestedOperation","ContextMenu"];export{u as ContextMenu,v as Default,m as NestedOperation,d as RichContent,yt as __namedExportsOrder,ht as default};
