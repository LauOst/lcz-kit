<script setup lang="ts">
import { ref } from 'vue'
import { LDialog } from '@/components/dialog'
import { LButton } from '@/components/button'

const visible = ref(false)
</script>

<template>
  <LButton @click="visible = true">打开对话框</LButton>
  <LDialog
    v-model="visible"
    title="自定义按钮"
    content="你可以自定义按钮的文本"
    cancel-text="返回"
    confirm-text="提交"
  />
</template>
