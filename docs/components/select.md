# Select 选择器

基于 shadcn-vue 的 Select 组件进行二次封装，提供了更简单的数据驱动使用方式。

## 基础用法

基础的下拉选择器用法。

<Preview title="基础用法" description="基础的下拉选择器用法。">
  <select-demo-basic />
  <template #code>

```vue
<template>
  <div class="w-[180px]">
    <BaseSelect v-model="value" placeholder="请选择" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SelectOption } from 'lcz-kit'

const value = ref('')

const options: SelectOption[] = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' }
]
</script>
```

  </template>
</Preview>

## 自定义字段名

可以通过 `labelField` 和 `valueField` 来自定义选项的字段名。

<Preview title="自定义字段名" description="可以通过 labelField 和 valueField 来自定义选项的字段名。">
  <select-demo-custom />
  <template #code>

```vue
<template>
  <div class="w-[180px]">
    <BaseSelect
      v-model="value"
      placeholder="请选择"
      :options="options"
      label-field="text"
      value-field="id"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
  { text: '选项一', id: 1 },
  { text: '选项二', id: 2 },
  { text: '选项三', id: 3 }
]
</script>
```

  </template>
</Preview>

## 禁用状态

选择器可以设置为禁用状态。

<Preview title="禁用状态" description="选择器可以设置为禁用状态。">
  <select-demo-state />
  <template #code>

```vue
<template>
  <div class="w-[180px]">
    <BaseSelect v-model="value" disabled placeholder="禁用状态" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SelectOption } from 'lcz-kit'

const value = ref('')

const options: SelectOption[] = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' }
]
</script>
```

  </template>
</Preview>

## API

### Props

| 属性名      | 类型             | 默认值   | 说明             |
| ----------- | ---------------- | -------- | ---------------- |
| modelValue  | string \| number | -        | 选中的值         |
| options     | SelectOption[]   | []       | 选项数据         |
| placeholder | string           | '请选择' | 占位文本         |
| disabled    | boolean          | false    | 是否禁用         |
| labelField  | string           | 'label'  | 选项标签的字段名 |
| valueField  | string           | 'value'  | 选项值的字段名   |

### Events

| 事件名            | 参数                      | 说明             |
| ----------------- | ------------------------- | ---------------- |
| update:modelValue | (value: string \| number) | 选中值变化时触发 |
| change            | (value: string \| number) | 选中值变化时触发 |

### SelectOption 类型

```ts
interface SelectOption {
  label?: string
  value?: string | number
  disabled?: boolean
  [key: string]: any
}
```

## 注意事项

1. 当使用自定义字段名时，需要同时设置 `labelField` 和 `valueField`
2. 选项数据支持任意字段，可以根据需要添加额外的字段
3. 组件继承了 shadcn-vue Select 的所有功能，同时简化了使用方式

## 最佳实践

1. 使用 TypeScript 时，建议导入并使用 `SelectOption` 类型来约束选项数据
2. 对于复杂的数据结构，可以使用自定义字段名来适配现有的数据格式
3. 建议给选择器设置一个合适的宽度，可以通过外层容器或直接设置 class 来控制
