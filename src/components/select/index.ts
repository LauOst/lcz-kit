import { type App } from 'vue'
import BaseSelect from './BaseSelect.vue'

export { BaseSelect }
export * from './types'

export default {
  title: 'Select 选择器',
  install(app: App) {
    app.component('LSelect', BaseSelect)
  }
}
