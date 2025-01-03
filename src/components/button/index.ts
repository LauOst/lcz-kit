import { type App } from 'vue'
import BaseButton from './BaseButton.vue'

export { BaseButton }

export default {
  title: 'Button 按钮',
  install(app: App) {
    app.component('LButton', BaseButton)
  }
}
