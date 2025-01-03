<template>
  <div class="container mx-auto py-10">
    <div class="prose prose-sm max-w-none dark:prose-invert">
      <h1>LCZ-Kit 文档</h1>
      
      <h2>介绍</h2>
      <p>
        LCZ-Kit 是一个基于 Vue 3 的现代化组件库，提供了一系列美观且实用的 UI 组件。
        它采用 TypeScript 编写，提供完整的类型支持，并支持主题定制。
      </p>

      <h2>安装</h2>
      <p>使用 npm 安装：</p>
      <pre><code>npm install lcz-kit</code></pre>

      <h2>快速开始</h2>
      <p>在你的项目中引入并使用 LCZ-Kit 组件：</p>
      <pre><code>// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'lcz-kit/dist/style.css'

const app = createApp(App)
app.mount('#app')</code></pre>

      <p>然后在组件中使用：</p>
      <pre><code>// YourComponent.vue
import { Button } from 'lcz-kit'

&lt;Button variant="default"&gt;点击我&lt;/Button&gt;</code></pre>

      <h2>主题定制</h2>
      <p>LCZ-Kit 支持主题定制，你可以通过修改 CSS 变量来自定义主题：</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DocsPage'
})
</script>
