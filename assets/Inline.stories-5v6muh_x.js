import{l as J,r as S,d as K,z as k,A as Q,u as o,U as X,n as r,m as a,H as l,I as s,T as Y,p as C,L as v,E as Z,O as ee,J as ie,K as oe}from"./vue.esm-bundler-CH9yNyng.js";import{_ as h}from"./Icon-B6M9nJHU.js";import{o as ne,h as d,l as re,G as t}from"./ConfigProvider-CVsr_Nb2.js";import{u as se}from"./index-EQ6ThY8V.js";import{u as te}from"./use-form-common-props-9nfe3vwH.js";import{generateIconOptions as ae}from"./IconFont.stories-f_hxKbOn.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-form-item-BSwEs_HW.js";import"./index-BrHHf138.js";import"./Segmented-DXHoK6nA.js";import"./index-DFiBxbdY.js";import"./index-BccPGGIL.js";import"./event-BB_Ol6Sd.js";import"./index-2dsPMYsa.js";import"./index-DxcuRkR-.js";import"./castArray-BN-XtI-Z.js";import"./_Uint8Array-D0cj8fVg.js";import"./_initCloneObject-CQteI-2K.js";import"./typescript-Bp3YSIOJ.js";import"./index-BervKESj.js";import"./index-DYzCgaMC.js";import"./index-ItzGEuCN.js";import"./Button-DXe_uWRw.js";const ce=ne({title:{type:String,default:""},description:{type:String,required:!0,default:""},hideClose:{type:Boolean,default:!1},icon:{type:d(String),default:""},type:{type:d(String),default:"success"},size:{type:d(String),default:"md"},links:{type:d(Array),default:()=>[]},...se(["ariaLabel"])}),le=["aria-label"],de={class:""},pe=["onClick","aria-label"],n=J({__name:"Inline",props:ce,setup(b){const F=b,I=S(!0),e=re("inline"),O=te(),R=S(null),U=K(()=>[e.b(),e.m(O.value),e.m(F.type)]);async function $(){I.value=!1}return(i,me)=>(r(),k(X,{name:o(e).m("fade")},{default:Q(()=>[I.value?(r(),a("div",{key:0,class:s(U.value),ref_key:"inlineRef",ref:R,"aria-label":i.ariaLabel||"inline"},[Y(o(h),{"aria-label":"icon informative",class:s([o(e).e("icon")]),name:i.icon},null,8,["class","name"]),C("div",de,[C("h3",{class:s([o(e).e("title")])},v(i.title),3),i.description?(r(),a("p",{key:0,class:s([o(e).e("description")])},[Z(i.$slots,"default",{},()=>[ee(v(i.description),1)])],2)):l("",!0),i.links.length?(r(),a("div",{key:1,role:"group",class:s([o(e).e("links")])},[(r(!0),a(ie,null,oe(i.links,(c,H)=>(r(),a("button",{key:H,onClick:c.action,class:s([o(e).e("link")]),"aria-label":c.ariaLabel||c.label,type:"button"},v(c.label),11,pe))),128))],2)):l("",!0)]),i.hideClose?l("",!0):(r(),k(o(h),{key:0,role:"button","aria-label":"close inline",onClick:$,class:s(o(e).e("close")),name:"regular times"},null,8,["class"]))],10,le)):l("",!0)]),_:3},8,["name"]))}});n.__docgenInfo={exportName:"default",displayName:"Inline",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Inline/Inline.vue"]};const We={title:"Data/Inline",component:n,parameters:{docs:{description:{component:`El componente Inline se utiliza para mostrar información en un formato compacto, con múltiples opciones de personalización:

> - Títulos y descripciones personalizables
> - Íconos integrados
> - Enlaces interactivos
> - Diferentes tipos de mensajes (success, info, warning, error)
> - Tamaños adaptables (md, sm)
> - Control de visibilidad

### Instalación

\`\`\`bash
yarn add @flash-global66/b2b-ui-inline
\`\`\`

### Importación

\`\`\`typescript
import { GInline } from '@flash-global66/b2b-ui-framework'
import '@flash-global66/b2b-ui-inline/inline.styles.scss'
\`\`\`
`}}},argTypes:{icon:{description:"Icono a mostrar en el componente `Inline`.",control:"select",options:["",...ae()],table:{type:{summary:"string"},defaultValue:{summary:""}}},title:{description:"Título de la información que queremos transmitir.",control:"text"},description:{description:"Descripción adicional de la información.",control:"text"},size:{description:"Tamaño del componente",control:"select",options:["md","sm"],defaultValue:"md"},hideClose:{description:"Indica si se debe ocultar el botón de cierre.",control:"boolean",defaultValue:!1},type:{description:"Tipo de mensaje a mostrar. Colores de fondo y estilo de texto.",control:"select",options:["success","info","warning","error"],defaultValue:"success"},links:{description:"Lista de enlaces interactivos con etiquetas y acciones.",control:"object"},ariaLabel:{description:"Etiqueta ARIA para accesibilidad.",control:"text"}},args:{icon:"solid undo-alt",title:"Título",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",size:"md",hideClose:!1,type:"success",links:[{label:"Enlace 1",action:()=>alert("Acción 1")},{label:"Enlace 2",action:()=>alert("Acción 2")}],ariaLabel:"inline"}},p={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles."}}},render:b=>({components:{GInline:n,GConfigProvider:t},setup(){return{args:b}},template:`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    `})},m={name:"Tipos",parameters:{docs:{description:{story:"El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            type="success"
            title="Éxito"
            description="Mensaje de éxito"
            icon="solid circle-check"
          />
          <g-inline 
            type="info"
            title="Información"
            description="Mensaje informativo"
            icon="solid info-circle"
          />
          <g-inline 
            type="warning"
            title="Advertencia"
            description="Mensaje de advertencia"
            icon="solid triangle-exclamation"
          />
          <g-inline 
            type="error"
            title="Error"
            description="Mensaje de error"
            icon="solid circle-xmark"
          />
        </div>
      </g-config-provider>
    `})},u={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            size="md"
            title="Tamaño mediano (md)"
            description="Este es el tamaño por defecto del componente"
            icon="solid info-circle"
          />
          <g-inline 
            size="sm"
            title="Tamaño pequeño (sm)"
            description="Versión más compacta del componente"
            icon="solid info-circle"
          />
        </div>
      </g-config-provider>
    `})},g={name:"Sin botón cerrar",parameters:{docs:{description:{story:"Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    `})},f={name:"Sin ícono",parameters:{docs:{description:{story:"Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <g-inline
          icon=""
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    `})},y={name:"Sin enlaces",parameters:{docs:{description:{story:"Si no quieres que el mensaje tenga enlaces, puedes omitir la propiedad links."}}},render:()=>({components:{GInline:n,GConfigProvider:t},template:`
      <g-config-provider>
        <g-inline
          title="Sin enlaces"
          description="Este mensaje no tiene enlaces"
          icon="solid info-circle"
          :links="[]"
        />
      </g-config-provider>
    `})};var j,E,G;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente Inline. Desde los controles puedes probar todas las propiedades disponibles.'
      }
    }
  },
  render: args => ({
    components: {
      GInline,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-inline v-bind="args" />
      </g-config-provider>
    \`
  })
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var T,q,z;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Tipos',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            type="success"
            title="Éxito"
            description="Mensaje de éxito"
            icon="solid circle-check"
          />
          <g-inline 
            type="info"
            title="Información"
            description="Mensaje informativo"
            icon="solid info-circle"
          />
          <g-inline 
            type="warning"
            title="Advertencia"
            description="Mensaje de advertencia"
            icon="solid triangle-exclamation"
          />
          <g-inline 
            type="error"
            title="Error"
            description="Mensaje de error"
            icon="solid circle-xmark"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var x,P,_;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: md (mediano) y sm (pequeño). Útil para adaptarse a diferentes contextos de UI.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-inline 
            size="md"
            title="Tamaño mediano (md)"
            description="Este es el tamaño por defecto del componente"
            icon="solid info-circle"
          />
          <g-inline 
            size="sm"
            title="Tamaño pequeño (sm)"
            description="Versión más compacta del componente"
            icon="solid info-circle"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var w,A,L;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Sin botón cerrar',
  parameters: {
    docs: {
      description: {
        story: 'Cuando no necesitas que el usuario pueda cerrar el mensaje, puedes ocultar el botón de cierre con la propiedad hideClose.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-inline
          hideClose
          title="Sin botón de cerrar"
          description="Este mensaje no tiene botón de cerrar"
          icon="solid info-circle"
        />
      </g-config-provider>
    \`
  })
}`,...(L=(A=g.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var V,M,N;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Sin ícono',
  parameters: {
    docs: {
      description: {
        story: 'Si no necesitas un ícono, puedes omitirlo dejando la propiedad icon vacía.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-inline
          icon=""
          title="Sin ícono"
          description="Este mensaje no tiene ícono"
        />
      </g-config-provider>
    \`
  })
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var B,D,W;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Sin enlaces',
  parameters: {
    docs: {
      description: {
        story: 'Si no quieres que el mensaje tenga enlaces, puedes omitir la propiedad links.'
      }
    }
  },
  render: () => ({
    components: {
      GInline,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-inline
          title="Sin enlaces"
          description="Este mensaje no tiene enlaces"
          icon="solid info-circle"
          :links="[]"
        />
      </g-config-provider>
    \`
  })
}`,...(W=(D=y.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Fe=["Primary","AllTypes","Sizes","WithoutClose","WithoutIcon","WithoutLinks"];export{m as AllTypes,p as Primary,u as Sizes,g as WithoutClose,f as WithoutIcon,y as WithoutLinks,Fe as __namedExportsOrder,We as default};
