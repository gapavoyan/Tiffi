import Api from "@/api";
import GenderNewProducts from "@/components/new-products/gender-new-products";
import NewProduct from "@/components/new-products/new-product-top-part";
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
function NewProducts({ men, women }: Props) {
  const push = useRouter().push;
  return (
    <div>
      <Head>
        <title>TIFFI</title>
      </Head>
      <NewProduct />
      <div className="flex flex-col gap-[120px] max-lg:gap-[80px] my-[120px] max-lg:my-[80px] max-md:my-[64px]">
        <GenderNewProducts title="для Женщин" data={women} onNavigate={() => push("/products/woman")} />
        <GenderNewProducts title="для Мужчин" data={men} onNavigate={() => push("/products/man")} />
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  return Promise.all([Api.gender.GetNewProducts("woman"), Api.gender.GetNewProducts("man")])
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
export default NewProducts;
