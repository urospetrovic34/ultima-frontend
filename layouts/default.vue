<template>
  <div class="flex flex-col h-screen bg-background">
    <NavigationHeaderAuthCart />
    <NavigationHeaderPrimary />
    <NavigationHeaderSecondary />
    <div class="max-w-screen-xl w-full mx-auto flex-1">
      <slot />
    </div>
    <NavigationFooter />
  </div>
</template>
