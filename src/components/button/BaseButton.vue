<script setup lang="ts">
import { Button } from '../ui/button'
import type { ButtonVariants } from '../ui/button'
import { computed } from 'vue'

interface Props {
  /**
   * 按钮类型
   * @default 'default'
   */
  variant?: ButtonVariants['variant']
  /**
   * 按钮大小
   * @default 'default'
   */
  size?: ButtonVariants['size']
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 加载状态
   * @default false
   */
  loading?: boolean
  /**
   * 按钮类型
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  disabled: false,
  loading: false,
  type: 'button'
})

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <Button
    :variant="variant"
    :size="size"
    :disabled="isDisabled"
    :type="type"
    v-bind="$attrs"
  >
    <template v-if="loading">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </template>
    <slot />
  </Button>
</template>
