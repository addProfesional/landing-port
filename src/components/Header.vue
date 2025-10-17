<script setup lang="ts">
  import { ref } from 'vue'
  import { Switch } from '@headlessui/vue'
  const enabled = ref(false)
</script>

<template>
  <header>
    <nav class="nav-cont flex flex-row justify-between">
      <div class="content-center">
        <img src="" alt="">
        <h1>Portafolio</h1>
      </div>

      <div class="flex">
        <ul class="ul-menu flex flex-row">
          <li class="content-center">Projects</li>
          <li class="content-center">About</li>
          <li class="content-center">Contact</li>
        </ul>

        <div class="content-center">
          <Switch
            v-model="enabled"
            :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
          >
            <span class="sr-only">Enable notifications</span>
            <span
              :class="enabled ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
            />
          </Switch>
          <button class="control">Language</button>
        </div>
      </div>

      
    </nav>
  </header>
</template>

<style>
.nav-cont{
  height: 40px;
  align-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
}

.ul-menu{
 gap: 4rem;
}

div .control{
  margin-right: 4rem;
}
</style>