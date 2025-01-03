# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

提供多种按钮类型：默认、次要、危险、描边、幽灵和链接按钮。

<demo-basic />

::: details 查看代码

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

:::

## 按钮尺寸

提供三种尺寸：默认（default）、小（sm）、大（lg）。

<demo-size />

::: details 查看代码

```vue
<template>
  <div class="space-x-4">
    <Button size="sm">小按钮</Button>
    <Button>默认按钮</Button>
    <Button size="lg">大按钮</Button>
  </div>
</template>
```

:::

## 禁用和加载状态

按钮可以设置为禁用或加载状态。

<demo-state />

::: details 查看代码

```vue
<template>
  <div class="space-x-4">
    <Button disabled>禁用按钮</Button>
    <Button variant="secondary" disabled>禁用按钮</Button>
    <Button loading>加载中</Button>
    <Button variant="outline" loading>加载中</Button>
  </div>
</template>
```

:::

## API

### Props

| 属性     | 说明             | 类型                                                                        | 默认值    |
| -------- | ---------------- | --------------------------------------------------------------------------- | --------- |
| variant  | 按钮类型         | 'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' | 'default' |
| size     | 按钮大小         | 'default' \| 'sm' \| 'lg'                                                   | 'default' |
| disabled | 是否禁用         | boolean                                                                     | false     |
| loading  | 是否显示加载状态 | boolean                                                                     | false     |

### Events

| 事件名 | 说明           | 类型                        |
| ------ | -------------- | --------------------------- |
| click  | 点击按钮时触发 | (event: MouseEvent) => void |

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |
