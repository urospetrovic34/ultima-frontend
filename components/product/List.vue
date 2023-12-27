<template>
  <div class="grid grid-cols-3 gap-4 mb-5">
    <div
      v-for="item in products"
      :key="item.id"
    >
      <ProductCard
        :slug="item.slug"
        :image="item.image"
        :name="item.name"
        :category="item.product_category.name"
      />
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
type ListProps = {
  products: Array<Product>;
};
defineProps<ListProps>();
</script>
