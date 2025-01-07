<script setup lang="ts">
import { ref } from 'vue'
import { LDialog } from '@/components/dialog'
import { LButton } from '@/components/button'

const visible = ref(false)
const formData = ref({
  name: '',
  email: ''
})
</script>

<template>
  <LButton @click="visible = true">打开对话框</LButton>
  <LDialog v-model="visible" title="用户信息" confirm-text="提交">
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">姓名</label>
        <input
          v-model="formData.name"
          type="text"
          class="w-full px-3 py-2 border rounded-md"
          placeholder="请输入姓名"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">邮箱</label>
        <input
          v-model="formData.email"
          type="email"
          class="w-full px-3 py-2 border rounded-md"
          placeholder="请输入邮箱"
        />
      </div>
    </div>
  </LDialog>
</template>
