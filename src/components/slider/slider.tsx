import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Category, Gender } from "@/hooks/useHeaderInfo";
interface Props {
  hoveredSubcategories: Category[];
  onSubCategoryItemClick: (id: number, parent_id: number | null, gender: Gender) => void;
}
export default function Slider({ hoveredSubcategories, onSubCategoryItemClick }: Props) {
  return (
    <>
      <Swiper slidesPerView={3} modules={[Pagination]} className="mySwiper divHeaderSlider">
        {hoveredSubcategories?.map(el => (
          <div key={`swiperSlide${el.id}`} className="swiper-slide">
            <SwiperSlide>
              <div>
                <button
                  className="text-white max-m:text-sm"
                  onClick={() => onSubCategoryItemClick(el.id, el.parent_id!, el.gender)}
                >
                  {el.title}
                </button>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
