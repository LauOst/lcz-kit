import { type App } from 'vue'
import LDialog from './LDialog.vue'

// 导出组件
export { default as LDialog } from './LDialog.vue'

// 导出插件
const DialogPlugin = {
  title: 'Dialog 对话框',
  install(app: App) {
    app.component('LDialog', LDialog)
  }
}

export default DialogPlugin
