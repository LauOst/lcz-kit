<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface Props<T = any> {
  /**
   * 选项列表
   */
  options: T[]
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
  labelField?: keyof T
  /**
   * 值字段名
   */
  valueField?: keyof T
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

const handleSelect = (value: string) => {
  // 如果原始值是数字，就转回数字类型
  const originalValue = props.options.find(
    (option) => String(option[props.valueField]) === value
  )?.[props.valueField]

  emit('update:modelValue', originalValue ?? value)
  emit('change', originalValue ?? value)
}

// 将值转换为字符串，用于传递给底层组件
const stringValue = props.modelValue !== undefined ? String(props.modelValue) : undefined
</script>

<template>
  <Select :model-value="stringValue" @update:model-value="handleSelect">
    <SelectTrigger :disabled="disabled">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="option in options"
        :key="option[valueField]"
        :value="String(option[valueField])"
      >
        {{ option[labelField] }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
