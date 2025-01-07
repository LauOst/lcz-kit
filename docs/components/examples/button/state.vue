<script setup>
import { BaseButton } from '@/components/button'
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <BaseButton disabled>禁用按钮</BaseButton>
    <BaseButton variant="secondary" disabled>禁用按钮</BaseButton>
    <BaseButton loading>加载中</BaseButton>
    <BaseButton variant="outline" loading>加载中</BaseButton>
  </div>
</template>
