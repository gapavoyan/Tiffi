import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { ProductMaterial } from "@/hooks/useProductInfo";
import Image from "next/image";
import DesktopZoom from "./produxt-zoom";
import ProductZoom from "./produxt-zoom";
interface Props {
  dataProductMaterial: ProductMaterial[];
  handleModalOpen: (index: number) => void;
  handleModalClose: () => void;
  modalOpen: boolean;
  selectedImageId: number;
}
function MobileProduct({ dataProductMaterial, handleModalClose, handleModalOpen, modalOpen, selectedImageId }: Props) {
  return (
    <>
      <div className="w-full hidden max-md:block">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataProductMaterial.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[700px] max-sm:h-[600px]" onClick={() => handleModalOpen(index)}>
                <Image
                  src={`https://api.tiffi.store/${item.img}`}
                  fill
                  alt="product-image"
                  objectFit="cover"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {modalOpen && (
        <ProductZoom
          onClose={handleModalClose}
          selectedImageId={selectedImageId}
          imageUrls={dataProductMaterial.map(item => `https://api.tiffi.store/${item.img}`)}
        />
      )}
    </>
  );
}

export default MobileProduct;
