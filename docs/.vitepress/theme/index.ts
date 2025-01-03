import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// 导入 Tailwind 基础样式
import './tailwind.css'

// 导入组件库的样式
import '../../../src/styles/globals.css'

// 导入主题变量
import './styles/vars.css'

// 导入按钮演示组件
import DemoBasic from '../../components/demos/button/basic.vue'
import DemoSize from '../../components/demos/button/size.vue'
import DemoState from '../../components/demos/button/state.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册按钮演示组件
    app.component('demo-basic', DemoBasic)
    app.component('demo-size', DemoSize)
    app.component('demo-state', DemoState)
  }
} satisfies Theme
