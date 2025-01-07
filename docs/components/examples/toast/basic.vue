<template>
  <div class="space-x-4">
    <LButton @click="showDefault">默认提示</LButton>
    <LButton @click="showWithTitle">带标题提示</LButton>
    <LButton @click="showWithAction">带操作提示</LButton>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/components/toast/LToast'
import { LButton } from '@/components/button'

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
