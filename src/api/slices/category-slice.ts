import { Gender } from "@/hooks/useHeaderInfo";
import ApiSlice from "../slice";
import { Category } from "../../hooks/useHeaderInfo";

export interface CategoryItem {
  id: number;
  title: string;
  parent_id: null;
  gender: Gender;
  img: null;
}

export default class CategorySlice extends ApiSlice {
  static async GetCategoriesById(category_id: number) {
    return this.request<{ item: CategoryItem }>(`/categories/${category_id}/detailed`);
  }
  static async GetSubcategoriesParentId(category_id: number) {
    return this.request<{ items: Category }>(`/categories/${category_id}/subcategories`);
  }
}
