<template>
  <div class="flex flex-col h-screen bg-background">
    <NavigationHeaderAuthCart />
    <NavigationHeaderPrimary />
    <NavigationHeaderSecondary />
    <main class="max-w-screen-xl w-full mx-auto flex flex-col flex-1">
      <slot />
    </main>
    <NavigationFooter />
  </div>
</template>
