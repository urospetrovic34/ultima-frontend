<template>
  <div className="flex justify-center my-20 gap-5">
    <NuxtImg
      :src="image"
      format="webp"
      width="400"
      height="400"
      sizes="sm:200px, md:400px"
      densities="1x 2x"
    />
    <ProductOptions
      :name="name"
      :price="price"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const { image } = props;
</script>
