import React from "react";
import ProductCard from "../product-card/product-card";
import Pagination from "../pagination/pagination";
import { Product } from "@/hooks/useCategoryInfo";
import usePagination from "@/hooks/usePagination";

interface Props {
  products: Product[] | null;
  loading: boolean;
  activeSubcategoryId: number | null;
}

function CategoryProduct({ products, loading, activeSubcategoryId }: Props) {
  const { itemsPage, currentPage, onPageChange, loading: paginationLoading } = usePagination(activeSubcategoryId);
  const totalProducts = products?.length || 0;
  const lastPostIndex = currentPage * itemsPage;
  const firstPostIndex = lastPostIndex - itemsPage;
  const currentProducts = products?.slice(firstPostIndex, lastPostIndex) || [];

  return (
    <>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[80px] max-sm:mt-10 w-full">
        {paginationLoading ? (
          <div>Loading...</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : currentProducts.length ? (
          currentProducts.map((item: Product) => (
            <div key={item.id}>
              <ProductCard product={item} onClick={() => {}} />
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <h1 className="text-customGreen text-[30px]">ТАКИХ ТОВАРОВ НЕТ</h1>
          </div>
        )}
      </div>

      <div>
        <Pagination
          currentProducts={currentProducts}
          totalPosts={totalProducts}
          onPageChange={onPageChange}
          itemsPage={itemsPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default CategoryProduct;
