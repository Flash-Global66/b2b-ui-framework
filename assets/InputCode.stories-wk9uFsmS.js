import{l as Y,r as c,x as Q,c as q,H as W,o as X,m as h,p as w,G as Z,I as S,J as V,K as _,L as ee,B as T,u as E,M as O,n as v}from"./vue.esm-bundler-BWLFJ3YM.js";import{a as G}from"./index-CM9FzEWq.js";import{F as N}from"./index.es-C8evZRbd.js";import{f as te,a as ae}from"./index-DDVpgGx_.js";import{G as oe}from"./ConfigProvider-DfgpcNWx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={class:"gui-input-code-wrapper"},se={class:"gui-input-code-container"},le=["autoFocus","data-id","value","required","disabled","onFocus"],re={class:"gui-input-code-icon"},ue={key:0,class:"gui-input-code-error"},ce={name:"GInputCode"},B=Y({...ce,props:{password:{type:Boolean,default:!1},textError:{type:String,default:""},hideTextError:{type:Boolean,default:!1},fields:{type:Number,default:4},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!0},iconPassword:{type:Boolean,default:!0},classInput:{type:String,default:""},classContent:{type:String,default:""}},emits:["change","complete","validate"],setup(n,{expose:D,emit:m}){const i=n,g=m,d={backspace:8,enter:13,left:37,up:38,right:39,down:40},a=c([]),r=c([]),f=c([]),u=Q(i,"fields"),F=c(0),C=c(!0),b=c(0),x=c(!1),K=()=>{let e=[];if(a?.value?.length){for(let t=0;t<u.value;t++)e.push(a.value[t]||"");F.value=a.value.length>=u.value?0:a.value.length}else e=Array(u.value).fill("");r.value=[];for(let t=0;t<u.value;t++)r.value.push(t+1);a.value=e},M=q(()=>i.textError?"gui-input-code-text-error":x.value?"gui-input-code-text-success":"text-blue-3"),$=e=>!i.password||!C.value?"":e!==b.value&&!a.value[e].length?"circle":e!==b.value&&a.value[e].length?"point":"";function j(e,t){b.value=t,e.target.select(e)}function A(){b.value=-1}const L=e=>{const t=parseInt(e.target.dataset.id);e.target.value=e.target.value.replace(/[^\d]/gi,"");let l;const o=e.target.value;if(a.value=Object.assign([],a.value),e.target.value===""||!e.target.validity.valid)return I(a.value);if(o.length>1){let s=o.length+t-1;s>=u.value&&(s=u.value-1),l=r.value[s],o.split("").forEach((p,U)=>{const P=t+U;P<u.value&&(a.value[P]=p)})}else l=r.value[t+1],a.value[t]=o;if(l){const s=f.value[l];s.focus(),s.select()}I(a.value)},R=e=>{const t=e.clipboardData.getData("text");if(!isNaN(t)&&t.length===6){const l=t.split("");for(let o=0;o<u.value;o++)a.value[o]=l[o];f.value[u.value-1].focus()}},z=e=>{const t=parseInt(e.target.dataset.id),l=t-1,o=t+1,s=r.value[l],k=r.value[o];switch(e.keyCode){case d.backspace:{e.preventDefault();const p=[...a.value];a.value[t]?(p[t]="",a.value=p,I(p)):s&&(p[l]="",f.value[s].focus(),a.value=p,I(p));break}case d.left:e.preventDefault(),s&&f.value[s].focus();break;case d.right:e.preventDefault(),k&&f.value[k].focus();break;case d.up:case d.down:e.preventDefault();break;case d.enter:e.preventDefault(),g("validate");break}},I=(e=a.value)=>{const t=e.join("");x.value=t.length>=u.value,g("change",t),g("complete",x.value)},H=(e,t)=>{e&&(f.value[t]=e)},J=()=>{a.value=a.value.map(()=>"")};return K(),W(()=>{f.value=[]}),X(()=>{const e=document.querySelector('[data-id="0"]');e&&e.focus()}),D({clearValues:J}),(e,t)=>(v(),h("section",ne,[w("div",se,[w("div",{class:V([n.classContent,"gui-input-content"])},[(v(!0),h(_,null,ee(a.value,(l,o)=>(v(),h("div",{key:o,class:V(["gui-input-item",[{password:n.password},{error:!!n.textError},{success:x.value},{disabled:n.disabled},$(o)]])},[w("input",{ref_for:!0,ref:s=>H(s,o+1),class:V([n.classInput?n.classInput:`gui-input ${M.value}`]),type:"tel",pattern:"[0-9]+",autoFocus:o===F.value,"data-id":o,value:l,required:i.required,disabled:i.disabled,maxlength:"1",onInput:L,onFocus:s=>j(s,o),onBlur:A,onKeydown:z,onPaste:R},null,42,le)],2))),128))],2),n.password&&n.iconPassword?(v(),h("div",{key:0,onClick:t[0]||(t[0]=l=>C.value=!C.value),class:"gui-input-code-password"},[C.value?(v(),T(E(N),{key:1,icon:E(ae)},null,8,["icon"])):(v(),T(E(N),{key:0,icon:E(te)},null,8,["icon"])),w("p",re,O(C.value?"Mostrar":"Ocultar"),1)])):S("",!0)]),Z(e.$slots,"error",{},()=>[n.textError&&!n.hideTextError?(v(),h("p",ue,O(n.textError),1)):S("",!0)])]))}});B.__docgenInfo={exportName:"default",displayName:"InputCode",description:"",tags:{},expose:[{name:"clearValues"}],props:[{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"textError",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hideTextError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fields",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"iconPassword",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"classInput",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"change"},{name:"complete"},{name:"validate"}],slots:[{name:"error",description:"error custom message error."}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/InputCode/InputCode.vue"]};const Ce={title:"Form/Input Code",component:B,argTypes:{password:{control:{type:"boolean"},defaultValue:!1}}},ie=(n,D)=>({components:{GInputCode:B,GConfigProvider:oe},setup(){const m=c(!1),i=c(""),g=q(()=>n.textError?"Error":m.value?"Completo":"Incompleto");function d(r){i.value=r,G("change")}function a(r){m.value=r,G("complete")}return{codeCompleted:m,codeOTP:i,status:g,args:n,onChangeCode:d,onComplete:a}},template:`
      <g-config-provider>
        <div class="flex items-center flex-col">
          <p class="text-center mb-4 text-gray-2">Estado: {{ status }}</p>
          <g-input-code
            v-bind="args"
            @complete="onComplete"
            @change="onChangeCode"
          />
        </div>
      </g-config-provider>
    `}),y=ie.bind({});y.parameters={docs:{description:{component:""}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args, selected) => {
  return {
    components: {
      GInputCode,
      GConfigProvider
    },
    setup() {
      const codeCompleted = ref(false);
      const codeOTP = ref('');
      const status = computed(() => {
        if (!!args.textError) return 'Error';
        if (codeCompleted.value) return 'Completo';
        return 'Incompleto';
      });
      function onChangeCode(code: string) {
        codeOTP.value = code;
        action('change');
      }
      function onComplete(e: boolean) {
        codeCompleted.value = e;
        action('complete');
      }
      return {
        codeCompleted,
        codeOTP,
        status,
        args,
        onChangeCode,
        onComplete
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center flex-col">
          <p class="text-center mb-4 text-gray-2">Estado: {{ status }}</p>
          <g-input-code
            v-bind="args"
            @complete="onComplete"
            @change="onChangeCode"
          />
        </div>
      </g-config-provider>
    \`
  };
}`,...y.parameters?.docs?.source}}};const he=["Default"];export{y as Default,he as __namedExportsOrder,Ce as default};
