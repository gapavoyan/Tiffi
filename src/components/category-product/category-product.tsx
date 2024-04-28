import React from "react";
import ProductCard from "../product-card/product-card";
import Pagination from "../pagination/pagination";
import { Product } from "@/hooks/useCategoryInfo";

interface Props {
  products: Product[] | null;
  loading: boolean;
  activeSubcategoryId?: number | null;
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

function CategoryProduct({ products, loading, currentPage, totalPages, onPageChange }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[80px] max-sm:mt-10 w-full">
        {loading ? (
          <div>Loading...</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : products?.length ? (
          products.map(item => (
            <div key={`category-product${item.id}`}>
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
        <Pagination totalPages={totalPages} onPageChange={onPageChange} currentPage={currentPage} />
      </div>
    </>
  );
}

export default CategoryProduct;
