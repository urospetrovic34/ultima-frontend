<template>
  <div class="flex flex-col cursor-pointer">
    <NuxtLink :to="url">
      <div class="overflow-hidden">
        <NuxtImg
          :src="image"
          format="webp"
          width="300"
          height="300"
          sizes="sm:150px, md:300px"
          densities="1x 2x"
          class="hover:scale-105 transition-[transform] duration-500"
        />
      </div>
      <div class="bg-primary p-3">
        <p class="capitalize text-lg">
          {{ category }}
        </p>
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
const { category, slug } = props;
const url = `/${category}/${slug}`;
</script>
