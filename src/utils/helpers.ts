export function formatDate(date: string) {
  const formater = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formater.format(new Date(date));
}
export function paginate<T>(data: T[], currentPage: number, limit: number) {
  const totalPages = Math.ceil(data.length / limit);

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    currentPage,
    totalPages,
    data: paginatedData,
  };
}

export function convertNumToPages(totalPages: number) {
  return Array(totalPages)
    .fill(1)
    .map((_, i) => i + 1);
}
