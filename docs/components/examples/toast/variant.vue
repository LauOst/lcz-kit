<template>
  <div class="space-x-4">
    <LButton @click="showDefault">默认提示</LButton>
    <LButton @click="showSuccess" variant="default" class="bg-green-500 hover:bg-green-600"
      >成功提示</LButton
    >
    <LButton @click="showWarning" variant="default" class="bg-yellow-500 hover:bg-yellow-600"
      >警告提示</LButton
    >
    <LButton @click="showError" variant="destructive">错误提示</LButton>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../../src/components/toast/LToast'
import { LButton } from '../../../../src/components/button'

const toast = useToast()

const showDefault = () => {
  toast.toast('这是一条默认提示')
}

const showSuccess = () => {
  toast.success('这是一条成功提示')
}

const showWarning = () => {
  toast.warning('这是一条警告提示')
}

const showError = () => {
  toast.error('这是一条错误提示')
}
</script>
