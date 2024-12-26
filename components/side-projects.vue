<template>
  <section >
    <h2 class="mb-4 text-2xl font-semibold">Side Projects</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div
        v-for="project in sideProjects"
        :key="project.name"
        class="rounded bg-zinc-800 p-4 shadow"
      >
        <h3 class="text-lg font-bold">{{ project.name }}</h3>
        <p class="mt-2 text-gray-300">{{ project.description }}</p>
        <a
          :href="project.link"
          class="mt-4 inline-block text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sideProjects = [
  {
    name: 'Lulight',
    description: 'Web application for ordering lulight clothes.',
    link: 'https://new.lulight.ru'
  },
  {
    name: 'ChineseLaoshi',
    description: 'An application for learning Chinese using a flashcard method.',
    link: 'https://slavoyar.tech/chineselaoshi'
  }
]
</script>
