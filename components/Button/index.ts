import { App } from 'vue'
import GButton from './Button.vue'

export { GButton }

export default {
  install: (app: App) => {
    app.component('GButton', GButton)
  }
}

export * from './button.type'
