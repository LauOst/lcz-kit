import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption, ECharts, SetOptionOpts } from 'echarts'

export interface UseEchartsOptions {
  /** 主题 */
  theme?: string | object
  /** 渲染器，支持 'canvas' 或 'svg' */
  renderer?: 'canvas' | 'svg'
  /** 是否开启自动调整大小 */
  autoResize?: boolean
  /** 初始化完成回调 */
  onInit?: (chart: ECharts) => void
}

export interface UseEchartsReturn {
  /** 图表容器 ref */
  chartRef: Ref<HTMLElement | undefined>
  /** 更新图表配置 */
  setOption: (option: EChartsOption, opts?: SetOptionOpts) => void
  /** 调整图表大小 */
  resize: () => void
  /** 获取图表实例 */
  getInstance: () => ECharts | undefined
  /** 销毁图表 */
  dispose: () => void
}

/**
 * ECharts 图表 Hook
 * @param options 图表配置项
 * @param hookOpts Hook配置项
 * @example
 * ```ts
 * // 基础用法
 * const { chartRef, setOption } = useEcharts({
 *   xAxis: { type: 'category', data: ['A', 'B', 'C'] },
 *   yAxis: { type: 'value' },
 *   series: [{ data: [120, 200, 150], type: 'line' }]
 * })
 *
 * // 自定义主题
 * const { chartRef } = useEcharts(options, {
 *   theme: 'dark',
 *   renderer: 'canvas',
 *   autoResize: true
 * })
 *
 * // 获取实例
 * const { getInstance } = useEcharts(options)
 * const chart = getInstance()
 * if (chart) {
 *   chart.showLoading()
 * }
 * ```
 */
export function useEcharts(
  options: EChartsOption,
  hookOpts: UseEchartsOptions = {}
): UseEchartsReturn {
  const { theme, renderer = 'canvas', autoResize = true, onInit } = hookOpts

  const chartRef = ref<HTMLElement>()
  let chart: ECharts | null = null

  // 初始化图表
  const initChart = (): void => {
    if (!chartRef.value) return

    // 销毁旧实例
    chart?.dispose()

    // 创建新实例
    chart = echarts.init(chartRef.value, theme, {
      renderer
    })

    // 设置配置项
    chart.setOption(options)

    // 调用初始化回调
    onInit?.(chart)
  }

  // 更新配置项
  const setOption = (option: EChartsOption, opts?: SetOptionOpts): void => {
    if (chart) {
      chart.setOption(option, opts)
    }
  }

  // 调整大小
  const resize = (): void => {
    chart?.resize()
  }

  // 获取实例
  const getInstance = (): ECharts | undefined => {
    return chart ?? undefined
  }

  // 销毁实例
  const dispose = (): void => {
    chart?.dispose()
    chart = null
  }

  // 监听配置变化
  watch(
    () => options,
    (newOptions) => {
      setOption(newOptions)
    },
    { deep: true }
  )

  // 自动调整大小
  let resizeObserver: ResizeObserver | null = null
  const setupResizeObserver = () => {
    if (!chartRef.value || !autoResize) return

    resizeObserver = new ResizeObserver(() => {
      resize()
    })
    resizeObserver.observe(chartRef.value)
  }

  onMounted(() => {
    initChart()
    setupResizeObserver()
  })

  onUnmounted(() => {
    resizeObserver?.disconnect()
    dispose()
  })

  return {
    chartRef,
    setOption,
    resize,
    getInstance,
    dispose
  }
}
