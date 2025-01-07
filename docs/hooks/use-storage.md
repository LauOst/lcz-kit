# useStorage

响应式的 localStorage/sessionStorage 管理 Hook，支持自动序列化/反序列化，跨标签页同步等特性。

## 基础用法

```ts
import { useStorage } from 'lcz-kit'

// 默认使用 localStorage
const [token, setToken] = useStorage('token', '')

// 更新值
setToken('new-token')

// 读取值
console.log(token.value)
```

## 存储类型

### localStorage（默认）

```ts
// 方式 1：默认使用 localStorage
const [token, setToken] = useStorage('token', '')

// 方式 2：显式指定 localStorage
const [config, setConfig] = useStorage(
  'config',
  {},
  {
    type: 'local'
  }
)
```

### sessionStorage

```ts
const [user, setUser] = useStorage('user', null, {
  type: 'session'
})
```

## 常见使用场景

### 存储用户信息

```ts
interface User {
  id: number
  name: string
  token: string
}

const [user, setUser] = useStorage<User | null>('user', null)

// 登录时保存用户信息
setUser({
  id: 1,
  name: 'John',
  token: 'xxx'
})

// 登出时清除
setUser(null)
```

### 持久化主题设置

```ts
const [theme, setTheme] = useStorage('theme', 'light')

// 切换主题
const toggleTheme = () => {
  setTheme(theme.value === 'light' ? 'dark' : 'light')
}
```

### 购物车数据

```ts
interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

const [cart, setCart] = useStorage<CartItem[]>('cart', [])

// 添加商品
const addToCart = (item: CartItem) => {
  setCart([...cart.value, item])
}

// 清空购物车
const clearCart = () => {
  setCart([])
}
```

### 表单数据自动保存

```ts
interface FormData {
  email: string
  name: string
  message: string
}

// 使用 sessionStorage 临时保存表单数据
const [formData, setFormData] = useStorage<FormData>(
  'contact-form',
  {
    email: '',
    name: '',
    message: ''
  },
  { type: 'session' }
)

// 自动保存表单数据
const handleInput = (field: keyof FormData, value: string) => {
  setFormData({
    ...formData.value,
    [field]: value
  })
}
```

## 自定义序列化

```ts
// 加密存储
const [sensitiveData, setSensitiveData] = useStorage(
  'sensitive',
  {},
  {
    serializer: (value) => btoa(JSON.stringify(value)),
    deserializer: (value) => JSON.parse(atob(value))
  }
)

// 压缩存储
import { compress, decompress } from 'some-compress-lib'
const [largeData, setLargeData] = useStorage(
  'large-data',
  {},
  {
    serializer: (value) => compress(JSON.stringify(value)),
    deserializer: (value) => JSON.parse(decompress(value))
  }
)
```

## 跨标签页同步

useStorage 会自动监听 storage 事件，在其他标签页修改存储值时同步更新：

```ts
// 标签页 A
const [count, setCount] = useStorage('count', 0)
setCount(1)

// 标签页 B
const [count, setCount] = useStorage('count', 0)
// count.value 会自动更新为 1
```

## TypeScript 支持

useStorage 完全支持 TypeScript，会自动推断存储值的类型：

```ts
interface User {
  id: number
  name: string
}

// user.value 的类型为 Ref<User | null>
const [user, setUser] = useStorage<User | null>('user', null)
```

## API

### 参数

| 参数名       | 类型             | 默认值 | 说明       |
| ------------ | ---------------- | ------ | ---------- |
| key          | `string`         | -      | 存储的键名 |
| initialValue | `T`              | -      | 初始值     |
| options      | `StorageOptions` | `{}`   | 配置选项   |

### 配置选项

```ts
interface StorageOptions {
  // 存储类型：'local' 或 'session'
  type?: 'local' | 'session'
  // 自定义序列化函数
  serializer?: (value: any) => string
  // 自定义反序列化函数
  deserializer?: (value: string) => any
}
```

### 返回值

```ts
type UseStorageReturn<T> = [
  Ref<T>, // 存储的值
  (value: T) => void // 更新函数
]
```

### 注意事项

1. 存储值的变化会自动同步到 Storage
2. 支持跨标签页同步（仅 localStorage）
3. 序列化失败会返回初始值
4. 支持存储复杂数据类型（自动 JSON 序列化）
5. Storage 配额限制：
   - localStorage: 通常为 5-10 MB
   - sessionStorage: 通常为 5-10 MB
6. 性能考虑：
   - 避免存储过大的数据
   - 频繁更新时考虑使用节流或防抖
   - 对大数据考虑使用压缩
