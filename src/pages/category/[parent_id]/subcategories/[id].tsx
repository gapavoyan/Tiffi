import React from "react";
import { dataCategory } from "@/components/dataBase/data-category";
import SliderSubCategory from "@/components/slider/slider/slider-subCategory";
import useCategoryInfo from "@/hooks/useCategoryInfo";
import CategoryProduct from "@/components/category-product/category-product";
function Category() {
  const { activeSubcategoryId, subcategories, onSubcategoryClick, products } = useCategoryInfo();
  return (
    <div className="px-[252px] gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
      <div>
        <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">{dataCategory.title}</h2>
      </div>
      <div className="w-full">
        <SliderSubCategory
          activeSubcategoryId={activeSubcategoryId}
          subcategories={subcategories}
          onSubcategoryClick={onSubcategoryClick}
        />
      </div>
      <CategoryProduct products={products} />
    </div>
  );
}

export default Category;
