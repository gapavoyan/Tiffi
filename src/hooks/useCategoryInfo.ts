import { dataCategory } from "@/components/dataBase/data-category";
import { useState } from "react";

function useCategoryInfo() {
  const [activeSubcategory, setActiveSubcategory] = useState<null | number>(null);
  function onSubcategoryClick(id: number) {
    setActiveSubcategory(id);
  }
  return {
    subcategories: dataCategory.subcategories,
    onSubcategoryClick: onSubcategoryClick,
    activeSubcategory
  };
}

export default useCategoryInfo;
