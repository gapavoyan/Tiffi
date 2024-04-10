import { dataCategory } from "@/components/dataBase/data-category";
import { useState } from "react";
import { dataProducts } from "@/components/dataBase/data-product";

export interface Products {
  id: number;
  title: string;
  description: string;
  discount: number;
  price: number;
  sizes: string;
  type: string;
  brand_id: number;
  category_id: number;
  date: string | null;
  img: string;
}

function useCategoryInfo() {
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<null | number>(null);

  function onSubcategoryClick(id: number | null) {
    setActiveSubcategoryId(id);
  }
  const filteredProducts = activeSubcategoryId ? dataProducts.filter(el => el.category_id === activeSubcategoryId) : dataProducts;

  return {
    subcategories: dataCategory.subcategories,
    onSubcategoryClick,
    activeSubcategoryId,
    products: filteredProducts
  };
}

export default useCategoryInfo;
