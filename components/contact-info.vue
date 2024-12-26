<template>
  <div class="flex">
    <SocialShare
      class="rounded p-2 hover:bg-zinc-700"
      network="email"
      :label="false"
      href="mailto:y.zaprudskii@gmail.com"
    />
    <SocialShare
      class="rounded p-2 hover:bg-zinc-700"
      network="telegram"
      :label="false"
      href="https://t.me/slavoyarmc"
    />
    <SocialShare
      class="rounded p-2 hover:bg-zinc-700"
      network="linkedin"
      :label="false"
      href="https://www.linkedin.com/in/yaroslav-z-6aa7a3230/"
    />
  </div>
</template>
