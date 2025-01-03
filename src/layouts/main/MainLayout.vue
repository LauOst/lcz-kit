<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- 头部导航栏 -->
    <header class="h-14 border-b border-border flex items-center justify-between px-4">
      <div class="flex items-center gap-4">
        <Button variant="ghost" size="sm" @click="$router.push('/')">首页</Button>
        <Button variant="ghost" size="sm" @click="$router.push('/docs')">文档</Button>
        <Button variant="ghost" size="sm" @click="window.open('https://github.com/your-username/lcz-kit', '_blank')">GitHub</Button>
      </div>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" @click="window.open('https://www.npmjs.com/package/lcz-kit', '_blank')">下载</Button>
      </div>
    </header>
    <!-- 主内容区 -->
    <main class="container mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
