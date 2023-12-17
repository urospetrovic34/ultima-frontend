<template>
  <div class="flex justify-center items-center my-20">
    <ProductList
      :products="products || []"
      :status="status"
    />
  </div>
</template>
