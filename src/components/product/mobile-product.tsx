import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { ProductMaterial } from "@/hooks/useProductInfo";
import Image from "next/image";
interface Props {
  dataProductMaterial: ProductMaterial[];
}
function MobileProduct({ dataProductMaterial }: Props) {
  return (
    <div className="w-full hidden max-md:block">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataProductMaterial.map(item => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[700px] max-sm:h-[600px]">
              <Image src={`https://api.tiffi.store/${item.img}`} fill alt="product-image" objectFit="cover" className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileProduct;
