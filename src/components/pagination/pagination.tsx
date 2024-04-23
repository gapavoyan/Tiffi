import { Product } from "@/hooks/useCategoryInfo";
import Image from "next/image";
import React from "react";

interface Props {
  itemsPage: number;
  totalPosts: number;
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
}

function Pagination({ itemsPage, currentPage, onPageChange, totalPosts }: Props) {
  const totalPages = Math.ceil(totalPosts / itemsPage);

  const onPageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };
  function onPrevButtonClick() {
    onPageChange(currentPage - 1);
  }
  function onNextButtonClick() {
    onPageChange(currentPage + 1);
  }
  return (
    <div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 ">
          <button onClick={onPrevButtonClick} disabled={currentPage === 1}>
            <Image src="/icons/pagination-prev.svg" width={20} height={20} alt="prev-arrow" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => onPageClick(index + 1)}
              className={`cursor-pointer w-10 h-10 ${index + 1 === currentPage ? "rounded-full border-black border" : ""}`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={onNextButtonClick} disabled={currentPage == totalPages}>
            <Image src="/icons/pagination-next.svg" width={20} height={20} alt="next-arrow" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
