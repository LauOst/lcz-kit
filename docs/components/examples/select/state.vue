<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect } from '@/components/select'
import type { SelectOption } from '@/components/select/types'

const value = ref('')

const options: SelectOption[] = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' }
]
</script>

<template>
  <div class="space-y-4">
    <div class="w-[180px]">
      <BaseSelect v-model="value" disabled placeholder="禁用状态" :options="options" />
    </div>
  </div>
</template>
