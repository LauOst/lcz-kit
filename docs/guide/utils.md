# 工具函数

LCZ-Kit 提供了一系列实用的工具函数，这些函数都经过 TypeScript 类型检查，可以帮助你更好地处理各种数据类型的判断。

## 类型判断

### isString

判断一个值是否为字符串类型。

```ts
import { isString } from 'lcz-kit'

isString('hello') // true
isString(123) // false
```

### isNumber

判断一个值是否为数字类型。

```ts
import { isNumber } from 'lcz-kit'

isNumber(123) // true
isNumber('123') // false
isNumber(NaN) // false
```

### isBoolean

判断一个值是否为布尔类型。

```ts
import { isBoolean } from 'lcz-kit'

isBoolean(true) // true
isBoolean(false) // true
isBoolean(1) // false
```

### isObject

判断一个值是否为对象类型（不包括数组和 null）。

```ts
import { isObject } from 'lcz-kit'

isObject({}) // true
isObject({ name: 'lcz' }) // true
isObject([]) // false
isObject(null) // false
```

### isArray

判断一个值是否为数组类型。

```ts
import { isArray } from 'lcz-kit'

isArray([]) // true
isArray([1, 2, 3]) // true
isArray({}) // false
```

### isFunction

判断一个值是否为函数类型。

```ts
import { isFunction } from 'lcz-kit'

isFunction(() => {}) // true
isFunction(function () {}) // true
isFunction(class {}) // true
isFunction({}) // false
```

## 空值判断

### isUndefined

判断一个值是否为 undefined。

```ts
import { isUndefined } from 'lcz-kit'

isUndefined(undefined) // true
isUndefined(null) // false
isUndefined('') // false
```

### isNull

判断一个值是否为 null。

```ts
import { isNull } from 'lcz-kit'

isNull(null) // true
isNull(undefined) // false
isNull('') // false
```

### isNil

判断一个值是否为 null 或 undefined。

```ts
import { isNil } from 'lcz-kit'

isNil(null) // true
isNil(undefined) // true
isNil('') // false
```

### isEmpty

判断一个值是否为空（空字符串、空数组、空对象、null、undefined）。

```ts
import { isEmpty } from 'lcz-kit'

isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty(' ') // true（会去除空格）
isEmpty({ name: 'lcz' }) // false
```

## 数字相关

### isNumeric

判断一个值是否为有效数字（可以是字符串形式的数字）。

```ts
import { isNumeric } from 'lcz-kit'

isNumeric(123) // true
isNumeric('123') // true
isNumeric('12.3') // true
isNumeric('abc') // false
```

### isInteger

判断一个值是否为整数（可以是字符串形式的整数）。

```ts
import { isInteger } from 'lcz-kit'

isInteger(123) // true
isInteger('123') // true
isInteger(12.3) // false
isInteger('12.3') // false
```

### isPositive

判断一个值是否为正数（可以是字符串形式的正数）。

```ts
import { isPositive } from 'lcz-kit'

isPositive(123) // true
isPositive('123') // true
isPositive(-123) // false
isPositive('0') // false
```

### isNegative

判断一个值是否为负数（可以是字符串形式的负数）。

```ts
import { isNegative } from 'lcz-kit'

isNegative(-123) // true
isNegative('-123') // true
isNegative(123) // false
isNegative('0') // false
```

## 类型定义

所有工具函数都提供了完整的 TypeScript 类型定义，你可以在编辑器中获得完整的类型提示。
