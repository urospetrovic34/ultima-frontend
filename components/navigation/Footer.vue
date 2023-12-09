<template>
  <footer class="bg-primary">
    <div class="w-full mx-auto max-w-screen-xl flex justify-between py-6">
      <div class="flex flex-col justify-between">
        <div
          @click="scrollToTop"
          class="text-lg hover:text-white cursor-pointer"
        >
          ↑ Back To Top
        </div>
        <div>
          <div class="flex gap-2 mb-2">
            <div>
              <NuxtLink
                class="hover:text-white cursor-pointer text-2xl"
                to="https://www.facebook.com/"
              >
                <IconFacebook />
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                class="hover:text-white cursor-pointer text-2xl"
                to="https://www.instagram.com/"
              >
                <IconInstagram />
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                class="hover:text-white cursor-pointer text-2xl"
                to="https://www.pinterest.it/"
              >
                <IconPinterest />
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                class="hover:text-white cursor-pointer text-2xl"
                to="https://www.youtube.com/"
              >
                <IconYoutube />
              </NuxtLink>
            </div>
          </div>
          <div class="text-sm text-content">
            2023 Ultima. All Rights Reserved.
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-[100px]">
        <div>
          <div class="text-2xl mb-3">About</div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >About Us</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Press</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Jobs</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Social Responsibility</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Trade Program</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Subscribe to Our Newsletter</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Index</NuxtLink
            >
          </div>
        </div>
        <div class="row-span-2">
          <div class="text-2xl mb-3">Policies</div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Returns & Exchanges</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Terms of Service</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Seller Agreement
            </NuxtLink>
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
              >Pro Terms of Service</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-sm cursor-pointer hover:text-white" to="/"
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
