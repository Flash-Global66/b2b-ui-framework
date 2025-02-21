import { buildProps, iconPropType } from 'element-plus/es/utils/index'
import { ExtractPropTypes, PropType } from 'vue';
import { debugWarn, isBoolean, isString } from "element-plus/es/utils/index";

type DialogSizeMode = 'default' | 'fixed' | 'adaptive';

export const dialogContentProps = buildProps({
  /**
   * @description whether to align the header and footer in center
   */
  center: Boolean,
  /**
   * @description whether to align the dialog both horizontally and vertically
   */
  alignCenter: {
    type: Boolean,
    default: true,
  },
  /**
   * @description custom close icon, default is Close
   */
  closeIcon: {
    type: iconPropType,
  },
  /**
   * @description enable dragging feature for Dialog
   */
  draggable: Boolean,
  /**
   * @description draggable Dialog can overflow the viewport
   */
  overflow: Boolean,
  /**
   * @description whether the Dialog takes up full screen
   */
  fullscreen: Boolean,
  /**
   * @description custom class names for header wrapper
   */
  headerClass: String,
  /**
   * @description custom class names for body wrapper
   */
  bodyClass: String,
  /**
   * @description custom class names for footer wrapper
   */
  footerClass: String,
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description title of Dialog. Can also be passed with a named slot (see the following table)
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description header's aria-level attribute
   */
  ariaLevel: {
    type: String,
    default: '2',
  },
  /**
   * @description width of Dialog
    */
  width : {
    type: [String, Number],
  },
  /**
   * @description Mode that controls dialog width behavior
   * default: uses default max-width
   * fixed: uses width prop with no max-width
   * adaptive: adapts to content with min and max constraints
   */
  sizeMode: {
    type: String as PropType<DialogSizeMode>,
    default: 'default',
    validator: (val: string) => ['default', 'fixed', 'adaptive'].includes(val),
  },
} as const)

export const dialogContentEmits = {
  close: () => true,
}

export type DialogContentProps = ExtractPropTypes<typeof dialogContentProps>
export type DialogContentEmits = typeof dialogContentEmits

export function validateDialogProps(props: DialogContentProps) {
  if (!isBoolean(props.center)) {
    debugWarn("DialogContent", `Invalid prop "center": expected a boolean, but received "${typeof props.center}".`);
  }

  if (!isBoolean(props.alignCenter)) {
    debugWarn("DialogContent", `Invalid prop "alignCenter": expected a boolean, but received "${typeof props.alignCenter}".`);
  }

  if (props.closeIcon && typeof props.closeIcon !== 'string') {
    debugWarn("DialogContent", `Invalid prop "closeIcon": expected a string, but received "${typeof props.closeIcon}".`);
  }

  if (props.headerClass && !isString(props.headerClass)) {
    debugWarn("DialogContent", `Invalid prop "headerClass": expected a string, but received "${typeof props.headerClass}".`);
  }

  if (props.bodyClass && !isString(props.bodyClass)) {
    debugWarn("DialogContent", `Invalid prop "bodyClass": expected a string, but received "${typeof props.bodyClass}".`);
  }

  if (props.footerClass && !isString(props.footerClass)) {
    debugWarn("DialogContent", `Invalid prop "footerClass": expected a string, but received "${typeof props.footerClass}".`);
  }

  if (props.ariaLevel && !isString(props.ariaLevel)) {
    debugWarn("DialogContent", `Invalid prop "ariaLevel": expected a string, but received "${typeof props.ariaLevel}".`);
  }

  if (props.sizeMode && !['default', 'fixed', 'adaptive'].includes(props.sizeMode)) {
    debugWarn("DialogContent", `Invalid prop "sizeMode": expected one of "default", "fixed", "adaptive", but received "${props.sizeMode}".`);
  }

  if (props.draggable && props.fullscreen) {
    debugWarn("DialogContent", "Dialog cannot be both draggable and fullscreen.");
  }

  if (props.width && props.fullscreen) {
    debugWarn("DialogContent", "Width prop is ignored when dialog is fullscreen.");
  }

  if (props.width && props.sizeMode === 'adaptive') {
    debugWarn("DialogContent", "Width prop is ignored when sizeMode is 'adaptive'.");
  }
}