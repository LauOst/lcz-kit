import { type App } from 'vue'
import { useToast } from './LToast'
import LToaster from './LToaster.vue'

export * from './LToast'
export { default as LToaster } from './LToaster.vue'

// 导出插件
const ToastPlugin = {
  title: 'Toast 消息提示',
  install(app: App) {
    app.config.globalProperties.$toast = useToast()
  }
}

export default ToastPlugin
