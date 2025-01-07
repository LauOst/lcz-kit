import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// 导入 Tailwind 基础样式
import './tailwind.css'

// 导入主题变量
import './styles/vars.css'

// 导入预览组件
import Preview from './components/Preview.vue'

// 导入组件注册函数
import { registerComponents } from './register-components'

// 导入组件库的样式（放在最后以确保优先级）
import '../../../src/styles/globals.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册预览组件
    app.component('Preview', Preview)

    // 自动注册所有示例组件
    registerComponents(app)
  }
} satisfies Theme
