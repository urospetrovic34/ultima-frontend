<template>
  <div class="flex flex-col h-screen bg-[#e6faf7]">
    <NavigationHeaderAuthCart />
    <NavigationHeaderPrimary />
    <NavigationHeaderSecondary />
    <div class="max-w-screen-xl mx-auto flex-1">
      <slot />
    </div>
    <NavigationFooter />
  </div>
</template>
