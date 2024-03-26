import React from "react";
import CollectionButton from "../buttons/collectionButton";
import { useRouter } from "next/router";
import SliderCollection from "../slider/sliderCollection/sliderCollection";
import { Url } from "next/dist/shared/lib/router/router";
import ForManSlider from "../slider/for-man-woman-slider/for-womanSlider";

function ForMan() {
  const router = useRouter();
  const push = (route: Url) => router.push(route);

  return (
    <div className="flex flex-col gap-[64px] max-md:gap-[40px] pb-[120px]">
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px]  max-md:px-[73px] max-sm:px-[16px]">
        <h2 className="text-[52px] max-mij:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-railway">для Мужчин</h2>
      </div>
      <div className="pl-[252px] max-xl:pl-[144px] max-mij:pl-[142px]  max-md:pl-[73px] max-sm:pl-[16px]">
        <ForManSlider />
      </div>
      <div className="px-[252px] max-xl:px-[144px] max-mij:px-[142px]  max-md:px-[73px] max-sm:px-[16px] flex justify-end">
        <CollectionButton onClick={() => push("/")} />
      </div>
    </div>
  );
}

export default ForMan;
