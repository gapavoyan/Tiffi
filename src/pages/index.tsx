import React from "react";
import WelcomePart from "@/components/welcomePart/welcome-part";
import Selection from "@/components/selection/selection";
import NewCollection from "@/components/newCollection/newCollection";
import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import { genderData } from "@/components/dataBase/data-gender";

export default function Home() {
  return (
    <div>
      <WelcomePart />
      <Selection />
      <NewCollection />
      <GenderWrapper title="для Женщин" data={genderData} />
      <GenderWrapper title="для Мужчин" data={genderData} />
    </div>
  );
}
