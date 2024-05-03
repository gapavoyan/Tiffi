import React, { useState } from "react";
import SliderMaterialProduct from "../slider/slider-product-material/desktop-product-slider";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { ProductMaterial } from "@/hooks/useProductInfo";
import DesktopZoom from "./produxt-zoom";
import ProductZoom from "./produxt-zoom";
interface Props {
  dataProductMaterial: ProductMaterial[];
  handleModalOpen: (index: number) => void;
  handleModalClose: () => void;
  modalOpen: boolean;
  selectedImageId: number;
}
function DesktopProduct({ dataProductMaterial, handleModalOpen, handleModalClose, modalOpen, selectedImageId }: Props) {
  const [activeId, setActiveSlideId] = useState<number>(dataProductMaterial[0].id);
  const isDesktop = useMediaQuery("(max-width : 1416px)");
  function handleClickOnItem(index: number) {
    setActiveSlideId(index);
    const item = document.getElementById("main-slider");
    if (item) {
      const options: ScrollToOptions = {
        behavior: "smooth"
      };
      const offsetTop = document.getElementById(`product-item${index}`)!.offsetTop;
      options.top = isDesktop ? offsetTop - 246 : offsetTop - 273;
      item.scrollTo(options);
    }
  }
  return (
    <>
      <div className="flex w-[50%] max-mij:w-[60%] gap-4 max-md:hidden">
        <div className="w-[20%]">
          <SliderMaterialProduct dataProductMaterial={dataProductMaterial} onClick={handleClickOnItem} activeId={activeId} />
        </div>
        <div className="w-[600px] h-[600px] max-m:h-[500px] overflow-auto custom-scrollbar" id="main-slider">
          {dataProductMaterial.map((item, index) => (
            <div
              key={`product-item${item.id}`}
              id={`product-item${item.id}`}
              className="w-full h-full"
              onClick={() => handleModalOpen(index)}
            >
              <Image
                src={`https://api.tiffi.store/${item.img}`}
                width={200}
                height={200}
                className="w-full h-full"
                alt="item-img"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
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

export default DesktopProduct;
