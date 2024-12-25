<template>
  <div class="fixed right-4 top-4">
    <button
      type="button"
      class="size-10 rounded-full bg-gray-800 p-2 text-gray-400 hover:bg-gray-700"
      @click="toggleDarkMode"
    >
      <span v-if="isDarkMode">☀️</span>
      <span v-else>🌙</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}
</script>
