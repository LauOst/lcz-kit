import { useToast as useVanillaToast } from '../ui/toast'
import type { ToastProps } from '../ui/toast'

type ToastVariant = 'default' | 'success' | 'warning' | 'error'

export interface ToastOptions extends Omit<Partial<ToastProps>, 'variant' | 'customVariant'> {
  /**
   * Toast 的标题
   */
  title?: string
  /**
   * Toast 的描述内容
   */
  description?: string
  /**
   * Toast 的动作按钮文本
   */
  actionText?: string
  /**
   * Toast 的动作按钮回调
   */
  onAction?: () => void
  /**
   * Toast 的变体类型
   * @default 'default'
   */
  variant?: ToastVariant
}

export function useToast() {
  const vanillaToast = useVanillaToast()

  const toast = (options: ToastOptions | string) => {
    if (typeof options === 'string') {
      return vanillaToast.toast({
        description: options,
      })
    }

    const {
      title,
      description,
      actionText,
      onAction,
      variant = 'default',
      ...rest
    } = options

    const variantMap: Record<ToastVariant, ToastProps['variant']> = {
      default: 'default',
      success: 'default',
      warning: 'default',
      error: 'destructive',
    }

    const classes = {
      default: '',
      success: 'border-green-500 bg-green-500 text-white dark:border-green-400 dark:bg-green-400',
      warning: 'border-yellow-500 bg-yellow-500 text-white dark:border-yellow-400 dark:bg-yellow-400',
      error: '',
    }

    return vanillaToast.toast({
      title,
      description,
      variant: variantMap[variant],
      class: classes[variant],
      customVariant: variant,
      action: actionText
        ? {
            label: actionText,
            onClick: onAction,
          }
        : undefined,
      ...rest,
    })
  }

  const success = (options: Omit<ToastOptions, 'variant'> | string) => {
    if (typeof options === 'string') {
      return toast({ description: options, variant: 'success' })
    }
    return toast({ ...options, variant: 'success' })
  }

  const warning = (options: Omit<ToastOptions, 'variant'> | string) => {
    if (typeof options === 'string') {
      return toast({ description: options, variant: 'warning' })
    }
    return toast({ ...options, variant: 'warning' })
  }

  const error = (options: Omit<ToastOptions, 'variant'> | string) => {
    if (typeof options === 'string') {
      return toast({ description: options, variant: 'error' })
    }
    return toast({ ...options, variant: 'error' })
  }

  return {
    toast,
    success,
    warning,
    error,
    dismiss: vanillaToast.dismiss,
  }
}

export type ToastInstance = ReturnType<typeof useToast>
