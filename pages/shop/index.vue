<template>
  <div class="flex justify-center items-center my-20">
    <ProductList :products="products || []" :status="status" />
  </div>
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
const config = useRuntimeConfig();
const { data: products, status } = await useFetch<Array<ProductReponse>>(
  `${config.public.API_URL}/rest/v1/product?select=*,product_category(name)`,
  {
    headers: {
      Prefer: "count=exact",
      Authorization: `Bearer ${config.public.API_KEY}`,
      apiKey: config.public.API_KEY,
      Range: usePagination(),
    },
    key: "products",
  }
);
</script>
