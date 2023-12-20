import { usePagination } from "~/composables/usePagination";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const data = await $fetch(
    `${config.public.API_URL}/rest/v1/product?select=*,product_category(name)`,
    {
      headers: {
        Prefer: "count=exact",
        Authorization: `Bearer ${config.public.API_KEY}`,
        apiKey: config.public.API_KEY,
        Range: usePagination(),
      },
      key: "products",
    }
  );

  return data;
});
