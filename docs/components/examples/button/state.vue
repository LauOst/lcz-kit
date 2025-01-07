<script setup>
import { LButton } from '@/components/button'
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <LButton disabled>禁用状态</LButton>
    <LButton variant="secondary" disabled>禁用按钮</LButton>
    <LButton loading>加载状态</LButton>
    <LButton variant="outline" loading>加载中</LButton>
  </div>
</template>
