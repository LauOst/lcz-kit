/**
 * 判断是否为字符串
 * @param value 要判断的值
 * @returns boolean
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

/**
 * 判断是否为数字
 * @param value 要判断的值
 * @returns boolean
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * 判断是否为布尔值
 * @param value 要判断的值
 * @returns boolean
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

/**
 * 判断是否为对象
 * @param value 要判断的值
 * @returns boolean
 */
export const isObject = (value: unknown): value is Record<string, any> => {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

/**
 * 判断是否为数组
 * @param value 要判断的值
 * @returns boolean
 */
export const isArray = Array.isArray

/**
 * 判断是否为函数
 * @param value 要判断的值
 * @returns boolean
 */
export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}

/**
 * 判断是否为 undefined
 * @param value 要判断的值
 * @returns boolean
 */
export const isUndefined = (value: unknown): value is undefined => {
  return typeof value === 'undefined'
}

/**
 * 判断是否为 null
 * @param value 要判断的值
 * @returns boolean
 */
export const isNull = (value: unknown): value is null => {
  return value === null
}

/**
 * 判断是否为空值（null 或 undefined）
 * @param value 要判断的值
 * @returns boolean
 */
export const isNil = (value: unknown): value is null | undefined => {
  return isNull(value) || isUndefined(value)
}

/**
 * 判断是否为空（空字符串、空数组、空对象、null、undefined）
 * @param value 要判断的值
 * @returns boolean
 */
export const isEmpty = (value: unknown): boolean => {
  if (isNil(value)) return true
  if (isString(value)) return value.trim().length === 0
  if (isArray(value)) return value.length === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}

/**
 * 判断是否为有效数字（可以是字符串形式的数字）
 * @param value 要判断的值
 * @returns boolean
 */
export const isNumeric = (value: unknown): boolean => {
  if (isNumber(value)) return true
  if (!isString(value)) return false
  return !isNaN(Number(value))
}

/**
 * 判断是否为整数（可以是字符串形式的整数）
 * @param value 要判断的值
 * @returns boolean
 */
export const isInteger = (value: unknown): boolean => {
  if (!isNumeric(value)) return false
  const num = Number(value)
  return Number.isInteger(num)
}

/**
 * 判断是否为正数（可以是字符串形式的正数）
 * @param value 要判断的值
 * @returns boolean
 */
export const isPositive = (value: unknown): boolean => {
  if (!isNumeric(value)) return false
  return Number(value) > 0
}

/**
 * 判断是否为负数（可以是字符串形式的负数）
 * @param value 要判断的值
 * @returns boolean
 */
export const isNegative = (value: unknown): boolean => {
  if (!isNumeric(value)) return false
  return Number(value) < 0
}
