<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between gap-4">
      <h1 class="text-4xl font-bold">Yaroslav Zaprudskii</h1>
      <ContactInfo />
    </div>
    <p class="text-lg text-gray-400">Full-Stack Developer 
      | Passionate about building seamless web and desktop applications using Electron 
    </p>
    <NuxtImg
      preload
      src="/main.jpg"
      alt="Yaroslav Zaprudskii"
      class="rounded"
      format="webp"
      sizes="sm:100vw"
    />
  </div>
</template>
