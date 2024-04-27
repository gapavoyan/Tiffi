import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "@/components/buttons/subcategoriesFilter-button";
import { useRouter } from "next/navigation";
import { T_Brand } from "@/dataBase/dataBrands";
import { Gender } from "@/hooks/useHeaderInfo";

interface Props {
  activeId?: number | null;
  onChangeSubcategory?: (subcategory: number) => void;
  onChangeBrandId?: () => void;
  data?: T_Brand[];
  parentId?: number;
  gender?: Gender;
}

export default function SliderSubCategory({ activeId, parentId, onChangeSubcategory, data, gender }: Props) {
  const router = useRouter();

  const filteredBrands = useMemo(() => {
    if (!gender) return data;
    return data?.filter(brand => brand.gender === gender);
  }, [data, gender]);

  const showAllButton = useMemo(() => !!parentId, [parentId]);

  const onSubCategoryItemClick = (id: number) => {
    if (onChangeSubcategory) onChangeSubcategory(id);
    if (parentId && gender) router.push(`/category/${parentId}/subcategories/${id}?gender=${gender}`);
    if (!parentId) router.push(`/products/brands/${id}?gender=${gender}`);
  };

  return (
    <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper slider-category">
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
