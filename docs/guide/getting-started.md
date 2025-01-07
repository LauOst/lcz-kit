# 快速开始

## 安装

::: code-group

```bash [npm]
npm install lcz-kit
```

```bash [yarn]
yarn add lcz-kit
```

```bash [pnpm]
pnpm add lcz-kit
```

:::

## 引入组件

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件样式
import 'lcz-kit/dist/style.css'

const app = createApp(App)
app.mount('#app')
```

## 使用组件

```vue
<script setup lang="ts">
import { Button } from 'lcz-kit'
</script>

<template>
  <Button>点击我</Button>
</template>
```

## 按需引入

lcz-kit 支持按需引入，你可以只引入需要的组件：

```ts
// 只引入按钮组件
import { Button } from 'lcz-kit'
import 'lcz-kit/dist/button.css'
```

## TypeScript 支持

lcz-kit 使用 TypeScript 编写，提供完整的类型定义文件。
