# Hooks

LCZ-Kit 提供了一系列实用的 Vue Composition API Hooks，帮助你更好地复用组件逻辑。

## 安装

```bash
npm install lcz-kit
```

## 使用方式

所有 Hooks 都支持按需导入：

```ts
import { useDate, useStorage } from 'lcz-kit'
```

## Hooks 列表

### 状态管理

- [useStorage](/hooks/use-storage)：响应式的 localStorage/sessionStorage 管理

### 日期时间

- [useDate](/hooks/use-date)：日期时间管理，包括格式化、相对时间等

### 即将推出

- useTitle：管理页面标题
- useClipboard：剪贴板操作
- useMediaQuery：响应式媒体查询
- useScroll：滚动位置监听
- useWindowSize：窗口大小监听
- useNetwork：网络状态监听
- useGeolocation：地理位置
- useIntersectionObserver：元素可见性监听
- useEventListener：事件监听管理
