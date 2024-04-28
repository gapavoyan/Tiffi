import DiscountProductsPart from "@/components/discount/discount-product-top-part";
import GenderNewProducts from "@/components/new-products/gender-new-products";
import { dataRecent } from "@/dataBase/data-recent";
import React from "react";

function DiscountProduct() {
  return (
    <>
      <DiscountProductsPart />
      <div className="flex flex-col gap-[120px] max-lg:gap-[80px] my-[120px] max-lg:my-[80px] max-md:my-[64px]">
        <GenderNewProducts title="для Женщин" data={dataRecent} />
        <GenderNewProducts title="для Мужчин" data={dataRecent} />
      </div>
    </>
  );
}

export default DiscountProduct;
