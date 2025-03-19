import{l as c,m as p,n as i,B as k,I as B,u as a,J as y,Q as G,r as j,o as z,w as R,x as A,G as g,K as b,L as I,T as F,S as N,D as _,C,E as P,F as T}from"./vue.esm-bundler-BWLFJ3YM.js";import{o as V,h as L,l as x,i as q,q as U,S as W,w as H,G as S}from"./ConfigProvider-DfgpcNWx.js";import{p as J}from"./index-CI-tzdnq.js";import{_ as D}from"./plugin-vue_export-helper-CqGSI99y.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=V({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:L([Number,Object])}}),Q=V({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),Y=c({name:"ElSkeletonItem"}),X=c({...Y,props:Q,setup(e){const t=x("skeleton");return(s,o)=>(i(),p("div",{class:y([a(t).e("item"),a(t).e(s.variant)])},[s.variant==="image"?(i(),k(a(J),{key:0})):B("v-if",!0)],2))}});var h=D(X,[["__file","skeleton-item.vue"]]);const Z=(e,t=0)=>{if(t===0)return e;const s=G(t)&&!!t.initVal,o=j(s);let r=null;const n=l=>{if(U(l)){o.value=e.value;return}r&&clearTimeout(r),r=setTimeout(()=>{o.value=e.value},l)},m=l=>{l==="leading"?q(t)?n(t):n(t.leading):G(t)?n(t.trailing):o.value=!1};return z(()=>m("leading")),R(()=>e.value,l=>{m(l?"leading":"trailing")}),o},ee=c({name:"ElSkeleton"}),te=c({...ee,props:K,setup(e,{expose:t}){const s=e,o=x("skeleton"),r=Z(A(s,"loading"),s.throttle);return t({uiLoading:r}),(n,m)=>a(r)?(i(),p("div",N({key:0,class:[a(o).b(),a(o).is("animated",n.animated)]},n.$attrs),[(i(!0),p(b,null,I(n.count,l=>(i(),p(b,{key:l},[a(r)?g(n.$slots,"template",{key:l},()=>[F(h,{class:y(a(o).is("first")),variant:"p"},null,8,["class"]),(i(!0),p(b,null,I(n.rows,$=>(i(),k(h,{key:$,class:y([a(o).e("paragraph"),a(o).is("last",$===n.rows&&n.rows>1)]),variant:"p"},null,8,["class"]))),128))]):B("v-if",!0)],64))),128))],16)):g(n.$slots,"default",_(N({key:1},n.$attrs)))}});var ne=D(te,[["__file","skeleton.vue"]]);const oe=H(ne,{SkeletonItem:h}),ae=W(h),E=c({name:"GSkeleton",components:{ElSkeleton:oe},props:{animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},throttle:{type:Number}}});function se(e,t,s,o,r,n){const m=T("el-skeleton");return i(),k(m,_(P({...e.$attrs,...e.$props})),{template:C(()=>[g(e.$slots,"template")]),default:C(()=>[g(e.$slots,"default")]),_:3},16)}const v=O(E,[["render",se]]);E.__docgenInfo={displayName:"GSkeleton",exportName:"default",description:"",tags:{},props:[{name:"animated",description:"whether showing the animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"count",description:"how many fake items to render to the DOM",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"rows",description:"numbers of the row, only useful when no template slot were given",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"throttle",description:"Rendering delay in milliseconds",type:{name:"number"}}],slots:[{name:"default",description:"Real rendering DOM"},{name:"template",description:"Custom rendering skeleton template"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Skeleton/Skeleton.vue"]};const M=c({name:"GSkeletonItem",components:{ElSkeletonItem:ae},props:{variant:{type:String,default:"text"}}});function re(e,t,s,o,r,n){const m=T("el-skeleton-item");return i(),k(m,_(P({...e.$attrs,...e.$props})),null,16)}const w=O(M,[["render",re]]);M.__docgenInfo={displayName:"GSkeletonItem",exportName:"default",description:"",tags:{},props:[{name:"variant",description:"The current rendering skeleton type\n`'circle' | 'rect' | 'h1' | 'h3' | 'text' | 'caption' | 'p' | 'image' | 'button'`",type:{name:"SkeletonVariant"},defaultValue:{func:!1,value:"'text'"}}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Skeleton/SkeletonItem.vue"]};const ge={title:"Data/Skeleton",component:v,subcomponents:{GSkeletonItem:w},argTypes:{animated:{defaultValue:!0},count:{defaultValue:1},rows:{defaultValue:3}},parameters:{docs:{description:{component:"When loading data, and you need a rich experience for visual and interactions for your end users, you can choose `skeleton`. <br /> <br /> You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the other. <br /> We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of g-skeleton will show animation"}}}},le=e=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:w},template:`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  `,setup(){return{args:e}}}),f=le.bind({}),ie=()=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:w},template:`
    <g-config-provider>
      <g-skeleton style="width: 240px" animated>
        <template #template>
          <g-skeleton-item variant="image" class="w-60 h-60 rounded-sm" />
          <g-skeleton-item class="mt-3 w-7/12" variant="p" />
          <div class="w-full flex items-center justify-between">
            <g-skeleton-item variant="text" class="mr-5" />
            <g-skeleton-item variant="text" class="w-1/3" style="--gui-skeleton-color: purple;" />
          </div>
        </template>
      </g-skeleton>
    </g-config-provider>
  `}),u=ie.bind({});u.parameters={docs:{description:{story:"Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference."}}};const me=()=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:w},template:`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  `}),d=me.bind({});d.parameters={docs:{description:{story:"Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the `throttle` attribute."}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  \`,
  setup() {
    return {
      args
    };
  }
})`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton style="width: 240px" animated>
        <template #template>
          <g-skeleton-item variant="image" class="w-60 h-60 rounded-sm" />
          <g-skeleton-item class="mt-3 w-7/12" variant="p" />
          <div class="w-full flex items-center justify-between">
            <g-skeleton-item variant="text" class="mr-5" />
            <g-skeleton-item variant="text" class="w-1/3" style="--gui-skeleton-color: purple;" />
          </div>
        </template>
      </g-skeleton>
    </g-config-provider>
  \`
})`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GSkeleton,
    GConfigProvider,
    GSkeletonItem
  },
  template: \`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  \`
})`,...d.parameters?.docs?.source}}};const he=["Default","Custom","Bouncing"];export{d as Bouncing,u as Custom,f as Default,he as __namedExportsOrder,ge as default};
