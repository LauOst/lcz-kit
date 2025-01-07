<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect } from '@/components/select'

const value = ref('')

const options = [
  { text: '选项一', id: 1 },
  { text: '选项二', id: 2 },
  { text: '选项三', id: 3 }
]
</script>

<template>
  <div class="space-y-4">
    <div class="w-[180px]">
      <BaseSelect
        v-model="value"
        placeholder="请选择"
        :options="options"
        label-field="text"
        value-field="id"
      />
    </div>
    <div class="text-sm text-muted-foreground">当前选中：{{ value }}</div>
  </div>
</template>
