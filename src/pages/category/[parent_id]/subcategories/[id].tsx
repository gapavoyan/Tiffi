import React from "react";
import SliderSubCategory from "@/components/slider/slider/slider-subCategory";
import CategoryProduct from "@/components/category-product/category-product";
import { dataCategory } from "@/dataBase/data-category";
import useCategoryInfo from "@/hooks/useCategoryInfo";

function CategoryComponent() {
  const { products, loading, activeSubcategoryId, onChangeSubcategory } = useCategoryInfo();

  return (
    <div className="px-[252px] gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
      <div>
        <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">{dataCategory.title}</h2>
      </div>
      <div className="w-full px-[200px] max-lg:px-[250px] max-m:px-[100px] max-md:px-[50px]">
        <SliderSubCategory
          activeSubcategoryId={activeSubcategoryId}
          subcategories={dataCategory.subcategories}
          onChangeSubcategory={onChangeSubcategory}
        />
      </div>
      <CategoryProduct products={products} loading={loading} />
    </div>
  );
}

export default CategoryComponent;
