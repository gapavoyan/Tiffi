import SliderSubCategory from "@/components/slider/slider-subcategory-button/slider-subCategory";
import React from "react";
import useCategoryInfo from "@/hooks/useCategoryInfo";
import CategoryProduct from "@/components/category-product/category-product";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Api from "@/api";
import { Gender, T_Brand } from "@/hooks/useHeaderInfo";
interface Props {
  dataBrands: T_Brand[];
}
function Brands({ dataBrands }: Props) {
  const { currentPage, totalPages, onPageChange, loading, products, activeBrandId, gender } = useCategoryInfo();

  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>
      <div className="px-[252px] gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
        <div>
          <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">Бренды</h2>
        </div>
        <div className="w-full ">
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
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { gender }: { gender?: Gender } = query;
  const response = Api.gender.GetBrandsByGender(gender!);
  const dataBrands = (await response).data.items;
  return {
    props: {
      dataBrands: dataBrands
    }
  };
};
export default Brands;
