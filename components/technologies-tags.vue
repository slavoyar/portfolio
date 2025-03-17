<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('technologies') }}</h2>
    <div class="flex flex-wrap gap-4">
      <span v-for="tech in technologies" :key="tech" class="rounded bg-zinc-800 px-3 py-1">
        {{ tech }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies = [
  'Vue2',
  'Vue3',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Gitlab',
  'Docker',
  'CI/CD',
  'Jest',
  'Eslint',
  'Vite',
  'Webpack',
  'Electron',
  'Linux',
  'Arch btw',
];
</script>
