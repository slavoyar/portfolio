<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold">Work Experience</h2>
    <ul class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <li v-for="job in workExperience" :key="job.company" class="rounded bg-zinc-800 p-4">
        <h3 class="text-lg font-bold">{{ job.company }}</h3>
        <p class="text-sm text-zinc-400">{{ job.position }} | {{ job.period }}</p>
        <p class="mt-2 text-zinc-300">{{ job.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const workExperience = [
  {
    company: 'Metran, Industrial Group JSC',
    position: 'Middle Frontend Developer',
    period: 'Sep 2024 - Present',
    description: `Developed a user interface for an Electron application to interact with sensors using Vue 3 and TypeScript.
Maintained a component library, now utilizing Tailwind CSS for styling.
Enhanced sensor data processing logic.
Configured the project using Vite as the bundler.
Wrote tests for components and data logic using Jest.`,
  },
  {
    company: 'Infowise',
    position: 'Software Developer',
    period: 'Nov 2023 - Aug 2024',
    description: `Maintained a Vue 3 component library.
Developed a project from scratch using Vue 3 and TypeScript.
Configured the application: ESLint, Vite, Vitest, and Tailwind CSS.
Conducted application testing using Vitest.`,
  },
  {
    company: 'BaltInfoCom',
    position: 'Junior Developer',
    period: 'Oct 2022 - Nov 2023',
    description: `Developed web applications using Vue 2, TypeScript, and Vuex.
Refactored legacy code.
Designed interfaces for new application features.
Created component tests using the Jest framework.
Collaborated closely with the backend team.`,
  },
  {
    company: 'Metran, Industrial Group JSC',
    position: 'Junior Developer',
    period: 'Feb 2022 - Sep 2022',
    description: `Participated in developing an interface for interacting with sensors using TypeScript and Vue 3.
Contributed to the development of data processing logic for sensor inputs (HART).
Wrote tests using Jest.`,
  },
];
</script>
