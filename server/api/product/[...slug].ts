export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const slug = getRouterParam(event, "slug");

  const data = await $fetch(
    `${config.public.API_URL}/rest/v1/product?slug=eq.${slug}&select=*,product_category(name)`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.public.API_KEY}`,
        apiKey: config.public.API_KEY,
      },
      key: "product",
    }
  );

  return data;
});
