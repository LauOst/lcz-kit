# lcz-kit

一个基于 Vue 3 的现代化组件库和工具集合

## 📚 文档

访问我们的在线文档：[https://LauOst.github.io/lcz-kit/](https://LauOst.github.io/lcz-kit/)

## ✨ 特性

- 🚀 **现代化技术栈** - 基于 Vue 3、TypeScript 和 Tailwind CSS
- 📦 **组件丰富** - 提供丰富的组件和工具函数
- 🎨 **主题定制** - 支持深色模式和灵活的主题配置
- 💪 **类型支持** - 使用 TypeScript 编写，提供完整的类型定义
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🔧 **按需引入** - 支持按需引入组件，优化项目体积

## 📦 安装

````bash
# npm
npm install lcz-kit

# yarn
yarn add lcz-kit

# pnpm
pnpm add lcz-kit

## 🚀 快速开始

```typescript
// 引入组件
import { BaseButton, NavigationMenu, Sidebar } from 'lcz-kit'

// 引入 Hooks
import { useStorage, useDate, useEcharts } from 'lcz-kit'

// 引入样式
import 'lcz-kit/style.css'
````

## 🔨 使用示例

```vue
<template>
  <BaseButton>点击我</BaseButton>

  <NavigationMenu>
    <NavigationMenuItem>
      <NavigationMenuTrigger>开始使用</NavigationMenuTrigger>
      <NavigationMenuContent>
        <!-- 导航内容 -->
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  BaseButton,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from 'lcz-kit'

// 使用 Hooks
import { useStorage } from 'lcz-kit'
const storage = useStorage()
</script>
```
