<script setup>
import { LButton } from '@/components/button'
</script>

<template>
  <div class="space-x-4">
    <LButton>默认按钮</LButton>
    <LButton variant="secondary">次要按钮</LButton>
    <LButton variant="destructive">危险按钮</LButton>
    <LButton variant="outline">描边按钮</LButton>
    <LButton variant="ghost">幽灵按钮</LButton>
    <LButton variant="link">链接按钮</LButton>
  </div>
</template>
