import React from "react";
import WelcomePart from "@/components/welcomePart/welcome-part";
import Selection from "@/components/selection/selection";
import NewCollection from "@/components/newCollection/newCollection";
import ForWoman from "@/components/for-woman/for-woman";
import ForMan from "@/components/for-man/for-man";

export default function Home() {
  return (
    <div>
      <WelcomePart />
      <Selection />
      <NewCollection />
      <ForWoman />
      <ForMan />
    </div>
  );
}
