<script setup lang="ts">
import { ref } from 'vue'
import { LDialog } from '@/components/dialog'
import { LButton } from '@/components/button'

const visible = ref(false)
const currentWidth = ref<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')

const showDialog = (width: typeof currentWidth.value) => {
  currentWidth.value = width
  visible.value = true
}
</script>

<template>
  <div class="flex gap-4">
    <LButton @click="showDialog('sm')">小尺寸</LButton>
    <LButton @click="showDialog('md')">中等尺寸</LButton>
    <LButton @click="showDialog('lg')">大尺寸</LButton>
    <LButton @click="showDialog('xl')">超大尺寸</LButton>
    <LButton @click="showDialog('full')">全屏</LButton>
  </div>
  <LDialog
    v-model="visible"
    :width="currentWidth"
    :title="currentWidth + ' 尺寸对话框'"
    content="你可以通过 width 属性设置对话框的宽度"
  />
</template>
