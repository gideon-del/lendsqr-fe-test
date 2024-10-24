"use client";
import { convertNumToPages, paginate } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";

export const usePagination = <T>(data: T[]) => {
  const searchParams = useSearchParams();

  const [activePage, setActivePage] = useState(+searchParams.get("page")! || 1);
  const [pageOffset, setPageOffset] = useState(
    +searchParams.get("limit")! || 10
  );
  const [paginatedData, setPaginatedData] = useState<T[]>([]);

  const [pages, setPages] = useState<number[]>([]);
  const updateSearchParam = (name: "limit" | "page", val: number) => {
    const newSearchParam = queryString.stringify({
      ...queryString.parse(window.location.search),
      [name]: val,
    });
    window.history.pushState(null, "", `?${newSearchParam}`);
  };

  const leftPages = pages.filter((page) => page >= 1 && page <= 3);

  const rightPages = pages.filter((page) => page > pages.length - 4);
  const onOffsetChange = (offset: number) => {
    const {
      currentPage,
      data: paginatedData,
      totalPages,
    } = paginate<T>(data, activePage, offset);
    setPaginatedData(paginatedData);
    setPages(convertNumToPages(totalPages));
    setActivePage(currentPage);
    setPageOffset(offset);
    updateSearchParam("limit", offset);
  };
  const onPageChange = (page: number) => {
    setActivePage(page);
    const {
      currentPage,
      data: paginatedData,
      totalPages,
    } = paginate<T>(data, page, pageOffset);
    setPaginatedData(paginatedData);
    setPages(convertNumToPages(totalPages));
    setActivePage(currentPage);
    updateSearchParam("page", currentPage);
  };
  const init = (data: T[]) => {
    const { data: paginatedData, totalPages } = paginate(
      data,
      activePage,
      pageOffset
    );

    setPages(convertNumToPages(totalPages));
    setPaginatedData(paginatedData);
  };

  return {
    rightPages,
    onPageChange,
    leftPages,
    activePage,
    onOffsetChange,
    pageOffset,
    paginatedData,
    init,
    pages,
  };
};
