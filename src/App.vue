<script setup lang="ts">
import { LButton } from './components/button'
</script>

<template>
  <div class="container p-4">
    <h1 class="text-2xl font-bold mb-4">Button Test</h1>
    <div class="space-y-4">
      <div class="space-x-4">
        <LButton>Default</LButton>
        <LButton variant="secondary">Secondary</LButton>
        <LButton variant="destructive">Destructive</LButton>
      </div>
      <div class="space-x-4">
        <LButton variant="outline">Outline</LButton>
        <LButton variant="ghost">Ghost</LButton>
        <LButton variant="link">Link</LButton>
      </div>
      <div class="space-x-4">
        <LButton size="lg">Large</LButton>
        <LButton>Default</LButton>
        <LButton size="sm">Small</LButton>
        <LButton size="xs">Extra Small</LButton>
      </div>
    </div>
  </div>
</template>
