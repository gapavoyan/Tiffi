import React from "react";
import { Category } from "@/hooks/useHeaderInfo";
interface BrandsProps {
  subcategory: Category[];
}
function BrandsButton({ subcategory }: BrandsProps) {
  return (
    <div>
      {subcategory.map(brand => (
        <button
          className="px-8 py-3 ml-4 mt-4 border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway"
          key={`brands-button${brand.id}`}
        >
          {brand.title}
        </button>
      ))}
    </div>
  );
}

export default BrandsButton;
