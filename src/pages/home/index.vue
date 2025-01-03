<template>
  <div class="container mx-auto py-10">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold">LCZ-Kit</h1>
      <p class="text-xl text-muted-foreground">一个现代的 Vue 3 组件库</p>
    </div>
    
    <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold">现代设计</h3>
        <p class="text-muted-foreground mt-2">采用最新的设计系统，提供美观且实用的组件</p>
      </div>
      
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold">TypeScript</h3>
        <p class="text-muted-foreground mt-2">使用 TypeScript 编写，提供完整的类型支持</p>
      </div>
      
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold">主题定制</h3>
        <p class="text-muted-foreground mt-2">支持亮暗主题切换，可自定义主题样式</p>
      </div>
    </div>

    <div class="mt-10 text-center">
      <Button size="lg" variant="default">开始使用</Button>
      <Button size="lg" variant="outline" class="ml-4">查看文档</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
