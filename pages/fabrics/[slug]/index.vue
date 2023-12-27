<template>
  <ProductDetail
    :image="product?.image || ''"
    :name="product?.name || ''"
    :price="product?.price || 0"
  />
</template>

<script setup lang="ts">
type ProductReponse = {
  [key: number]: any;
  id: number;
  created_at: string;
  category_id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  slug: string;
  product_category: {
    name: string;
  };
};
const route = useRoute();
const { data: product } = await useFetch<ProductReponse>(
  `/api/product/${route.params.slug}`
);
</script>
