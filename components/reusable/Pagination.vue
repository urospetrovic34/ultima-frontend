<template>
  <div class="flex justify-center gap-1">
    <NuxtLink
      class="w-[40px] h-[40px]"
      to=""
    >
      <ReusableButton
        :text="'<'"
        :rounded="true"
      />
    </NuxtLink>
    <template
      v-for="(item, index) in Array(count)"
      :key="index + 1"
    >
      <NuxtLink
        class="w-[40px] h-[40px]"
        :to="{ path: '/shop', query: { page: index + 1 } }"
      >
        <ReusableButton
          :text="(index + 1).toString()"
          :rounded="true"
          @click="$emit('change-product-page', index + 1)"
        />
      </NuxtLink>
    </template>
    <NuxtLink
      class="w-[40px] h-[40px]"
      to=""
    >
      <ReusableButton
        :text="'>'"
        :rounded="true"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
type PaginationProps = {
  count: number;
};
defineProps<PaginationProps>();
defineEmits(["change-product-page"]);
</script>
