<script setup lang="ts">
import { isVNode } from 'vue'
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '.'
import { useToast } from './use-toast'
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-vue-next'

const { toasts } = useToast()

function getIcon(variant?: string) {
  if (!variant || variant === 'default') return null

  const customVariantMap = {
    success: CheckCircle2,
    warning: AlertCircle,
    error: XCircle,
  }

  return customVariantMap[variant as keyof typeof customVariantMap] || null
}
</script>

<template>
  <ToastProvider>
    <Toast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <div class="grid gap-1">
        <div class="flex items-center gap-2">
          <component
            v-if="getIcon(toast.customVariant)"
            :is="getIcon(toast.customVariant)"
            class="w-5 h-5"
          />
          <ToastTitle v-if="toast.title">
            {{ toast.title }}
          </ToastTitle>
        </div>
        <template v-if="toast.description">
          <ToastDescription v-if="isVNode(toast.description)">
            <component :is="toast.description" />
          </ToastDescription>
          <ToastDescription v-else>
            {{ toast.description }}
          </ToastDescription>
        </template>
        <ToastClose />
      </div>
      <component :is="toast.action" />
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
