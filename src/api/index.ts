import ApiSlice from "./slice";
import CategorySlice from "./slices/category-slice";
import GenderSlice from "./slices/gender-slice";
import ProductSlice from "./slices/product-slice";

export default class Api extends ApiSlice {
  static gender = GenderSlice;
  static product = ProductSlice;
  static category = CategorySlice;
}
