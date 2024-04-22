import { useEffect, useState } from "react";
function usePagination(subcategoryId: number | null) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPage = 5;

  const onPageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [subcategoryId]);

  return { itemsPage, currentPage, onPageChange, loading };
}

export default usePagination;
