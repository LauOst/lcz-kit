# 日期工具函数

基于 dayjs 的日期时间处理工具函数集合。

## formatDate

格式化日期时间为指定格式的字符串。

### 类型定义

```ts
function formatDate(date: dayjs.ConfigType, format: string = 'YYYY-MM-DD HH:mm:ss'): string
```

### 参数说明

| 参数名 | 类型             | 默认值                | 说明                                      |
| ------ | ---------------- | --------------------- | ----------------------------------------- |
| date   | dayjs.ConfigType | -                     | 日期时间，支持 Date、时间戳、ISO 字符串等 |
| format | string           | 'YYYY-MM-DD HH:mm:ss' | 格式化模板                                |

### 使用示例

```ts
import { formatDate } from 'lcz-kit'

// 格式化当前时间
console.log(formatDate(new Date())) // '2025-01-06 17:02:29'

// 自定义格式
console.log(formatDate(new Date(), 'YYYY年MM月DD日')) // '2025年01月06日'

// 格式化时间戳
console.log(formatDate(1704531749000)) // '2025-01-06 17:02:29'
```

## fromNow

获取相对于当前时间或指定时间的相对时间描述。

### 类型定义

```ts
function fromNow(date: dayjs.ConfigType, baseDate?: dayjs.ConfigType): string
```

### 参数说明

| 参数名   | 类型             | 默认值    | 说明                     |
| -------- | ---------------- | --------- | ------------------------ |
| date     | dayjs.ConfigType | -         | 要计算的日期时间         |
| baseDate | dayjs.ConfigType | undefined | 基准时间，默认为当前时间 |

### 使用示例

```ts
import { fromNow } from 'lcz-kit'

console.log(fromNow('2025-01-06 16:02:29')) // '1小时前'
console.log(fromNow('2025-01-05 17:02:29')) // '1天前'
```

## isSameDay

判断两个日期是否为同一天。

### 类型定义

```ts
function isSameDay(date1: dayjs.ConfigType, date2: dayjs.ConfigType): boolean
```

### 参数说明

| 参数名 | 类型             | 说明       |
| ------ | ---------------- | ---------- |
| date1  | dayjs.ConfigType | 第一个日期 |
| date2  | dayjs.ConfigType | 第二个日期 |

### 使用示例

```ts
import { isSameDay } from 'lcz-kit'

console.log(isSameDay('2025-01-06', '2025-01-06 17:02:29')) // true
console.log(isSameDay('2025-01-06', '2025-01-07')) // false
```

## getDateRange

获取指定日期范围内的所有日期。

### 类型定义

```ts
function getDateRange(start: dayjs.ConfigType, end: dayjs.ConfigType): string[]
```

### 参数说明

| 参数名 | 类型             | 说明     |
| ------ | ---------------- | -------- |
| start  | dayjs.ConfigType | 开始日期 |
| end    | dayjs.ConfigType | 结束日期 |

### 使用示例

```ts
import { getDateRange } from 'lcz-kit'

const dates = getDateRange('2025-01-01', '2025-01-03')
console.log(dates)
// ['2025-01-01', '2025-01-02', '2025-01-03']
```

## addTime

在指定日期上添加或减少时间。

### 类型定义

```ts
function addTime(
  date: dayjs.ConfigType,
  amount: number,
  unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
): string
```

### 参数说明

| 参数名 | 类型             | 说明                       |
| ------ | ---------------- | -------------------------- |
| date   | dayjs.ConfigType | 基准日期                   |
| amount | number           | 要添加的数量，负数表示减少 |
| unit   | string           | 时间单位                   |

### 使用示例

```ts
import { addTime } from 'lcz-kit'

console.log(addTime('2025-01-06', 1, 'day')) // '2025-01-07 00:00:00'
console.log(addTime('2025-01-06', -1, 'month')) // '2024-12-06 00:00:00'
```

## startOf

获取日期的开始时间。

### 类型定义

```ts
function startOf(
  date: dayjs.ConfigType,
  unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
): string
```

### 参数说明

| 参数名 | 类型             | 说明     |
| ------ | ---------------- | -------- |
| date   | dayjs.ConfigType | 日期     |
| unit   | string           | 时间单位 |

### 使用示例

```ts
import { startOf } from 'lcz-kit'

console.log(startOf('2025-01-06 17:02:29', 'day')) // '2025-01-06 00:00:00'
console.log(startOf('2025-01-06 17:02:29', 'month')) // '2025-01-01 00:00:00'
```

## endOf

获取日期的结束时间。

### 类型定义

```ts
function endOf(
  date: dayjs.ConfigType,
  unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
): string
```

### 参数说明

| 参数名 | 类型             | 说明     |
| ------ | ---------------- | -------- |
| date   | dayjs.ConfigType | 日期     |
| unit   | string           | 时间单位 |

### 使用示例

```ts
import { endOf } from 'lcz-kit'

console.log(endOf('2025-01-06 17:02:29', 'day')) // '2025-01-06 23:59:59'
console.log(endOf('2025-01-06 17:02:29', 'month')) // '2025-01-31 23:59:59'
```

## isDateBetween

判断日期是否在指定范围内。

### 类型定义

```ts
function isDateBetween(
  date: dayjs.ConfigType,
  start: dayjs.ConfigType,
  end: dayjs.ConfigType,
  unit: dayjs.OpUnitType = 'day'
): boolean
```

### 参数说明

| 参数名 | 类型             | 默认值 | 说明         |
| ------ | ---------------- | ------ | ------------ |
| date   | dayjs.ConfigType | -      | 要判断的日期 |
| start  | dayjs.ConfigType | -      | 开始日期     |
| end    | dayjs.ConfigType | -      | 结束日期     |
| unit   | dayjs.OpUnitType | 'day'  | 时间单位     |

### 使用示例

```ts
import { isDateBetween } from 'lcz-kit'

console.log(isDateBetween('2025-01-06', '2025-01-01', '2025-01-10')) // true
console.log(isDateBetween('2025-01-11', '2025-01-01', '2025-01-10')) // false
```

## getWeekOfYear

获取日期是一年中的第几周。

### 类型定义

```ts
function getWeekOfYear(date: dayjs.ConfigType): number
```

### 参数说明

| 参数名 | 类型             | 说明 |
| ------ | ---------------- | ---- |
| date   | dayjs.ConfigType | 日期 |

### 使用示例

```ts
import { getWeekOfYear } from 'lcz-kit'

console.log(getWeekOfYear('2025-01-06')) // 2
```

## parseDate

解析自定义格式的日期字符串。

### 类型定义

```ts
function parseDate(dateStr: string, format: string): dayjs.Dayjs
```

### 参数说明

| 参数名  | 类型   | 说明       |
| ------- | ------ | ---------- |
| dateStr | string | 日期字符串 |
| format  | string | 日期格式   |

### 使用示例

```ts
import { parseDate } from 'lcz-kit'

const date = parseDate('06-01-2025', 'DD-MM-YYYY')
console.log(date.format('YYYY-MM-DD')) // '2025-01-06'
```
