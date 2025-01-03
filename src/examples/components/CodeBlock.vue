<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from '../../components/button'

interface Props {
  code: string
  title?: string
  description?: string
}

defineProps<Props>()

const showCode = ref(false)
</script>

<template>
  <div class="rounded-lg border">
    <div class="p-6 space-y-4">
      <div v-if="title || description" class="space-y-1">
        <h3 v-if="title" class="text-lg font-medium">{{ title }}</h3>
        <p v-if="description" class="text-sm text-muted-foreground">
          {{ description }}
        </p>
      </div>
      <div class="py-4">
        <slot />
      </div>
    </div>
    <div class="border-t px-6 py-3 flex items-center justify-between">
      <div class="flex gap-2">
        <slot name="actions" />
      </div>
      <BaseButton variant="ghost" size="sm" @click="showCode = !showCode">
        {{ showCode ? '隐藏代码' : '查看代码' }}
      </BaseButton>
    </div>
    <div v-show="showCode" class="border-t">
      <pre class="p-6 overflow-x-auto text-sm"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>
