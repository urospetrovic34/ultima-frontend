<template>
  <div v-if="status === 'success'">
    <div class="flex justify-center items-center my-20">
      <div class="flex flex-col">
        <ProductList :products="products || []" />
        <ReusablePagination
          :count="Math.ceil(total / 9)"
          @change-product-page="changeProductPage"
        />
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
const { query } = useRoute();
const page = ref(Number(query.page) ?? 1);
const { data, status, refresh } = await useFetch<ApiResponse>("/api/products", {
  query: {
    page: `${page.value}`,
  },
  key: `products-page-${page.value}`,
  watch: [
    () => page.value,
    () => {
      refresh();
    },
  ],
});
const products = data.value?.products;
const total = data.value?.pagination.total || 0;
const changeProductPage = (pageNumber: number) => {
  page.value = pageNumber;
};
</script>
