/**
 * JSON 相关工具函数
 */

/**
 * 安全地解析JSON字符串
 * @param str 要解析的JSON字符串
 * @param defaultValue 解析失败时的默认值
 * @returns 解析后的值或默认值
 * @example
 * ```ts
 * // 正常解析
 * safeJsonParse('{"name": "John"}', {}) // { name: 'John' }
 *
 * // 解析失败返回默认值
 * safeJsonParse('invalid json', {}) // {}
 *
 * // 空字符串返回默认值
 * safeJsonParse('', []) // []
 * ```
 */
export function safeJsonParse<T>(str: string, defaultValue: T = [] as unknown as T): T {
  try {
    return str ? JSON.parse(str) : defaultValue
  } catch (error) {
    console.error('JSON解析失败:', error)
    return defaultValue
  }
}

/**
 * 安全地序列化值为JSON字符串
 * @param value 要序列化的值
 * @param defaultValue 序列化失败时的默认值
 * @returns JSON字符串或默认值
 * @example
 * ```ts
 * // 正常序列化
 * safeStringify({ name: 'John' }) // '{"name":"John"}'
 *
 * // 处理循环引用
 * const obj = { a: 1 }
 * obj.self = obj
 * safeStringify(obj) // '{"a":1}'
 *
 * // 序列化失败返回默认值
 * safeStringify(undefined, '{}') // '{}'
 * ```
 */
export function safeStringify(value: unknown, defaultValue: string = '{}'): string {
  try {
    return JSON.stringify(value, getCircularReplacer())
  } catch (error) {
    console.error('JSON序列化失败:', error)
    return defaultValue
  }
}

/**
 * 深度克隆对象
 * @param obj 要克隆的对象
 * @returns 克隆后的对象
 * @example
 * ```ts
 * const obj = { a: 1, b: { c: 2 } }
 * const clone = deepClone(obj)
 * clone.b.c = 3
 * console.log(obj.b.c) // 2
 * ```
 */
export function deepClone<T>(obj: T): T {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch {
    return obj
  }
}

/**
 * 比较两个值是否深度相等
 * @param value1 第一个值
 * @param value2 第二个值
 * @returns 是否相等
 * @example
 * ```ts
 * // 对象比较
 * isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }) // true
 *
 * // 数组比较
 * isEqual([1, [2, 3]], [1, [2, 3]]) // true
 *
 * // 基本类型比较
 * isEqual(1, 1) // true
 * isEqual('a', 'a') // true
 * ```
 */
export function isEqual(value1: unknown, value2: unknown): boolean {
  try {
    return JSON.stringify(value1) === JSON.stringify(value2)
  } catch {
    return value1 === value2
  }
}

/**
 * 处理循环引用的 replacer 函数
 * @private
 */
function getCircularReplacer() {
  const seen = new WeakSet()
  return (key: string, value: unknown) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return undefined // 移除循环引用
      }
      seen.add(value)
    }
    return value
  }
}

/**
 * 格式化 JSON 字符串
 * @param str JSON 字符串或对象
 * @param space 缩进空格数
 * @returns 格式化后的 JSON 字符串
 * @example
 * ```ts
 * // 格式化字符串
 * formatJson('{"name":"John","age":30}')
 * // {
 * //   "name": "John",
 * //   "age": 30
 * // }
 *
 * // 格式化对象
 * formatJson({ name: 'John', age: 30 })
 * // {
 * //   "name": "John",
 * //   "age": 30
 * // }
 * ```
 */
export function formatJson(str: string | object, space: number = 2): string {
  try {
    const obj = typeof str === 'string' ? JSON.parse(str) : str
    return JSON.stringify(obj, null, space)
  } catch (error) {
    console.error('JSON格式化失败:', error)
    return typeof str === 'string' ? str : JSON.stringify(str)
  }
}
