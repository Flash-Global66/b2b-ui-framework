import { withInstall } from 'element-plus/es/utils/index'
import Teleport from './src/teleport.vue'
import type { SFCWithInstall } from 'element-plus/es/utils'

export const ElTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default ElTeleport

export * from './src/teleport'
