import{l as f,B as C,n as b,F as y,r as p,c as d,w as q,o as Q,R as K,m as J,T as U,aa as H,C as h,S as X,J as Y,G as v}from"./vue.esm-bundler-BWLFJ3YM.js";import{a as c}from"./index-CM9FzEWq.js";import{a as Z}from"./index-Clbg1Cmp.js";import{F as S,l as w}from"./index.es-C8evZRbd.js";import{f as ee,a as oe}from"./index-BAiqubqT.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as T,E as te}from"./index-CNp7UpgZ.js";import{G as D}from"./SelectOption-BQ-YQorJ.js";import{G as ae}from"./ConfigProvider-DfgpcNWx.js";import"./index-BbqbSJR7.js";import"./index-flFu8xNe.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-lmL9CkRO.js";import"./index-j6CJlXut.js";import"./index-BhZWXNXQ.js";import"./index-BjLWKBtf.js";import"./index-CpX1h__I.js";import"./constants-Dnj8X3EN.js";import"./index-S6iShBIJ.js";import"./util-B2mB0_6C.js";import"./error-Cq9Fpw4b.js";import"./style-BhjGsvQW.js";import"./index-BcVnClcl.js";import"./index-CI-tzdnq.js";import"./use-form-common-props-Bn6XiUqq.js";import"./index-CDPhiV_6.js";import"./index-DOEepscu.js";import"./_baseIteratee-BZ8uME3r.js";import"./_Uint8Array-BqR9CRTS.js";import"./isEqual-CqKdly6z.js";import"./castArray-B4BJdNV7.js";import"./index-C63O9-vN.js";import"./use-form-item-C_lH8tdx.js";import"./icon-CJSgHkRQ.js";import"./event-BB_Ol6Sd.js";import"./scroll-Cwh7ui4M.js";import"./debounce-kvJk9OHn.js";import"./index-BNOysvgY.js";w.add(ee);const V=f({name:"IconArrow",components:{FontAwesomeIcon:S}});function ne(e,t,i,r,n,s){const a=y("font-awesome-icon");return b(),C(a,{icon:["far","chevron-down"]})}const le=g(V,[["render",ne]]);V.__docgenInfo={displayName:"IconArrow",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/SelectQuoter/components/IconArrow.vue"]};w.add(oe);const I=f({name:"IconArrow",components:{FontAwesomeIcon:S}});function re(e,t,i,r,n,s){const a=y("font-awesome-icon");return b(),C(a,{icon:["far","times-circle"]})}const ie=g(I,[["render",re]]);I.__docgenInfo={displayName:"IconArrow",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/SelectQuoter/components/IconTimes.vue"]};const $=f({name:"GSelect",components:{ElSelect:T},props:{valueKey:{type:String,default:""},size:{type:String,default:"medium"},clearable:{type:Boolean,default:!1},name:{type:String,default:""},autocomplete:{type:String,default:"off"},filterable:{type:Boolean,default:!1},allowCreate:{type:Boolean,default:!1},filterMethod:{type:Function},loading:{type:Boolean,default:!1},loadingText:{type:String,default:""},noMatchText:{type:String,default:"Sin datos coincidentes"},noDataText:{type:String,default:"Sin datos"},defaultFirstOption:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},automaticDropdown:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},label:{type:String,default:""},placeholder:{type:String,default:" "},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},joinRight:{type:Boolean,default:!1},joinLeft:{type:Boolean,default:!1},border:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},transparent:{type:Boolean,default:!1}},emits:["change","visible-change","remove-tag","clear","blur","focus"],setup(e,{emit:t,slots:i,attrs:r}){const n=p(),s=p(!1),a=p(!1),l=p(0),B=d(()=>`select-${Math.random().toString(36).substring(2,9)}`),E=d(()=>e.label&&(s.value||a.value)?"8px":"0px"),x=d(()=>e.joinLeft?`0 ${.625}rem ${.625}rem 0`:e.joinRight?`${.625}rem 0 0 ${.625}rem`:`${.625}rem ${.625}rem ${.625}rem ${.625}rem`),z=d(()=>{const o=["class","persistent"];return Object.fromEntries(Object.entries(r).filter(([u])=>!o.includes(u)))}),j=d(()=>{const o=["joinRight","joinLeft","persistent"];return Object.fromEntries(Object.entries(e).filter(([u])=>!o.includes(u)))}),A=d(()=>`${l.value}px`);function R(){return new Promise(o=>{setTimeout(o,0)})}q(()=>r.modelValue,o=>{a.value=!!o}),Q(()=>{K(()=>{console.log(n.value.$el);const o=n.value.$el.children[0];o&&(console.log(o),o.style.borderRadius="99999px"),a.value=!!r.modelValue,R(),k()})});function k(){const o=n.value&&n.value.$el;if(o&&i.prefix){const u=o.querySelector(".gui-select__prefix");Z(u,G=>{const M=G[0],{width:W}=M.contentRect;l.value=W+5})}}function F(){e.disabled||e.readonly||n.value.toggleMenu()}function O(o){t("focus",o)}function _(o){t("blur",o)}function N(o){t("change",o),["","",null,void 0,NaN].includes(o)?a.value=!1:a.value=!0}function L(o){t("visible-change",o),s.value=o}return{refSelect:n,inputRounded:x,isVisible:s,isValue:a,styleInputInner:E,propsCustom:j,prefixWidth:l,labelStyleWidth:A,attrsCustom:z,onVisibleChange:L,onClick:F,onFocus:O,onBlur:_,onChange:N,IconArrow:le,IconTimes:ie,inputId:B}}});function se(e,t,i,r,n,s){const a=y("el-select");return b(),J("div",{onClick:t[2]||(t[2]=(...l)=>e.onClick&&e.onClick(...l)),class:Y(["gui-select-wrapper",[{"gui-select-border-bg":e.border,"gui-select-wrapper--shadow":e.shadow&&!e.transparent,"gui-select-wrapper--transparent":e.transparent},"size--"+e.size]])},[U(a,X({ref:"refSelect","popper-class":"!z-100",autocomplete:"off"},{...e.attrsCustom,...e.propsCustom},{id:e.inputId,"suffix-icon":e.IconArrow,"clear-icon":e.IconTimes,placeholder:e.label?" ":e.placeholder,"aria-label":e.label?e.label:e.placeholder,onChange:e.onChange,onVisibleChange:e.onVisibleChange,onRemoveTag:t[0]||(t[0]=l=>e.$emit("remove-tag",l)),onClear:t[1]||(t[1]=l=>e.$emit("clear",l)),onBlur:e.onBlur,onFocus:e.onFocus}),H({default:h(()=>[v(e.$slots,"default")]),_:2},[e.$slots.prefix?{name:"prefix",fn:h(()=>[v(e.$slots,"prefix",{value:e.$attrs.modelValue})]),key:"0"}:void 0]),1040,["id","suffix-icon","clear-icon","placeholder","aria-label","onChange","onVisibleChange","onBlur","onFocus"])],2)}const P=g($,[["render",se]]);$.__docgenInfo={displayName:"GSelect",exportName:"default",description:"",tags:{},props:[{name:"valueKey",description:"unique identity key name for value, required when value is an object",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"size",tags:{description:[{description:"size of Input",title:"description"}]},type:{name:"SelectSize"},defaultValue:{func:!1,value:'"medium"'}},{name:"clearable",description:"whether select can be cleared",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",description:"the name attribute of select input",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"autocomplete",description:"the autocomplete attribute of select input",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"filterable",description:"whether Select is filterable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowCreate",description:"whether creating new items is allowed. To use this, filterable must be true",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filterMethod",description:"custom filter method",type:{name:"func"}},{name:"loading",description:"whether Select is loading data from server",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingText",description:"displayed text while loading data from server",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"noMatchText",description:"displayed text when no data matches the filtering query, you can also use slot empty",type:{name:"string"},defaultValue:{func:!1,value:'"Sin datos coincidentes"'}},{name:"noDataText",description:"displayed text when there is no options, you can also use slot empty",type:{name:"string"},defaultValue:{func:!1,value:'"Sin datos"'}},{name:"defaultFirstOption",description:"select first matching option on enter key. Use with filterable or remote",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"teleported",description:"whether select dropdown is teleported to the body",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"automaticDropdown",description:"for non-filterable Select, this prop decides if the option menu pops up when the input is focused",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fitInputWidth",description:"whether the width of the dropdown is the same as the input",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validateEvent",description:"whether to trigger form validation",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"label",description:"the label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",description:"As a requirement you must not declare the label",type:{name:"string"},defaultValue:{func:!1,value:'" "'}},{name:"disabled",description:"whether Select is disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:"same as readonly in native input",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"joinRight",description:"Remove rounded corners from the right side to join with another component.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"joinLeft",description:"Remove rounded edges from left side to join with another component.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"border",description:"Add borders for white backgrounds.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shadow",description:"Add shadow box.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"transparent",description:"Add shadow box.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"remove-tag"},{name:"clear"},{name:"change",description:"triggers when the bound value changes"},{name:"visible-change"},{name:"blur"},{name:"focus"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"value",title:"binding"}]},{name:"default",description:"customize default content"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/SelectQuoter/Select.vue"]};const Je={title:"Form/SelectQuoter",component:P,subcomponents:{GSelectOption:D},parameters:{docs:{description:{component:"When there are plenty of options, use a drop-down menu to display and select desired ones."}}}},ue=(e,t)=>({components:{GSelect:P,GSelectOption:D,GConfigProvider:ae,ElSelect:T,ElOption:te},setup(){const i=p("");return{args:e,selected:i,options:[{countryCode:"CO",nameDisplay:"Cédula de Ciudadanía",numberType:"CC",numberTypeLabel:"Número CC",docType:"CC",minSize:6,maxSize:10,idDefault:!0,enabled:!0,jumioIdType:"ID_CARD",tooltip:null},{countryCode:"CO",nameDisplay:"Cédula de Extranjería",numberType:"CE",numberTypeLabel:"Número CE",docType:"CE",minSize:6,maxSize:10,idDefault:!1,enabled:!0,jumioIdType:"ID_CARD",tooltip:null},{countryCode:"CO",nameDisplay:"Pasaporte",numberType:"PASS",numberTypeLabel:"Número Pasaporte",docType:"PASS",minSize:8,maxSize:10,idDefault:!1,enabled:!0,jumioIdType:"ID_CARD",tooltip:null},{countryCode:"CO",nameDisplay:"Permiso Especial de Permanencia",numberType:"PEP",numberTypeLabel:"Número PEP",docType:"PEP",minSize:15,maxSize:15,idDefault:!1,enabled:!0,jumioIdType:"ID_CARD",tooltip:null}],onChange:c("change"),onFocus:c("focus"),onBlur:c("blur"),onVisible:c("visible-change"),onRemoteTag:c("remove-tag"),onClear:c("clear")}},template:`
      <g-config-provider>
        <div class="p-7 h-80">
          <g-select
            class="flex items-center gap-x-8"
            v-model="selected"
            label="Seleccionar"
            v-bind="args"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @clear="onClear"
            @visible-change="onVisible"
            @remove-tag="onRemoteTag"
          >
            <g-select-option
              v-for="item in options"
              :key="item.numberType"
              :label="item.nameDisplay"
              :value="item.numberType"
            >
              {{ item.nameDisplay }} - {{ item.numberType }}
            </g-select-option>
          </g-select>
        </div>
      </g-config-provider>
    `}),m=ue.bind({});m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args, selected) => {
  return {
    components: {
      GSelect,
      GSelectOption,
      GConfigProvider,
      ElSelect,
      ElOption
    },
    setup() {
      const selected = ref('');
      const options = [{
        "countryCode": "CO",
        "nameDisplay": "Cédula de Ciudadanía",
        "numberType": "CC",
        "numberTypeLabel": "Número CC",
        "docType": "CC",
        "minSize": 6,
        "maxSize": 10,
        "idDefault": true,
        "enabled": true,
        "jumioIdType": "ID_CARD",
        "tooltip": null
      }, {
        "countryCode": "CO",
        "nameDisplay": "Cédula de Extranjería",
        "numberType": "CE",
        "numberTypeLabel": "Número CE",
        "docType": "CE",
        "minSize": 6,
        "maxSize": 10,
        "idDefault": false,
        "enabled": true,
        "jumioIdType": "ID_CARD",
        "tooltip": null
      }, {
        "countryCode": "CO",
        "nameDisplay": "Pasaporte",
        "numberType": "PASS",
        "numberTypeLabel": "Número Pasaporte",
        "docType": "PASS",
        "minSize": 8,
        "maxSize": 10,
        "idDefault": false,
        "enabled": true,
        "jumioIdType": "ID_CARD",
        "tooltip": null
      }, {
        "countryCode": "CO",
        "nameDisplay": "Permiso Especial de Permanencia",
        "numberType": "PEP",
        "numberTypeLabel": "Número PEP",
        "docType": "PEP",
        "minSize": 15,
        "maxSize": 15,
        "idDefault": false,
        "enabled": true,
        "jumioIdType": "ID_CARD",
        "tooltip": null
      }];
      return {
        args,
        selected,
        options,
        onChange: action('change'),
        onFocus: action('focus'),
        onBlur: action('blur'),
        onVisible: action('visible-change'),
        onRemoteTag: action('remove-tag'),
        onClear: action('clear')
      };
    },
    template: \`
      <g-config-provider>
        <div class="p-7 h-80">
          <g-select
            class="flex items-center gap-x-8"
            v-model="selected"
            label="Seleccionar"
            v-bind="args"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @clear="onClear"
            @visible-change="onVisible"
            @remove-tag="onRemoteTag"
          >
            <g-select-option
              v-for="item in options"
              :key="item.numberType"
              :label="item.nameDisplay"
              :value="item.numberType"
            >
              {{ item.nameDisplay }} - {{ item.numberType }}
            </g-select-option>
          </g-select>
        </div>
      </g-config-provider>
    \`
  };
}`,...m.parameters?.docs?.source}}};const Ue=["Default"];export{m as Default,Ue as __namedExportsOrder,Je as default};
