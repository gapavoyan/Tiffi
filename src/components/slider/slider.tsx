import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import Image from "next/image";

type Swiper = null | any;
interface Props {
  hoveredSubcategories: Category[];
  onSubCategoryItemClick: (id: number, parent_id: number | null, gender: Gender) => void;
}
export default function Slider({ hoveredSubcategories, onSubCategoryItemClick }: Props) {
  const swiperRef = useRef<Swiper>(null);
  function slidePrev() {
    swiperRef.current.swiper.slidePrev();
  }
  function slideNext() {
    swiperRef.current.swiper.slideNext();
  }
  return (
    <>
      <Swiper slidesPerView={3} ref={swiperRef} modules={[Pagination]} className="mySwiper divHeaderSlider">
        {hoveredSubcategories?.map(el => (
          <SwiperSlide key={`subcategory-slider${el.id}`}>
            <div>
              <button
                className="text-white max-m:text-sm"
                onClick={() => onSubCategoryItemClick(el.id, el.parent_id!, el.gender)}
              >
                {el.title}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {hoveredSubcategories.length > 3 && (
        <div className="flex justify-end gap-4 mb-2">
          <button onClick={slidePrev}>
            <Image src="/icons/left-arrow.svg" width={40} height={40} alt="left-arrow" />
          </button>
          <button onClick={slideNext}>
            <Image src="/icons/right-arrow.svg" width={40} height={40} alt="right-arrow" />
          </button>
        </div>
      )}
    </>
  );
}
