import { useState } from "react";

export interface ProductMaterial {
  id: number;
  color_id: null | number;
  product_id: number;
  img: string;
}

export function useProductInfo() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImageId, setSelectedImageId] = useState<number>(0);

  function handleModalOpen(index: number) {
    setModalOpen(true);
    setSelectedImageId(index);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return {
    handleModalOpen,
    handleModalClose,
    modalOpen: isModalOpen,
    selectedImageId
  };
}
