import Api from "@/api";
import DesktopProduct from "@/components/product/desktop-product";
import MobileProduct from "@/components/product/mobile-product";
import type { Product } from "@/hooks/useCategoryInfo";
import type { ProductMaterial } from "@/hooks/useProductInfo";
import { useProductInfo } from "@/hooks/useProductInfo";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface ProductProps {
  product: Product;
  productMaterial: ProductMaterial[];
}
function Product({ product, productMaterial }: ProductProps) {
  const { handleModalClose, handleModalOpen, modalOpen, selectedImageId } = useProductInfo();

  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>
      <div className="px-[252px] max-lg:px-[142px] max-m:px-[73px] max-sm:px-4 flex flex-col gap-10 my-10">
        <div className="flex justify-center">
          <h1 className="text-lg font-lora">{product?.title}</h1>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <DesktopProduct
            dataProductMaterial={productMaterial}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            modalOpen={modalOpen}
            selectedImageId={selectedImageId}
          />
          <MobileProduct
            dataProductMaterial={productMaterial}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            modalOpen={modalOpen}
            selectedImageId={selectedImageId}
          />
          <div className="pl-[64px] max-md:pl-0 w-[50%] max-mij:w-[40%] max-md:w-full ">
            <div className="flex w-full flex-col gap-4">
              <h2 className="text-[24px] font-lora">Описание</h2>
              <p className="font-lora"> {product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  return Promise.all([Api.product.GetProductInfo(+id!), Api.product.GetProductMaterial(+id!)])
    .then(([{ data: product }, { data: productMaterial }]) => {
      return {
        props: {
          product: product.item,
          productMaterial: productMaterial.items
        }
      };
    })
    .catch(() => {
      return {
        props: {
          error: "An error occurred while fetching data."
        }
      };
    });
};

export default Product;
