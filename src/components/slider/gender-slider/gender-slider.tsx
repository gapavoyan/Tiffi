import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "@/dataBase/data-categories";
import ProductCard from "@/components/product-card/product-card";

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
          <SwiperSlide key={`product-slider${item.id}`}>
            <ProductCard product={item} onClick={() => {}} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GenderSlider;
