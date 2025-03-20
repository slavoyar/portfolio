<template>
  <div class="mx-auto flex flex-col gap-6 p-4 sm:w-full md:w-11/12 lg:w-9/12">
    <MainInfo />
    <TechnologiesTags />
    <WorkExperience />
    <SideProjects />
  </div>
</template>

<script setup lang="ts">
import MainInfo from './components/main-info.vue';
import SideProjects from './components/side-projects.vue';
import TechnologiesTags from './components/technologies-tags.vue';
import WorkExperience from './components/work-experience.vue';

const { t } = useI18n();

useHead({
  title: () => t('header.title'),
  meta: [
    {
      name: 'description',
      content: () => t('header.subtitle'),
    },
  ],
});
</script>
