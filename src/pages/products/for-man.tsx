import React from "react";
import Image from "next/image";
import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import { genderData } from "@/components/dataBase/data-gender";
function Man() {
  return (
    <>
      <div className="px-[252px] max-xl:px-[144px] max-m:px-0 pt-[40px] flex flex-col gap-[40px] ">
        <div className="flex justify-center">
          <h1 className="text-lg max-xl:text-[44px] max-m:text-[36px] max-sm:text-[24px] font-railway">для Мужчин</h1>
        </div>
        <div className="relative h-[600px]">
          <Image src="/images/manImg.png" fill alt="manImage" objectFit="cover" />
        </div>
      </div>
      <div className="my-[120px]">
        <GenderWrapper title="Одежда" data={genderData} />
      </div>
      <div>
        <GenderWrapper title="Обувь" data={genderData} />
      </div>
      <div className="relative h-[600px]">
        <Image src="/images/womanImg2.png" fill alt="" objectFit="cover" />
      </div>
      <div className="my-[120px]">
        <GenderWrapper title="Сумки" data={genderData} />
      </div>
      <div>
        <GenderWrapper title="Аксессуары" data={genderData} />
      </div>
    </>
  );
}

export default Man;
