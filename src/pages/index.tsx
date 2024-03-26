import React from "react";
import WelcomePart from "@/components/welcomePart/welcome-part";
import Selection from "@/components/selection/selection";
import NewCollection from "@/components/newCollection/newCollection";
import ForWoman from "@/components/for-woman/for-woman";

export default function Home() {
  return (
    <div>
      <WelcomePart />
      <Selection />
      <NewCollection />
      <ForWoman />
    </div>
  );
}
