import DesktopProduct from "@/components/product/desktop-product";
import MobileProduct from "@/components/product/mobile-product";
import { useProductInfo } from "@/hooks/useProductInfo";
import Head from "next/head";

function Product() {
  const { filteredProduct, dataProductMaterial, handleModalClose, handleModalOpen, modalOpen, selectedImageId } =
    useProductInfo();
  return (
    <>
      <Head>
        <link href="/icons/favicon.svg" rel="icon" />
        <title>TIFFI</title>
      </Head>
      <div className="px-[252px] max-lg:px-[142px] max-m:px-[73px] max-sm:px-4 flex flex-col gap-10 my-10">
        <div className="flex justify-center">
          <h1 className="text-lg font-lora">{filteredProduct?.title}</h1>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <DesktopProduct
            dataProductMaterial={dataProductMaterial}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            modalOpen={modalOpen}
            selectedImageId={selectedImageId}
          />
          <MobileProduct
            dataProductMaterial={dataProductMaterial}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            modalOpen={modalOpen}
            selectedImageId={selectedImageId}
          />
          <div className="pl-[64px] max-md:pl-0 w-[50%] max-mij:w-[40%] max-md:w-full ">
            <div className="flex w-full flex-col gap-4">
              <h2 className="text-[24px] font-lora">Описание</h2>
              <p className="font-lora"> {filteredProduct?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
