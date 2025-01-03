<template>
  <div class="min-h-screen bg-background text-foreground">
    <div class="flex h-screen">
      <!-- 侧边栏 -->
      <aside class="w-64 border-r border-border bg-card">
        <div class="p-4 border-b border-border flex items-center justify-between">
          <h1 class="text-lg font-bold">LCZ-Kit</h1>
          <BaseButton variant="ghost" size="sm" @click="toggleDark">
            <template v-if="isDark">🌞</template>
            <template v-else>🌙</template>
          </BaseButton>
        </div>
        <nav class="p-4">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="block px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            :class="{ 'bg-accent text-accent-foreground': $route.path === route.path }"
          >
            {{ route.meta?.title }}
          </router-link>
        </nav>
      </aside>

      <!-- 主内容区 -->
      <main class="flex-1 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { BaseButton } from './components/button'

const isDark = ref(false)
const router = useRouter()

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}

const routes = router.getRoutes()
  .filter(route => route.meta?.title)
  .sort((a, b) => (a.path > b.path ? 1 : -1))
</script>
