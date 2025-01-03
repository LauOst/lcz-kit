<script setup lang="ts">
interface ApiItem {
  name: string
  description: string
  type: string
  default?: string
  required?: boolean
}

interface Props {
  data: ApiItem[]
}

defineProps<Props>()
</script>

<template>
  <div class="rounded-lg border">
    <table class="w-full">
      <thead>
        <tr class="border-b">
          <th class="px-6 py-3 text-left text-sm font-medium">属性</th>
          <th class="px-6 py-3 text-left text-sm font-medium">说明</th>
          <th class="px-6 py-3 text-left text-sm font-medium">类型</th>
          <th class="px-6 py-3 text-left text-sm font-medium">默认值</th>
          <th class="px-6 py-3 text-left text-sm font-medium">是否必填</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="item in data" :key="item.name">
          <td class="px-6 py-4 text-sm font-mono">{{ item.name }}</td>
          <td class="px-6 py-4 text-sm">{{ item.description }}</td>
          <td class="px-6 py-4 text-sm font-mono">{{ item.type }}</td>
          <td class="px-6 py-4 text-sm font-mono">{{ item.default || '-' }}</td>
          <td class="px-6 py-4 text-sm">{{ item.required ? '是' : '否' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
