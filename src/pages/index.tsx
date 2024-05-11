import React from "react";
import WelcomePart from "@/components/welcomePart/welcome-part";
import Selection from "@/components/selection/selection";
import NewCollection from "@/components/newCollection/newCollection";
import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Api from "@/api";
import { Product } from "@/hooks/useCategoryInfo";
interface Props {
  men: Product[];
  women: Product[];
  newCollection: Product[];
  compilation: Product[];
}
export default function Home({ men, women, newCollection, compilation }: Props) {
  const push = useRouter().push;
  return (
    <div>
      <Head>
        ``
        <title>TIFFI</title>
      </Head>
      <WelcomePart />
      <Selection compilation={compilation} />
      <NewCollection newCollection={newCollection} />
      <div className="flex flex-col gap-[24px] mb-6">
        <GenderWrapper title="для Женщин" data={women} onNavigate={() => push("/products/woman")} />
        <GenderWrapper title="для Мужчин" data={men} onNavigate={() => push("/products/man")} />
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  return Promise.all([
    Api.gender.GetProductsByGender("woman"),
    Api.gender.GetNewProducts("man"),
    Api.product.GetProductNewCollection(),
    Api.product.GetProductCompilation()
  ])
    .then(([{ data: women }, { data: men }, { data: newCollection }, { data: compilation }]) => {
      return {
        props: {
          women: women.items,
          men: men.items,
          newCollection: newCollection.items,
          compilation: compilation.items
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
