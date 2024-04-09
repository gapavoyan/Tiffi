import React from "react";
import { dataCategory } from "@/components/dataBase/data-category";
import SliderCategory from "@/components/slider/slider/slider-category";
import useCategoryInfo from "@/hooks/useCategoryInfo";
function Category() {
  const { activeSubcategoryId, subcategories, onSubcategoryClick, products } = useCategoryInfo();
  return (
    <div className="px-[252px] max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
      <div>
        <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">{dataCategory.title}</h2>
      </div>
      <div className="w-full">
        <SliderCategory
          activeSubcategoryId={activeSubcategoryId}
          subcategories={subcategories}
          onSubcategoryClick={onSubcategoryClick}
        />
      </div>
      {products.length > 0 ? (
        products.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
      ) : (
        <div>chka</div>
      )}
    </div>
  );
}

export default Category;
