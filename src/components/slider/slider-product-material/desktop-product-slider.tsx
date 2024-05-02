import { ProductMaterial } from "@/hooks/useProductInfo";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";
interface Props {
  dataProductMaterial: ProductMaterial[];
  onClick: (id: number) => void;
  activeId: number | null;
}
type Swiper = null | any;

export default function SliderMaterialProduct({ dataProductMaterial, onClick, activeId }: Props) {
  const sliderRef = useRef<Swiper>(null);
  function slideTop() {
    sliderRef.current.swiper.slidePrev();
  }
  function slideBottom() {
    sliderRef.current.swiper.slideNext();
  }
  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full h-[500px] max-m:h-[400px]">
        {dataProductMaterial.length > 3 && (
          <button onClick={slideTop}>
            <Image src="/icons/top.svg" width={7} height={12} alt="top-image" />
          </button>
        )}
        <Swiper
          spaceBetween={16}
          ref={sliderRef}
          freeMode
          slidesPerView={3}
          modules={[Scrollbar]}
          className="mySwiper"
          direction="vertical"
        >
          {dataProductMaterial.map(item => (
            <SwiperSlide key={item.id} className="cursor-pointer">
              <div className=" w-[200px] h-[180px]" onClick={() => onClick(item.id)}>
                <Image src={`https://api.tiffi.store/${item.img}`} fill alt="" objectFit="cover" />
                {activeId === item.id && <div className="absolute top-0 z-30 h-full w-full bg-[#1B1B1B99]" />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {dataProductMaterial.length > 3 && (
          <button onClick={slideBottom}>
            <Image src="/icons/bottom.svg" width={7} height={12} alt="top-image" />
          </button>
        )}
      </div>
    </>
  );
}
