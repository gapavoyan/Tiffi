import React from "react";
import { dataCategory } from "@/components/dataBase/data-category";
import SliderCategory from "@/components/slider/slider/slider-category";
function Category() {
  return (
    <div className="px-[252px] max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
      <div>
        <h2 className="text-lg max-md:text-[36px] max-sm:text-[24px] font-railway">{dataCategory.title}</h2>
      </div>
      <div className="w-full">
        <SliderCategory />
      </div>
    </div>
  );
}

export default Category;
