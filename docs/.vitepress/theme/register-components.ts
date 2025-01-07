import type { App } from 'vue'

// 自动导入所有示例组件
const modules = import.meta.glob('../../components/examples/**/*.vue', { eager: true })

export function registerComponents(app: App) {
  for (const path in modules) {
    // 从路径中提取组件名
    // 例如: ../../components/examples/button/basic.vue -> button-demo-basic
    const componentName = path
      .split('/')
      .slice(-2) // 取最后两段 ['button', 'basic.vue']
      .map((segment, index) => {
        if (index === 0) return segment // 第一段保持原样
        return segment.replace('.vue', '') // 第二段移除 .vue
      })
      .join('-demo-') // 拼接为 button-demo-basic

    // 注册组件
    app.component(componentName, (modules[path] as any).default)
  }
}
