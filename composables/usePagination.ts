export function usePagination() {
  const route = useRoute();
  if (route.query.page) {
    let startIndex = (route.query.page - 1) * 9;
    let lastIndex = startIndex + 8;
    return `${startIndex}-${lastIndex}`;
  } else {
    return "0-8";
  }
}
