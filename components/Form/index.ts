import GForm from "./Form.vue";
export type { 
    FormRules as GFormRules,
    FormValidationResult as GFormValidationResult, 
    FormValidateCallback as GFormValidateCallback,
} from 'element-plus';

export type GFormInstance = InstanceType<typeof GForm>

export { GForm };