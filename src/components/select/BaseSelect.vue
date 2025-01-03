<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import type { SelectOption } from './types'

interface Props {
  /**
   * 选项列表
   */
  options: SelectOption[]
  /**
   * 选中的值
   */
  modelValue?: string | number
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 标签字段名
   */
  labelField?: string
  /**
   * 值字段名
   */
  valueField?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请选择',
  disabled: false,
  labelField: 'label',
  valueField: 'value'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

const handleSelect = (value: string | number) => {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <Select :model-value="modelValue" @update:model-value="handleSelect">
    <SelectTrigger :disabled="disabled">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="option in options"
        :key="option[valueField]"
        :value="option[valueField]"
      >
        {{ option[labelField] }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
