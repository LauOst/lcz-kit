import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useStorage } from '../hooks'

/**
 * 响应数据类型
 */
export interface ResponseData<T = any> {
  code: number
  data: T
  message: string
}

/**
 * 请求配置
 */
export interface RequestConfig {
  /** 基础URL */
  baseURL?: string
  /** 超时时间 */
  timeout?: number
  /** 请求头 */
  headers?: Record<string, string>
  /** 是否携带凭证 */
  withCredentials?: boolean
  /** 错误处理函数 */
  errorHandler?: (error: any) => void
  /** 未授权处理函数 */
  unauthorizedHandler?: () => void
  /** 响应处理函数 */
  responseHandler?: (response: AxiosResponse) => any
  /** token 获取函数 */
  getToken?: () => string | null | undefined
}

/**
 * 创建请求实例
 * @param config 配置项
 * @returns axios 实例
 */
export function createRequest(config: RequestConfig = {}) {
  const {
    baseURL = '/api',
    timeout = 10000,
    headers = {},
    withCredentials = true,
    errorHandler = (error) => console.error(error),
    unauthorizedHandler = () => {
      window.location.href = '/login'
    },
    responseHandler = (response) => response.data,
    getToken = () => {
      const [token] = useStorage<string>('token', '')
      return token.value
    }
  } = config

  // 创建 axios 实例
  const instance: AxiosInstance = axios.create({
    baseURL,
    timeout,
    headers,
    withCredentials
  })

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 添加 token
      const token = getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      errorHandler(error)
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      const res = response.data as ResponseData

      // 未登录
      if (res.code === 401) {
        unauthorizedHandler()
        return Promise.reject(new Error('Unauthorized'))
      }

      // 请求错误
      if (res.code !== 200) {
        errorHandler(new Error(res.message || 'Error'))
        return Promise.reject(new Error(res.message || 'Error'))
      }

      return responseHandler(response)
    },
    (error) => {
      errorHandler(error)
      return Promise.reject(error)
    }
  )

  return instance
}

/**
 * 默认请求实例
 */
export const request = createRequest()

/**
 * 类型安全的请求方法
 */
export interface RequestMethods {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
}

/**
 * 创建类型安全的请求方法
 * @param instance axios 实例
 * @returns 请求方法
 */
export function createRequestMethods(instance: AxiosInstance): RequestMethods {
  return {
    get: (url, config) => instance.get(url, config),
    post: (url, data, config) => instance.post(url, data, config),
    put: (url, data, config) => instance.put(url, data, config),
    delete: (url, config) => instance.delete(url, config)
  }
}

/**
 * 默认请求方法
 */
export const { get, post, put, delete: del } = createRequestMethods(request)
