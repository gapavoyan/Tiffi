import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
  shouldChangeUrl: boolean;
}

function Pagination({ totalPages, currentPage, onPageChange, shouldChangeUrl }: Props) {
  const router = useRouter();
  const { query } = router;

  const onPageClick = (pageNumber: number) => {
    onPageChange(pageNumber);

    if (shouldChangeUrl) {
      router.push({
        pathname: router.pathname,
        query: { ...query, page: pageNumber }
      });
    }
  };

  function onPrevButtonClick() {
    const newPage = currentPage - 1;
    onPageChange(newPage);
  }

  function onNextButtonClick() {
    const newPage = currentPage + 1;
    onPageChange(newPage);
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
          <button onClick={onNextButtonClick} disabled={currentPage === totalPages}>
            <Image src="/icons/pagination-next.svg" width={20} height={20} alt="next-arrow" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
