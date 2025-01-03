<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/toast/BaseToast'
import { Toaster } from '@/components/ui/toast'

const toast = useToast()

function showDefaultToast() {
  toast.toast('这是一条默认的消息提示')
}

function showSuccessToast() {
  toast.success({
    title: '操作成功',
    description: '你的更改已经保存',
  })
}

function showWarningToast() {
  toast.warning({
    title: '注意',
    description: '你的会话即将过期',
    actionText: '续期',
    onAction: () => {
      console.log('续期会话')
      toast.success('会话已续期')
    },
  })
}

function showErrorToast() {
  toast.error({
    title: '错误',
    description: '保存失败，请重试',
    actionText: '重试',
    onAction: () => {
      console.log('重试保存')
      toast.success('重试成功')
    },
  })
}

function showMultipleToasts() {
  toast.success('第一条消息')
  setTimeout(() => {
    toast.warning('第二条消息')
  }, 1000)
  setTimeout(() => {
    toast.error('第三条消息')
  }, 2000)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="space-y-4">
      <h4 class="text-sm font-medium">
        基础用法
      </h4>
      <div class="flex flex-wrap items-center gap-2">
        <Button @click="showDefaultToast">
          默认提示
        </Button>
        <Button @click="showSuccessToast">
          成功提示
        </Button>
        <Button @click="showWarningToast">
          警告提示
        </Button>
        <Button @click="showErrorToast">
          错误提示
        </Button>
      </div>
    </div>

    <div class="space-y-4">
      <h4 class="text-sm font-medium">
        高级用法
      </h4>
      <div class="flex flex-wrap items-center gap-2">
        <Button @click="showMultipleToasts">
          连续提示
        </Button>
      </div>
    </div>
  </div>

  <Toaster />
</template>

<style scoped>
.flex-col > .space-y-4:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
