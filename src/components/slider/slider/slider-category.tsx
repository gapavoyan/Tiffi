import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { dataCategory } from "@/components/dataBase/data-category";

export default function SliderCategory() {
  return (
    <>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper  slider-category">
        {dataCategory.subcategories.map(item => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <button className="px-8 py-3 w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway">
              {item.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
