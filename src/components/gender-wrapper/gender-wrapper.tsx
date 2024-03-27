import React from "react";
import CollectionButton from "../buttons/collectionButton";
import { useRouter } from "next/router";
import GenderSlider from "../slider/gender-slider/gender-slider";
import type { Gender } from "../dataBase/data-gender";
interface GenderWrapperProps {
  title: string;
  data: Gender[];
}
function GenderWrapper({ title, data }: GenderWrapperProps) {
  const push = useRouter().push;

  return (
    <div className="flex flex-col gap-[64px] max-md:gap-[40px] pb-[120px]">
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px]  max-md:px-[73px] max-sm:px-[16px]">
        <h2 className="text-[52px] max-mij:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-railway">{title}</h2>
      </div>
      <div className="pl-[252px] max-xl:pl-[144px] max-mij:pl-[142px]  max-md:pl-[73px] max-sm:pl-[16px]">
        <GenderSlider data={data} />
      </div>
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px]  max-md:px-[73px] max-sm:px-[16px] flex justify-end">
        <CollectionButton onClick={() => push("/")} />
      </div>
    </div>
  );
}

export default GenderWrapper;
