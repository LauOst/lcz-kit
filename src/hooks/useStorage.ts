import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { safeJsonParse, safeStringify } from '../utils/json'

/**
 * Storage 类型
 */
type StorageType = 'local' | 'session'

/**
 * 存储选项
 */
interface StorageOptions {
  /** 存储类型，local 或 session */
  type?: StorageType
  /** 序列化函数 */
  serializer?: (value: any) => string
  /** 反序列化函数 */
  deserializer?: (value: string) => any
}

/**
 * 响应式 Storage Hook
 * @param key Storage 的 key
 * @param initialValue 初始值
 * @param options 配置选项
 * @returns Storage 的值和更新方法
 * @example
 * ```ts
 * // 基础用法
 * const [token, setToken] = useStorage('token', '')
 *
 * // 使用 sessionStorage
 * const [user, setUser] = useStorage('user', null, { type: 'session' })
 *
 * // 自定义序列化
 * const [config, setConfig] = useStorage('config', {}, {
 *   serializer: value => btoa(JSON.stringify(value)),
 *   deserializer: value => JSON.parse(atob(value))
 * })
 * ```
 */
export function useStorage<T>(
  key: string,
  initialValue: T,
  options: StorageOptions = {}
): [Ref<T>, (value: T) => void] {
  const {
    type = 'local',
    serializer = safeStringify,
    deserializer = (value: string) => safeJsonParse(value, initialValue)
  } = options

  const storage = type === 'local' ? localStorage : sessionStorage

  // 获取存储的值或使用初始值
  const getStorageValue = (): T => {
    const storageValue = storage.getItem(key)
    if (storageValue) {
      try {
        return deserializer(storageValue)
      } catch (e) {
        console.error(`Error deserializing storage value for key "${key}":`, e)
      }
    }
    return initialValue
  }

  const value = ref(getStorageValue()) as Ref<T>

  // 更新存储的值
  const updateStorage = (newValue: T) => {
    try {
      if (newValue === null || newValue === undefined) {
        storage.removeItem(key)
      } else {
        storage.setItem(key, serializer(newValue))
      }
      value.value = newValue
    } catch (e) {
      console.error(`Error updating storage for key "${key}":`, e)
    }
  }

  // 监听值的变化
  watch(
    value,
    (newValue) => {
      updateStorage(newValue)
    },
    { deep: true }
  )

  // 监听其他标签页的变化
  window.addEventListener('storage', (e) => {
    if (e.key === key && e.storageArea === storage) {
      value.value = e.newValue ? deserializer(e.newValue) : initialValue
    }
  })

  return [value, updateStorage]
}
