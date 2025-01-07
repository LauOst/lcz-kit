<script setup lang="ts">
import { BaseButton } from './components/button'
</script>

<template>
  <div class="container p-4">
    <h1 class="text-2xl font-bold mb-4">Button Test</h1>
    <div class="space-y-4">
      <div class="space-x-4">
        <BaseButton>Default</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="destructive">Destructive</BaseButton>
      </div>
      <div class="space-x-4">
        <BaseButton variant="outline">Outline</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton variant="link">Link</BaseButton>
      </div>
      <div class="space-x-4">
        <BaseButton size="lg">Large</BaseButton>
        <BaseButton>Default</BaseButton>
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="xs">Extra Small</BaseButton>
      </div>
    </div>
  </div>
</template>
