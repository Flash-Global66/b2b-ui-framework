import{r as b,a as h}from"./vue.esm-bundler-CH9yNyng.js";import{a as n,G as y}from"./index-DxcuRkR-.js";import{G as E}from"./index-2dsPMYsa.js";import{G as I}from"./index-53S0JHDU.js";import{_ as R}from"./Button-DXe_uWRw.js";import{G as q}from"./ConfigProvider-CVsr_Nb2.js";import"./use-form-item-BSwEs_HW.js";import"./castArray-BN-XtI-Z.js";import"./error-Cq9Fpw4b.js";import"./index-BccPGGIL.js";import"./_Uint8Array-D0cj8fVg.js";import"./index-EQ6ThY8V.js";import"./_initCloneObject-CQteI-2K.js";import"./index-DFiBxbdY.js";import"./Icon-B6M9nJHU.js";import"./index.es-C9Yfwrzt.js";import"./index-DDVpgGx_.js";import"./index-DveXc2u3.js";import"./index-BAiqubqT.js";import"./event-BB_Ol6Sd.js";import"./typescript-Bp3YSIOJ.js";import"./index-BervKESj.js";import"./index-BrHHf138.js";import"./index-DYzCgaMC.js";import"./index-ItzGEuCN.js";import"./index-BKIhFKZf.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-Cr5Bs5Fe.js";import"./index-Ckl04tfN.js";import"./index-CGK9l38B.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./raf-DzUuINB1.js";import"./browser-uFWmaFN2.js";import"./util-B2mB0_6C.js";import"./icon-DnzAWH09.js";import"./index-Ew7LA03D.js";import"./debounce-CKp6npxF.js";import"./index-lLyIYpAf.js";import"./_baseIteratee-D9H2gTYB.js";import"./isEqual-Bvtq4mIv.js";import"./index-Dj0BFlpg.js";const ce={title:"Form/Form/Item",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
El componente \`GFormItem\` es un contenedor para elementos de formulario que controla los errores de validación y muestra mensajes de error cuando es necesario.

### Características
> - Control de errores de validación
> - Mensajes de error personalizables
> - Integración con Form padre
> - Estados de validación
> - Reseteo individual de campos
> - Soporte para reglas específicas

### Instalación

\`\`\`bash
yarn add @flash-global66/b2b-ui-form
\`\`\`

### Importación

\`\`\`typescript
import { GFormItem } from '@flash-global66/b2b-ui-form'
import '@flash-global66/b2b-ui-form/form.styles.scss'
\`\`\`

### Dependencias
Este componente está diseñado para funcionar dentro de un componente \`Form\`. Para ver la documentación completa del sistema de formularios, visita la [documentación de Form](/docs/form-form--docs).`}}},argTypes:{prop:{description:"Nombre del campo en el modelo de datos",control:"text",table:{type:{summary:"string | string[]"}}},rules:{description:"Reglas de validación específicas para este campo",control:"object",table:{type:{summary:"FormItemRule | FormItemRule[]"}}},showMessage:{description:"Mostrar mensaje de error en el FormItem",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showMessageChild:{description:"Mostrar mensaje de error en el componente hijo",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},validateMessage:{description:"Mensaje de validación actual",table:{category:"Expuesto",type:{summary:"string"}}},shouldShowError:{description:"Indica si se debe mostrar el error en el form item",table:{category:"Expuesto",type:{summary:"boolean"}}},shouldShowErrorChild:{description:"Indica si se debe mostrar el error en el componente hijo",table:{category:"Expuesto",type:{summary:"boolean"}}},validateState:{description:"Estado actual de la validación",table:{category:"Expuesto",type:{summary:"string"}}},validate:{description:"Método para validar el form item",table:{category:"Expuesto",type:{summary:"() => Promise<void>"}}},clearValidate:{description:"Elimina el estado de validación del campo",table:{category:"Expuesto",type:{summary:"() => void"}}},resetField:{description:"Reinicia el campo actual y elimina el resultado de la validación",table:{category:"Expuesto",type:{summary:"() => void"}}}}},a={name:"Combinación de Reglas",parameters:{docs:{description:{story:`Las reglas de validación pueden definirse tanto en el Form padre como en el FormItem individual.
        
#### Validación por eventos
El atributo \`validate-event\` controla si el componente de entrada dispara la validación automáticamente en eventos como 'change' o 'blur'.
- Cuando \`validate-event="false"\`: La validación solo ocurrirá al llamar manualmente al método validate().
- Cuando \`validate-event="true"\` (por defecto): La validación se dispara automáticamente en eventos de entrada.`}}},render:()=>({components:{GForm:y,GFormItem:n,GInput:E,GConfigProvider:q,GButton:R,GSelect:I},setup(){const e=b(),t=h({nombre:"",apellido:"",edad:"",ciudad:""}),l={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:5,message:"Mínimo 5 caracteres",trigger:"blur"}],apellido:[{required:!0,message:"El apellido es requerido",trigger:"blur"}],ciudad:[{required:!0,message:"La ciudad es requerida"}]},i=[{value:"Bogotá",title:"Bogotá"},{value:"Medellín",title:"Medellín"},{value:"Cali",title:"Cali"},{value:"Barranquilla",title:"Barranquilla"}];async function s(){e.value&&await e.value.validate((r,d)=>{console.log(r?"submit!":"error submit!",d)})}async function m(){e.value&&e.value.resetFields()}return{formRef:e,formData:t,rules:l,handleSubmit:s,handleReset:m,options:i}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre">
            <g-input 
              v-model="formData.nombre" 
              label="Nombre"
              placeholder="Ingrese su nombre"
              help-text="Mínimo 5 caracteres"
              :validate-event="false"
            />
          </g-form-item>
          <g-form-item prop="apellido">
            <g-input 
              v-model="formData.apellido" 
              label="Apellido"
              placeholder="Ingrese su apellido"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item prop="ciudad">
            <g-select
              v-model="formData.ciudad"
              label="Ciudad"
              placeholder="Seleccione una ciudad"
              :options="options"
              help-text="Campo requerido"
            />
          </g-form-item>

            

          <g-form-item 
            prop="edad"
            :rules="[
              { required: true, message: 'La edad es requerida' },
              { 
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('Ingrese una edad'));
                  } else if (Number(value) < 18) {
                    callback(new Error('Debe ser mayor de edad'));
                  } else {
                    callback();
                  }
                }
              }
            ]"
          >
            <g-input 
              v-model="formData.edad" 
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},o={name:"Mensajes de Error",parameters:{docs:{description:{story:"Demostración de las diferentes formas de mostrar mensajes de error:\n        \n- `show-message-child=true`: El error se muestra en el componente hijo (Input, Select, etc)\n- `show-message=true`: El error se muestra en el FormItem\n- Cuando ambos están activos, tiene prioridad show-message-child"}}},render:()=>({components:{GForm:y,GFormItem:n,GInput:E,GConfigProvider:q,GButton:R},setup(){const e=b(),t=h({campo1:"",campo2:"",campo3:""}),l={campo1:[{required:!0,message:"Este campo es requerido",trigger:"blur"}],campo2:[{required:!0,message:"Este campo es requerido",trigger:"blur"}],campo3:[{required:!0,message:"Este campo es requerido",trigger:"blur"}]};async function i(){e.value&&await e.value.validate((m,r)=>{console.log(m?"submit!":"error submit!",r)})}async function s(){e.value&&e.value.resetFields()}return{formRef:e,formData:t,rules:l,handleSubmit:i,handleReset:s}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="campo1">
            <g-input 
              v-model="formData.campo1"
              label="Error en Input"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <g-form-item 
            prop="campo2"
            :show-message-child="false"
            show-message
          >
            <g-input 
              v-model="formData.campo2"
              label="Error en FormItem"
              placeholder="Error se muestra debajo"
            />
          </g-form-item>

          <g-form-item 
            prop="campo3"
            :show-message-child="true"
            :show-message="true"
          >
            <g-input 
              v-model="formData.campo3"
              label="Prioridad a show-message-child"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <div style="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Validar</g-button>
            <g-button @click="handleReset" variant="secondary" style="margin-left: 10px">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Combinación de Reglas',
  parameters: {
    docs: {
      description: {
        story: \`Las reglas de validación pueden definirse tanto en el Form padre como en el FormItem individual.
        
#### Validación por eventos
El atributo \\\`validate-event\\\` controla si el componente de entrada dispara la validación automáticamente en eventos como 'change' o 'blur'.
- Cuando \\\`validate-event="false"\\\`: La validación solo ocurrirá al llamar manualmente al método validate().
- Cuando \\\`validate-event="true"\\\` (por defecto): La validación se dispara automáticamente en eventos de entrada.\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton,
      GSelect
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        nombre: '',
        apellido: '',
        edad: '',
        ciudad: ''
      });
      const rules = {
        nombre: [{
          required: true,
          message: 'El nombre es requerido',
          trigger: 'blur'
        }, {
          min: 5,
          message: 'Mínimo 5 caracteres',
          trigger: 'blur'
        }],
        apellido: [{
          required: true,
          message: 'El apellido es requerido',
          trigger: 'blur'
        }],
        ciudad: [{
          required: true,
          message: 'La ciudad es requerida'
        }]
      };
      const options = [{
        value: 'Bogotá',
        title: 'Bogotá'
      }, {
        value: 'Medellín',
        title: 'Medellín'
      }, {
        value: 'Cali',
        title: 'Cali'
      }, {
        value: 'Barranquilla',
        title: 'Barranquilla'
      }];
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields);
          } else {
            console.log('error submit!', fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset,
        options
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre">
            <g-input 
              v-model="formData.nombre" 
              label="Nombre"
              placeholder="Ingrese su nombre"
              help-text="Mínimo 5 caracteres"
              :validate-event="false"
            />
          </g-form-item>
          <g-form-item prop="apellido">
            <g-input 
              v-model="formData.apellido" 
              label="Apellido"
              placeholder="Ingrese su apellido"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item prop="ciudad">
            <g-select
              v-model="formData.ciudad"
              label="Ciudad"
              placeholder="Seleccione una ciudad"
              :options="options"
              help-text="Campo requerido"
            />
          </g-form-item>

            

          <g-form-item 
            prop="edad"
            :rules="[
              { required: true, message: 'La edad es requerida' },
              { 
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('Ingrese una edad'));
                  } else if (Number(value) < 18) {
                    callback(new Error('Debe ser mayor de edad'));
                  } else {
                    callback();
                  }
                }
              }
            ]"
          >
            <g-input 
              v-model="formData.edad" 
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Mensajes de Error',
  parameters: {
    docs: {
      description: {
        story: \`Demostración de las diferentes formas de mostrar mensajes de error:
        
- \\\`show-message-child=true\\\`: El error se muestra en el componente hijo (Input, Select, etc)
- \\\`show-message=true\\\`: El error se muestra en el FormItem
- Cuando ambos están activos, tiene prioridad show-message-child\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        campo1: '',
        campo2: '',
        campo3: ''
      });
      const rules = {
        campo1: [{
          required: true,
          message: 'Este campo es requerido',
          trigger: 'blur'
        }],
        campo2: [{
          required: true,
          message: 'Este campo es requerido',
          trigger: 'blur'
        }],
        campo3: [{
          required: true,
          message: 'Este campo es requerido',
          trigger: 'blur'
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields);
          } else {
            console.log('error submit!', fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="campo1">
            <g-input 
              v-model="formData.campo1"
              label="Error en Input"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <g-form-item 
            prop="campo2"
            :show-message-child="false"
            show-message
          >
            <g-input 
              v-model="formData.campo2"
              label="Error en FormItem"
              placeholder="Error se muestra debajo"
            />
          </g-form-item>

          <g-form-item 
            prop="campo3"
            :show-message-child="true"
            :show-message="true"
          >
            <g-input 
              v-model="formData.campo3"
              label="Prioridad a show-message-child"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <div style="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Validar</g-button>
            <g-button @click="handleReset" variant="secondary" style="margin-left: 10px">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ue=["CombinedRules","MessageBehavior"];export{a as CombinedRules,o as MessageBehavior,ue as __namedExportsOrder,ce as default};
