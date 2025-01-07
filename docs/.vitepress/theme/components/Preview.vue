<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  /**
   * 示例标题
   */
  title: string
  /**
   * 示例描述
   */
  description?: string
}>()

const { isDark } = useData()

// 是否显示代码
const showCode = ref(false)

// 计算暗黑模式的类名
const darkClass = computed(() => {
  return isDark.value ? 'dark' : ''
})
</script>

<template>
  <div class="preview-container" :class="darkClass">
    <!-- 标题和描述 -->
    <div class="preview-header">
      <h3 class="preview-title">{{ title }}</h3>
      <p v-if="description" class="preview-description">{{ description }}</p>
    </div>

    <!-- 示例展示区 -->
    <div class="preview-content">
      <div class="preview-demo">
        <slot></slot>
      </div>
    </div>

    <!-- 代码展示区 -->
    <div class="preview-footer">
      <div class="preview-actions">
        <button class="preview-action-button" @click="showCode = !showCode">
          {{ showCode ? '隐藏代码' : '显示代码' }}
        </button>
      </div>
      <div v-show="showCode" class="preview-code">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
}

.preview-header {
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.preview-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.preview-description {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 8px 0 0;
}

.preview-content {
  padding: 24px;
}

.preview-demo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.preview-footer {
  border-top: 1px solid var(--vp-c-divider);
}

.preview-actions {
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
}

.preview-action-button {
  background: transparent;
  border: none;
  color: var(--vp-c-brand);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
}

.preview-action-button:hover {
  color: var(--vp-c-brand-dark);
}

.preview-code {
  padding: 16px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-code-block-bg);
}

:deep(.vp-doc) div {
  margin: 0;
}

/* 修复按钮宽度问题 */
:deep(.preview-demo .base-button) {
  width: fit-content;
}
</style>
