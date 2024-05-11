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
}
