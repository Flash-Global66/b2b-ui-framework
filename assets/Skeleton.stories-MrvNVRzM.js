import{l as c,m as p,n as i,z as k,H as z,u as a,I as y,P as I,r as q,o as J,w as K,F as Q,E as g,J as b,K as G,T as Y,S as N,B as _,A as C,C as j,D as A}from"./vue.esm-bundler-CH9yNyng.js";import{o as R,h as X,l as F,i as Z,v as ee,Q as te,w as ne,G as S}from"./ConfigProvider-CVsr_Nb2.js";import{p as oe}from"./index-Ew7LA03D.js";import{_ as H}from"./plugin-vue_export-helper-CqGSI99y.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ae=R({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:X([Number,Object])}}),se=R({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),re=c({name:"ElSkeletonItem"}),le=c({...re,props:se,setup(e){const t=F("skeleton");return(s,o)=>(i(),p("div",{class:y([a(t).e("item"),a(t).e(s.variant)])},[s.variant==="image"?(i(),k(a(oe),{key:0})):z("v-if",!0)],2))}});var h=H(le,[["__file","skeleton-item.vue"]]);const ie=(e,t=0)=>{if(t===0)return e;const s=I(t)&&!!t.initVal,o=q(s);let r=null;const n=l=>{if(ee(l)){o.value=e.value;return}r&&clearTimeout(r),r=setTimeout(()=>{o.value=e.value},l)},m=l=>{l==="leading"?Z(t)?n(t):n(t.leading):I(t)?n(t.trailing):o.value=!1};return J(()=>m("leading")),K(()=>e.value,l=>{m(l?"leading":"trailing")}),o},me=c({name:"ElSkeleton"}),ce=c({...me,props:ae,setup(e,{expose:t}){const s=e,o=F("skeleton"),r=ie(Q(s,"loading"),s.throttle);return t({uiLoading:r}),(n,m)=>a(r)?(i(),p("div",N({key:0,class:[a(o).b(),a(o).is("animated",n.animated)]},n.$attrs),[(i(!0),p(b,null,G(n.count,l=>(i(),p(b,{key:l},[a(r)?g(n.$slots,"template",{key:l},()=>[Y(h,{class:y(a(o).is("first")),variant:"p"},null,8,["class"]),(i(!0),p(b,null,G(n.rows,$=>(i(),k(h,{key:$,class:y([a(o).e("paragraph"),a(o).is("last",$===n.rows&&n.rows>1)]),variant:"p"},null,8,["class"]))),128))]):z("v-if",!0)],64))),128))],16)):g(n.$slots,"default",_(N({key:1},n.$attrs)))}});var pe=H(ce,[["__file","skeleton.vue"]]);const ue=ne(pe,{SkeletonItem:h}),de=te(h),U=c({name:"GSkeleton",components:{ElSkeleton:ue},props:{animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},throttle:{type:Number}}});function fe(e,t,s,o,r,n){const m=A("el-skeleton");return i(),k(m,_(j({...e.$attrs,...e.$props})),{template:C(()=>[g(e.$slots,"template")]),default:C(()=>[g(e.$slots,"default")]),_:3},16)}const v=L(U,[["render",fe]]);U.__docgenInfo={displayName:"GSkeleton",exportName:"default",description:"",tags:{},props:[{name:"animated",description:"whether showing the animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"count",description:"how many fake items to render to the DOM",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"rows",description:"numbers of the row, only useful when no template slot were given",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"throttle",description:"Rendering delay in milliseconds",type:{name:"number"}}],slots:[{name:"default",description:"Real rendering DOM"},{name:"template",description:"Custom rendering skeleton template"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Skeleton/Skeleton.vue"]};const W=c({name:"GSkeletonItem",components:{ElSkeletonItem:de},props:{variant:{type:String,default:"text"}}});function ge(e,t,s,o,r,n){const m=A("el-skeleton-item");return i(),k(m,_(j({...e.$attrs,...e.$props})),null,16)}const w=L(W,[["render",ge]]);W.__docgenInfo={displayName:"GSkeletonItem",exportName:"default",description:"",tags:{},props:[{name:"variant",description:"The current rendering skeleton type\n`'circle' | 'rect' | 'h1' | 'h3' | 'text' | 'caption' | 'p' | 'image' | 'button'`",type:{name:"SkeletonVariant"},defaultValue:{func:!1,value:"'text'"}}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Skeleton/SkeletonItem.vue"]};const $e={title:"Data/Skeleton",component:v,subcomponents:{GSkeletonItem:w},argTypes:{animated:{defaultValue:!0},count:{defaultValue:1},rows:{defaultValue:3}},parameters:{docs:{description:{component:"When loading data, and you need a rich experience for visual and interactions for your end users, you can choose `skeleton`. <br /> <br /> You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the other. <br /> We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of g-skeleton will show animation"}}}},he=e=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:w},template:`
    <g-config-provider>
      <g-skeleton v-bind="args" />
      <br />
      <g-skeleton style="--gui-skeleton-circle-size: 100px" animated>
        <template #template>
          <g-skeleton-item variant="circle" />
        </template>
      </g-skeleton>
    </g-config-provider>
  `,setup(){return{args:e}}}),f=he.bind({}),ke=()=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:w},template:`
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
  `}),u=ke.bind({});u.parameters={docs:{description:{story:"Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference."}}};const ve=()=>({components:{GSkeleton:v,GConfigProvider:S,GSkeletonItem:w},template:`
    <g-config-provider>
      <g-skeleton :throttle="500" animated />
    </g-config-provider>
  `}),d=ve.bind({});d.parameters={docs:{description:{story:"Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the `throttle` attribute."}}};var P,B,T;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(T=(B=f.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var V,x,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => ({
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
})`,...(D=(x=u.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var O,E,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => ({
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
})`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const Ie=["Default","Custom","Bouncing"];export{d as Bouncing,u as Custom,f as Default,Ie as __namedExportsOrder,$e as default};
