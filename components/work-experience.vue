<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('work-experience.title') }}</h2>
    <ul class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <li v-for="job in jobNames" :key="job" class="rounded bg-zinc-800 p-4">
        <h3 class="text-lg font-bold">{{ $t(`work-experience.${job}.name`) }}</h3>
        <p class="text-sm text-zinc-400">
          {{ $t(`work-experience.${job}.position`) }} | {{ $t(`work-experience.${job}.period`) }}
        </p>
        <p class="mt-2 text-zinc-300">{{ $t(`work-experience.${job}.description`) }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const jobNames = ['metran', 'infowise', 'baltInfoCom', 'metran0'];
</script>
