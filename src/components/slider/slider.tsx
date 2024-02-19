import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Image from "next/image";

import "swiper/css/pagination";
interface Props {
  hoveredSubcategories: any[];
}
import { Pagination } from "swiper/modules";
import "swiper/css";
// import "../../styles/globals.css";
export default function Slider({ hoveredSubcategories }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  function onSlideNext() {
    swiperRef.current?.swiper.slideNext();
  }
  function onSlidePrev() {
    swiperRef.current?.swiper.slidePrev();
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        ref={swiperRef}
        // pagination={{
        //   clickable: true
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {hoveredSubcategories.map(el => {
          return (
            <div key={el.id}>
              <SwiperSlide>
                <div>
                  <p className="text-white">{el.title}</p>
                </div>
              </SwiperSlide>
              ;
            </div>
          );
        })}
      </Swiper>
      {hoveredSubcategories.length > 3 && (
        <div className="relative  top-72 right-52 mt-3">
          <div className="flex justify-end items-end">
            <button onClick={onSlidePrev}>
              <div style={{ width: "54px", height: "60px" }}>
                <Image src="icon/leftArrow.svg" width={60} height={60} alt="" />
              </div>
            </button>
            <button onClick={onSlideNext}>
              <div style={{ width: "60px", height: "60px" }}>
                <Image src="icon/rightArrow.svg" width={60} height={60} alt="" />
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
