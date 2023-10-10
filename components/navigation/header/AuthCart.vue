<template>
  <nav class="bg-accent">
    <div
      class="max-w-screen-xl flex items-center gap-5 justify-end mx-auto py-2"
    >
      <div>
        <NuxtLink class="hover:text-white" to="/">Login </NuxtLink>
      </div>
      <div>
        <NuxtLink class="hover:text-white" to="/">Register </NuxtLink>
      </div>
      <div class="relative">
        <NuxtLink class="hover:text-white cursor-pointer text-xl" to="/">
          <IconShoppingCart
        /></NuxtLink>
        <!-- <div
          class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
        >
          20
        </div> -->
      </div>
    </div>
  </nav>
</template>
