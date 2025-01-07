# 工具函数

LCZ-Kit 提供了一系列实用的工具函数，帮助你更好地处理日常开发中的常见问题。

## 安装

```bash
npm install lcz-kit
```

## 使用方式

所有工具函数都支持按需导入：

```ts
import { isString, isEmpty, formatDate, safeJsonParse, request } from 'lcz-kit'
```

## 工具分类

### 类型判断

- [类型判断](/utils/is)：提供了一系列用于判断数据类型的函数，如 `isString`、`isNumber` 等。

### JSON 工具

- [JSON 工具](/utils/json)：提供安全的 JSON 解析、序列化、深度克隆等功能。
  - `safeJsonParse`: 安全地解析 JSON 字符串
  - `safeStringify`: 安全地序列化为 JSON 字符串
  - `deepClone`: 深度克隆对象
  - `isEqual`: 深度比较两个值是否相等
  - `formatJson`: 格式化 JSON 字符串

### 日期工具

- [日期工具](/utils/date)：基于 dayjs 的日期时间处理工具。
  - `formatDate`: 格式化日期时间
  - `fromNow`: 获取相对时间
  - `isSameDay`: 判断是否为同一天
  - `getDateRange`: 获取日期范围
  - `addTime`: 添加/减少时间
  - `startOf`/`endOf`: 获取时间的开始/结束
  - `isDateBetween`: 判断日期是否在范围内
  - `getWeekOfYear`: 获取周数
  - `parseDate`: 解析日期字符串

### HTTP 请求

- [HTTP 请求](/utils/request)：基于 axios 的 HTTP 请求工具。
  - 统一的请求配置和错误处理
  - 自动处理 token 和授权
  - 支持自定义拦截器
  - 完整的 TypeScript 类型支持
  - 响应数据类型推导
  - 支持取消请求
  - 支持请求重试
  - 支持并发请求控制

### 即将推出

- 数组操作：数组的常用操作函数
- 对象操作：对象的常用操作函数
- 字符串处理：字符串的常用操作函数
- 数字处理：数字格式化、计算等函数
- URL 处理：URL 解析、参数处理等函数
- 文件处理：文件类型判断、大小转换等函数
