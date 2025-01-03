<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold">Button 按钮</h1>
      <p class="mt-4 text-gray-600">用于触发操作的基础按钮组件。</p>
    </div>

    <CodeBlock
      title="基础用法"
      description="按钮支持多种样式变体，包括默认、次要和危险按钮。"
      :code="basicCode"
    >
      <BaseButton>默认按钮</BaseButton>
      <BaseButton variant="secondary" class="ml-2">次要按钮</BaseButton>
      <BaseButton variant="destructive" class="ml-2">危险按钮</BaseButton>
    </CodeBlock>

    <CodeBlock
      title="加载状态"
      description="按钮可以显示加载状态，通常用于异步操作。"
      :code="loadingCode"
    >
      <BaseButton :loading="loading" @click="handleClick">
        点击加载
      </BaseButton>
      <BaseButton loading variant="secondary" class="ml-2">
        加载中...
      </BaseButton>
    </CodeBlock>

    <CodeBlock
      title="禁用状态"
      description="按钮在禁用状态下不可点击。"
      :code="disabledCode"
    >
      <BaseButton disabled>禁用按钮</BaseButton>
      <BaseButton disabled variant="secondary" class="ml-2">禁用按钮</BaseButton>
      <BaseButton disabled variant="destructive" class="ml-2">禁用按钮</BaseButton>
    </CodeBlock>

    <div>
      <h2 class="text-2xl font-bold mb-4">API</h2>
      <ApiTable :data="apiData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from './components/CodeBlock.vue'
import ApiTable from './components/ApiTable.vue'
import { BaseButton } from '../components/button'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const basicCode = `<template>
  <BaseButton>默认按钮</BaseButton>
  <BaseButton variant="secondary">次要按钮</BaseButton>
  <BaseButton variant="destructive">危险按钮</BaseButton>
</template>`

const loadingCode = `<template>
  <BaseButton :loading="loading" @click="handleClick">
    点击加载
  </BaseButton>
  <BaseButton loading variant="secondary">
    加载中...
  </BaseButton>
</template>`

const disabledCode = `<template>
  <BaseButton disabled>禁用按钮</BaseButton>
  <BaseButton disabled variant="secondary">禁用按钮</BaseButton>
  <BaseButton disabled variant="destructive">禁用按钮</BaseButton>
</template>`

const apiData = [
  {
    name: 'variant',
    description: '按钮的样式变体',
    type: "'default' | 'secondary' | 'destructive'",
    default: 'default',
    required: false
  },
  {
    name: 'size',
    description: '按钮的尺寸',
    type: "'default' | 'sm' | 'lg'",
    default: 'default',
    required: false
  },
  {
    name: 'loading',
    description: '是否显示加载状态',
    type: 'boolean',
    default: 'false',
    required: false
  },
  {
    name: 'disabled',
    description: '是否禁用按钮',
    type: 'boolean',
    default: 'false',
    required: false
  }
]
</script>
