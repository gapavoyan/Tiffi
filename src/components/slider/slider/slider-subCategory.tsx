import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import Button from "@/components/buttons/subcategoriesFilter-button";

interface Props {
  activeSubcategoryId: number | null;
  onChangeSubcategory: (subcategory: number | null) => void;
  subcategories: Category[];
  parentId: number;
  gender: Gender;
}

export default function SliderSubCategory({ activeSubcategoryId, parentId, onChangeSubcategory, subcategories, gender }: Props) {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper slider-category">
      <SwiperSlide className="swiper-slide">
        <Button
          activeSubcategoryId={activeSubcategoryId}
          parent_id={parentId}
          onChangeSubcategory={onChangeSubcategory}
          gender={gender}
        >
          Все
        </Button>
      </SwiperSlide>
      {subcategories.map(item => (
        <SwiperSlide key={item.id} className="swiper-slide">
          <Button
            activeSubcategoryId={activeSubcategoryId}
            onChangeSubcategory={onChangeSubcategory}
            item={item.id}
            parent_id={parentId}
            gender={item.gender}
          >
            {item.title}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
