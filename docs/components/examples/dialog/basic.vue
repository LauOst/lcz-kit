<script setup lang="ts">
import { ref } from 'vue'
import { LDialog } from '@/components/dialog'
import { LButton } from '@/components/button'

const visible = ref(false)
const handleConfirm = () => {
  console.log('确认')
}
const handleCancel = () => {
  console.log('取消')
}
</script>

<template>
  <LButton @click="visible = true">打开对话框</LButton>
  <LDialog
    v-model="visible"
    title="基础对话框"
    content="这是一个基础的对话框示例"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  />
</template>
