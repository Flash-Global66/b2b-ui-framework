import{l as X,r as c,F as Z,d as j,G as _,o as ee,m as h,p as E,E as te,H as S,I as V,J as ae,K as oe,z as T,u as w,L as O,n as v}from"./vue.esm-bundler-CH9yNyng.js";import{a as G}from"./index-CRIi8hFt.js";import{F as N}from"./index.es-C9Yfwrzt.js";import{f as ne,a as se}from"./index-DDVpgGx_.js";import{G as le}from"./ConfigProvider-CVsr_Nb2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const re={class:"gui-input-code-wrapper"},ue={class:"gui-input-code-container"},ce=["autoFocus","data-id","value","required","disabled","onFocus"],ie={class:"gui-input-code-icon"},de={key:0,class:"gui-input-code-error"},pe={name:"GInputCode"},F=X({...pe,props:{password:{type:Boolean,default:!1},textError:{type:String,default:""},hideTextError:{type:Boolean,default:!1},fields:{type:Number,default:4},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!0},iconPassword:{type:Boolean,default:!0},classInput:{type:String,default:""},classContent:{type:String,default:""}},emits:["change","complete","validate"],setup(s,{expose:D,emit:m}){const i=s,g=m,d={backspace:8,enter:13,left:37,up:38,right:39,down:40},t=c([]),r=c([]),f=c([]),u=Z(i,"fields"),B=c(0),C=c(!0),b=c(0),x=c(!1),z=()=>{var a;let e=[];if((a=t==null?void 0:t.value)!=null&&a.length){for(let o=0;o<u.value;o++)e.push(t.value[o]||"");B.value=t.value.length>=u.value?0:t.value.length}else e=Array(u.value).fill("");r.value=[];for(let o=0;o<u.value;o++)r.value.push(o+1);t.value=e},A=j(()=>i.textError?"gui-input-code-text-error":x.value?"gui-input-code-text-success":"text-blue-3"),L=e=>!i.password||!C.value?"":e!==b.value&&!t.value[e].length?"circle":e!==b.value&&t.value[e].length?"point":"";function M(e,a){b.value=a,e.target.select(e)}function R(){b.value=-1}const H=e=>{const a=parseInt(e.target.dataset.id);e.target.value=e.target.value.replace(/[^\d]/gi,"");let o;const n=e.target.value;if(t.value=Object.assign([],t.value),e.target.value===""||!e.target.validity.valid)return I(t.value);if(n.length>1){let l=n.length+a-1;l>=u.value&&(l=u.value-1),o=r.value[l],n.split("").forEach((p,W)=>{const P=a+W;P<u.value&&(t.value[P]=p)})}else o=r.value[a+1],t.value[a]=n;if(o){const l=f.value[o];l.focus(),l.select()}I(t.value)},J=e=>{const a=e.clipboardData.getData("text");if(!isNaN(a)&&a.length===6){const o=a.split("");for(let n=0;n<u.value;n++)t.value[n]=o[n];f.value[u.value-1].focus()}},U=e=>{const a=parseInt(e.target.dataset.id),o=a-1,n=a+1,l=r.value[o],k=r.value[n];switch(e.keyCode){case d.backspace:{e.preventDefault();const p=[...t.value];t.value[a]?(p[a]="",t.value=p,I(p)):l&&(p[o]="",f.value[l].focus(),t.value=p,I(p));break}case d.left:e.preventDefault(),l&&f.value[l].focus();break;case d.right:e.preventDefault(),k&&f.value[k].focus();break;case d.up:case d.down:e.preventDefault();break;case d.enter:e.preventDefault(),g("validate");break}},I=(e=t.value)=>{const a=e.join("");x.value=a.length>=u.value,g("change",a),g("complete",x.value)},Y=(e,a)=>{e&&(f.value[a]=e)},Q=()=>{t.value=t.value.map(()=>"")};return z(),_(()=>{f.value=[]}),ee(()=>{const e=document.querySelector('[data-id="0"]');e&&e.focus()}),D({clearValues:Q}),(e,a)=>(v(),h("section",re,[E("div",ue,[E("div",{class:V([s.classContent,"gui-input-content"])},[(v(!0),h(ae,null,oe(t.value,(o,n)=>(v(),h("div",{key:n,class:V(["gui-input-item",[{password:s.password},{error:!!s.textError},{success:x.value},{disabled:s.disabled},L(n)]])},[E("input",{ref_for:!0,ref:l=>Y(l,n+1),class:V([s.classInput?s.classInput:`gui-input ${A.value}`]),type:"tel",pattern:"[0-9]+",autoFocus:n===B.value,"data-id":n,value:o,required:i.required,disabled:i.disabled,maxlength:"1",onInput:H,onFocus:l=>M(l,n),onBlur:R,onKeydown:U,onPaste:J},null,42,ce)],2))),128))],2),s.password&&s.iconPassword?(v(),h("div",{key:0,onClick:a[0]||(a[0]=o=>C.value=!C.value),class:"gui-input-code-password"},[C.value?(v(),T(w(N),{key:1,icon:w(se)},null,8,["icon"])):(v(),T(w(N),{key:0,icon:w(ne)},null,8,["icon"])),E("p",ie,O(C.value?"Mostrar":"Ocultar"),1)])):S("",!0)]),te(e.$slots,"error",{},()=>[s.textError&&!s.hideTextError?(v(),h("p",de,O(s.textError),1)):S("",!0)])]))}});F.__docgenInfo={exportName:"default",displayName:"InputCode",description:"",tags:{},expose:[{name:"clearValues"}],props:[{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"textError",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hideTextError",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fields",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"iconPassword",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"classInput",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classContent",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"change"},{name:"complete"},{name:"validate"}],slots:[{name:"error",description:"error custom message error."}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/InputCode/InputCode.vue"]};const be={title:"Form/Input Code",component:F,argTypes:{password:{control:{type:"boolean"},defaultValue:!1}}},fe=(s,D)=>({components:{GInputCode:F,GConfigProvider:le},setup(){const m=c(!1),i=c(""),g=j(()=>s.textError?"Error":m.value?"Completo":"Incompleto");function d(r){i.value=r,G("change")}function t(r){m.value=r,G("complete")}return{codeCompleted:m,codeOTP:i,status:g,args:s,onChangeCode:d,onComplete:t}},template:`
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
    `}),y=fe.bind({});y.parameters={docs:{description:{component:""}}};var q,K,$;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`(args, selected) => {
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
}`,...($=(K=y.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};const xe=["Default"];export{y as Default,xe as __namedExportsOrder,be as default};
