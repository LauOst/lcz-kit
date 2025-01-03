import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import type { Config } from 'tailwindcss'
import tailwindConfig from '../tailwind.config'

export default defineConfig({
  title: '刘斩仙',
  description: '基于 Vue 3 的现代化组件库',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [tailwindcss(tailwindConfig as Config), autoprefixer]
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/your-username/lcz-kit' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theming' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Select 选择器', link: '/components/select' }
          ]
        }
      ]
    }
  }
})
