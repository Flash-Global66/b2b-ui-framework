import{l as J,d as Q,m as X,z as b,H as k,p as Y,E as y,I as s,u as l,n as f}from"./vue.esm-bundler-CH9yNyng.js";import{_ as v}from"./Icon-B6M9nJHU.js";import{o as Z,l as ee,G as i}from"./ConfigProvider-CVsr_Nb2.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne=Z({type:{type:String,values:["primary","secondary"],default:"primary"},size:{type:String,values:["sm","md","lg"],default:"md"},underline:{type:Boolean,default:!1},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},iconLeft:{type:String,default:""},iconRight:{type:String,default:""},status:{type:String,values:["default","inline"],default:"default"}}),re={click:o=>o instanceof MouseEvent},ie=["href","target"],n=J({name:"GLink",__name:"Link",props:ne,emits:re,setup(o,{emit:$}){const a=o,O=$,r=ee("link"),F=Q(()=>[r.b(),r.m(a.type),r.m(a.size),r.m(a.status),r.is("disabled",a.disabled),r.is("underline",a.underline&&!a.disabled)]);function K(e){a.disabled||O("click",e)}return(e,oe)=>(f(),X("a",{class:s(F.value),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:K},[e.iconLeft?(f(),b(l(v),{key:0,name:e.iconLeft,class:s(l(r).e("icon-left"))},null,8,["name","class"])):k("",!0),Y("span",{class:s(l(r).e("inner"))},[y(e.$slots,"default")],2),e.iconRight?(f(),b(l(v),{key:1,name:e.iconRight,class:s(l(r).e("icon-right"))},null,8,["name","class"])):k("",!0),e.$slots.icon?y(e.$slots,"icon",{key:2}):k("",!0)],10,ie))}});n.__docgenInfo={name:"GLink",exportName:"default",displayName:"Link",description:"",tags:{},slots:[{name:"default"},{name:"icon"}],sourceFiles:["/home/runner/work/b2b-ui-framework/b2b-ui-framework/components/Link/Link.vue"]};const ue={title:"Basic/Link",component:n,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","secondary"],description:"Tipo de estilo del link. Define la apariencia visual y el color del link.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del link. Afecta tanto al tamaño del texto como de los íconos.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},underline:{control:{type:"boolean"},description:"Define si el link muestra un underline permanente.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Deshabilita el link, impidiendo la interacción del usuario y aplicando estilos visuales de deshabilitado.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},href:{control:{type:"text"},description:"URL a la que apunta el link, igual que el atributo href nativo de HTML.",table:{type:{summary:"string"},defaultValue:{summary:""}}},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"],description:"Define cómo se abre el link, igual que el atributo target nativo de HTML.",table:{type:{summary:"string"},defaultValue:{summary:"_self"}}},iconLeft:{control:{type:"text"},description:'Nombre del ícono a mostrar a la izquierda del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-left").',table:{type:{summary:"string"},defaultValue:{summary:""}}},iconRight:{control:{type:"text"},description:'Nombre del ícono a mostrar a la derecha del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-right").',table:{type:{summary:"string"},defaultValue:{summary:""}}},status:{control:{type:"select"},options:["default","inline"],description:"Status del link: default (link independiente) o inline (para texto con enlaces).",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},onClick:{action:"clicked"}},parameters:{docs:{description:{component:`
# Link Component

El componente Link proporciona un link versátil y personalizable para la navegación y acciones:

## Características
- Dos tipos de link (primary, secondary)
- Opción para mostrar underline permanente
- Tres tamaños disponibles: small (sm), medium (md) y large (lg)
- Soporte para íconos a la izquierda y derecha
- Estados de hover, active y disabled
- Compatible con atributos nativos de links HTML

## Instalación

\`\`\`bash
yarn add @flash-global66/b2b-ui-link
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/b2b-ui-icon-font

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/b2b-ui-link/link.styles.scss" as *;
\`\`\`

## Uso básico

\`\`\`html
<template>
  <!-- Link primario (por defecto) -->
  <g-link href="https://empresas.global66.com/">link primario</g-link>
  
  <!-- Link secundario -->
  <g-link 
    type="secondary"
    icon-right="regular chevron-right"
    href="https://empresas.global66.com/"
    target="_blank"
  >
    link secundario con icono
  </g-link>
  
  <!-- Link con underline permanente -->
  <g-link underline href="https://empresas.global66.com/">
    link con underline
  </g-link>
</template>

<script setup>
import { GLink } from '@flash-global66/b2b-ui-link';
<\/script>
\`\`\`
`}}},args:{type:"primary",size:"md",underline:!1,disabled:!1,href:"https://empresas.global66.com/",target:"_blank",iconLeft:void 0,iconRight:void 0}},t={name:"Default link",args:{default:"default link"},render:o=>({components:{GLink:n,GConfigProvider:i},setup(){return{args:o}},template:`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"link básico con estilo por defecto y configuración estándar."},source:{code:`
<g-link href="https://empresas.global66.com/">link por defecto</g-link>`,language:"html",type:"auto"}}}},c={name:"Links con íconos",render:()=>({components:{GLink:n,GConfigProvider:i},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Link with right icon</h3>
            <g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">Next page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with left icon</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">Previous page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with both icons</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">External link</g-link>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links con íconos a la izquierda, derecha o ambos lados para mejorar el contexto visual."},source:{code:`
<g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">
  link con ícono a la derecha
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">
  link con ícono a la izquierda
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">
  link con íconos en ambos lados
</g-link>`,language:"html",type:"auto"}}}},d={name:"Tamaños de link",render:()=>({components:{GLink:n,GConfigProvider:i},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Small</h3>
            <g-link size="sm" href="https://empresas.global66.com/" icon-right="regular chevron-right">Small link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Medium (Default)</h3>
            <g-link size="md" href="https://empresas.global66.com/" icon-right="regular chevron-right">Medium link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Large</h3>
            <g-link size="lg" href="https://empresas.global66.com/" icon-right="regular chevron-right">Large link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Todos los tamaños con íconos</h3>
            <div class="flex flex-col gap-4 items-start">
              <g-link size="sm" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Small link</g-link>
              <g-link size="md" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Medium link</g-link>
              <g-link size="lg" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Large link</g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links en diferentes tamaños: pequeño (sm), mediano (md) y grande (lg)."},source:{code:`
<g-link size="sm" href="https://empresas.global66.com/">link pequeño</g-link>

<g-link size="md" href="https://empresas.global66.com/">link mediano</g-link>

<g-link size="lg" href="https://empresas.global66.com/">link grande</g-link>`,language:"html",type:"auto"}}}},g={name:"Tipos de link",render:()=>({components:{GLink:n,GConfigProvider:i},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary</h3>
            <g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary</h3>
            <g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary con underline</h3>
            <g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con underline</h3>
            <g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Links con diferentes tipos de estilo: primary y secondary, con y sin underline."},source:{code:`
<g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>

<g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>

<g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>`,language:"html",type:"auto"}}}},m={name:"Links con íconos y underline",render:()=>({components:{GLink:n,GConfigProvider:i},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary con íconos y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular arrow-left" 
              icon-right="regular arrow-right" 
              href="https://empresas.global66.com/"
            >
              Link con íconos y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary solo con ícono izquierdo y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular external-link" 
              href="https://empresas.global66.com/"
            >
              Link con ícono izquierdo y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con íconos y underline</h3>
            <g-link 
              type="secondary" 
              underline 
              icon-left="regular envelope" 
              icon-right="regular arrow-up-right-from-square" 
              href="https://empresas.global66.com/"
              target="_blank"
            >
              Link secundario con íconos y underline
            </g-link>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Links que combinan íconos y underline permanente, mostrando diferentes variaciones."},source:{code:`
<g-link 
  type="primary" 
  underline 
  icon-left="regular arrow-left" 
  icon-right="regular arrow-right" 
  href="https://empresas.global66.com/"
>
  Link con íconos y underline
</g-link>

<g-link 
  type="primary" 
  underline 
  icon-left="regular external-link" 
  href="https://empresas.global66.com/"
>
  Link con ícono izquierdo y underline
</g-link>

<g-link 
  type="secondary" 
  underline 
  icon-left="regular envelope" 
  icon-right="regular arrow-up-right-from-square" 
  href="https://empresas.global66.com/"
  target="_blank"
>
  Link secundario con íconos y underline
</g-link>`,language:"html",type:"auto"}}}},p={name:"Link deshabilitado",args:{disabled:!0,default:"link deshabilitado",iconRight:"regular chevron-right"},render:o=>({components:{GLink:n,GConfigProvider:i},setup(){return{args:o}},template:`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links en estado deshabilitado que no permiten interacción."},source:{code:`
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>`,language:"html",type:"auto"}}}},u={name:"Links externos",render:()=>({components:{GLink:n,GConfigProvider:i},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
            Abre en nueva pestaña
          </g-link>
          <g-link href="https://empresas.global66.com/" target="_self">
            Abre en la misma pestaña
          </g-link>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links que apuntan a sitios externos, con diferentes configuraciones del atributo target."},source:{code:`
<g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
  Abre en nueva pestaña
</g-link>

<g-link href="https://empresas.global66.com/" target="_self">
  Abre en la misma pestaña
</g-link>`,language:"html",type:"auto"}}}},h={name:"Estados del link",render:()=>({components:{GLink:n,GConfigProvider:i},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Default Status</h3>
            <g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Inline Status</h3>
            <p class="mb-2">Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Links con diferentes estados: default (enlaces independientes) e inline (enlaces dentro de texto)."},source:{code:`
<!-- Status: Default -->
<g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>

<!-- Status: Inline (para enlaces dentro de texto) -->
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>`,language:"html",type:"auto"}}}};var L,x,S;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Default link',
  args: {
    default: 'default link'
  },
  render: args => ({
    components: {
      GLink,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "link básico con estilo por defecto y configuración estándar."
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/">link por defecto</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var q,z,w;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Links con íconos',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Link with right icon</h3>
            <g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">Next page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with left icon</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">Previous page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with both icons</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">External link</g-link>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links con íconos a la izquierda, derecha o ambos lados para mejorar el contexto visual."
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">
  link con ícono a la derecha
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">
  link con ícono a la izquierda
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">
  link con íconos en ambos lados
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var G,P,_;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Tamaños de link',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Small</h3>
            <g-link size="sm" href="https://empresas.global66.com/" icon-right="regular chevron-right">Small link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Medium (Default)</h3>
            <g-link size="md" href="https://empresas.global66.com/" icon-right="regular chevron-right">Medium link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Large</h3>
            <g-link size="lg" href="https://empresas.global66.com/" icon-right="regular chevron-right">Large link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Todos los tamaños con íconos</h3>
            <div class="flex flex-col gap-4 items-start">
              <g-link size="sm" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Small link</g-link>
              <g-link size="md" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Medium link</g-link>
              <g-link size="lg" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Large link</g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links en diferentes tamaños: pequeño (sm), mediano (md) y grande (lg)."
      },
      source: {
        code: \`
<g-link size="sm" href="https://empresas.global66.com/">link pequeño</g-link>

<g-link size="md" href="https://empresas.global66.com/">link mediano</g-link>

<g-link size="lg" href="https://empresas.global66.com/">link grande</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var C,D,E;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Tipos de link',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary</h3>
            <g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary</h3>
            <g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary con underline</h3>
            <g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con underline</h3>
            <g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Links con diferentes tipos de estilo: primary y secondary, con y sin underline."
      },
      source: {
        code: \`
<g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>

<g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>

<g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var T,I,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Links con íconos y underline',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary con íconos y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular arrow-left" 
              icon-right="regular arrow-right" 
              href="https://empresas.global66.com/"
            >
              Link con íconos y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary solo con ícono izquierdo y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular external-link" 
              href="https://empresas.global66.com/"
            >
              Link con ícono izquierdo y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con íconos y underline</h3>
            <g-link 
              type="secondary" 
              underline 
              icon-left="regular envelope" 
              icon-right="regular arrow-up-right-from-square" 
              href="https://empresas.global66.com/"
              target="_blank"
            >
              Link secundario con íconos y underline
            </g-link>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Links que combinan íconos y underline permanente, mostrando diferentes variaciones."
      },
      source: {
        code: \`
<g-link 
  type="primary" 
  underline 
  icon-left="regular arrow-left" 
  icon-right="regular arrow-right" 
  href="https://empresas.global66.com/"
>
  Link con íconos y underline
</g-link>

<g-link 
  type="primary" 
  underline 
  icon-left="regular external-link" 
  href="https://empresas.global66.com/"
>
  Link con ícono izquierdo y underline
</g-link>

<g-link 
  type="secondary" 
  underline 
  icon-left="regular envelope" 
  icon-right="regular arrow-up-right-from-square" 
  href="https://empresas.global66.com/"
  target="_blank"
>
  Link secundario con íconos y underline
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(A=(I=m.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var V,M,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Link deshabilitado',
  args: {
    disabled: true,
    default: 'link deshabilitado',
    iconRight: 'regular chevron-right'
  },
  render: args => ({
    components: {
      GLink,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links en estado deshabilitado que no permiten interacción."
      },
      source: {
        code: \`
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var j,R,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Links externos',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
            Abre en nueva pestaña
          </g-link>
          <g-link href="https://empresas.global66.com/" target="_self">
            Abre en la misma pestaña
          </g-link>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links que apuntan a sitios externos, con diferentes configuraciones del atributo target."
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
  Abre en nueva pestaña
</g-link>

<g-link href="https://empresas.global66.com/" target="_self">
  Abre en la misma pestaña
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var U,H,W;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Estados del link',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Default Status</h3>
            <g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Inline Status</h3>
            <p class="mb-2">Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Links con diferentes estados: default (enlaces independientes) e inline (enlaces dentro de texto)."
      },
      source: {
        code: \`
<!-- Status: Default -->
<g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>

<!-- Status: Inline (para enlaces dentro de texto) -->
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const he=["Default","WithIcons","Sizes","Types","IconsWithUnderline","DisabledState","ExternalLinks","LinkStatus"];export{t as Default,p as DisabledState,u as ExternalLinks,m as IconsWithUnderline,h as LinkStatus,d as Sizes,g as Types,c as WithIcons,he as __namedExportsOrder,ue as default};
