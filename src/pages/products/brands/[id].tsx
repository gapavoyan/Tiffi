import SliderSubCategory from "@/components/slider/slider-subcategory-button/slider-subCategory";
import React from "react";
import useCategoryInfo from "@/hooks/useCategoryInfo";
import CategoryProduct from "@/components/category-product/category-product";
import Head from "next/head";

function Brands() {
  const { dataBrands, currentPage, totalPages, onPageChange, loading, products, activeBrandId, gender } = useCategoryInfo();

  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>
      <div className="px-[252px] gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
        <div>
          <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">Бренды</h2>
        </div>
        <div className="w-full px-[200px] max-lg:px-[250px] max-m:px-[100px] max-md:px-[50px]">
          <SliderSubCategory data={dataBrands} activeId={activeBrandId} gender={gender} />
        </div>
        <CategoryProduct
          products={products}
          loading={loading}
          activeSubcategoryId={activeBrandId}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
export default Brands;
