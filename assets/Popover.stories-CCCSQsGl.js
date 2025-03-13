import{l as S,d as c,r as T,u as s,z as ee,n as C,A as b,E as h,H as E,m as z,I as te,L as $,O as ne,S as F,T as oe,D as re}from"./vue.esm-bundler-CH9yNyng.js";import{a as ie}from"./index-CRIi8hFt.js";import{f as ae}from"./index-BZmkVB_o.js";import{d as g}from"./dropdown-DdkK5zgO.js";import{u as a,a as P,E as se}from"./index-BKIhFKZf.js";import{m as pe,o as le,l as ce,w as de,B as me,G as y}from"./ConfigProvider-CVsr_Nb2.js";import{_ as ue}from"./plugin-vue_export-helper-CqGSI99y.js";import{b as fe}from"./style-Dd3mC4oU.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as w}from"./Button-DXe_uWRw.js";import{G}from"./index-53S0JHDU.js";import{G as k}from"./SelectOption-ELfMwAXt.js";import"./index-Cr5Bs5Fe.js";import"./icon-DnzAWH09.js";import"./index-Ew7LA03D.js";import"./index-EQ6ThY8V.js";import"./index-ItzGEuCN.js";import"./index-Ckl04tfN.js";import"./use-form-item-BSwEs_HW.js";import"./error-Cq9Fpw4b.js";import"./Icon-B6M9nJHU.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./index-BccPGGIL.js";import"./index-CGK9l38B.js";import"./event-BB_Ol6Sd.js";import"./raf-DzUuINB1.js";import"./browser-uFWmaFN2.js";import"./typescript-Bp3YSIOJ.js";import"./util-B2mB0_6C.js";import"./index-DFiBxbdY.js";import"./index-DxcuRkR-.js";import"./castArray-BN-XtI-Z.js";import"./_Uint8Array-D0cj8fVg.js";import"./_initCloneObject-CQteI-2K.js";import"./index-DYzCgaMC.js";import"./debounce-CKp6npxF.js";import"./index-lLyIYpAf.js";import"./_baseIteratee-D9H2gTYB.js";import"./isEqual-Bvtq4mIv.js";import"./index-Dj0BFlpg.js";import"./index-DDfoCAMz.js";import"./index-B7WRBD8W.js";import"./index-UN-7Ykss.js";import"./use-form-common-props-9nfe3vwH.js";import"./index-BrHHf138.js";import"./scroll-TL91Ez5k.js";const ge=le({trigger:P.trigger,placement:g.placement,disabled:P.disabled,visible:a.visible,transition:a.transition,popperOptions:g.popperOptions,tabindex:g.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),be={"update:visible":t=>pe(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},he="onUpdate:visible",ye=S({name:"ElPopover"}),we=S({...ye,props:ge,emits:be,setup(t,{expose:n,emit:i}){const r=t,B=c(()=>r[he]),p=ce("popover"),l=T(),o=c(()=>{var e;return(e=s(l))==null?void 0:e.popperRef}),W=c(()=>[{width:fe(r.width)},r.popperStyle]),q=c(()=>[p.b(),r.popperClass,{[p.m("plain")]:!!r.content}]),J=c(()=>r.transition===`${p.namespace.value}-fade-in-linear`),Q=()=>{var e;(e=l.value)==null||e.hide()},X=()=>{i("before-enter")},Y=()=>{i("before-leave")},Z=()=>{i("after-enter")},_=()=>{i("update:visible",!1),i("after-leave")};return n({popperRef:o,hide:Q}),(e,Oe)=>(C(),ee(s(se),F({ref_key:"tooltipRef",ref:l},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":s(q),"popper-style":s(W),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":s(J),"onUpdate:visible":s(B),onBeforeShow:X,onBeforeHide:Y,onShow:Z,onHide:_}),{content:b(()=>[e.title?(C(),z("div",{key:0,class:te(s(p).e("title")),role:"title"},$(e.title),3)):E("v-if",!0),h(e.$slots,"default",{},()=>[ne($(e.content),1)])]),default:b(()=>[e.$slots.reference?h(e.$slots,"reference",{key:0}):E("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Ce=ue(we,[["__file","popover.vue"]]);const V=(t,n)=>{const i=n.arg||n.value,r=i==null?void 0:i.popperRef;r&&(r.triggerRef=t)};var Pe={mounted(t,n){V(t,n)},updated(t,n){V(t,n)}};const Se="popover",Te=me(Pe,Se),Ge=de(Ce,{directive:Te}),K=S({name:"GPopover",components:{ElPopover:Ge},emits:["show","before-enter","after-enter","hide","before-leave","after-leave"],props:{trigger:P.trigger,placement:g.placement,disabled:{type:Boolean},visible:{type:Boolean,default:null},transition:{type:String,default:"gui-fade-in-linear"},"popper-options":{type:Object,default:()=>({})},tabindex:{type:[Number,String],default:0},content:{type:String,default:""},"popper-style":{type:[String,Array,Object]},"popper-class":{type:[String,Array,Object]},teleported:{type:Boolean,default:!0},title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},"show-after":{type:Number,default:0},"hide-after":{type:Number,default:200},"auto-close":{type:Number,default:0},"show-arrow":{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}}),ke={class:"gui-popover-wrapper"};function Be(t,n,i,r,B,p){const l=re("el-popover");return C(),z("div",ke,[oe(l,F({...t.$attrs,...t.$props},{onShow:n[0]||(n[0]=o=>t.$emit("show",o)),onBeforeEnter:n[1]||(n[1]=o=>t.$emit("before-enter",o)),onAfterEnter:n[2]||(n[2]=o=>t.$emit("after-enter",o)),onHide:n[3]||(n[3]=o=>t.$emit("hide",o)),onBeforeLeave:n[4]||(n[4]=o=>t.$emit("before-leave",o)),onAfterLeave:n[5]||(n[5]=o=>t.$emit("after-leave",o))}),{reference:b(()=>[h(t.$slots,"reference")]),default:b(()=>[h(t.$slots,"default")]),_:3},16)])}const f=ve(K,[["render",Be]]);K.__docgenInfo={displayName:"GPopover",exportName:"default",description:"",tags:{},props:[{name:"trigger",description:"how the popover is triggered\n`click/hover/contextmenu`",type:{name:"useTooltipTriggerProps.trigger",func:!0}},{name:"placement",description:"popover placement <br />\n`top/top-start/top-end` <br />\n`bottom/bottom-start/bottom-end` <br />\n`left/left-start/left-end` <br /> \n`right/right-start/right-end`",type:{name:"dropdownProps.placement",func:!0}},{name:"disabled",description:"whether Popover is disabled",type:{name:"boolean"}},{name:"visible",description:"whether popover is visible <br />\n`visible / v-model:visible`",type:{name:"boolean | null"},defaultValue:{func:!1,value:"null"}},{name:"transition",description:"popover transition animation.",type:{name:"string"},defaultValue:{func:!1,value:"'gui-fade-in-linear'"}},{name:"popper-options",description:`parameters for 
<a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a>`,type:{name:"Partial<Options>"},defaultValue:{func:!0,value:"() => ({})"}},{name:"tabindex",description:`<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">
 tabindex
</a> of Popover`,type:{name:"number | string"},defaultValue:{func:!1,value:"0"}},{name:"content",description:"popover content, can be replaced with a default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"popper-style",description:"custom style popper",type:{name:"StyleValue"}},{name:"popper-class",description:"custom class name for popover",type:{name:"ClassType"}},{name:"teleported",description:"whether popover dropdown is teleported to the body",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",description:"popover title",type:{name:"string"}},{name:"width",description:"popover width",type:{name:"string|number"},defaultValue:{func:!1,value:"150"}},{name:"offset",description:"popover offset",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"show-after",description:"delay of appearance, in millisecond",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"hide-after",description:"delay of disappear, in millisecond",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"auto-close",description:"timeout in milliseconds to hide tooltip",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"show-arrow",description:"whether a tooltip arrow is displayed or not.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",description:"when popover inactive and persistent is false , popover will be destroyed",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"onUpdate:visible",type:{name:"(visible: boolean) => void"}}],events:[{name:"show",description:"triggers when popover shows"},{name:"before-enter",description:"triggers when the entering transition before"},{name:"after-enter",description:"triggers when the entering transition ends"},{name:"hide",description:"triggers when popover hides"},{name:"before-leave",description:"triggers when the leaving transition before"},{name:"after-leave",description:"triggers when the leaving transition ends"}],slots:[{name:"default",description:"default text content of popover"},{name:"reference",description:"reference HTML element that triggers popover"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Popover/Popover.vue"]};const Et={title:"Feedback/Popover",component:f,argTypes:{placement:{options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],defaultValue:"top-start"},trigger:{options:["click","hover","contextmenu"],defaultValue:"hover"}},args:{content:"this is content, this is content, this is content",width:200,title:"Title",placement:"top-start",trigger:"hover"},parameters:{docs:{description:{component:"The trigger attribute is used to define how popover is triggered: `hover`, `click`, `contextmenu`. If you want to manually control it, you can set `:visible`."}}}},Ee=t=>({components:{GPopover:f,GConfigProvider:y,GButton:w},setup(){return{args:t,onChange:ae(ie("change"))}},template:`
      <g-config-provider>
        <div class="flex items-center justify-center gap-3 h-72 px-10">

          <g-popover v-bind="args">
            <template #reference>
              <g-button class="w-56">Action</g-button>
            </template>
          </g-popover>

        </div>
      </g-config-provider>
    `}),v=Ee.bind({}),$e=()=>({components:{GPopover:f,GConfigProvider:y,GButton:w,GSelectOption:k,GSelect:G},template:`
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
  `,setup(){return{selected:T("CC"),options:[{nameDisplay:"Cédula de Ciudadanía",numberType:"CC"},{nameDisplay:"Cédula de Extranjería",numberType:"CE"},{nameDisplay:"Pasaporte",numberType:"PASS"},{nameDisplay:"Permiso Especial de Permanencia",numberType:"PEP"}]}}}),d=$e.bind({});d.parameters={docs:{description:{story:"Other components/elements can be nested in popover."}}};const Ve=()=>({components:{GPopover:f,GConfigProvider:y,GButton:w,GSelectOption:k,GSelect:G},template:`
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
  `,setup(){return{visible:T(!1)}}}),m=Ve.bind({});m.parameters={docs:{description:{story:"Of course, you can nest other operations. It's more light-weight than using a dialog."}}};const Ne=()=>({components:{GPopover:f,GConfigProvider:y,GButton:w,GSelectOption:k,GSelect:G},template:`
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
  `,setup(){}}),u=Ne.bind({});u.parameters={docs:{description:{story:"Can be used as a context menu by right-clicking."}}};var N,O,D;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(D=(O=v.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var A,x,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
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
})`,...(R=(x=d.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var j,U,L;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
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
})`,...(L=(U=m.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var M,H,I;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
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
})`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const $t=["Default","RichContent","NestedOperation","ContextMenu"];export{u as ContextMenu,v as Default,m as NestedOperation,d as RichContent,$t as __namedExportsOrder,Et as default};
