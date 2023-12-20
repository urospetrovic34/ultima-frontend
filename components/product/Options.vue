<template>
  <div class="flex flex-col justify-between">
    <div>
      <p class="text-2xl">
        {{ name }}
      </p>
      <p class="text-lg">
        ${{ price }}/Meter
      </p>
    </div>
    <div class="flex flex-col gap-5">
      <div class="max-w-[70px]">
        <p>Quantity</p>
        <ReusableInput
          :id="'quantity'"
          :value="'1'"
          :disabled="true"
        />
      </div>
      <ReusableButton text="Add to Cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const { name, price } = props;
</script>
