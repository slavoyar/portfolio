<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('side-projects.title') }}</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div
        v-for="{ name: project, hasGithub } in sideProjects"
        :key="project"
        class="flex flex-col justify-between rounded bg-zinc-800 p-4 shadow"
      >
        <h3 class="text-lg font-bold">{{ $t(`side-projects.${project}.name`) }}</h3>
        <p class="mt-2 text-gray-300">{{ $t(`side-projects.${project}.description`) }}</p>
        <div class="flex gap-4">
          <a
            :href="$t(`side-projects.${project}.url`)"
            class="mt-4 inline-block text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('side-projects.view-project') }}
          </a>
          <a
            v-if="hasGithub"
            :href="$t(`side-projects.${project}.github`)"
            class="mt-4 inline-block text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sideProjects = [
  {
    name: 'lulight',
    hasGithub: false,
  },
  {
    name: 'chinese-laoshi',
    hasGithub: true,
  },
];
</script>
