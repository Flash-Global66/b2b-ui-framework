import{l as b,m as s,p as o,E as l,I as a,D as h,n as i,T as k,H as v}from"./vue.esm-bundler-CH9yNyng.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as x}from"./index-CRIi8hFt.js";import{f as B}from"./index-BZmkVB_o.js";const V={class:""},T=["innerHTML"],H=["innerHTML"],L=["innerHTML"],M={name:"GButtonCard"},d=b({...M,props:{title:{type:String,default:""},subtitle:{type:String,default:""},note:{type:String,default:""},icon:{type:Array,default:()=>[""]},disabled:{type:Boolean,default:!1},iconRounded:{type:Boolean,default:!1},height:{type:String,default:""}},emits:["click"],setup(e,{emit:f}){const p=f;function g(t){t.preventDefault(),p("click")}return(t,E)=>{const y=h("fa-icon");return i(),s("div",V,[o("section",{onClick:g,class:a(["card group",[e.disabled?"card-disabled":"card-active",e.height.length?e.height:"card-height"]])},[l(t.$slots,"image",{},()=>[o("div",{class:a({"w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center":e.iconRounded})},[k(y,{class:"text-blue-1 text-12 duration-200 group-hover:text-gray-3",icon:e.icon},null,8,["icon"])],2)],!0),l(t.$slots,"title",{},()=>[o("h4",{class:a([e.disabled?"text-gray-5":"text-gray-2","font-semibold text-6 leading-6 mb-2 text mt-5"]),innerHTML:e.title},null,10,T)],!0),l(t.$slots,"subtitle",{},()=>[o("p",{class:a([e.disabled?"text-gray-5":"text-gray-2","leading-6 text"]),innerHTML:e.subtitle},null,10,H)],!0)],2),l(t.$slots,"note",{},()=>[e.note.length?(i(),s("p",{key:0,class:a(["text-center font-normal text-3 mt-4",e.disabled?"text-gray-4":"text-gray-2"]),innerHTML:e.note},null,10,L)):v("",!0)],!0)])}}}),m=C(d,[["__scopeId","data-v-6812edd0"]]);d.__docgenInfo={exportName:"default",displayName:"ButtonCard",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"note",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",type:{name:"array"},defaultValue:{func:!1,value:"['']"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconRounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"height",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"image"},{name:"title"},{name:"subtitle"},{name:"note"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/ButtonCard/ButtonCard.vue"]};const I={title:"Basic/Button Card",component:m,argTypes:{},args:{title:"Links individuales",subtitle:"Este es el subtitulo",note:"Generar link individual con monto, moneda y propósito para cada uno de tus clientes. Esto te permite tener un mejor control de tus cobranzas.",icon:["fad","copy"]}},S=e=>({components:{GButtonCard:m},template:`
    <g-button-card
      :icon="['fad', 'copy']"
      @click="onClick"
      v-bind="args"
    />
  `,setup(){return{args:e,onClick:B(x("click"))}}}),n=S.bind({});n.parameters={docs:{description:{component:"Commonly used button."}}};var r,c,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    GButtonCard
  },
  template: \`
    <g-button-card
      :icon="['fad', 'copy']"
      @click="onClick"
      v-bind="args"
    />
  \`,
  setup() {
    return {
      args,
      onClick: fn(action('click'))
    };
  }
})`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const R=["Primary"];export{n as Primary,R as __namedExportsOrder,I as default};
