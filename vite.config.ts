import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.spec.ts',
        'src/layouts/**/*',
        'src/pages/**/*',
        'src/router/**/*',
        'src/examples/**/*',
        'src/App.vue',
        'src/main.ts'
      ],
      outDir: 'dist'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LczKit',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: [
        'vue',
        'axios',
        'echarts',
        'class-variance-authority',
        'clsx',
        'dayjs',
        'tailwind-merge'
      ],
      output: {
        globals: {
          vue: 'Vue',
          axios: 'axios',
          echarts: 'echarts',
          'class-variance-authority': 'cva',
          clsx: 'clsx',
          dayjs: 'dayjs',
          'tailwind-merge': 'twMerge'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'index.css'
          }
          return assetInfo.name
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  }
})
