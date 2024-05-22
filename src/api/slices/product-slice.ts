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

export interface IResponse<T> {
  items: T;
}

export interface IResponseWithCount<T> extends IResponse<T> {
  count: number;
}

export default class ProductSlice extends ApiSlice {
  static async GetProductNewCollection() {
    return this.request<IResponse<Product>>(`/products/new-collection`);
  }

  static async GetProductCompilation() {
    return this.request<IResponse<Product>>(`/products/compilation`);
  }

  static async GetSearchProduct(query: string, page: number) {
    return this.request<IResponseWithCount<Product[]>>(`/products/search?page=${page}&rowsPerPage=6&query=${query}`);
  }

  static async GetProductInfo(product_id: number) {
    return this.request<IResponse<Product>>(`/products/info/${product_id}`);
  }

  static async GetProductMaterial(product_id: number) {
    return this.request<IResponse<Product>>(`/products/${product_id}`);
  }

  static async GetAllCategoryProduct(category_id: number) {
    return this.request<IResponse<Product[]>>(`/products/all?page=1&rowsPerPage=24&category_id=${category_id}`);
  }

  static async GetBrandProduct(brand_id: number) {
    return this.request<IResponseWithCount<Product[]>>(`/products/brands/${brand_id}?page=1&rowsPerPage=6`);
  }

  static async GetProductBySubcategory(category_id: number) {
    return this.request<IResponse<Product[]>>(`/products?page=1&rowsPerPage=10&category_id=${category_id}`);
  }
}
