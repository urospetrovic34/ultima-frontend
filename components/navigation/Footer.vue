<template>
  <footer class="bg-accent">
    <div
      class="w-full mx-auto max-w-screen-xl flex justify-between py-6"
    >
      <div class="flex flex-col justify-between">
        <div
          @click="scrollToTop"
          class="text-lg hover:text-white cursor-pointer"
        >
          ↑ Back To Top
        </div>
        <div class="text-sm text-content">
          2023 Ultima. All Rights Reserved.
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-[100px]">
        <div>
          <div class="text-2xl">About</div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/about"
              >About Us</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/press"
              >Press</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/work-at-ultima"
              >Jobs</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/sustainability"
              >Social Responsibility</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/trade"
              >Trade Program</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/subscribe"
              >Subscribe to Our Newsletter</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/catalog/index"
              >Index</NuxtLink
            >
          </div>
        </div>
        <div class="row-span-2">
          <div class="text-2xl">Policies</div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/returns_exchanges"
              >Returns & Exchanges</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/terms"
              >Terms of Service</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/seller_agreement"
              >Seller Agreement
            </NuxtLink>
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/pro_terms"
              >Pro Terms of Service</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              class="text-sm cursor-pointer hover:text-white"
              to="/privacy"
              >Privacy</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
</script>
