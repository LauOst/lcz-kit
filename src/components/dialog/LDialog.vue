<script setup lang="ts">
import { computed } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '../ui/dialog'
import { Button } from '../ui/button'

interface Props {
  /**
   * 对话框标题
   */
  title?: string
  /**
   * 对话框内容
   */
  content?: string
  /**
   * 是否显示对话框
   */
  modelValue?: boolean
  /**
   * 对话框宽度
   * @default 'md'
   */
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /**
   * 是否显示取消按钮
   * @default true
   */
  showCancel?: boolean
  /**
   * 是否显示确认按钮
   * @default true
   */
  showConfirm?: boolean
  /**
   * 取消按钮文本
   * @default '取消'
   */
  cancelText?: string
  /**
   * 确认按钮文本
   * @default '确定'
   */
  confirmText?: string
  /**
   * 是否显示关闭图标
   * @default true
   */
  showClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 'md',
  showCancel: true,
  showConfirm: true,
  cancelText: '取消',
  confirmText: '确定',
  showClose: true
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

const handleCancel = () => {
  emit('update:modelValue', false)
  emit('cancel')
}

const handleConfirm = () => {
  emit('update:modelValue', false)
  emit('confirm')
}

// 计算对话框的样式
const dialogClass = computed(() => {
  const classes = []

  switch (props.width) {
    case 'sm':
      classes.push('sm:max-w-[300px]')
      break
    case 'md':
      classes.push('sm:max-w-[500px]')
      break
    case 'lg':
      classes.push('sm:max-w-[800px]')
      break
    case 'xl':
      classes.push('sm:max-w-[1000px]')
      break
    case 'full':
      classes.push('sm:max-w-[90vw]')
      break
  }

  return classes.join(' ')
})
</script>

<template>
  <Dialog :open="modelValue" @update:open="emit('update:modelValue', $event)">
    <DialogContent :class="dialogClass">
      <DialogHeader>
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription v-if="content">{{ content }}</DialogDescription>
      </DialogHeader>

      <!-- 默认插槽用于自定义内容 -->
      <div class="py-4">
        <slot></slot>
      </div>

      <DialogFooter>
        <div class="flex justify-end space-x-4">
          <Button v-if="showCancel" variant="outline" @click="handleCancel">
            {{ cancelText }}
          </Button>
          <Button v-if="showConfirm" @click="handleConfirm">
            {{ confirmText }}
          </Button>
        </div>
      </DialogFooter>

      <DialogClose v-if="showClose" />
    </DialogContent>
  </Dialog>
</template>
