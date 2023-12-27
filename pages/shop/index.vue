<template>
  <div>
    <div class="flex justify-center items-center my-20">
      <div class="flex flex-col">
        <div
          v-if="pending"
          class="items-center justify-center"
        >
          <ReusableLoader />
        </div>
        <div v-if="status === 'success'">
          <ProductList :products="data?.products || []" />
          <ReusablePagination
            :count="data?.paginationCount || 0"
            @change-product-page="changeProductsPage"
          />
        </div>
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
  paginationCount: number;
};
const { query } = useRoute();
function changeProductsPage(pageNumber: number) {
  page.value = pageNumber;
}
const page = ref(query.page ? Number(query.page) : 1);
const { data, status, pending } = await useAsyncData<ApiResponse>(
  `products`,
  () =>
    $fetch("/api/products", {
      query: {
        page: page.value,
      },
    }),
  { watch: [page] }
);
</script>
