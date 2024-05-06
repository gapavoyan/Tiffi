import { Gender } from "@/hooks/useHeaderInfo";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { dataProducts } from "@/dataBase/data-product";
import { dataCategory } from "@/dataBase/data-category";
import { dataBrands } from "@/dataBase/dataBrands";

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
  const { parent_id: category_id, gender: gender, id: subcategory_id, id: brandId, query } = useRouter().query;

  const [activeId, setActiveSubcategoryId] = useState<number>(+subcategory_id!);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [activeBrandId, setActiveBrandId] = useState<number | null>(null);

  const cachedInfo = useRef<Record<number, Record<number, Product[]>>>({});

  const onChangeSubcategory = (id: number) => setActiveSubcategoryId(id);
  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    if (brandId) setActiveBrandId(+brandId);
  }, [brandId]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeId, activeBrandId]);

  //cached products
  useEffect(() => {
    const lastPostIndex = currentPage * ITEMS_PER_PAGE;
    const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE;
    if (activeId && activeBrandId! in cachedInfo.current) {
      if (currentPage in cachedInfo.current[activeId && activeBrandId!]) {
        const data = cachedInfo.current[activeId && activeBrandId!][currentPage];
        setProducts(data);
      } else {
        setLoading(true);
        setTimeout(() => {
          const dataInCurrentPage = dataProducts
            .filter(p =>
              activeId === +category_id! && activeBrandId === +brandId!
                ? p
                : p.category_id === activeId || p.brand_id === activeBrandId || p.title === query
            )
            .slice(firstPostIndex, lastPostIndex);
          setProducts(dataInCurrentPage);
          cachedInfo.current[activeId && activeBrandId!][currentPage] = dataInCurrentPage;
          setLoading(false);
        }, 1000);
      }
    } else {
      setLoading(true);
      setTimeout(() => {
        const filterData = dataProducts.filter(p =>
          activeId === +category_id! && activeBrandId === +brandId!
            ? p
            : p.category_id === activeId || p.brand_id === activeBrandId || p.title === query
        );
        const productsPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);
        const currentProducts = filterData?.slice(firstPostIndex, lastPostIndex) || [];
        setTotalPages(productsPages);
        setProducts(currentProducts);
        cachedInfo.current[activeId && activeBrandId!] = { 1: currentProducts };
        setLoading(false);
      }, 1000);
    }
  }, [activeId, currentPage, category_id, activeBrandId, query, brandId]);

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
    activeBrandId
  };
}

export default useCategoryInfo;
