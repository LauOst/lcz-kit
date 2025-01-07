<script setup>
import { BaseButton } from '@/components/button'
</script>

<template>
  <div class="space-x-4">
    <BaseButton>默认按钮</BaseButton>
    <BaseButton variant="secondary">次要按钮</BaseButton>
    <BaseButton variant="destructive">危险按钮</BaseButton>
    <BaseButton variant="outline">描边按钮</BaseButton>
    <BaseButton variant="ghost">幽灵按钮</BaseButton>
    <BaseButton variant="link">链接按钮</BaseButton>
  </div>
</template>
