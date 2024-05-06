import React from "react";
import SliderSubCategory from "@/components/slider/slider-subcategory-button/slider-subCategory";
import CategoryProduct from "@/components/category-product/category-product";
import { dataCategory } from "@/dataBase/data-category";
import useCategoryInfo from "@/hooks/useCategoryInfo";
import { Category } from "@/hooks/useHeaderInfo";
import Head from "next/head";

interface Props {
  data: {
    title: string;
    subcategories: Category[];
  };
}

function CategoryComponent({ data }: Props) {
  const { products, loading, parentId, gender, activeId, onChangeSubcategory, currentPage, totalPages, onPageChange } =
    useCategoryInfo();

  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>

      <div className="px-[252px] gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
        <div>
          <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">{data.title}</h2>
        </div>
        <div className="w-full">
          <SliderSubCategory
            activeId={activeId}
            data={data.subcategories}
            onChangeSubcategory={onChangeSubcategory}
            parentId={parentId}
            gender={gender}
          />
        </div>
        <CategoryProduct
          products={products}
          loading={loading}
          activeSubcategoryId={activeId}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
export function getServerSideProps() {
  return {
    props: {
      data: dataCategory
    }
  };
}
export default CategoryComponent;
