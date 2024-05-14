import { Gender } from "@/hooks/useHeaderInfo";
import ApiSlice from "../slice";
import { Product } from "@/hooks/useCategoryInfo";

export interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  gender: Gender;
  img: null | string;
  subcategories: Category[];
}
export default class ProductSlice extends ApiSlice {
  static async GetProductNewCollection() {
    return this.request<{ items: Product }>(`/products/new-collection`);
  }
  static async GetProductCompilation() {
    return this.request<{ items: Product }>(`/products/compilation`);
  }
  static async GetSearchProduct(query: string) {
    return this.request<{ items: Product[]; count: number }>(`/products/search?page=1&rowsPerPage=6&query=${query}`);
  }
  static async GetProductInfo(product_id: number) {
    return this.request<{ item: Product }>(`/products/info/${product_id}`);
  }
  static async GetProductMaterial(product_id: number) {
    return this.request<{ items: Product }>(`/products/${product_id}`);
  }
}
