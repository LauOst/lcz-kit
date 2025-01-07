import { type App } from 'vue'
import LSelect from './LSelect.vue'

// 导出组件
export { default as LSelect } from './LSelect.vue'

// 导出插件
const SelectPlugin = {
  title: 'Select 选择器',
  install(app: App) {
    app.component('LSelect', LSelect)
  }
}

export default SelectPlugin
export * from './types'
