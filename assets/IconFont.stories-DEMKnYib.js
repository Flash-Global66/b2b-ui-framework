import{r as m,c as v}from"./vue.esm-bundler-BWLFJ3YM.js";import{_ as l}from"./Icon-XKrN76pS.js";import{G as d}from"./ConfigProvider-DfgpcNWx.js";import{_ as w}from"./Segmented-B6TxAPfg.js";import{G as b}from"./index-Dhja97U_.js";import{_ as x}from"./Button-1XQhNvEa.js";import"./index.es-C8evZRbd.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CdJoONYj.js";import"./index-j6CJlXut.js";import"./castArray-B4BJdNV7.js";import"./index-BbqbSJR7.js";import"./_Uint8Array-BqR9CRTS.js";import"./_initCloneObject-z3869iOX.js";import"./index-Clbg1Cmp.js";import"./event-BB_Ol6Sd.js";import"./index-lmL9CkRO.js";import"./use-form-common-props-Bn6XiUqq.js";import"./constants-Dnj8X3EN.js";import"./index-CDPhiV_6.js";import"./use-form-common-props-0yetkxkH.js";import"./typescript-Bp3YSIOJ.js";import"./index-GlymeP5r.js";import"./index-C63O9-vN.js";import"./index-BjLWKBtf.js";const t={solid:["user-secret","home","paper-plane","ticket-alt","wallet","gift","question-circle","info-circle","user-plus","user-times","times-circle","check-circle","file-signature","edit","trash","plus-circle","minus-circle","divide","chevron-right","chevron-left","money-bill-wave","long-arrow-alt-left","file-invoice-dollar","undo-alt","credit-card","ellipsis-v","bullhorn","file-alt","mars","venus","users","building","money-check-alt","lock","question","angle-down","download","search","university","pencil-alt","save","file-excel","user-slash","exclamation-triangle","dollar-sign","arrow-right","hand-holding-usd","sort","trash-alt","caret-down","clock","bars","store","arrow-up-from-bracket","usd-circle","user","sign-out","arrow-left","exchange","external-link-square-alt","user-edit","file-image","upload","file-word","file-pdf","file","exclamation-circle","check","sort-alt","lock-alt","long-arrow-alt-right","long-arrow-alt-down","arrow-alt-down","minus","equals","times","circle","asterisk","copy","users-medical","exclamation","hand-paper","camera","undo","user-cog","dot-circle","folder-download","filter","envelope","at","id-card","receipt","caret-up","triangle","lightbulb","spinner"],regular:["chevron-down","exclamation-circle","check-circle","mars","venus","check","paperclip","exclamation-triangle","search","ellipsis-v","copy","times","money-bill-alt","arrow-left","arrow-right","angle-right","angle-left","arrow-alt-to-bottom","clock","sync-alt","link","users","plus","minus","info-circle","user-plus","comment-alt","file-alt","redo","lock-alt","chevron-right","chevron-left","envelope","landmark","globe","share-alt","heart","undo-alt","backward","bolt","store","user","plus-circle","arrow-down-to-line","arrow-up-from-bracket","arrow-down-to-bracket","repeat","ban","eye","eye-slash","circle-xmark","arrows-rotate","calendar","gear","spinner","filter","arrow-up-right-from-square","lock-keyhole-open","pen","shield-slash","shield-check","shield-xmark","shield","trash-xmark","trash"],light:["times","copy","calendar-alt","long-arrow-right","arrow-left","arrow-right","cloud-download-alt","angle-down","clock","minus","equals","divide","exclamation","money-bill-wave","sync","chevron-right","comment","store","pencil"],brands:["whatsapp"],duotone:["spinner","user-circle","cloud-upload","megaphone","exclamation-triangle","mobile-alt","envelope-open-text","users","user-check","sparkles","university","arrow-to-bottom","store"]},i=()=>{const o=[];return Object.entries(t).forEach(([r,n])=>{n.forEach(c=>{o.push(`${r} ${c}`)})}),o},X={title:"Basic/IconFont",component:l,parameters:{docs:{description:{component:`
## Descripción
Componente wrapper de <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a> 6 Pro que permite usar iconos de forma sencilla y tipada.

## Uso
Para usar un icono necesitas especificar dos partes:
1. El peso o estilo del icono (solid, regular, light, etc)
2. El nombre del icono

Ejemplo: \`name="regular home"\`

## Pesos disponibles
- **solid**: Iconos sólidos (rellenos)
- **regular**: Iconos con trazo medio  
- **light**: Iconos con trazo fino
- **brands**: Logos de marcas
- **duotone**: Iconos de dos tonos

## Agregar nuevos iconos
1. Identifica el icono en <a href="https://fontawesome.com/search" target="_blank">Font Awesome</a>
2. Agrega la importación en la carpeta src del componente según el peso
3. Registra el nombre en el archivo iconSets.ts

## Autocompletado
El editor te mostrará las opciones disponibles gracias al tipado estricto.
        `}}},argTypes:{name:{description:"Nombre completo del icono (peso + nombre)",control:"select",options:i(),table:{type:{summary:"string"},defaultValue:{summary:"solid user"}}}},args:{name:"solid user"}},a={name:"Uso básico",render:o=>({components:{GIconFont:l,GConfigProvider:d},setup(){return{args:o}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-icon-font v-bind="args" class="text-8 text-grey-700"/>
        </div>
      </g-config-provider>
    `})},s={name:"Galería de iconos",parameters:{docs:{description:{story:"Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre. 📋"}}},render:()=>({components:{GIconFont:l,GConfigProvider:d,GSegmented:w,GInput:b,GButton:x},setup(){const o=m("regular"),r=m(""),n=v(()=>{if(!r.value.trim())return t;const e=r.value.toLowerCase().trim();return Object.entries(t).reduce((p,[u,h])=>(p[u]=h.filter(f=>f.toLowerCase().includes(e)),p),{})}),c=()=>{r.value=""},g=Object.keys(t).map(e=>({label:e.charAt(0).toUpperCase()+e.slice(1),value:e}));return{iconSets:t,selectedWeight:o,weightOptions:g,copyIconName:e=>{navigator.clipboard.writeText(e).then(()=>{console.log("Nombre del icono copiado al portapapeles")}).catch(()=>{alert("No se pudo copiar el nombre del icono")})},searchTerm:r,clearSearch:c,filteredIcons:n}},template:`
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedWeight"
            :options="weightOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
              size="small"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="18px" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
              size="small"
            >
              Limpiar
            </g-button>
          </div>


          <div v-for="(icons, weight) in filteredIcons" :key="weight">
            <div v-if="selectedWeight === weight">
              <h3 class="text-lg font-medium mb-4 capitalize">{{ weight }}</h3>
              <div class="grid grid-cols-6 gap-4">
                <div
                  v-for="icon in icons"
                  :key="icon"
                  class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600"
                  @click="copyIconName(\`\${weight} \${icon}\`)"
                >
                  <g-icon-font :name="\`\${weight} \${icon}\`" class="text-6 mb-2"/>
                  <span class="text-xs text-center">{{ icon }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const options: string[] = [];
  Object.entries(ICON_SETS).forEach(([weight, icons]) => {
    icons.forEach(icon => {
      options.push(\`\${weight} \${icon}\`);
    });
  });
  return options;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Uso básico',
  render: args => ({
    components: {
      GIconFont,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-icon-font v-bind="args" class="text-8 text-grey-700"/>
        </div>
      </g-config-provider>
    \`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Galería de iconos',
  parameters: {
    docs: {
      description: {
        story: 'Galería completa de íconos disponibles en el sistema. Haz clic en cualquier ícono para copiar su nombre. 📋'
      }
    }
  },
  render: () => ({
    components: {
      GIconFont,
      GConfigProvider,
      GSegmented,
      GInput,
      GButton
    },
    setup() {
      const selectedWeight = ref('regular');
      const searchTerm = ref('');
      const filteredIcons = computed(() => {
        if (!searchTerm.value.trim()) {
          return ICON_SETS;
        }
        const searchTermLower = searchTerm.value.toLowerCase().trim();
        return Object.entries(ICON_SETS).reduce((filtered, [weight, icons]) => {
          filtered[weight] = icons.filter(icon => icon.toLowerCase().includes(searchTermLower));
          return filtered;
        }, {} as typeof ICON_SETS);
      });
      const clearSearch = () => {
        searchTerm.value = '';
      };
      const weightOptions = Object.keys(ICON_SETS).map(weight => ({
        label: weight.charAt(0).toUpperCase() + weight.slice(1),
        value: weight
      }));
      const copyIconName = (iconName: string) => {
        navigator.clipboard.writeText(iconName).then(() => {
          console.log('Nombre del icono copiado al portapapeles');
        }).catch(() => {
          alert('No se pudo copiar el nombre del icono');
        });
      };
      return {
        iconSets: ICON_SETS,
        selectedWeight,
        weightOptions,
        copyIconName,
        searchTerm,
        clearSearch,
        filteredIcons
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-8">
          <g-segmented
            block
            v-model="selectedWeight"
            :options="weightOptions"
            class="mb-8"
          />

          <div class="flex items-center gap-2">
            <g-input
              v-model="searchTerm"
              placeholder="Buscar icono..."
              class="w-full max-w-md"
              size="small"
            >
              <template #prefix>
                <g-icon-font name="solid magnifying-glass" size="18px" />
              </template>
            </g-input>
            <g-button 
              v-if="searchTerm"
              @click="clearSearch"
              size="small"
            >
              Limpiar
            </g-button>
          </div>


          <div v-for="(icons, weight) in filteredIcons" :key="weight">
            <div v-if="selectedWeight === weight">
              <h3 class="text-lg font-medium mb-4 capitalize">{{ weight }}</h3>
              <div class="grid grid-cols-6 gap-4">
                <div
                  v-for="icon in icons"
                  :key="icon"
                  class="flex bg-white flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer text-grey-600"
                  @click="copyIconName(\\\`\\\${weight} \\\${icon}\\\`)"
                >
                  <g-icon-font :name="\\\`\\\${weight} \\\${icon}\\\`" class="text-6 mb-2"/>
                  <span class="text-xs text-center">{{ icon }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...s.parameters?.docs?.source}}};const Y=["generateIconOptions","Primary","Galería"];export{s as Galería,a as Primary,Y as __namedExportsOrder,X as default,i as generateIconOptions};
