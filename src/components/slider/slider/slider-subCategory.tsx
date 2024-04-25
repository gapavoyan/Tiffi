import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import Button from "@/components/buttons/subcategoriesFilter-button";
import { useRouter } from "next/navigation";

interface Props {
  activeSubcategoryId: number;
  onChangeSubcategory: (subcategory: number) => void;
  subcategories: Category[];
  parentId: number;
  gender: Gender;
}

export default function SliderSubCategory({ activeSubcategoryId, parentId, onChangeSubcategory, subcategories, gender }: Props) {
  const router = useRouter();
  const onSubCategoryItemClick = (id: number) => {
    onChangeSubcategory(id);
    router.push(`/category/${parentId}/subcategories/${id}?gender=${gender}`);
  };

  return (
    <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper slider-category">
      <SwiperSlide className="swiper-slide">
        <Button onClick={() => onSubCategoryItemClick(parentId)} isActive={activeSubcategoryId === parentId}>
          Все
        </Button>
      </SwiperSlide>
      {subcategories.map(item => (
        <SwiperSlide key={`subcategory-button${item.id}`} className="swiper-slide">
          <Button onClick={() => onSubCategoryItemClick(item.id)} isActive={item.id === activeSubcategoryId}>
            {item.title}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
