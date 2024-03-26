import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataSelection } from "@/components/dataBase/dataSelection";
import "swiper/css";
import Image from "next/image";
function ForManSlider() {
  return (
    <div className="collection-swipeDiv">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        className="mySwiper divSwipeSlide"
      >
        {dataSelection.map(item => {
          return (
            <div key={item.id} className="flex flex-col">
              <SwiperSlide>
                <div className="flex flex-col items-start w-full">
                  <Image src={item.img} width={100} height={100} alt="collectionImage" />
                  <span className="text-customBlack max-md:text-sm font-railway">{item.description}</span>
                  <span className="text-customGreen font-railway">{item.price}</span>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ForManSlider;
