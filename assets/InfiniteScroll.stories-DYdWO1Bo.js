import{R as x,v as k,r as v,d as T}from"./vue.esm-bundler-CH9yNyng.js";import{x as F,G as O}from"./ConfigProvider-CVsr_Nb2.js";import{t as P}from"./error-Cq9Fpw4b.js";import{a as R}from"./scroll-TL91Ez5k.js";import{d as B}from"./debounce-CKp6npxF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./style-Dd3mC4oU.js";var U="Expected a function";function S(e,o,n){var t=!0,i=!0;if(typeof e!="function")throw new TypeError(U);return F(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),B(e,o,{leading:t,maxWait:o,trailing:i})}const E=e=>{let o=0,n=e;for(;n;)o+=n.offsetTop,n=n.offsetParent;return o},V=(e,o)=>Math.abs(E(e)-E(o)),r="ElInfiniteScroll",W=50,K=200,X=0,Y={delay:{type:Number,default:K},distance:{type:Number,default:X},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},h=(e,o)=>Object.entries(Y).reduce((n,[t,i])=>{var a,l;const{type:u,default:c}=i,d=e.getAttribute(`infinite-scroll-${t}`);let s=(l=(a=o[d])!=null?a:d)!=null?l:c;return s=s==="false"?!1:s,s=u(s),n[t]=Number.isNaN(s)?c:s,n},{}),C=e=>{const{observer:o}=e[r];o&&(o.disconnect(),delete e[r].observer)},$=(e,o)=>{const{container:n,containerEl:t,instance:i,observer:a,lastScrollTop:l}=e[r],{disabled:u,distance:c}=h(e,i),{clientHeight:d,scrollHeight:s,scrollTop:p}=t,H=p-l;if(e[r].lastScrollTop=p,a||u||H<0)return;let m=!1;if(n===e)m=s-(d+p)<=c;else{const{clientTop:M,scrollHeight:A}=e,j=V(e,t);m=p+d>=j+M+A-c}m&&o.call(i)};function b(e,o){const{containerEl:n,instance:t}=e[r],{disabled:i}=h(e,t);i||n.clientHeight===0||(n.scrollHeight<=n.clientHeight?o.call(t):C(e))}const q={async mounted(e,o){const{instance:n,value:t}=o;k(t)||P(r,"'v-infinite-scroll' binding value must be a function"),await x();const{delay:i,immediate:a}=h(e,n),l=R(e,!0),u=l===window?document.documentElement:l,c=S($.bind(null,e,t),i);if(l){if(e[r]={instance:n,container:l,containerEl:u,delay:i,cb:t,onScroll:c,lastScrollTop:u.scrollTop},a){const d=new MutationObserver(S(b.bind(null,e,t),W));e[r].observer=d,d.observe(e,{childList:!0,subtree:!0}),b(e,t)}l.addEventListener("scroll",c)}},unmounted(e){if(!e[r])return;const{container:o,onScroll:n}=e[r];o==null||o.removeEventListener("scroll",n),C(e)},async updated(e){if(!e[r])await x();else{const{containerEl:o,cb:n,observer:t}=e[r];o.clientHeight&&t&&b(e,n)}}},y=q;y.install=e=>{e.directive("InfiniteScroll",y)};const G=y,re={title:"Data/Infinite Scroll",argTypes:{"v-g-infinite-scroll":{description:"Load more data while reach bottom of the page",table:null},"infinite-scroll-disabled":{description:"is disabled. `Default: false`",table:{type:{summary:"Boolean"}}},"infinite-scroll-delay":{description:"throttle delay (ms). `Default: 200`",table:{type:{summary:"Number"}}},"infinite-scroll-distance":{description:"trigger distance (px). `Default 0`",table:{type:{summary:"Number"}}},"infinite-scroll-immediate":{description:"Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. `Default: true`",table:{type:{summary:"Boolean"}}}},args:{"infinite-scroll-immediate":!0}},z=(e,o)=>({components:{GConfigProvider:O},directives:{GInfiniteScroll:G},setup(){const n=v(0);function t(){n.value+=2}return{args:e,load:t,count:n}},template:`
      <g-config-provider>
        <div class="h-80 overflow-y-auto border-blue-3 border-solid border rounded-sm py-4 px-4">
          <ul
            v-g-infinite-scroll="load"
            class="grid grid-cols-1 gap-3"
            :infinite-scroll-disabled="disabled"
          >
            <li
              v-for="i in count"
              :key="i"
              class="h-12 flex justify-center items-center text-white font-semibold even:bg-gray-5 odd:bg-gray-6 rounded-sm">
              {{ i }}
            </li>
          </ul>
        </div>
      </g-config-provider>
    `}),f=z.bind({});f.parameters={docs:{description:{component:"Load more data while reach bottom of the page <br /> Add `v-g-infinite-scroll` to the list to automatically execute loading method when scrolling to the bottom."}}};const J=(e,o)=>({components:{GConfigProvider:O},directives:{GInfiniteScroll:G},setup(){const n=v(10),t=v(!1),i=T(()=>n.value>=50),a=T(()=>t.value||i.value);return{args:e,disabled:a,load:()=>{t.value=!0,setTimeout(()=>{n.value+=2,t.value=!1},2e3)},loading:t,noMore:i,count:n}},template:`
      <g-config-provider>
        <div class="h-80 overflow-y-auto border-blue-3 border-solid border rounded-sm py-4 px-4">
          <ul
            v-g-infinite-scroll="load"
            class="grid grid-cols-1 gap-3"
            :infinite-scroll-disabled="disabled"
          >
            <li
              v-for="i in count"
              :key="i"
              class="h-12 flex justify-center items-center text-white font-semibold even:bg-gray-5 odd:bg-gray-6 rounded-sm">
              {{ i }}
            </li>
          </ul>
          <div class="text-center text-5 py-5">
            <p v-if="loading">Loading...</p>
            <p v-if="noMore">No more</p>
          </div>
        </div>
      </g-config-provider>
    `}),g=J.bind({});g.parameters={docs:{description:{story:"We can deactivate the load to wait for the previous answer."}}};var w,D,I;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`(args, selected) => {
  return {
    components: {
      GConfigProvider
    },
    directives: {
      GInfiniteScroll
    },
    setup() {
      const count = ref(0);
      function load() {
        count.value += 2;
      }
      return {
        args,
        load,
        count
      };
    },
    template: \`
      <g-config-provider>
        <div class="h-80 overflow-y-auto border-blue-3 border-solid border rounded-sm py-4 px-4">
          <ul
            v-g-infinite-scroll="load"
            class="grid grid-cols-1 gap-3"
            :infinite-scroll-disabled="disabled"
          >
            <li
              v-for="i in count"
              :key="i"
              class="h-12 flex justify-center items-center text-white font-semibold even:bg-gray-5 odd:bg-gray-6 rounded-sm">
              {{ i }}
            </li>
          </ul>
        </div>
      </g-config-provider>
    \`
  };
}`,...(I=(D=f.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,L,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`(args, selected) => {
  return {
    components: {
      GConfigProvider
    },
    directives: {
      GInfiniteScroll
    },
    setup() {
      const count = ref(10);
      const loading = ref(false);
      const noMore = computed(() => count.value >= 50);
      const disabled = computed(() => loading.value || noMore.value);
      const load = () => {
        loading.value = true;
        setTimeout(() => {
          count.value += 2;
          loading.value = false;
        }, 2000);
      };
      return {
        args,
        disabled,
        load,
        loading,
        noMore,
        count
      };
    },
    template: \`
      <g-config-provider>
        <div class="h-80 overflow-y-auto border-blue-3 border-solid border rounded-sm py-4 px-4">
          <ul
            v-g-infinite-scroll="load"
            class="grid grid-cols-1 gap-3"
            :infinite-scroll-disabled="disabled"
          >
            <li
              v-for="i in count"
              :key="i"
              class="h-12 flex justify-center items-center text-white font-semibold even:bg-gray-5 odd:bg-gray-6 rounded-sm">
              {{ i }}
            </li>
          </ul>
          <div class="text-center text-5 py-5">
            <p v-if="loading">Loading...</p>
            <p v-if="noMore">No more</p>
          </div>
        </div>
      </g-config-provider>
    \`
  };
}`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const le=["Default","Disabled"];export{f as Default,g as Disabled,le as __namedExportsOrder,re as default};
