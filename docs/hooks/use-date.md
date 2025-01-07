# useDate

响应式的日期时间管理 Hook，基于 dayjs 实现。

## 基础用法

```ts
import { useDate } from 'lcz-kit'

// 使用当前时间初始化
const { date, formattedDate, fromNowText, isToday, setDate, addDays, subtractDays, reset } =
  useDate()

// 使用指定日期初始化
const { formattedDate } = useDate('2025-01-06', 'YYYY-MM-DD')
console.log(formattedDate.value) // '2025-01-06'
```

## 日期操作

```ts
const { date, setDate, addDays, subtractDays, reset } = useDate()

// 设置新日期
setDate(new Date())

// 添加天数
addDays(7)

// 减少天数
subtractDays(3)

// 重置为初始日期
reset()
```

## 日期格式化

```ts
const { formattedDate, fromNowText } = useDate(new Date())

// 格式化日期
console.log(formattedDate.value) // '2025-01-06 17:11:40'

// 相对时间
console.log(fromNowText.value) // '刚刚'
```

## 日期判断

```ts
const { isToday, isBetween } = useDate()

// 检查是否是今天
console.log(isToday.value)

// 检查是否在日期范围内
const inRange = isBetween('2025-01-01', '2025-01-31')
```

## API

### 参数

| 参数名      | 类型         | 默认值                  | 说明           |
| ----------- | ------------ | ----------------------- | -------------- |
| initialDate | `ConfigType` | `new Date()`            | 初始日期       |
| format      | `string`     | `'YYYY-MM-DD HH:mm:ss'` | 日期格式化模板 |

### 返回值

| 名称          | 类型                                                                 | 说明                 |
| ------------- | -------------------------------------------------------------------- | -------------------- |
| date          | `Ref<ConfigType>`                                                    | 当前日期             |
| formattedDate | `ComputedRef<string>`                                                | 格式化后的日期字符串 |
| fromNowText   | `ComputedRef<string>`                                                | 相对时间文本         |
| isToday       | `ComputedRef<boolean>`                                               | 是否是今天           |
| setDate       | `(date: ConfigType) => void`                                         | 设置日期             |
| addDays       | `(days: number) => void`                                             | 添加天数             |
| subtractDays  | `(days: number) => void`                                             | 减少天数             |
| reset         | `() => void`                                                         | 重置为初始日期       |
| isBetween     | `(start: ConfigType, end: ConfigType, unit?: OpUnitType) => boolean` | 检查是否在日期范围内 |

### 类型定义

```ts
type ConfigType = string | number | Date | dayjs.Dayjs | null | undefined
type OpUnitType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
```
