import React, { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import "swiper/css/pagination";
interface Props {
  hoveredSubcategories: any[];
}
import { Pagination } from "swiper/modules";
import "swiper/css";
export default function Slider({ hoveredSubcategories }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      <Swiper slidesPerView={3} ref={swiperRef} modules={[Pagination]} className="mySwiper">
        {hoveredSubcategories.map(el => {
          return (
            <div key={el.id}>
              <SwiperSlide>
                <div>
                  <p className="text-white max-m:text-sm">{el.title}</p>
                </div>
              </SwiperSlide>
              ;
            </div>
          );
        })}
      </Swiper>
    </>
  );
}
