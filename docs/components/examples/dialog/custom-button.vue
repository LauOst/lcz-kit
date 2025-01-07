<script setup lang="ts">
import { ref } from 'vue'
import { BaseDialog } from '@/components/dialog'
import { BaseButton } from '@/components/button'

const visible = ref(false)
</script>

<template>
  <BaseButton @click="visible = true">打开对话框</BaseButton>
  <BaseDialog
    v-model="visible"
    title="自定义按钮"
    content="你可以自定义按钮的文本"
    cancel-text="返回"
    confirm-text="提交"
  />
</template>
