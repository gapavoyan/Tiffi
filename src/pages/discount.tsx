import Api from "@/api";
import DiscountProductsPart from "@/components/discount/discount-product-top-part";
import GenderNewProducts from "@/components/new-products/gender-new-products";
import { dataRecent } from "@/dataBase/data-recent";
import { Product } from "@/hooks/useCategoryInfo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
interface Props {
  error?: string;
  women: Product[];
  men: Product[];
}
function DiscountProduct({ men, women }: Props) {
  const push = useRouter().push;
  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>
      <DiscountProductsPart />
      <div className="flex flex-col gap-[120px] max-lg:gap-[80px] my-[120px] max-lg:my-[80px] max-md:my-[64px]">
        <GenderNewProducts title="для Женщин" data={men} onNavigate={() => push("/products/woman")} />
        <GenderNewProducts title="для Мужчин" data={women} onNavigate={() => push("/products/man")} />
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  return Promise.all([Api.gender.GetDiscountProducts("woman"), Api.gender.GetDiscountProducts("man")])
    .then(([{ data: women }, { data: men }]) => {
      return {
        props: {
          women: women.items,
          men: men.items
        }
      };
    })
    .catch(() => {
      return {
        props: {
          error: "An error occurred while fetching data."
        }
      };
    });
};
export default DiscountProduct;
