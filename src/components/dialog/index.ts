import { type App } from 'vue'
import BaseDialog from './BaseDialog.vue'

export { BaseDialog }

export default {
  title: 'Dialog 对话框',
  install(app: App) {
    app.component('LDialog', BaseDialog)
  }
}
