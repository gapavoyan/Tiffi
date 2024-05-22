import { Gender } from "@/hooks/useHeaderInfo";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Api from "@/api";

export interface Product {
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

function useCategoryInfo() {
  const { parent_id: category_id, gender: gender, id: sub_id } = useRouter().query;

  const subcategory_id = +(sub_id as string);

  const [activeId, setActiveSubcategoryId] = useState<number>(subcategory_id);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const cachedInfo = useRef<Cache>({});

  const onChangeSubcategory = (id: number) => setActiveSubcategoryId(id);

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeId]);

  useEffect(() => {
    setActiveSubcategoryId(subcategory_id);
  }, [subcategory_id]);

  useEffect(() => {
    const lastPostIndex = currentPage * ITEMS_PER_PAGE;
    const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE;

    const fetchData = async () => {
      setLoading(true);

      if (subcategory_id && cachedInfo.current[subcategory_id]?.[currentPage]) {
        setProducts(cachedInfo.current[subcategory_id][currentPage]);
        setLoading(false);
        return;
      }

      if (subcategory_id) {
        let res;
        if (+subcategory_id !== +category_id!) {
          res = await Api.product.GetProductBySubcategory(subcategory_id);
        } else {
          res = await Api.product.GetAllCategoryProduct(+category_id!);
        }

        const categoryProducts = res.data.items;

        const productsPages = Math.ceil(categoryProducts.length / ITEMS_PER_PAGE);
        setTotalPages(productsPages);

        const currentProducts = categoryProducts.slice(firstPostIndex, lastPostIndex);
        setProducts(currentProducts);

        // Cached data
        if (!cachedInfo.current[subcategory_id!]) {
          cachedInfo.current[subcategory_id] = {};
        }
        cachedInfo.current[subcategory_id][currentPage] = currentProducts;
      }
      setLoading(false);
    };

    fetchData();
  }, [activeId, currentPage, subcategory_id, category_id]);

  return {
    activeId,
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
