import { usePagination } from "~/composables/usePagination";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);

  const res = await $fetch.raw(`${config.public.API_URL}/rest/v1/product`, {
    query: {
      select: "*,product_category(name)",
    },
    method: "GET",
    headers: {
      Prefer: "count=exact",
      Authorization: `Bearer ${config.public.API_KEY}`,
      apiKey: config.public.API_KEY,
      Range: usePagination(query.page as string),
    },
    key: `products-page-${query.page}`,
  });

  const range = res.headers.get("content-range");

  return {
    products: res._data,
    pagination: {
      total: Number(range?.split("/")[1]),
      page: Number(range?.split("-")[0]),
    },
  };
});
