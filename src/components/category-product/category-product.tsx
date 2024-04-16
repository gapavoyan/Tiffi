import React from "react";
import Pagination from "../pagination/pagination";
import ProductCard from "../product-card/product-card";
import { Product } from "@/hooks/useCategoryInfo";

interface Props {
  products: Product[] | null;
  loading: boolean;
}

function CategoryProduct({ products, loading }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-6 mt-[80px]  max-sm:mt-10 w-full">
        {loading ? (
          <div>Loading...</div>
        ) : products && products.length ? (
          products.map((item: Product) => (
            <div key={item.id}>
              <ProductCard product={item} onClick={() => {}} />
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-customGreen text-[30px]">ТАКИХ ТОВАРОВ НЕТ</h1>
          </div>
        )}
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
}

export default CategoryProduct;
