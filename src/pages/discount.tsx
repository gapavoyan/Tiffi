import DiscountProductsPart from "@/components/discount/discount-product-top-part";
import GenderNewProducts from "@/components/new-products/gender-new-products";
import { dataRecent } from "@/dataBase/data-recent";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function DiscountProduct() {
  const push = useRouter().push;

  return (
    <>
      <Head>
        <link href="/icons/favicon.svg" rel="icon" />
        <title>TIFFI</title>
      </Head>
      <DiscountProductsPart />
      <div className="flex flex-col gap-[120px] max-lg:gap-[80px] my-[120px] max-lg:my-[80px] max-md:my-[64px]">
        <GenderNewProducts title="для Женщин" data={dataRecent} onNavigate={() => push("/products/woman")} />
        <GenderNewProducts title="для Мужчин" data={dataRecent} onNavigate={() => push("/products/man")} />
      </div>
    </>
  );
}

export default DiscountProduct;
