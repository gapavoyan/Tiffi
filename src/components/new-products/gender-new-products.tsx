import React from "react";
import ProductCard from "../product-card/product-card";
import type { Product } from "@/dataBase/data-categories";
import CollectionButton from "../buttons/collectionButton";
interface Props {
  title: string;
  data: Product[];
  onNavigate: () => void;
}
function GenderNewProducts({ title, data, onNavigate }: Props) {
  return (
    <>
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px] max-md:px-[73px] max-sm:px-[16px]">
        <h2 className="text-[52px] max-mij:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-railway">{title}</h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[80px] max-sm:mt-10 w-full">
          {data.map(item => (
            <div key={`new-product${item.id}`}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px]  max-md:px-[73px] max-sm:px-[16px] flex justify-end">
        <CollectionButton onClick={onNavigate} />
      </div>
    </>
  );
}

export default GenderNewProducts;
