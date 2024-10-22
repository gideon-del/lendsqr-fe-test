import React from "react";
import "./style.scss";
import prevIcon from "@/assets/images/icons/prev.svg";
import nextIcon from "@/assets/images/icons/next.svg";
import Image from "next/image";
import { PAGE_OFFSETS } from "@/utils/constants";
interface PaginationBarProps {
  activePage: number;
  leftPages: number[];
  rightPages: number[];
  curPageOffset: number;
  onPageChange: (page: number) => void;
  onOffsetChange: (offset: number) => void;
  total: number;
  totalPages: number;
}
const PaginationBar = ({
  activePage,
  leftPages,
  onOffsetChange,
  onPageChange,
  curPageOffset,
  rightPages,
  total,
  totalPages,
}: PaginationBarProps) => {
  return (
    <footer className="pagination__bar--container">
      <div className="pagination__bar--per-page">
        <span>Showing</span>
        <select
          name="per_page"
          className="pagination__bar--input"
          onChange={(e) => onOffsetChange(parseInt(e.target.value))}
        >
          {PAGE_OFFSETS.map((pageOffset) => (
            <option
              key={pageOffset}
              value={pageOffset}
              selected={curPageOffset === pageOffset}
            >
              {pageOffset}
            </option>
          ))}
        </select>
        <span>out of {total}</span>
      </div>
      <div className="pagination__bar--btn-container">
        <button
          className="pagination__bar--btn"
          disabled={activePage <= 1}
          onClick={() => onPageChange(activePage - 1)}
        >
          <Image src={nextIcon} alt="" />
        </button>
        {leftPages.map((page) => (
          <button
            className={`pagination__bar--num ${
              activePage === page && "active"
            }`}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        {rightPages.length > 0 && (
          <button className="pagination__bar--num">...</button>
        )}
        {rightPages.map((page) => (
          <button
            className={`pagination__bar--num ${
              activePage === page && "active"
            }`}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="pagination__bar--btn"
          disabled={activePage >= totalPages}
          onClick={() => onPageChange(activePage + 1)}
        >
          <Image src={prevIcon} alt="" />
        </button>
      </div>
    </footer>
  );
};

export default PaginationBar;
