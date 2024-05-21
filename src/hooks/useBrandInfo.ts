import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Api from "@/api";
import { Gender } from "./useHeaderInfo";

export interface Product {
  slice(firstPostIndex: number, lastPostIndex: number): unknown;
  length: number;
  data: any;
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

type Cache = Record<number, Record<number, Product[]>>;

const ITEMS_PER_PAGE = 6;

function useBrandInfo() {
  const { id, gender } = useRouter().query;
  const brandId = +(id as string);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [activeBrandId, setActiveBrandId] = useState<number | null>(null);
  const cachedInfo = useRef<Cache>({});

  const onChangeSubcategory = (id: number) => setActiveBrandId(id);

  const onPageChange = (page: number) => setCurrentPage(page);
  useEffect(() => {
    if (brandId) setActiveBrandId(+brandId);
  }, [brandId]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeBrandId]);

  useEffect(() => {
    const lastPostIndex = currentPage * ITEMS_PER_PAGE;
    const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE;

    const fetchData = async () => {
      setLoading(true);

      if (brandId && cachedInfo.current[brandId]?.[currentPage]) {
        setProducts(cachedInfo.current[brandId][currentPage]);
        setLoading(false);
        return;
      }

      const res = await Api.product.GetBrandProduct(brandId);

      const categoryProducts = res.data.items;

      const productsPages = Math.ceil(categoryProducts.length / ITEMS_PER_PAGE);
      setTotalPages(productsPages);

      const currentProducts = categoryProducts.slice(firstPostIndex, lastPostIndex);
      setProducts(currentProducts);

      // Cached data
      if (!cachedInfo.current[brandId!]) {
        cachedInfo.current[brandId] = {};
      }
      cachedInfo.current[brandId][currentPage] = currentProducts;
      setLoading(false);
    };
    fetchData();
  }, [currentPage, brandId]);

  return {
    products,
    loading,
    onChangeSubcategory,
    gender: gender as Gender,
    //for pagination
    currentPage,
    totalPages,
    onPageChange,
    activeBrandId
  };
}

export default useBrandInfo;
