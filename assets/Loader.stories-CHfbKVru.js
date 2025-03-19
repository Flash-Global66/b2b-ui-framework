import{l as d,B as c,C as l,U as p,n as r,m,I as i,p as u,r as s}from"./vue.esm-bundler-BWLFJ3YM.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const t=d({name:"Loader",props:{show:{default:!1,type:Boolean}}}),_=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,g={key:0,class:"gui-loader",style:{"background-color":"rgba(4, 16, 66, 0.8)"}};function L(a,o,k,w,h,B){return r(),c(p,{name:"fade"},{default:l(()=>[a.show?(r(),m("div",g,o[0]||(o[0]=[u("img",{src:_,class:"h-12"},null,-1)]))):i("",!0)]),_:1})}const n=f(t,[["render",L]]);t.__docgenInfo={displayName:"Loader",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Loader/Loader.vue"]};s(!1);s(!1);const x={title:"Feedback/Loader",component:n},b=a=>({components:{Loader:n},template:'<Loader v-bind="args"/>',setup(){return{args:a}}}),e=b.bind({});e.args={show:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Loader
  },
  template: \`<Loader v-bind="args"/>\`,
  setup() {
    return {
      args
    };
  }
})`,...e.parameters?.docs?.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,x as default};
