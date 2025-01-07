# Dialog 对话框

对话框组件用于在当前页面打开一个浮层，承载相关操作。

## 基础用法

使用 `v-model` 控制对话框的显示和隐藏。

<Preview title="基础用法" description="最基本的对话框用法，包含标题、内容和操作按钮。">
  <dialog-demo-basic />
  <template #code>

```vue
<template>
  <BaseButton @click="visible = true">打开对话框</BaseButton>
  <BaseDialog
    v-model="visible"
    title="基础对话框"
    content="这是一个基础的对话框示例"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const handleConfirm = () => {
  console.log('确认')
}
const handleCancel = () => {
  console.log('取消')
}
</script>
```

  </template>
</Preview>

## 不同尺寸

通过 `width` 属性设置对话框的宽度，支持 `sm`、`md`、`lg`、`xl` 和 `full` 五种尺寸。

<Preview title="不同尺寸" description="可以根据内容选择合适的对话框尺寸。">
  <dialog-demo-width />
  <template #code>

```vue
<template>
  <div class="flex gap-4">
    <BaseButton @click="showDialog('sm')">小尺寸</BaseButton>
    <BaseButton @click="showDialog('md')">中等尺寸</BaseButton>
    <BaseButton @click="showDialog('lg')">大尺寸</BaseButton>
    <BaseButton @click="showDialog('xl')">超大尺寸</BaseButton>
    <BaseButton @click="showDialog('full')">全屏</BaseButton>
  </div>
  <BaseDialog
    v-model="visible"
    :width="currentWidth"
    :title="currentWidth + ' 尺寸对话框'"
    content="你可以通过 width 属性设置对话框的宽度"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const currentWidth = ref<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')

const showDialog = (width: typeof currentWidth.value) => {
  currentWidth.value = width
  visible.value = true
}
</script>
```

  </template>
</Preview>

## 自定义按钮

通过 `cancel-text` 和 `confirm-text` 自定义按钮文本，通过 `show-cancel` 和 `show-confirm` 控制按钮的显示。

<Preview title="自定义按钮" description="自定义对话框底部按钮的文本和显示状态。">
  <dialog-demo-custom-button />
  <template #code>

```vue
<template>
  <BaseButton @click="visible = true">打开对话框</BaseButton>
  <BaseDialog
    v-model="visible"
    title="自定义按钮"
    content="你可以自定义按钮的文本"
    cancel-text="返回"
    confirm-text="提交"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
```

  </template>
</Preview>

## 自定义内容

使用默认插槽可以自定义对话框的内容，比如添加表单等。

<Preview title="自定义内容" description="对话框可以承载更复杂的内容。">
  <dialog-demo-custom-content />
  <template #code>

```vue
<template>
  <BaseButton @click="visible = true">打开对话框</BaseButton>
  <BaseDialog v-model="visible" title="用户信息" confirm-text="提交">
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
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const formData = ref({
  name: '',
  email: ''
})
</script>
```

  </template>
</Preview>

## API

### Props

| 名称        | 类型                                   | 默认值 | 说明             |
| ----------- | -------------------------------------- | ------ | ---------------- |
| modelValue  | boolean                                | -      | 是否显示对话框   |
| title       | string                                 | -      | 对话框标题       |
| content     | string                                 | -      | 对话框内容       |
| width       | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'md'   | 对话框宽度       |
| showCancel  | boolean                                | true   | 是否显示取消按钮 |
| showConfirm | boolean                                | true   | 是否显示确认按钮 |
| cancelText  | string                                 | '取消' | 取消按钮文本     |
| confirmText | string                                 | '确定' | 确认按钮文本     |
| showClose   | boolean                                | true   | 是否显示关闭图标 |

### Events

| 名称              | 参数             | 说明                     |
| ----------------- | ---------------- | ------------------------ |
| update:modelValue | (value: boolean) | 对话框显示状态变化时触发 |
| confirm           | -                | 点击确认按钮时触发       |
| cancel            | -                | 点击取消按钮时触发       |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 对话框的内容 |
