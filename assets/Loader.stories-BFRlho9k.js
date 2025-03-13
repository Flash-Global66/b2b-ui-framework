import{l as p,z as m,A as i,U as u,n as r,m as f,H as _,p as g,r as d}from"./vue.esm-bundler-CH9yNyng.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const c=p({name:"Loader",props:{show:{default:!1,type:Boolean}}}),b=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,k={key:0,class:"gui-loader",style:{"background-color":"rgba(4, 16, 66, 0.8)"}};function w(a,o,v,x,y,B){return r(),m(u,{name:"fade"},{default:i(()=>[a.show?(r(),f("div",k,o[0]||(o[0]=[g("img",{src:b,class:"h-12"},null,-1)]))):_("",!0)]),_:1})}const l=L(c,[["render",w]]);c.__docgenInfo={displayName:"Loader",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Loader/Loader.vue"]};d(!1);d(!1);const N={title:"Feedback/Loader",component:l},h=a=>({components:{Loader:l},template:'<Loader v-bind="args"/>',setup(){return{args:a}}}),e=h.bind({});e.args={show:!0};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Loader
  },
  template: \`<Loader v-bind="args"/>\`,
  setup() {
    return {
      args
    };
  }
})`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,N as default};
