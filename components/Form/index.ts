import GForm from "./Form.vue";
export type { 
    FormInstance,
    FormRules as GFormRules,
    FormValidationResult as GFormValidationResult, 
    FormValidateCallback as GFormValidateCallback,
} from 'element-plus';

type GFormInstance = InstanceType<typeof GForm>

export { GForm, GFormInstance };