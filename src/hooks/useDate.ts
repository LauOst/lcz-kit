import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import dayjs from 'dayjs'
import type { ConfigType, OpUnitType } from 'dayjs'
import { formatDate, fromNow, isSameDay, isDateBetween } from '../utils/date'

/**
 * 日期管理 Hook
 * @param initialDate 初始日期
 * @param format 日期格式
 * @returns 日期相关的状态和方法
 * @example
 * ```ts
 * const {
 *   date,
 *   formattedDate,
 *   fromNowText,
 *   setDate,
 *   addDays,
 *   subtractDays,
 *   reset,
 *   isToday,
 *   isBetween
 * } = useDate(new Date())
 *
 * // 更新日期
 * setDate(new Date())
 *
 * // 添加天数
 * addDays(1)
 *
 * // 检查是否是今天
 * console.log(isToday.value)
 * ```
 */
export function useDate(
  initialDate: ConfigType = new Date(),
  format: string = 'YYYY-MM-DD HH:mm:ss'
) {
  // 当前日期
  const date: Ref<ConfigType> = ref(initialDate)

  // 格式化后的日期
  const formattedDate = computed(() => formatDate(date.value, format))

  // 相对时间
  const fromNowText = computed(() => fromNow(date.value))

  // 是否是今天
  const isToday = computed(() => isSameDay(date.value, new Date()))

  // 设置日期
  const setDate = (newDate: ConfigType) => {
    date.value = newDate
  }

  // 添加天数
  const addDays = (days: number) => {
    date.value = dayjs(date.value).add(days, 'day').toDate()
  }

  // 减少天数
  const subtractDays = (days: number) => {
    date.value = dayjs(date.value).subtract(days, 'day').toDate()
  }

  // 重置为初始日期
  const reset = () => {
    date.value = initialDate
  }

  // 检查是否在日期范围内
  const isBetween = (start: ConfigType, end: ConfigType, unit: OpUnitType = 'day') => {
    return isDateBetween(date.value, start, end, unit)
  }

  return {
    date,
    formattedDate,
    fromNowText,
    isToday,
    setDate,
    addDays,
    subtractDays,
    reset,
    isBetween
  }
}
