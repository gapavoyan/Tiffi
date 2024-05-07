import ApiSlice from "./slice";
import GenderSlice from "./slices/gender-slice";

export default class Api extends ApiSlice {
  static gender = GenderSlice;
}
