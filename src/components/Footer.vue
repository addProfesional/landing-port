<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faMoon)
</script>

<template>
  <footer class="bg-bookmark-blue py-8">
    <div class="container flex flex-col md:flex-row items-center">
      <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
        <img src="./imgs/logo-bookmark-white.png" alt="" />
        <ul class="flex text-white uppercase gap-12 text-xs">
          <li class="cursor-pointer">Features</li>
          <li class="cursor-pointer">Pricing</li>
          <li class="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div class="flex gap-10 mt-12 md:mt-0">
        <li><i class="text-white text-2xl fab fa-twitter"></i></li>
        <li><i class="text-white text-2xl fab fa-facebook-square"></i></li>
        <font-awesome-icon :icon="['fas', 'sun']" />
        <font-awesome-icon :icon="['fas', 'moon']" class="text-gray-700" />
      </div>
    </div>
  </footer>
</template>