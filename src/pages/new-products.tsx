import GenderNewProducts from "@/components/new-products/gender-new-products";
import NewProduct from "@/components/new-products/new-product-top-part";
import { dataRecent } from "@/dataBase/data-recent";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function NewProducts() {
  const push = useRouter().push;
  return (
    <div>
      <Head>
        <title>TIFFI</title>
      </Head>
      <NewProduct />
      <div className="flex flex-col gap-[120px] max-lg:gap-[80px] my-[120px] max-lg:my-[80px] max-md:my-[64px]">
        <GenderNewProducts title="для Женщин" data={dataRecent} onNavigate={() => push("/products/woman")} />
        <GenderNewProducts title="для Мужчин" data={dataRecent} onNavigate={() => push("/products/man")} />
      </div>
    </div>
  );
}

export default NewProducts;
