import { Gender } from "@/hooks/useHeaderInfo";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { dataProducts } from "@/dataBase/data-product";
import { dataCategory } from "@/dataBase/data-category";
import Api from "@/api";

export interface Product {
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

const ITEMS_PER_PAGE = 6;

function useCategoryInfo() {
  const { parent_id: category_id, gender: gender, id: subcategory_id, id: brandId } = useRouter().query;

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

    setLoading(true);

    if (activeBrandId && cachedInfo.current[activeBrandId]?.[currentPage]) {
      setProducts(cachedInfo.current[activeBrandId][currentPage]);
      setLoading(false);
      return;
    }

    Api.product
      .GetBrandProduct(+brandId)
      .then(({ data }) => {
        const items = data.items;

        const productsPages = Math.ceil(items.length / ITEMS_PER_PAGE);
        setTotalPages(productsPages);

        const currentProducts = items.slice(firstPostIndex, lastPostIndex);
        setProducts(currentProducts);

        if (!cachedInfo.current[activeBrandId]) {
          cachedInfo.current[activeBrandId] = {};
        }
        cachedInfo.current[activeBrandId][currentPage] = currentProducts;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activeBrandId, currentPage, brandId]);

  useEffect(() => {
    (async () => {
      if (brandId) {
        const { data, meta } = await Api.product.GetBrandProduct(+brandId!);
      }
      // console.log(data, 123);
    })();
  }, [brandId, currentPage]);

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
    activeBrandId
  };
}

export default useCategoryInfo;
