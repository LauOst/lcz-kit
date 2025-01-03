<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- 头部导航栏 -->
    <header class="h-14 border-b border-border flex items-center justify-between px-4">
      <div class="flex items-center gap-4">
        <Button variant="ghost" size="sm" @click="$router.push('/')">首页</Button>
        <Button variant="ghost" size="sm" @click="$router.push('/docs')">文档</Button>
        <Button variant="ghost" size="sm" @click="openGitHub()">GitHub</Button>
      </div>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" @click="openNpm()">下载</Button>
      </div>
    </header>

    <div class="flex h-[calc(100vh-3.5rem)]">
      <!-- 桌面端侧边栏 -->
      <ResizablePanelGroup direction="horizontal" class="hidden md:block">
        <ResizablePanel
          :default-size="25"
          :min-size="15"
          :max-size="40"
          class="border-r border-border bg-card"
        >
          <div class="p-4 border-b border-border flex items-center justify-between">
            <h1 class="text-lg font-bold">LCZ-Kit</h1>
            <Button variant="ghost" size="sm" @click="toggleDark">
              <template v-if="isDark">🌞</template>
              <template v-else>🌙</template>
            </Button>
          </div>
          <ScrollArea class="flex-1">
            <nav class="p-4">
              <Button
                v-for="route in routes"
                :key="route.path"
                variant="ghost"
                :class="[
                  'w-full justify-start hover:bg-muted',
                  ($route.path === '/docs' && route.path === '') || $route.path === '/docs/' + route.path ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : ''
                ]"
                @click="$router.push('/docs/' + route.path)"
              >
                {{ route.meta?.title }}
              </Button>
            </nav>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel :default-size="75">
          <!-- 主内容区 -->
          <main class="h-full overflow-auto p-6">
            <router-view />
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>

      <!-- 移动端侧边栏 -->
      <div class="md:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="sm" class="ml-2 mt-2">
              <MenuIcon class="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-64">
            <div class="p-4 border-b border-border flex items-center justify-between">
              <h1 class="text-lg font-bold">LCZ-Kit</h1>
              <Button variant="ghost" size="sm" @click="toggleDark">
                <template v-if="isDark">🌞</template>
                <template v-else>🌙</template>
              </Button>
            </div>
            <ScrollArea>
              <nav class="p-4">
                <Button
                  v-for="route in routes"
                  :key="route.path"
                  variant="ghost"
                  :class="[
                    'w-full justify-start hover:bg-muted',
                    ($route.path === '/docs' && route.path === '') || $route.path === '/docs/' + route.path ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''
                  ]"
                  @click="$router.push('/docs/' + route.path); isOpen = false"
                >
                  {{ route.meta?.title }}
                </Button>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <main class="p-6">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { MenuIcon } from 'lucide-vue-next'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Button } from '@/components/ui/button'

interface RouteMetaType {
  [key: string]: any
  title: string
  order?: number
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
const router = useRouter()
const isOpen = ref(false)

const openGitHub = () => {
  window.open('https://github.com/your-username/lcz-kit', '_blank')
}

const openNpm = () => {
  window.open('https://www.npmjs.com/package/lcz-kit', '_blank')
}

const routes = router.getRoutes()
  .filter(route => route.path.startsWith('/docs') && route.meta?.title)
  .sort((a, b) => (((a.meta as unknown) as RouteMetaType)?.order || 0) - (((b.meta as unknown) as RouteMetaType)?.order || 0))
  .map(route => ({
    path: route.path.split('/').pop() || '',
    meta: route.meta
  }))
</script>
