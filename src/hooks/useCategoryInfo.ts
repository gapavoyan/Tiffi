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
const ITEMS_PER_PAGE = 5;

function useCategoryInfo() {
  const router = useRouter();
  const { parent_id: category_id, gender: gender, id: subcategory_id } = router.query;
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<number>(+subcategory_id!);
  const cachedInfo = useRef<Record<number, Record<number, Product[]>>>({});
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeSubcategoryId]);

  //cached products
  useEffect(() => {
    const lastPostIndex = currentPage * ITEMS_PER_PAGE;
    const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE;
    if (activeSubcategoryId in cachedInfo.current) {
      if (currentPage in cachedInfo.current[activeSubcategoryId]) {
        const data = cachedInfo.current[activeSubcategoryId][currentPage];
        setProducts(data);
      } else {
        setLoading(true);
        setTimeout(() => {
          const dataInCurrentPage = dataProducts
            .filter(p => (activeSubcategoryId === +category_id! ? p : p.category_id === activeSubcategoryId))
            .slice(firstPostIndex, lastPostIndex);
          setProducts(dataInCurrentPage);
          cachedInfo.current[activeSubcategoryId][currentPage] = dataInCurrentPage;
          setLoading(false);
        }, 1000);
      }
    } else {
      setLoading(true);
      setTimeout(() => {
        const filterData = dataProducts.filter(p =>
          activeSubcategoryId === +category_id! ? p : p.category_id === activeSubcategoryId
        );
        const productsPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);
        const currentProducts = filterData?.slice(firstPostIndex, lastPostIndex) || [];
        setTotalPages(productsPages);
        setProducts(currentProducts);
        cachedInfo.current[activeSubcategoryId] = { 1: currentProducts };
        setLoading(false);
      }, 1000);
    }
  }, [activeSubcategoryId, currentPage, category_id]);

  const onChangeSubcategory = (id: number) => setActiveSubcategoryId(id);

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
    totalPages,
    onPageChange
  };
}

export default useCategoryInfo;
