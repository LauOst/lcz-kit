<template>
  <div class="space-x-4">
    <BaseButton @click="showDefault">默认提示</BaseButton>
    <BaseButton @click="showWithTitle">带标题提示</BaseButton>
    <BaseButton @click="showWithAction">带操作提示</BaseButton>
  </div>
  <Toaster />
</template>

<script setup lang="ts">
import { useToast } from '@/components/toast/BaseToast'
import { BaseButton } from '@/components/button'
import { Toaster } from '@/components/ui/toast'

const toast = useToast()

const showDefault = () => {
  toast.toast('这是一条消息提示')
}

const showWithTitle = () => {
  toast.toast({
    title: '提示标题',
    description: '这是一条带标题的消息提示'
  })
}

const showWithAction = () => {
  toast.toast({
    title: '提示标题',
    description: '这是一条带操作按钮的消息提示',
    actionText: '撤销',
    onAction: () => {
      console.log('点击了撤销按钮')
    }
  })
}
</script>
