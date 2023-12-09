<template>
  <div class="flex flex-col cursor-pointer w-[300px]">
    <NuxtLink :to="url">
      <div class="overflow-hidden">
        <NuxtImg
          :src="image"
          format="webp"
          fit="cover"
          class="object-cover h-[300px] hover:scale-105 transition-[transform] duration-500"
        />
      </div>
      <div class="bg-primary p-4">
        <p class="capitalize text-lg">{{ category }}</p>
        <p>{{ name }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
const { image, category, name, slug } = props;
let url = `/${category}/${slug}`;
</script>
