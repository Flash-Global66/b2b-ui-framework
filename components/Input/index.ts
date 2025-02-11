import { App } from 'vue'
import GInput from './Input.vue'

export { GInput }

export default {
  install: (app: App) => {
    app.component('GInput', GInput)
  }
}

export * from './input.type'
