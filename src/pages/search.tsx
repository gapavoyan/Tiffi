import React from "react";
import CategoryProduct from "@/components/category-product/category-product";
import useCategoryInfo from "@/hooks/useCategoryInfo";
import SearchInput from "@/components/search/searchInput";

function Search() {
  const { onPageChange, totalPages, currentPage, loading, products } = useCategoryInfo();
  return (
    <div className="px-[252px]  gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
      <div className="w-full flex flex-col gap-4">
        <SearchInput />
        <h2 className="font-lora">Результаты поиска</h2>
      </div>
      <CategoryProduct
        products={products}
        loading={loading}
        onPageChange={onPageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Search;
