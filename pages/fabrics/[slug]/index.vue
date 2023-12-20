<template>
  <ProductDetail
    :image="product[0].image"
    :name="product[0].name"
    :price="product[0].price"
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
const { data: product } = await useFetch<Array<ProductReponse>>("/api/product");
</script>
