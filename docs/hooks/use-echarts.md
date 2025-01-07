# useEcharts

基于 ECharts 的图表 Hook，提供了简单易用的图表管理功能。

## 基础用法

```vue
<template>
  <div ref="chartRef" style="width: 600px; height: 400px;" />
</template>

<script setup lang="ts">
import { useEcharts } from 'lcz-kit'

const { chartRef } = useEcharts({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
</script>
```

## 动态更新

```vue
<template>
  <div ref="chartRef" style="width: 600px; height: 400px;" />
  <button @click="updateData">更新数据</button>
</template>

<script setup lang="ts">
import { useEcharts } from 'lcz-kit'

const options = {
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70],
      type: 'bar'
    }
  ]
}

const { chartRef, setOption } = useEcharts(options)

const updateData = () => {
  setOption({
    series: [
      {
        data: [
          Math.random() * 200,
          Math.random() * 200,
          Math.random() * 200,
          Math.random() * 200,
          Math.random() * 200
        ],
        type: 'bar'
      }
    ]
  })
}
</script>
```

## 自定义主题

```ts
const { chartRef } = useEcharts(options, {
  theme: 'dark',
  renderer: 'canvas',
  autoResize: true
})
```

## 获取实例

```ts
const { getInstance } = useEcharts(options)

// 显示加载状态
const showLoading = () => {
  const chart = getInstance()
  if (chart) {
    chart.showLoading()
  }
}

// 隐藏加载状态
const hideLoading = () => {
  const chart = getInstance()
  if (chart) {
    chart.hideLoading()
  }
}
```

## 响应式调整

Hook 默认支持容器大小变化的自动调整：

```vue
<template>
  <div class="chart-container" :style="{ width: width + 'px' }">
    <div ref="chartRef" style="width: 100%; height: 400px;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEcharts } from 'lcz-kit'

const width = ref(600)
const { chartRef } = useEcharts(options, {
  autoResize: true // 默认为 true
})

// 改变容器大小时，图表会自动调整
setTimeout(() => {
  width.value = 800
}, 2000)
</script>
```

## 手动调整大小

```ts
const { chartRef, resize } = useEcharts(options)

// 手动调整大小
const handleResize = () => {
  resize()
}
```

## API

### 参数

#### options

图表的配置项，类型为 `EChartsOption`。

#### hookOpts

Hook 的配置项：

| 参数名     | 类型                       | 默认值     | 说明             |
| ---------- | -------------------------- | ---------- | ---------------- |
| theme      | `string \| object`         | -          | 主题             |
| renderer   | `'canvas' \| 'svg'`        | `'canvas'` | 渲染器           |
| autoResize | `boolean`                  | `true`     | 是否自动调整大小 |
| onInit     | `(chart: ECharts) => void` | -          | 初始化完成回调   |

### 返回值

| 名称        | 类型                                                               | 说明         |
| ----------- | ------------------------------------------------------------------ | ------------ |
| chartRef    | `Ref<HTMLElement \| undefined>`                                    | 图表容器 ref |
| setOption   | `(option: EChartsOption, opts?: boolean \| EChartsOption) => void` | 更新图表配置 |
| resize      | `() => void`                                                       | 调整图表大小 |
| getInstance | `() => ECharts \| undefined`                                       | 获取图表实例 |
| dispose     | `() => void`                                                       | 销毁图表     |

## 注意事项

1. 确保容器元素具有明确的宽高
2. 在组件卸载时会自动销毁图表实例
3. 默认使用 ResizeObserver 监听容器大小变化
4. 支持 SSR/SSG（服务端渲染/静态生成）
5. TypeScript 类型支持完善
