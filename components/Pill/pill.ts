import type { ExtractPropTypes } from 'vue'

import type Pill from './Pill.vue'

import { buildProps } from "element-plus/es/utils/index.mjs";
import { componentSizes } from 'element-plus';


export const pillProps = buildProps({
  text: {
    type: String,
    default: '',
  },
  /**
   * @description type of Pill
   */
  type: {
    type: String,
    values: ['primary', 'success', 'info', 'warning', 'danger'],
    default: 'primary',
  },
  /**
   * @description whether Pill can be removed
   */
  closable: Boolean,
  /**
   * @description whether to disable animations
   */
  disableTransitions: Boolean,
  /**
   * @description whether Pill has a highlighted border
   */
  hit: Boolean,
  /**
   * @description background color of the Pill
   */
  color: String,
  /**
   * @description size of Pill
   */
  size: {
    type: String,
    values: componentSizes,
  },
  /**
   * @description theme of Pill
   */
  effect: {
    type: String,
    values: ['dark', 'light', 'plain'],
    default: 'light',
  },
  /**
   * @description whether Pill is rounded
   */
  round: Boolean,
} as const)
export type PillProps = ExtractPropTypes<typeof pillProps>

export const pillEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type PillEmits = typeof pillEmits

export type PillInstance = InstanceType<typeof Pill>
