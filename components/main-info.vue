<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between gap-4">
      <h1 class="text-4xl font-bold">{{ $t('name') }}</h1>
      <div class="flex">
        <ContactInfo />
        <button
          class="w-10 rounded p-2 uppercase hover:bg-zinc-700"
          :title="$t('change-language')"
          @click="setLocale(locale === 'en' ? 'ru' : 'en')"
        >
          {{ locale }}
        </button>
      </div>
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
            {{ $t('role') }}
          </div>
          <p class="mt-2 text-gray-300">
            {{ $t('description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setLocale, locale } = useI18n();
</script>
