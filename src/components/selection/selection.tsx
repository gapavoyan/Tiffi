import React from "react";
import SliderCollection from "../slider/sliderCollection/sliderCollection";
function Selection() {
  return (
    <div className="py-[120px] pl-[372px] max-mij:pl-[142px] max-md:pl-[73px] max-sm:pl-[16px] flex flex-col  gap-[64px]">
      <div className="pr-[252px] max-mij:pr-[178px4] max-md:pr-[73px] max-sm:pr-[16px]  flex justify-between items-center">
        <h2 className="text-[52px] max-mij:text-[44px] max-md:text-[34px] max-sm:text-[24px]">Подборка</h2>
        <div>
          <span className="text-[50px] max-md:text-[45px] max-sm:text-[24px] font-railway">02/</span>
          <span className="text-[24px] max-sm:text-[14px] font-railway">май</span>
        </div>
      </div>
      <div className="bg-white">
        <SliderCollection />
      </div>
    </div>
  );
}

export default Selection;
