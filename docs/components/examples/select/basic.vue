<script setup lang="ts">
import { ref } from 'vue'
import { LSelect } from '@/components/select'
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
      <LSelect v-model="value" placeholder="请选择" :options="options" />
    </div>
    <div class="text-sm text-muted-foreground">当前选中：{{ value }}</div>
  </div>
</template>
