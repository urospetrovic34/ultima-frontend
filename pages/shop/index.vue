<template>
  <div v-if="status === 'success'">
    <div class="flex justify-center items-center my-20">
      <div class="flex flex-col">
        <ProductList :products="data?.products || []" />
        <ReusablePagination
          :count="Math.ceil(data?.pagination.total / 9)"
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
function changeProductPage(pageNumber: number) {
  page.value = pageNumber;
}
const page = ref(query.page ? Number(query.page) : 1);
const { data, status } = await useAsyncData<ApiResponse>(
  `products-page-${page.value}`,
  () =>
    $fetch("/api/products", {
      query: {
        page: page.value,
      },
      key: `products-page-${page.value}`,
    }),
  { watch: [page] }
);
</script>
