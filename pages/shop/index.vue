<template>
  <ProductList
    :products="products || []"
    :status="status"
  />
</template>

<script setup lang="ts">
type ProductReponse = {
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
const { data: products, status } = await useFetch<Array<ProductReponse>>(
  `/api/products`
);
</script>
