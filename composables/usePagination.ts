export function usePagination() {
  const route = useRoute();
  if (route.query.page) {
    const startIndex = (Number(route.query.page) - 1) * 9;
    const lastIndex = startIndex + 8;
    return `${startIndex}-${lastIndex}`;
  } else {
    return "0-8";
  }
}
