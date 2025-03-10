import { withInstall } from 'element-plus/es/utils/index'
import type { SFCWithInstall } from 'element-plus/es/utils/index'

import Tag from './tag.vue'

export const GTag: SFCWithInstall<typeof Tag> = withInstall(Tag)
export type TagInstance = InstanceType<typeof Tag>
export default GTag

export * from './tag'
