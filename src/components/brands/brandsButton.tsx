import React from "react";
import { Category, Gender } from "@/hooks/useHeaderInfo";
interface BrandsProps {
  subcategory: Category[];
  onBrandsItemClick: (id: number, gender: Gender) => void;
}
function BrandsButton({ subcategory, onBrandsItemClick }: BrandsProps) {
  return (
    <div>
      {subcategory.map(brand => (
        <button
          className="px-8 py-3 ml-4 mt-4 border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway"
          key={`brands-button${brand.id}`}
          onClick={() => onBrandsItemClick(brand.id, brand.gender)}
        >
          {brand.title}
        </button>
      ))}
    </div>
  );
}

export default BrandsButton;
