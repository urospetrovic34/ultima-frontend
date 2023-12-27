<template>
  <input
    :id="id"
    :type="type"
    :name="id"
    class="p-2 text-sm tw-border-solid border border-solid border-gray w-full block focus:border-transparent focus:outline-none focus:border-black"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :value="value"
  >
</template>

<script setup lang="ts">
type InputProps = {
  placeholder?: string;
  required?: boolean;
  id: string;
  type?: string;
  disabled?: boolean;
  value?: string;
};
withDefaults(defineProps<InputProps>(), {
  placeholder: "",
  required: false,
  type: "text",
  disabled: false,
  value: "",
});
</script>
