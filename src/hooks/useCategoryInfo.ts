import { dataCategory } from "@/dataBase/data-category";
import { useEffect, useRef, useState } from "react";
import { dataProducts } from "@/dataBase/data-product";
import { useRouter } from "next/router";

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
  const { parent_id: category_id, id: subcategory_id, gender } = useRouter().query;
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<number>(+subcategory_id!);
  const [loading, setLoading] = useState(false);
  const cachedInfo = useRef<Record<number, Product[]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 5;
  const [products, setProducts] = useState<null | Product[]>(null);

  function onChangeSubcategory(id: number) {
    setActiveSubcategoryId(id);
  }

  useEffect(() => {
    setLoading(true);
    if (cachedInfo.current && activeSubcategoryId in cachedInfo.current) {
      setProducts(cachedInfo.current[activeSubcategoryId]);
    } else {
      setTimeout(() => {
        // get request for products
        const products = dataProducts.filter(prod => prod.category_id === activeSubcategoryId);
        setProducts(products);
        cachedInfo.current[activeSubcategoryId] = products;
      }, 1000);
      setLoading(false);
    }
  }, [activeSubcategoryId]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    subcategories: dataCategory.subcategories,
    onChangeSubcategory,
    activeSubcategoryId,
    products,
    loading,
    currentPage,
    totalPage,
    onPageChange
  };
}

export default useCategoryInfo;
