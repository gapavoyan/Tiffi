import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
interface Props {
  hoveredSubcategories?: Category[];
}
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Category } from "@/hooks/useHeaderInfo";
export default function Slider({ hoveredSubcategories }: Props) {
  return (
    <>
      <Swiper slidesPerView={3} modules={[Pagination]} className="mySwiper divHeaderSlider">
        {hoveredSubcategories?.map(el => (
          <div key={`swiperSlide${el.id}`} className="swiper-slide">
            <SwiperSlide>
              <div>
                <p className="text-white max-m:text-sm">{el.title}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
