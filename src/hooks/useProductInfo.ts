import { useRouter } from "next/router";
import { dataProducts } from "@/dataBase/data-product";
import { dataProductMaterial } from "@/dataBase/data-product-material";
export interface ProductMaterial {
  id: number;
  color_id: null | number;
  product_id: number;
  img: string;
}
export function useProductInfo() {
  const router = useRouter();
  const { id } = router.query;
  const filteredProduct = dataProducts.find(item => +id! === item.id);
  return {
    filteredProduct,
    dataProductMaterial
  };
}
