import { useRouter } from "next/router";
import { dataProducts } from "@/dataBase/data-product";
import { dataProductMaterial } from "@/dataBase/data-product-material";
import { useState } from "react";
export interface ProductMaterial {
  id: number;
  color_id: null | number;
  product_id: number;
  img: string;
}
export function useProductInfo() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImageId, setSelectedImageId] = useState<number>(0);
  const router = useRouter();
  function handleModalOpen(index: number) {
    setModalOpen(true);
    setSelectedImageId(index);
  }
  function handleModalClose() {
    setModalOpen(false);
  }
  const { id } = router.query;
  const filteredProduct = dataProducts.find(item => +id! === item.id);
  return {
    filteredProduct,
    dataProductMaterial,
    handleModalOpen,
    handleModalClose,
    modalOpen,
    selectedImageId
  };
}
