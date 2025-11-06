<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <main class="min-h-screen transition-colors duration-300" style="background-color: var(--color-night); color: var(--color-davy-gray-50);">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<style scoped>
</style>