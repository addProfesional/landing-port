<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import Header from '@/components/Header.vue';
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <main :class="{ dark: isDark }" class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <Header />
    <router-view />
    <footer>Un footer genérico</footer>
  </main>
</template>


<style scoped>
</style>