import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import type { Config } from 'tailwindcss'
import tailwindConfig from '../tailwind.config'

const docsPath = fileURLToPath(new URL('..', import.meta.url))

export default defineConfig({
  title: '朗达科技',
  description: '基于 Vue 3 的现代化组件库',
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('../../src', import.meta.url))
        },
        {
          find: '~docs',
          replacement: docsPath
        }
      ]
    },
    css: {
      postcss: {
        plugins: [tailwindcss(tailwindConfig as Config), autoprefixer]
      }
    },
    // 添加 TypeScript 配置
    optimizeDeps: {
      include: ['vue']
    },
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
          baseUrl: '.',
          paths: {
            '@/*': ['../../src/*'],
            '@docs/*': ['../*']
          }
        }
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
      { text: 'Hooks', link: '/hooks/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Toast 提示', link: '/components/toast' },
            { text: 'Dialog 对话框', link: '/components/dialog' }
          ]
        }
      ],
      '/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '介绍', link: '/utils/' },
            { text: '类型判断', link: '/utils/is' },
            { text: 'JSON 工具', link: '/utils/json' },
            { text: '日期工具', link: '/utils/date' },
            { text: 'HTTP 请求', link: '/utils/request' }
          ]
        }
      ],
      '/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: '介绍', link: '/hooks/' },
            { text: 'useDate', link: '/hooks/use-date' },
            { text: 'useStorage', link: '/hooks/use-storage' },
            { text: 'useEcharts', link: '/hooks/use-echarts' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/yourusername/lcz-kit' }]
  }
})
