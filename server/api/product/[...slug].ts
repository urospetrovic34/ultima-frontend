export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const slug = getRouterParam(event, "slug");

  type Product = {
    [key: string]: any;
    id: number;
    created_at: string;
    category_id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    slug: string;
    product_category: {
      name: string;
    };
  };

  const res = await $fetch(
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

  const data = res as Array<Product>;
  const product = data[0];

  return product;
});
