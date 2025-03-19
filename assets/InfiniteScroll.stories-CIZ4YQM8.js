import{R as x,v as C,r as v,c as T}from"./vue.esm-bundler-BWLFJ3YM.js";import{s as G,G as w}from"./ConfigProvider-DfgpcNWx.js";import{t as H}from"./error-Cq9Fpw4b.js";import{a as M}from"./scroll-Cwh7ui4M.js";import{d as A}from"./debounce-kvJk9OHn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./style-BhjGsvQW.js";var j="Expected a function";function S(e,o,n){var t=!0,i=!0;if(typeof e!="function")throw new TypeError(j);return G(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),A(e,o,{leading:t,maxWait:o,trailing:i})}const E=e=>{let o=0,n=e;for(;n;)o+=n.offsetTop,n=n.offsetParent;return o},k=(e,o)=>Math.abs(E(e)-E(o)),r="ElInfiniteScroll",F=50,P=200,R=0,B={delay:{type:Number,default:P},distance:{type:Number,default:R},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},h=(e,o)=>Object.entries(B).reduce((n,[t,i])=>{var a,l;const{type:u,default:c}=i,d=e.getAttribute(`infinite-scroll-${t}`);let s=(l=(a=o[d])!=null?a:d)!=null?l:c;return s=s==="false"?!1:s,s=u(s),n[t]=Number.isNaN(s)?c:s,n},{}),D=e=>{const{observer:o}=e[r];o&&(o.disconnect(),delete e[r].observer)},U=(e,o)=>{const{container:n,containerEl:t,instance:i,observer:a,lastScrollTop:l}=e[r],{disabled:u,distance:c}=h(e,i),{clientHeight:d,scrollHeight:s,scrollTop:p}=t,N=p-l;if(e[r].lastScrollTop=p,a||u||N<0)return;let m=!1;if(n===e)m=s-(d+p)<=c;else{const{clientTop:L,scrollHeight:_}=e,O=k(e,t);m=p+d>=O+L+_-c}m&&o.call(i)};function b(e,o){const{containerEl:n,instance:t}=e[r],{disabled:i}=h(e,t);i||n.clientHeight===0||(n.scrollHeight<=n.clientHeight?o.call(t):D(e))}const V={async mounted(e,o){const{instance:n,value:t}=o;C(t)||H(r,"'v-infinite-scroll' binding value must be a function"),await x();const{delay:i,immediate:a}=h(e,n),l=M(e,!0),u=l===window?document.documentElement:l,c=S(U.bind(null,e,t),i);if(l){if(e[r]={instance:n,container:l,containerEl:u,delay:i,cb:t,onScroll:c,lastScrollTop:u.scrollTop},a){const d=new MutationObserver(S(b.bind(null,e,t),F));e[r].observer=d,d.observe(e,{childList:!0,subtree:!0}),b(e,t)}l.addEventListener("scroll",c)}},unmounted(e){if(!e[r])return;const{container:o,onScroll:n}=e[r];o?.removeEventListener("scroll",n),D(e)},async updated(e){if(!e[r])await x();else{const{containerEl:o,cb:n,observer:t}=e[r];o.clientHeight&&t&&b(e,n)}}},y=V;y.install=e=>{e.directive("InfiniteScroll",y)};const I=y,Z={title:"Data/Infinite Scroll",argTypes:{"v-g-infinite-scroll":{description:"Load more data while reach bottom of the page",table:null},"infinite-scroll-disabled":{description:"is disabled. `Default: false`",table:{type:{summary:"Boolean"}}},"infinite-scroll-delay":{description:"throttle delay (ms). `Default: 200`",table:{type:{summary:"Number"}}},"infinite-scroll-distance":{description:"trigger distance (px). `Default 0`",table:{type:{summary:"Number"}}},"infinite-scroll-immediate":{description:"Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. `Default: true`",table:{type:{summary:"Boolean"}}}},args:{"infinite-scroll-immediate":!0}},W=(e,o)=>({components:{GConfigProvider:w},directives:{GInfiniteScroll:I},setup(){const n=v(0);function t(){n.value+=2}return{args:e,load:t,count:n}},template:`
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
    `}),f=W.bind({});f.parameters={docs:{description:{component:"Load more data while reach bottom of the page <br /> Add `v-g-infinite-scroll` to the list to automatically execute loading method when scrolling to the bottom."}}};const K=(e,o)=>({components:{GConfigProvider:w},directives:{GInfiniteScroll:I},setup(){const n=v(10),t=v(!1),i=T(()=>n.value>=50),a=T(()=>t.value||i.value);return{args:e,disabled:a,load:()=>{t.value=!0,setTimeout(()=>{n.value+=2,t.value=!1},2e3)},loading:t,noMore:i,count:n}},template:`
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
    `}),g=K.bind({});g.parameters={docs:{description:{story:"We can deactivate the load to wait for the previous answer."}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args, selected) => {
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args, selected) => {
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
}`,...g.parameters?.docs?.source}}};const ee=["Default","Disabled"];export{f as Default,g as Disabled,ee as __namedExportsOrder,Z as default};
