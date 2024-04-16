import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { genderData } from "@/dataBase/data-gender";
import ProductCard from "@/components/product-card/product-card";

function SliderCollection() {
  return (
    <div className="collection-swipeDiv">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        className="mySwiper divSwipeSlide"
      >
        {genderData.map(item => (
          <SwiperSlide key={item.id}>
            <ProductCard product={item} onClick={() => {}} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderCollection;
