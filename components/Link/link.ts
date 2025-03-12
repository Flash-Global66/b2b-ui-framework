import type { ExtractPropTypes, PropType } from 'vue'
import { buildProps } from "element-plus/es/utils/index";
import type { IconString } from "@flash-global66/b2b-ui-icon-font";
import type Link from './Link.vue'

export const linkProps = buildProps({
  /**
   * @description type of link, controls the color scheme
   */
  type: {
    type: String,
    values: ["default", "underline", "primary", "success", "warning", "info", "danger"],
    default: "default",
  },
  /**
   * @description size of link
   */
  size: {
    type: String,
    values: ["sm", "md", "lg"],
    default: "md",
  },
  /**
   * @description whether the component has underline on hover
   * Note: Does not apply when type="underline" to prevent double underlines
   */
  underline: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: "" },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<"_blank" | "_parent" | "_self" | "_top" | string>,
    default: "_self",
  },
  /**
   * @description left icon name for the link
   */
  iconLeft: {
    type: String as PropType<IconString>,
    default: "",
  },
  /**
   * @description right icon name for the link
   */
  iconRight: {
    type: String as PropType<IconString>,
    default: "",
  },
  /**
   * @description status of the link, controls contextual appearance
   * - default: Standalone link with standard styling
   * - inline: Link designed to be embedded within text paragraphs
   * 
   * Note: Use inline status for links that appear within paragraphs of text
   */
  status: {
    type: String,
    values: ["default", "inline"],
    default: "default",
  },
} as const);
export type LinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits

export type LinkInstance = InstanceType<typeof Link>


