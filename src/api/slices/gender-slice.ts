import { Gender } from "@/hooks/useHeaderInfo";
import ApiSlice from "../slice";
import { I_Brand } from "@/hooks/useHeaderInfo";
import { Product } from "@/dataBase/data-categories";

export interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  gender: Gender;
  img: null | string;
  subcategories: Category[];
}

export default class GenderSlice extends ApiSlice {
  static async GetDiscountProducts(gender: Gender) {
    return this.request<{ items: Product }>(`/products/discounts?gender=${gender}`);
  }
  static async GetNewProducts(gender: Gender) {
    return this.request<{ items: Product }>(`/products/recent?gender=${gender}`);
  }
  static async GetProductsByGender(gender: Gender) {
    return this.request<{ items: Product }>(`/products/recent?gender=${gender}`);
  }
  static async GetCategoriesByGender(gender: Gender) {
    return this.request<{ items: Category[] }>(`/categories/tree?gender=${gender}`);
  }
  static async GetProductsByCategory(category_id: number) {
    return this.request<{ items: Product[] }>(`/products/limited?category_id=${category_id}`);
  }
  static async GetBrandsByGender(gender: Gender) {
    return this.request<{ items: I_Brand[] }>(`/brands?gender=${gender}`);
  }
}
