import React from "react";
import WelcomePart from "@/components/welcomePart/welcome-part";
import Selection from "@/components/selection/selection";
import NewCollection from "@/components/newCollection/newCollection";
import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import { genderData } from "@/dataBase/data-gender";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const push = useRouter().push;
  return (
    <div>
      <Head>
        <link href="/icons/favicon.svg" rel="icon" />
        <title>TIFFI</title>
      </Head>
      <WelcomePart />
      <Selection />
      <NewCollection />
      <div className="flex flex-col gap-[24px] mb-6">
        <GenderWrapper title="для Женщин" data={genderData} onNavigate={() => push("/products/woman")} />
        <GenderWrapper title="для Мужчин" data={genderData} onNavigate={() => push("/products/man")} />
      </div>
    </div>
  );
}
