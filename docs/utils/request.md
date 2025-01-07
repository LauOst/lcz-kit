# HTTP 请求工具

基于 axios 的 HTTP 请求工具，提供了统一的请求配置、拦截器和错误处理。

## 基础用法

```ts
import { request, get, post } from 'lcz-kit'

// 使用请求实例
const data = await request.get('/api/users')

// 使用便捷方法
const user = await get('/api/users/1')
const result = await post('/api/users', { name: 'John' })
```

## 自定义配置

```ts
import { createRequest } from 'lcz-kit'

const request = createRequest({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  // 自定义错误处理
  errorHandler: (error) => {
    console.error('请求错误:', error)
  },
  // 自定义未授权处理
  unauthorizedHandler: () => {
    router.push('/login')
  }
})
```

## 类型支持

```ts
interface User {
  id: number
  name: string
}

// 响应数据会自动推导类型
const user = await get<User>('/api/users/1')
console.log(user.name)

const users = await post<User[]>('/api/users/batch', [1, 2, 3])
users.forEach((user) => console.log(user.name))
```

## 请求拦截

默认的请求拦截器会：

1. 自动添加 token（从 localStorage 获取）
2. 处理常见的错误情况
3. 统一处理响应格式

```ts
// 自定义 token 获取方式
const request = createRequest({
  getToken: () => sessionStorage.getItem('token')
})

// 自定义响应处理
const request = createRequest({
  responseHandler: (response) => {
    // 只返回数据部分
    return response.data.data
  }
})
```

## 错误处理

```ts
const request = createRequest({
  errorHandler: (error) => {
    // 使用 Element Plus 的消息提示
    ElMessage.error(error.message)
  },
  unauthorizedHandler: () => {
    // 清除用户信息
    store.dispatch('user/logout')
    // 跳转登录页
    router.push('/login')
  }
})
```

## API

### createRequest(config)

创建请求实例的配置项：

| 参数                | 类型     | 默认值                    | 说明             |
| ------------------- | -------- | ------------------------- | ---------------- |
| baseURL             | string   | '/api'                    | 基础URL          |
| timeout             | number   | 10000                     | 超时时间（毫秒） |
| headers             | object   | {}                        | 请求头           |
| withCredentials     | boolean  | true                      | 是否携带凭证     |
| errorHandler        | function | console.error             | 错误处理函数     |
| unauthorizedHandler | function | 跳转登录页                | 未授权处理函数   |
| responseHandler     | function | response => response.data | 响应处理函数     |
| getToken            | function | 从 localStorage 获取      | token 获取函数   |

### 请求方法

```ts
interface RequestMethods {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
}
```

### 响应数据格式

```ts
interface ResponseData<T = any> {
  code: number // 状态码
  data: T // 响应数据
  message: string // 消息
}
```

## 最佳实践

### 1. API 模块化

```ts
// api/user.ts
import { get, post } from 'lcz-kit'
import type { User } from '@/types'

export function getUser(id: number) {
  return get<User>(`/users/${id}`)
}

export function createUser(data: Partial<User>) {
  return post<User>('/users', data)
}
```

### 2. 统一错误处理

```ts
// utils/request.ts
import { createRequest } from 'lcz-kit'
import { ElMessage } from 'element-plus'
import router from '@/router'
import store from '@/store'

export const request = createRequest({
  errorHandler: (error) => {
    ElMessage.error(error.message)
  },
  unauthorizedHandler: () => {
    store.dispatch('user/logout')
    router.push('/login')
  }
})
```

### 3. 环境配置

```ts
// utils/request.ts
import { createRequest } from 'lcz-kit'

export const request = createRequest({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT
})
```

### 4. 请求取消

```ts
import { get } from 'lcz-kit'

const controller = new AbortController()

// 发起可取消的请求
const data = await get('/api/data', {
  signal: controller.signal
})

// 取消请求
controller.abort()
```
