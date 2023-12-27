<template>
  <div v-if="status === 'success'">
    <div class="flex justify-center items-center my-20">
      <div class="flex flex-col">
        <ProductList :products="products || []" />
        <ReusablePagination :count="Math.ceil(total / 9)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Product = {
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
type ApiResponse = {
  products: Array<Product>;
  pagination: {
    total: number;
    page: number;
  };
};
const route = useRoute();
const page = Number(route.query.page) ?? 1;
const { data, status } = await useFetch<ApiResponse>(
  `/api/products?page=${page}`,
  {
    query: { page: page },
    watch: [useRoute().query],
  }
);
const products = data.value?.products;
const total = data.value?.pagination.total || 0;
</script>
