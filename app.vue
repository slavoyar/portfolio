<script setup lang="ts">
import MainInfo from './components/main-info.vue';
import SideProjects from './components/side-projects.vue';
import TechnologiesTags from './components/technologies-tags.vue';
import ToggleDarkMode from './components/toggle-dark-mode.vue';
import WorkExperience from './components/work-experience.vue';
</script>

<template>
  <div class="mx-auto flex flex-col gap-12 p-4 sm:w-full md:w-11/12 lg:w-9/12">
    <ToggleDarkMode />
    <MainInfo />
    <TechnologiesTags />
    <WorkExperience />
    <SideProjects />
  </div>
</template>
