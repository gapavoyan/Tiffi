import React from "react";
import { Product } from "@/hooks/useCategoryInfo";
import Image from "next/image";
import Pagination from "../pagintaion/pagination";

interface Props {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
  products: Product[] | null;
}

function CategoryProduct({ currentPage, totalPage, onPageChange, products }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-6 mt-[80px]  max-sm:mt-10 w-full">
        {products?.length ? (
          products.map(item => (
            <div key={item.id} className="w-full flex flex-col items-center gap-8 max-md:gap-10 cursor-pointer">
              <div className="relative h-[524px] max-md:h-[408px] w-[20vw]  max-lg:w-[25vw] max-sm:w-[70vw]">
                <Image
                  src={`https://api.tiffi.store/${item.img}`}
                  fill
                  alt="product-image"
                  objectFit="cover"
                  className="w-full"
                />
              </div>
              <div>
                <p className="font-railway max-md:text-sm">{item.title}</p>
                <span className="text-customGreen max-md:text-sm font-railway">{item.price + " Руб"}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="">
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
