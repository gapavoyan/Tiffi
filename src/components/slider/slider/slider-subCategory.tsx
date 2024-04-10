import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Category } from "@/hooks/useHeaderInfo";

interface Props {
  activeSubcategoryId: number | null;
  onSubcategoryClick: (subcategory: number | null) => void;
  subcategories: Category[];
}

export default function SliderSubCategory({ activeSubcategoryId, onSubcategoryClick, subcategories }: Props) {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper  slider-category">
      <SwiperSlide className="swiper-slide">
        <button
          onClick={() => onSubcategoryClick(null)}
          className={`px-8 py-3 rounded-[8px] transition-all text-sm w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway ${
            activeSubcategoryId === null ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Все
        </button>
      </SwiperSlide>
      {subcategories.map(item => (
        <SwiperSlide key={item.id} className="swiper-slide">
          <button
            className={`px-8 py-3 rounded-[8px] transition-all text-sm w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway ${
              activeSubcategoryId === item.id ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => onSubcategoryClick(item.id)}
          >
            {item.title}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
