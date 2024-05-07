import React, { useMemo, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import Button from "@/components/buttons/subcategoriesFilter-button";
import { useRouter } from "next/router";
import { T_Brand } from "@/dataBase/dataBrands";
import { Gender } from "@/hooks/useHeaderInfo";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

interface Props {
  activeId?: number | null;
  onChangeSubcategory?: (subcategory: number) => void;
  data?: T_Brand[];
  parentId?: number;
  gender?: Gender;
}

export default function SliderSubCategory({ activeId, parentId, onChangeSubcategory, data, gender }: Props) {
  const router = useRouter();
  const swiperRef = useRef<SwiperCore | null>(null);

  const filteredBrands = useMemo(() => {
    if (!gender) return data;
    return data?.filter(brand => brand.gender === gender);
  }, [data, gender]);

  const showAllButton = useMemo(() => !!parentId, [parentId]);

  const activeButtonIndex = useMemo<number>(() => {
    if (!activeId) return 0;
    const index = filteredBrands?.findIndex(item => item.id === activeId);
    return index !== undefined && index >= 0 ? index : 0;
  }, [activeId, filteredBrands]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeButtonIndex);
    }
  }, [activeButtonIndex]);

  const onSwiperHandler = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
  };
  const onSubCategoryItemClick = (id: number) => {
    if (onChangeSubcategory) onChangeSubcategory(id);
    if (parentId && gender) router.push(`/category/${parentId}/subcategories/${id}?gender=${gender}`);
    if (!parentId) router.push(`/products/brands/${id}?gender=${gender}`);
  };

  return (
    <Swiper
      navigation={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      className="mySwiper slider-category"
      onSwiper={onSwiperHandler}
    >
      {showAllButton && (
        <SwiperSlide className="swiper-slide">
          <Button onClick={() => onSubCategoryItemClick(parentId!)} isActive={activeId === parentId}>
            Все
          </Button>
        </SwiperSlide>
      )}

      {filteredBrands?.map(item => (
        <SwiperSlide key={`subcategory-button${item.id}`} className="swiper-slide">
          <Button onClick={() => onSubCategoryItemClick(item.id)} isActive={item.id === activeId}>
            {item.title}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
