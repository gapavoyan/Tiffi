import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Product } from "@/components/dataBase/data-categories";

interface Props {
  data: Product[];
}
function GenderSlider({ data }: Props) {
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
        {data.map(item => (
          <div key={item.id} className="flex flex-col w-full h-full">
            <SwiperSlide>
              <div className="flex flex-col items-start gap-6 w-full cursor-pointer">
                <div className="w-full  relative aspect-[4/4]">
                  <Image src={item.img} fill alt="collectionImage" objectFit="cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-customBlack max-md:text-sm font-railway">{item.title}</span>
                  <span className="text-customGreen font-railway">{item.price + " Руб."}</span>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default GenderSlider;
