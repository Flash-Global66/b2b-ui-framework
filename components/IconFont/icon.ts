import {
  buildProps,
  definePropType,
  isBoolean,
  isNumber,
  isString
} from "element-plus/es/utils/index.mjs";

import Icon from "./Icon.vue";
import { ExtractPropTypes, PropType } from "vue";
import { IconString } from "./types";
import { useAriaProps } from "element-plus";

export const iconProps = buildProps({
  name: {
    type: String as PropType<IconString>,
    required: true
  },
})

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>