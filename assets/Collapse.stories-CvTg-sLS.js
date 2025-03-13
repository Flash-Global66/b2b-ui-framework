import{r as o,l as F,w as x,m as A,E as p,n as G,W as Q,f as R,d as I,p as C,T as B,u as m,A as X,U as Y,I as w,O as Z,L as ee,H as ae,_ as te,$ as le}from"./vue.esm-bundler-CH9yNyng.js";import{F as ne}from"./index.es-C9Yfwrzt.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as O}from"./ConfigProvider-CVsr_Nb2.js";const se={active:o(null),count:o(0),accordion:o(!1),disabled:o(!1),hideIcon:o(!1),setActiveItem:()=>console.log},P=Symbol("GCollapse"),ie={class:"gui-accordion"},ce={name:"GCollapseContent"},V=F({...ce,props:{modelValue:{type:Number,default:null},default:{type:Number,default:null},disabled:{type:Boolean,default:!1},accordion:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1}},emits:["update:modelValue","click-collapse"],setup(c,{emit:d}){const e=c,i=d,f=o(0),n=o(e.modelValue||e.default),s=o(e.accordion),v=o(e.disabled),b=o(e.hideIcon);return!e.accordion&&e.modelValue!==void 0&&!Array.isArray(e.modelValue)&&console.error("El v-model no es un array. Envuelva su referencia en un array."),e.accordion&&Array.isArray(e.modelValue)&&console.error("El v-model es un array. Su referencia debe ser en un tipo primitivo."),e.modelValue||(s.value?n.value=e.default:n.value=e.default!==null?[e.default]:[]),x(()=>e.modelValue,t=>{Array.isArray(t)&&console.log(t[0],typeof t),n.value=t},{deep:!0,immediate:!0}),x(()=>e.disabled,t=>{v.value=t}),x(()=>e.hideIcon,t=>{b.value=t}),Q(P,{count:f,active:n,accordion:s,disabled:v,hideIcon:b,setActiveItem:(t,l)=>{let r=t;const _=n.value;if(s.value&&l&&(n.value=t),!s.value&&Array.isArray(n.value)){const u=n.value,y=u.findIndex(h=>h===t);y!==-1?u.splice(y,1):u.push(t),r=u,n.value=u}i("click-collapse",{itemOld:_,itemNew:r,itemCurrent:t,visible:l}),i("update:modelValue",r)}}),(t,l)=>(G(),A("div",ie,[p(t.$slots,"default")]))}});V.__docgenInfo={exportName:"default",displayName:"Collapse",description:"",tags:{},props:[{name:"modelValue",type:{name:"ValueCollapse"},defaultValue:{func:!1,value:"null"}},{name:"default",type:{name:"number | string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"accordion",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["ValueCollapse"]}},{name:"click-collapse",type:{names:["ChangeCollapse"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Collapse/Collapse.vue"]};const de=["aria-disabled"],re={class:"flex"},ue={name:"GCollapseItem"},L=F({...ue,props:{classHead:{type:String,default:""},classIcon:{type:String,default:""},classContent:{type:String,default:""},disabled:{type:Boolean,default:!1},name:{type:String},title:{type:String,default:""},hideIcon:{type:Boolean,default:!1}},emits:["open","close","opened","closed","click-item"],setup(c,{emit:d}){const e=c,i=d,{count:f,active:n,disabled:s,accordion:v,setActiveItem:b,hideIcon:D}=R(P,se),t=o(e.name?e.name:f.value++),l=o(!1),r=I(()=>s.value||e.disabled),_=I(()=>D.value||e.hideIcon),u=I(()=>[e.classHead.length?e.classHead:"flex w-full justify-between border-solid border-2 border-gray-18 px-4 sm:px-6 py-3 rounded-md flex-1 items-center",!e.classHead.length&&r.value?"bg-gray-18 text-gray-4":"bg-white text-gray-1 font-medium",r.value?"cursor-not-allowed select-none":"cursor-pointer"]),y=I(()=>[e.classIcon.length?e.classIcon:"flex items-center text-6",r.value?"text-gray-5":"text-gray-3",{"active-icon":l.value}]);x(n,()=>{h()});function h(){v.value&&Array.isArray(n.value)?l.value=n.value.includes(t.value):l.value=n.value===t.value}h();function j(a){a.preventDefault(),!r.value&&(l.value=!l.value,b(t.value,l.value),i("click-item",{event:a,itemKey:t.value,visible:l.value,disabled:s.value}))}function z(a){a.style.height="0px"}function K(a){i("open"),requestAnimationFrame(()=>{a.style.height=a.scrollHeight+"px"})}function M(a){i("opened"),a.style.height="auto"}function U(a){a.style.height=a.scrollHeight+"px"}function W(a){i("close"),requestAnimationFrame(()=>{a.style.height="0"})}function J(a){i("close"),requestAnimationFrame(()=>{a.style.height="0"})}return(a,fe)=>(G(),A("section",null,[C("div",{onClick:j},[p(a.$slots,"head",{active:l.value,disabled:m(s)},()=>[C("button",{class:w([u.value,{active:l.value}]),"aria-disabled":m(s)},[p(a.$slots,"title",{active:l.value,disabled:m(s)},()=>[Z(ee(c.title),1)],!0),C("div",re,[p(a.$slots,"icon",{active:l.value,disabled:m(s)},()=>[_.value?ae("",!0):(G(),A("div",{key:0,class:w([...y.value,"duration-200"])},[B(m(ne),{icon:["far","chevron-down"]})],2))],!0),p(a.$slots,"right",{active:l.value,disabled:m(s)},void 0,!0)])],10,de)],!0)]),B(Y,{name:"gui-collapse",onBeforeEnter:z,onEnter:K,onAfterEnter:M,onBeforeLeave:U,onLeave:W,onAfterLeave:J},{default:X(()=>[te(C("div",{class:w(c.classContent)},[p(a.$slots,"content",{active:l.value,disabled:m(s)},void 0,!0)],2),[[le,l.value]])]),_:3})]))}}),T=oe(L,[["__scopeId","data-v-aa3f6e0a"]]);L.__docgenInfo={exportName:"default",displayName:"CollapseItem",description:"",tags:{},props:[{name:"classHead",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"classIcon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hideIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"open"},{name:"close"},{name:"opened"},{name:"closed"},{name:"click-item"}],slots:[{name:"head",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"title",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"icon",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"right",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]},{name:"content",scoped:!0,bindings:[{name:"active",title:"binding"},{name:"disabled",title:"binding"}]}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Collapse/CollapseItem.vue"]};const he={title:"Data/Collapse",component:V,subcomponents:{GCollapseItem:T},argTypes:{animated:{defaultValue:!0},count:{defaultValue:1},rows:{defaultValue:3}},parameters:{docs:{description:{component:"The collapse component will help us to compress the information, to be able to make it work like an accordion, this means that only one can be open"}}}},me=c=>({components:{GCollapse:V,GConfigProvider:O,GCollapseItem:T},template:`
    <g-config-provider>
      <button @click="toggleDisabled">
        click {{ disabled }}
      </button>
      <g-collapse
        v-model="accordionIndex"
        accordion
        :disabled="disabled"
        prevent-default
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  `,setup(){const d=o(!1),e=o(0);function i(n){console.log(n)}function f(){d.value=!d.value}return{args:c,toggleDisabled:f,disabled:d,onClickItem:i,accordionIndex:e}}}),k=me.bind({}),pe=()=>({components:{GCollapse:V,GConfigProvider:O,GCollapseItem:T},template:`
    <g-config-provider>
      accordionIndex: {{ accordionIndex }}
      <g-collapse
        v-model="accordionIndex"
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  `,setup(){const c=o([0]);function d(e){console.log(e)}return{onClickItem:d,accordionIndex:c}}}),g=pe.bind({});g.parameters={docs:{description:{story:"Global66 B2B UI only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work. <br /> <br /> Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference."}}};var S,q,N;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    GCollapse,
    GConfigProvider,
    GCollapseItem
  },
  template: \`
    <g-config-provider>
      <button @click="toggleDisabled">
        click {{ disabled }}
      </button>
      <g-collapse
        v-model="accordionIndex"
        accordion
        :disabled="disabled"
        prevent-default
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  \`,
  setup() {
    const disabled = ref(false);
    const accordionIndex = ref(0);
    function onClickItem(item) {
      console.log(item);
    }
    function toggleDisabled() {
      disabled.value = !disabled.value;
    }
    return {
      args,
      toggleDisabled,
      disabled,
      onClickItem,
      accordionIndex
    };
  }
})`,...(N=(q=k.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var H,$,E;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    GCollapse,
    GConfigProvider,
    GCollapseItem
  },
  template: \`
    <g-config-provider>
      accordionIndex: {{ accordionIndex }}
      <g-collapse
        v-model="accordionIndex"
        @click-item="onClickItem"
        class="grid grid-cols-1 gap-y-6 mt-6">
          <g-collapse-item title="Titulo 01" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
          <g-collapse-item title="Titulo 02" class="bg-gray-18 rounded-md">
            <template #content>
              que paso
            </template>
          </g-collapse-item>
      </g-collapse>
    </g-config-provider>
  \`,
  setup() {
    const accordionIndex = ref([0]);
    function onClickItem(item) {
      console.log(item);
    }
    return {
      onClickItem,
      accordionIndex
    };
  }
})`,...(E=($=g.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};const Ie=["Default","Custom"];export{g as Custom,k as Default,Ie as __namedExportsOrder,he as default};
