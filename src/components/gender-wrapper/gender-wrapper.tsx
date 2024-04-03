import React from "react";
import CollectionButton from "../buttons/collectionButton";
import GenderSlider from "../slider/gender-slider/gender-slider";
import { Product } from "../dataBase/data-categories";
interface GenderWrapperProps {
  title: string;
  data: Product[];
  onNavigate: () => void;
}

function GenderWrapper({ title, data, onNavigate }: GenderWrapperProps) {
  return (
    <div className="flex flex-col gap-[120px] max-md:gap-[64px]">
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px] max-md:px-[73px] max-sm:px-[16px]">
        <h2 className="text-[52px] max-mij:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-railway">{title}</h2>
      </div>
      <div className="pl-[252px] max-xl:pl-[144px] max-mij:pl-[142px]  max-md:pl-[73px] max-sm:pl-[16px] w-full h-full">
        <GenderSlider data={data} />
      </div>
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px]  max-md:px-[73px] max-sm:px-[16px] flex justify-end">
        <CollectionButton onClick={onNavigate} />
      </div>
    </div>
  );
}

export default GenderWrapper;
