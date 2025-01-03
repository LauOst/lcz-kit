<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold">Select 选择器</h1>
      <p class="mt-4 text-gray-600">当选项过多时，使用下拉菜单展示并选择内容。</p>
    </div>

    <CodeBlock
      title="基础用法"
      description="基础的选择器用法。"
      :code="basicCode"
    >
      <div class="w-[180px]">
        <BaseSelect
          v-model="value"
          placeholder="请选择"
          :options="options"
        />
      </div>
      <div class="mt-4">当前选中：{{ value }}</div>
    </CodeBlock>

    <CodeBlock
      title="禁用状态"
      description="选择器的禁用状态。"
      :code="disabledCode"
    >
      <div class="w-[180px]">
        <BaseSelect
          disabled
          v-model="disabledValue"
          placeholder="禁用状态"
          :options="options"
        />
      </div>
    </CodeBlock>

    <CodeBlock
      title="自定义字段名"
      description="通过 labelField 和 valueField 来自定义选项的字段名。"
      :code="customFieldCode"
    >
      <div class="w-[180px]">
        <BaseSelect
          v-model="customValue"
          placeholder="请选择"
          :options="customOptions"
          label-field="text"
          value-field="id"
        />
      </div>
      <div class="mt-4">当前选中：{{ customValue }}</div>
    </CodeBlock>

    <div>
      <h2 class="text-2xl font-bold mb-4">API</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-medium mb-2">Props</h3>
          <ApiTable :data="apiData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from './components/CodeBlock.vue'
import ApiTable from './components/ApiTable.vue'
import { BaseSelect } from '../components/select'
import type { SelectOption } from '../components/select/types'

const value = ref('')
const disabledValue = ref('')
const customValue = ref('')

const options: SelectOption[] = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' }
]

const customOptions = [
  { text: '选项一', id: 1 },
  { text: '选项二', id: 2 },
  { text: '选项三', id: 3 }
]

const basicCode = `<!-- 基础用法 -->
<!-- 引入组件和类型 -->
import { ref } from 'vue'
import type { SelectOption } from 'lcz-kit'

<!-- 定义数据 -->
const value = ref('')
const options: SelectOption[] = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' }
]

<!-- 模板 -->
<template>
  <BaseSelect
    v-model="value"
    placeholder="请选择"
    :options="options"
  />
</template>`

const disabledCode = `<!-- 禁用状态 -->
<template>
  <BaseSelect
    disabled
    v-model="value"
    placeholder="禁用状态"
    :options="options"
  />
</template>`

const customFieldCode = `<!-- 自定义字段 -->
<!-- 定义数据 -->
const options = [
  { text: '选项一', id: 1 },
  { text: '选项二', id: 2 },
  { text: '选项三', id: 3 }
]

<!-- 模板 -->
<template>
  <BaseSelect
    v-model="value"
    placeholder="请选择"
    :options="options"
    label-field="text"
    value-field="id"
  />
</template>`

const apiData = [
  {
    name: 'modelValue',
    description: '选择器的值',
    type: 'string | number',
    default: '-',
    required: true
  },
  {
    name: 'options',
    description: '选项列表',
    type: 'SelectOption[]',
    default: '[]',
    required: true
  },
  {
    name: 'placeholder',
    description: '占位文本',
    type: 'string',
    default: '请选择',
    required: false
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    default: 'false',
    required: false
  },
  {
    name: 'labelField',
    description: '标签字段名',
    type: 'string',
    default: 'label',
    required: false
  },
  {
    name: 'valueField',
    description: '值字段名',
    type: 'string',
    default: 'value',
    required: false
  }
]
</script>
