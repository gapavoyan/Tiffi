import GenderNewProducts from "@/components/new-products/gender-new-products";
import NewProduct from "@/components/new-products/new-product-top-part";
import { dataRecent } from "@/dataBase/data-recent";
import React from "react";

function NewProducts() {
  return (
    <div>
      <NewProduct />
      <div className="flex flex-col gap-[120px] max-lg:gap-[80px] my-[120px] max-lg:my-[80px] max-md:my-[64px]">
        <GenderNewProducts title="для Женщин" data={dataRecent} />
        <GenderNewProducts title="для Мужчин" data={dataRecent} />
      </div>
    </div>
  );
}

export default NewProducts;
