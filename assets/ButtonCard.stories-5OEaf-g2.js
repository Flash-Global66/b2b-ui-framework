import{l as p,m as s,p as o,G as l,J as a,F as g,n as i,T as y,I as b}from"./vue.esm-bundler-BWLFJ3YM.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as k}from"./index-CM9FzEWq.js";import{f as v}from"./index-imBTNTrX.js";const C={class:""},x=["innerHTML"],B=["innerHTML"],V=["innerHTML"],T={name:"GButtonCard"},r=p({...T,props:{title:{type:String,default:""},subtitle:{type:String,default:""},note:{type:String,default:""},icon:{type:Array,default:()=>[""]},disabled:{type:Boolean,default:!1},iconRounded:{type:Boolean,default:!1},height:{type:String,default:""}},emits:["click"],setup(e,{emit:u}){const d=u;function m(t){t.preventDefault(),d("click")}return(t,H)=>{const f=g("fa-icon");return i(),s("div",C,[o("section",{onClick:m,class:a(["card group",[e.disabled?"card-disabled":"card-active",e.height.length?e.height:"card-height"]])},[l(t.$slots,"image",{},()=>[o("div",{class:a({"w-20 h-20 bg-gray-9 rounded-full flex justify-center items-center":e.iconRounded})},[y(f,{class:"text-blue-1 text-12 duration-200 group-hover:text-gray-3",icon:e.icon},null,8,["icon"])],2)],!0),l(t.$slots,"title",{},()=>[o("h4",{class:a([e.disabled?"text-gray-5":"text-gray-2","font-semibold text-6 leading-6 mb-2 text mt-5"]),innerHTML:e.title},null,10,x)],!0),l(t.$slots,"subtitle",{},()=>[o("p",{class:a([e.disabled?"text-gray-5":"text-gray-2","leading-6 text"]),innerHTML:e.subtitle},null,10,B)],!0)],2),l(t.$slots,"note",{},()=>[e.note.length?(i(),s("p",{key:0,class:a(["text-center font-normal text-3 mt-4",e.disabled?"text-gray-4":"text-gray-2"]),innerHTML:e.note},null,10,V)):b("",!0)],!0)])}}}),c=h(r,[["__scopeId","data-v-6812edd0"]]);r.__docgenInfo={exportName:"default",displayName:"ButtonCard",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"note",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",type:{name:"array"},defaultValue:{func:!1,value:"['']"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconRounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"height",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"image"},{name:"title"},{name:"subtitle"},{name:"note"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/ButtonCard/ButtonCard.vue"]};const w={title:"Basic/Button Card",component:c,argTypes:{},args:{title:"Links individuales",subtitle:"Este es el subtitulo",note:"Generar link individual con monto, moneda y propósito para cada uno de tus clientes. Esto te permite tener un mejor control de tus cobranzas.",icon:["fad","copy"]}},L=e=>({components:{GButtonCard:c},template:`
    <g-button-card
      :icon="['fad', 'copy']"
      @click="onClick"
      v-bind="args"
    />
  `,setup(){return{args:e,onClick:v(k("click"))}}}),n=L.bind({});n.parameters={docs:{description:{component:"Commonly used button."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
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
})`,...n.parameters?.docs?.source}}};const E=["Primary"];export{n as Primary,E as __namedExportsOrder,w as default};
