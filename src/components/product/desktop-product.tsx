import React, { useState } from "react";
import SliderMaterialProduct from "../slider/slider-product-material/desktop-product-slider";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { ProductMaterial } from "@/hooks/useProductInfo";
import DesktopZoom from "./desktop-zoom";
interface Props {
  dataProductMaterial: ProductMaterial[];
}
function DesktopProduct({ dataProductMaterial }: Props) {
  const [activeId, setActiveSlideId] = useState<number>(dataProductMaterial[0].id);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImageId, setSelectedImageId] = useState<number>(0);
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
  function handleModalOpen(index: number) {
    setModalOpen(true);
    setSelectedImageId(index);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
          {modalOpen && (
            <DesktopZoom
              onClose={handleCloseModal}
              selectedImageId={selectedImageId}
              imageUrls={dataProductMaterial.map(item => `https://api.tiffi.store/${item.img}`)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DesktopProduct;
