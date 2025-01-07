import { type App } from 'vue'
import LButton from './LButton.vue'

// 导出组件
export { default as LButton } from './LButton.vue'

// 导出插件
const ButtonPlugin = {
  title: 'Button 按钮',
  install(app: App) {
    app.component('LButton', LButton)
  }
}

export default ButtonPlugin
