import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'

// 设置为中文
dayjs.locale('zh-cn')
// 加载插件
dayjs.extend(relativeTime)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)

/**
 * 日期时间处理工具函数
 */

/**
 * 格式化日期时间
 * @param date 日期时间，支持 Date、时间戳、ISO 字符串等
 * @param format 格式化模板，默认 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的字符串
 * @example
 * ```ts
 * formatDate(new Date()) // '2025-01-06 17:02:29'
 * formatDate(new Date(), 'YYYY年MM月DD日') // '2025年01月06日'
 * formatDate(1704531749000) // '2025-01-06 17:02:29'
 * ```
 */
export function formatDate(date: dayjs.ConfigType, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format)
}

/**
 * 获取相对时间
 * @param date 日期时间
 * @param baseDate 基准日期，默认为当前时间
 * @returns 相对时间字符串，如"几分钟前"、"几小时前"等
 * @example
 * ```ts
 * fromNow('2025-01-06 16:02:29') // '1小时前'
 * fromNow('2025-01-05 17:02:29') // '1天前'
 * ```
 */
export function fromNow(date: dayjs.ConfigType, baseDate?: dayjs.ConfigType): string {
  return dayjs(date).from(baseDate)
}

/**
 * 判断是否为同一天
 * @param date1 第一个日期
 * @param date2 第二个日期
 * @returns 是否为同一天
 * @example
 * ```ts
 * isSameDay('2025-01-06', '2025-01-06 17:02:29') // true
 * isSameDay('2025-01-06', '2025-01-07') // false
 * ```
 */
export function isSameDay(date1: dayjs.ConfigType, date2: dayjs.ConfigType): boolean {
  return dayjs(date1).isSame(date2, 'day')
}

/**
 * 获取日期范围
 * @param start 开始日期
 * @param end 结束日期
 * @returns 日期范围内的所有日期数组
 * @example
 * ```ts
 * getDateRange('2025-01-01', '2025-01-03')
 * // ['2025-01-01', '2025-01-02', '2025-01-03']
 * ```
 */
export function getDateRange(start: dayjs.ConfigType, end: dayjs.ConfigType): string[] {
  const dates: string[] = []
  let current = dayjs(start)
  const endDate = dayjs(end)

  while (current.isSameOrBefore(endDate, 'day')) {
    dates.push(current.format('YYYY-MM-DD'))
    current = current.add(1, 'day')
  }

  return dates
}

/**
 * 添加时间
 * @param date 基准日期
 * @param amount 添加的数量
 * @param unit 时间单位，支持 'year'|'month'|'week'|'day'|'hour'|'minute'|'second'
 * @returns 新的日期对象
 * @example
 * ```ts
 * addTime('2025-01-06', 1, 'day') // 2025-01-07
 * addTime('2025-01-06', -1, 'month') // 2024-12-06
 * ```
 */
export function addTime(
  date: dayjs.ConfigType,
  amount: number,
  unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
): string {
  return dayjs(date).add(amount, unit).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 获取日期的开始时间
 * @param date 日期
 * @param unit 时间单位，支持 'year'|'month'|'week'|'day'|'hour'|'minute'|'second'
 * @returns 开始时间
 * @example
 * ```ts
 * startOf('2025-01-06 17:02:29', 'day') // '2025-01-06 00:00:00'
 * startOf('2025-01-06 17:02:29', 'month') // '2025-01-01 00:00:00'
 * ```
 */
export function startOf(
  date: dayjs.ConfigType,
  unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
): string {
  return dayjs(date).startOf(unit).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 获取日期的结束时间
 * @param date 日期
 * @param unit 时间单位，支持 'year'|'month'|'week'|'day'|'hour'|'minute'|'second'
 * @returns 结束时间
 * @example
 * ```ts
 * endOf('2025-01-06 17:02:29', 'day') // '2025-01-06 23:59:59'
 * endOf('2025-01-06 17:02:29', 'month') // '2025-01-31 23:59:59'
 * ```
 */
export function endOf(
  date: dayjs.ConfigType,
  unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
): string {
  return dayjs(date).endOf(unit).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 判断日期是否在指定范围内
 * @param date 要判断的日期
 * @param start 开始日期
 * @param end 结束日期
 * @param unit 时间单位，默认为 'day'
 * @returns 是否在范围内
 * @example
 * ```ts
 * isDateBetween('2025-01-06', '2025-01-01', '2025-01-10') // true
 * isDateBetween('2025-01-11', '2025-01-01', '2025-01-10') // false
 * ```
 */
export function isDateBetween(
  date: dayjs.ConfigType,
  start: dayjs.ConfigType,
  end: dayjs.ConfigType,
  unit: dayjs.OpUnitType = 'day'
): boolean {
  return dayjs(date).isBetween(start, end, unit)
}

/**
 * 获取日期是一年中的第几周
 * @param date 日期
 * @returns 周数
 * @example
 * ```ts
 * getWeekOfYear('2025-01-06') // 2
 * ```
 */
export function getWeekOfYear(date: dayjs.ConfigType): number {
  return dayjs(date).week()
}

/**
 * 解析自定义格式的日期字符串
 * @param dateStr 日期字符串
 * @param format 日期格式
 * @returns Dayjs 对象
 * @example
 * ```ts
 * parseDate('06-01-2025', 'DD-MM-YYYY').format('YYYY-MM-DD') // '2025-01-06'
 * ```
 */
export function parseDate(dateStr: string, format: string): dayjs.Dayjs {
  return dayjs(dateStr, format)
}
