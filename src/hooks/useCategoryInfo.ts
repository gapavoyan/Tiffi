import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { dataProducts } from "@/dataBase/data-product";
import { dataCategory } from "@/dataBase/data-category";

export interface Product {
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
  const router = useRouter();
  const { parent_id: category_id, id: subcategory_id, gender } = router.query;
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<number | null>(+subcategory_id!);
  const [loading, setLoading] = useState(false);
  const cachedInfo = useRef<Record<number, Product[]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 5;
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    setLoading(true);
    if (activeSubcategoryId !== null) {
      setTimeout(() => {
        const filteredProducts = dataProducts.filter(prod => prod.category_id === activeSubcategoryId);
        setProducts(filteredProducts);
        cachedInfo.current[activeSubcategoryId] = filteredProducts;
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setProducts(dataProducts);
        setLoading(false);
      }, 1000);
    }
  }, [activeSubcategoryId]);

  const onChangeSubcategory = (id: number | null) => {
    setActiveSubcategoryId(id);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    subcategories: dataCategory.subcategories,
    activeSubcategoryId,
    onChangeSubcategory,
    products,
    loading,
    currentPage,
    totalPage,
    onPageChange
  };
}

export default useCategoryInfo;
