<template>
  <button
    :class="[
      'bg-primary',
      'text-white',
      'w-full',
      'block',
      'p-2',
      rounded && 'rounded-full',
    ]"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  text?: string;
  type?: HTMLButtonElement["type"];
  rounded?: boolean;
};
withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  text: "Button",
  rounded: false,
});
</script>
