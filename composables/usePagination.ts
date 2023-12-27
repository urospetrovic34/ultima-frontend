export function usePagination(page: string) {
  if (!page) {
    return "0-8";
  }
  const startIndex = (Number(page) - 1) * 9;
  const lastIndex = startIndex + 8;
  return `${startIndex}-${lastIndex}`;
}
