<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between gap-4">
      <h1 class="text-4xl font-bold">Yaroslav Zaprudskii</h1>
      <ContactInfo />
    </div>
    <div class="overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
      <div class="md:flex">
        <div class="md:shrink-0">
          <NuxtImg
            preload
            src="/main.jpg"
            alt="Yaroslav Zaprudskii"
            class="size-full rounded object-cover md:w-48"
            format="webp"
            sizes="sm:100vw"
          />
        </div>
        <div class="p-8">
          <div class="text-sm font-semibold uppercase tracking-wide text-blue-400">
            {{ title }}
          </div>
          <p class="mt-2 text-gray-300">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Full-Stack Developer')
// eslint-disable-next-line max-len
const description = ref('Passionate full-stack developer with 3 years of experience in building scalable web applications. Proficient in Express, Vue, and React, with expertise in state management using Zustand, Pinia, and Vuex. Experienced in developing cross-platform applications with Electron and strong in TypeScript, dedicated to creating intuitive user interfaces and robust backend systems. Committed to delivering high-quality, performant solutions that enhance user experience and drive business growth.')

</script>
