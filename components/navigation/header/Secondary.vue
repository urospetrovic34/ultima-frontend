<template>
  <nav class="bg-secondary border-b border-primary">
    <div class="max-w-screen-xl flex items-center justify-between py-5 mx-auto">
      <div
        v-for="item in navigation"
        :key="item.label"
        class="leading-5"
      >
        <NuxtLink
          class="hover:bg-primary py-5 px-3 cursor-pointer"
          :to="item.link"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navigation = [
  {
    label: "Fabric",
    link: "/shop",
  },
  {
    label: "Wallpaper",
    link: "/",
  },
  {
    label: "Living & Decor",
    link: "/",
  },
  {
    label: "Dining",
    link: "/",
  },
  {
    label: "Bedding",
    link: "/",
  },
  {
    label: "Help",
    link: "/",
  },
];
</script>
