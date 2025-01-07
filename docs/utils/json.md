# JSON 工具函数

JSON 工具函数提供了一系列安全、便捷的 JSON 操作方法。

## safeJsonParse

安全地解析 JSON 字符串，避免解析错误导致程序崩溃。

### 类型定义

```ts
function safeJsonParse<T>(str: string, defaultValue: T = [] as unknown as T): T
```

### 参数说明

| 参数名       | 类型   | 默认值 | 说明                   |
| ------------ | ------ | ------ | ---------------------- |
| str          | string | -      | 要解析的 JSON 字符串   |
| defaultValue | T      | []     | 解析失败时返回的默认值 |

### 使用示例

```ts
import { safeJsonParse } from 'lcz-kit'

// 正常解析
const data = safeJsonParse('{"name": "John"}', {})
console.log(data) // { name: 'John' }

// 解析失败返回默认值
const invalid = safeJsonParse('invalid json', {})
console.log(invalid) // {}

// 空字符串返回默认值
const empty = safeJsonParse('', [])
console.log(empty) // []
```

## safeStringify

安全地将值序列化为 JSON 字符串，自动处理循环引用问题。

### 类型定义

```ts
function safeStringify(value: unknown, defaultValue: string = '{}'): string
```

### 参数说明

| 参数名       | 类型    | 默认值 | 说明                     |
| ------------ | ------- | ------ | ------------------------ |
| value        | unknown | -      | 要序列化的值             |
| defaultValue | string  | '{}'   | 序列化失败时返回的默认值 |

### 使用示例

```ts
import { safeStringify } from 'lcz-kit'

// 正常序列化
const json = safeStringify({ name: 'John' })
console.log(json) // '{"name":"John"}'

// 处理循环引用
const obj = { a: 1 }
obj.self = obj
console.log(safeStringify(obj)) // '{"a":1}'

// 序列化失败返回默认值
console.log(safeStringify(undefined, '{}')) // '{}'
```

## deepClone

深度克隆对象，创建一个完全独立的副本。

### 类型定义

```ts
function deepClone<T>(obj: T): T
```

### 参数说明

| 参数名 | 类型 | 说明         |
| ------ | ---- | ------------ |
| obj    | T    | 要克隆的对象 |

### 使用示例

```ts
import { deepClone } from 'lcz-kit'

const original = { a: 1, b: { c: 2 } }
const clone = deepClone(original)

// 修改克隆对象不会影响原对象
clone.b.c = 3
console.log(original.b.c) // 2
console.log(clone.b.c) // 3
```

## isEqual

深度比较两个值是否相等。

### 类型定义

```ts
function isEqual(value1: unknown, value2: unknown): boolean
```

### 参数说明

| 参数名 | 类型    | 说明     |
| ------ | ------- | -------- |
| value1 | unknown | 第一个值 |
| value2 | unknown | 第二个值 |

### 使用示例

```ts
import { isEqual } from 'lcz-kit'

// 对象比较
console.log(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true

// 数组比较
console.log(isEqual([1, [2, 3]], [1, [2, 3]])) // true

// 基本类型比较
console.log(isEqual(1, 1)) // true
console.log(isEqual('a', 'a')) // true
```

## formatJson

格式化 JSON 字符串，使其更易读。

### 类型定义

```ts
function formatJson(str: string | object, space: number = 2): string
```

### 参数说明

| 参数名 | 类型             | 默认值 | 说明                         |
| ------ | ---------------- | ------ | ---------------------------- |
| str    | string \| object | -      | 要格式化的 JSON 字符串或对象 |
| space  | number           | 2      | 缩进空格数                   |

### 使用示例

```ts
import { formatJson } from 'lcz-kit'

// 格式化字符串
const formatted1 = formatJson('{"name":"John","age":30}')
console.log(formatted1)
// {
//   "name": "John",
//   "age": 30
// }

// 格式化对象
const formatted2 = formatJson({ name: 'John', age: 30 })
console.log(formatted2)
// {
//   "name": "John",
//   "age": 30
// }
```
