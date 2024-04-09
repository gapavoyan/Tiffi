import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Category } from "@/hooks/useHeaderInfo";

interface Props {
  activeSubcategory: number | null;
  onSubcategoryClick: (subcategory: number) => void;
  subcategories: Category[];
}

export default function SliderCategory({ activeSubcategory, onSubcategoryClick, subcategories }: Props) {
  return (
    <>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper  slider-category">
        {subcategories.map(item => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <button
              className={`px-8 py-3 w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway ${
                activeSubcategory === item.id ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => onSubcategoryClick(item.id)}
            >
              {item.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
