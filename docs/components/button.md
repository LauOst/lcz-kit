# Button 按钮

按钮用于开始一个即时操作。基于 shadcn-vue 的 Button 组件进行二次封装，提供了更简单的 API 和更多的功能。

## 基础用法

提供多种按钮类型：默认、次要、危险、描边、幽灵和链接按钮。

<Preview title="基础用法" description="提供多种按钮类型：默认、次要、危险、描边、幽灵和链接按钮。">
  <button-demo-basic />
  <template #code>

```vue
<template>
  <div class="space-x-4">
    <Button>默认按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="destructive">危险按钮</Button>
    <Button variant="outline">描边按钮</Button>
    <Button variant="ghost">幽灵按钮</Button>
    <Button variant="link">链接按钮</Button>
  </div>
</template>
```

  </template>
</Preview>

## 按钮尺寸

提供三种尺寸：默认（default）、小（sm）、大（lg）。

<Preview title="按钮尺寸" description="提供三种尺寸：默认（default）、小（sm）、大（lg）。">
  <button-demo-size />
  <template #code>

```vue
<template>
  <div class="space-x-4">
    <Button size="sm">小按钮</Button>
    <Button>默认按钮</Button>
    <Button size="lg">大按钮</Button>
  </div>
</template>
```

  </template>
</Preview>

## 禁用和加载状态

按钮可以设置为禁用或加载状态。

<Preview title="禁用和加载状态" description="按钮可以设置为禁用或加载状态。">
  <button-demo-state />
  <template #code>

```vue
<template>
  <div class="space-x-4">
    <Button disabled>禁用按钮</Button>
    <Button loading>加载中</Button>
  </div>
</template>
```

  </template>
</Preview>

## API

### Props

| 属性名   | 类型                                                                        | 默认值    | 说明             |
| -------- | --------------------------------------------------------------------------- | --------- | ---------------- |
| variant  | 'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link' | 'default' | 按钮样式变体     |
| size     | 'default' \| 'sm' \| 'lg'                                                   | 'default' | 按钮大小         |
| disabled | boolean                                                                     | false     | 是否禁用         |
| loading  | boolean                                                                     | false     | 是否显示加载状态 |
| type     | 'button' \| 'submit' \| 'reset'                                             | 'button'  | 按钮类型         |

### Events

| 事件名 | 参数                | 说明                                       |
| ------ | ------------------- | ------------------------------------------ |
| click  | (event: MouseEvent) | 点击按钮时触发，在禁用或加载状态下不会触发 |

### Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |

## 注意事项

1. 当按钮处于 `loading` 状态时，会自动进入禁用状态，此时不会触发 `click` 事件
2. 按钮的样式基于 Tailwind CSS，可以通过 class 进行自定义样式扩展
3. 组件继承了 shadcn-vue 按钮的所有功能，同时简化了使用方式

## 最佳实践

1. 根据操作的重要程度选择合适的按钮样式：

   - 主要操作使用默认按钮
   - 次要操作使用 secondary 或 ghost 按钮
   - 危险操作使用 destructive 按钮

2. 合理使用加载状态：

```vue
<script setup>
import { ref } from 'vue'

const loading = ref(false)
const handleClick = async () => {
  loading.value = true
  try {
    await someAsyncOperation()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Button :loading="loading" @click="handleClick"> 提交 </Button>
</template>
```
