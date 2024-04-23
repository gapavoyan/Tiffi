import { Gender } from "@/hooks/useHeaderInfo";
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
  const { parent_id: category_id, gender: gender, id: subcategory_id } = router.query;
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<number | null>(+subcategory_id!);
  const cachedInfo = useRef<Record<number, Product[]>>({});
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPage = 5;
  const onPageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeSubcategoryId]);

  //cashed products
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

  return {
    subcategories: dataCategory.subcategories,
    activeSubcategoryId,
    products,
    loading,
    parentId: +(category_id ?? 0),
    onChangeSubcategory,
    gender: gender as Gender,
    //for pagination
    currentPage,
    itemsPage,
    onPageChange
  };
}

export default useCategoryInfo;
