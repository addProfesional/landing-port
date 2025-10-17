<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import ProjectsGrid from '@/components/ProjectsGrid.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
</script>

<template>
  <Banner />
  <ProjectsGrid />
  <About />
  <Contact />
  <h1 class="text-3xl font-bold underline">You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped>
</style>