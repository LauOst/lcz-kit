<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
// App.vue 只需要作为应用的入口，所有布局逻辑都移到了 layouts 文件夹中
</script>