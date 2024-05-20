import { Gender } from "@/hooks/useHeaderInfo";
import ApiSlice from "../slice";
import {} from "@/hooks/useCategoryInfo";
import { Product } from "@/dataBase/data-categories";

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
    return this.request<{
      items: Product[];
    }>(`/products/search?page=1&rowsPerPage=6&query=${query}`);
  }
  static async GetProductInfo(product_id: number) {
    return this.request<{ item: Product }>(`/products/info/${product_id}`);
  }
  static async GetProductMaterial(product_id: number) {
    return this.request<{ items: Product }>(`/products/${product_id}`);
  }
  static async GetCategoryProduct(category_id: number) {
    return this.request<{ items: Product }>(`/products/all?page=1&rowsPerPage=1&category_id=${category_id}`);
  }
  static async GetBrandProduct(brand_id: number) {
    return this.request<{ items: Product[] }>(`/products/brands/${brand_id}?page=1&rowsPerPage=1`);
  }
}
