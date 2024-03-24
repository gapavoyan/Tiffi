import React from "react";
import WelcomePart from "@/components/welcomePart/welcome-part";
import Selection from "@/components/selection/selection";
import NewCollection from "@/components/newCollection/newCollection";

export default function Home() {
  return (
    <div>
      <WelcomePart />
      <Selection />
      <NewCollection />
    </div>
  );
}
