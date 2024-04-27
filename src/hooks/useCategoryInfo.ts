import { Gender } from "@/hooks/useHeaderInfo";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { dataProducts } from "@/dataBase/data-product";
import { dataCategory } from "@/dataBase/data-category";
import { dataBrands } from "@/dataBase/dataBrands";
import { dataBrandsWithId } from "@/dataBase/data-brands-with-id";
export interface Product {
  id: number;
  title: string;
  description: string;
  discount: number;
  price: number;
  sizes?: string;
  type?: string;
  brand_id: number;
  category_id: number;
  date: string | null;
  img: string;
}
const ITEMS_PER_PAGE = 5;
function useCategoryInfo() {
  const router = useRouter();
  const { parent_id: category_id, gender: gender, id: subcategory_id } = router.query;
  const [activeId, setActiveSubcategoryId] = useState<number>(+subcategory_id!);
  const cachedInfo = useRef<Record<number, Record<number, Product[]>>>({});
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const { id: brandId } = router.query;
  const [activeBrandId, setActiveBrandId] = useState<number | null>(null);
  useEffect(() => {
    if (brandId) setActiveBrandId(+brandId);
  }, [brandId]);

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeId]);
  //brands
  const productsByBrandId = useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return dataBrandsWithId.filter(item => item.brand_id === activeBrandId);
  }, [activeBrandId]);

  //category-product
  //cached products
  useEffect(() => {
    const lastPostIndex = currentPage * ITEMS_PER_PAGE;
    const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE;
    if (activeId in cachedInfo.current) {
      if (currentPage in cachedInfo.current[activeId]) {
        const data = cachedInfo.current[activeId][currentPage];
        setProducts(data);
      } else {
        setLoading(true);
        setTimeout(() => {
          const dataInCurrentPage = dataProducts
            .filter(p => (activeId === +category_id! ? p : p.category_id === activeId))
            .slice(firstPostIndex, lastPostIndex);
          setProducts(dataInCurrentPage);
          cachedInfo.current[activeId][currentPage] = dataInCurrentPage;
          setLoading(false);
        }, 1000);
      }
    } else {
      setLoading(true);
      setTimeout(() => {
        const filterData = dataProducts.filter(p => (activeId === +category_id! ? p : p.category_id === activeId));
        const productsPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);
        const currentProducts = filterData?.slice(firstPostIndex, lastPostIndex) || [];
        setTotalPages(productsPages);
        setProducts(currentProducts);
        cachedInfo.current[activeId] = { 1: currentProducts };
        setLoading(false);
      }, 1000);
    }
  }, [activeId, currentPage, category_id]);

  const onChangeSubcategory = (id: number) => setActiveSubcategoryId(id);

  return {
    subcategories: dataCategory.subcategories,
    activeId,
    products,
    loading,
    parentId: +(category_id ?? 0),
    onChangeSubcategory,
    gender: gender as Gender,
    //for pagination
    currentPage,
    totalPages,
    onPageChange,
    dataBrands,
    productsByBrandId,
    activeBrandId
  };
}

export default useCategoryInfo;
