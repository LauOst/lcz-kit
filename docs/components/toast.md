# Toast 消息提示

基于 shadcn-vue 的 Toast 组件进行二次封装，提供了更简单的命令式调用方式和更丰富的提示类型。

## 基础用法

最简单的信息提示。

<Preview title="基础用法" description="最简单的信息提示，支持纯文本和带标题的提示。">
  <toast-demo-basic />
  <template #code>

```vue
<script setup>
import { useToast } from 'lcz-kit'

const toast = useToast()

const showToast = () => {
  toast('这是一条消息提示')
}

const showToastWithTitle = () => {
  toast({
    title: '提示',
    description: '这是一条带标题的消息提示'
  })
}
</script>

<template>
  <div class="space-x-4">
    <Button @click="showToast">显示提示</Button>
    <Button @click="showToastWithTitle">显示带标题的提示</Button>
  </div>
</template>
```

  </template>
</Preview>

## 不同类型

提供了四种不同的提示类型：默认、成功、警告和错误。

<Preview title="不同类型" description="提供了四种不同的提示类型：默认、成功、警告和错误。">
  <toast-demo-variant />
  <template #code>

```vue
<script setup>
import { useToast } from 'lcz-kit'

const toast = useToast()

const showDefault = () => {
  toast({
    title: '默认提示',
    description: '这是一条默认提示'
  })
}

const showSuccess = () => {
  toast({
    title: '成功',
    description: '操作成功！',
    variant: 'success'
  })
}

const showWarning = () => {
  toast({
    title: '警告',
    description: '请注意这个警告信息',
    variant: 'warning'
  })
}

const showError = () => {
  toast({
    title: '错误',
    description: '出错了！',
    variant: 'error'
  })
}
</script>

<template>
  <div class="space-x-4">
    <Button @click="showDefault">默认提示</Button>
    <Button @click="showSuccess" variant="success">成功提示</Button>
    <Button @click="showWarning" variant="warning">警告提示</Button>
    <Button @click="showError" variant="destructive">错误提示</Button>
  </div>
</template>
```

  </template>
</Preview>

## API

### useToast

`useToast` 是一个组合式函数，返回一个用于显示消息提示的函数。

```ts
function useToast(): (options: string | ToastOptions) => void

interface ToastOptions {
  /**
   * 提示标题
   */
  title?: string
  /**
   * 提示内容
   */
  description?: string
  /**
   * 提示类型，默认为 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error'
  /**
   * 显示时长（毫秒），默认 3000
   */
  duration?: number
  /**
   * 操作按钮配置
   */
  action?: {
    label: string
    onClick: () => void
  }
  /**
   * 关闭时的回调函数
   */
  onClose?: () => void
}
```

## 最佳实践

1. 根据场景选择合适的提示类型：

   - 成功操作使用 success
   - 需要用户注意使用 warning
   - 操作失败使用 error
   - 普通信息使用 default

2. 在异步操作中使用：

```ts
const handleSubmit = async () => {
  try {
    await submitData()
    toast({
      title: '成功',
      description: '数据提交成功',
      variant: 'success'
    })
  } catch (error) {
    toast({
      title: '错误',
      description: error.message,
      variant: 'error'
    })
  }
}
```

3. 合理设置显示时长：
   - 重要信息建议设置更长的时间
   - 简单的成功提示可以使用默认时长
   - 错误信息建议设置更长的时间，让用户有足够时间查看
