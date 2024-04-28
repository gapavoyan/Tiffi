import React from "react";
import ProductCard from "../product-card/product-card";
import { Product } from "@/dataBase/data-categories";
interface Props {
  title: string;
  data: Product[];
}
function GenderNewProducts({ title, data }: Props) {
  return (
    <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px] max-md:px-[73px] max-sm:px-[16px]">
      <h2 className="text-[52px] max-mij:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-railway">{title}</h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[80px] max-sm:mt-10 w-full">
        {data.map(item => (
          <div key={`new-product${item.id}`}>
            <ProductCard product={item} onClick={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenderNewProducts;
