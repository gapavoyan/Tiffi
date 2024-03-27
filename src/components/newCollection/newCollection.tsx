import React from "react";
import { dataNewCollection } from "../dataBase/data-newcollection";
import Image from "next/image";
import { useRouter } from "next/router";
import CollectionButton from "../buttons/collectionButton";
import { Url } from "next/dist/shared/lib/router/router";

function NewCollection() {
  const router = useRouter();
  const push = (route: Url) => router.push(route);

  return (
    <div className="px-[252px] pb-[120px] max-mij:px-[144px]  max-md:px-[73px] max-sm:px-[16px] flex flex-col gap-[64px]">
      <div>
        <h1 className="text-[50px] max-mij:text-[44px]  max-md:text-[36px] max-sm:text-[24px] font-railway">Новая коллекция</h1>
      </div>
      <div className="flex justify-between gap-4 max-smImage:justify-center">
        <div key={dataNewCollection[0].id} className="max-m:hidden">
          <div className="flex flex-col items-start">
            <div className="relative w-[350px] max-xl:w-[260px] h-[480px]">
              <Image src={dataNewCollection[0].img} fill alt="sliderImage" objectFit="cover" />
            </div>
            <span className="text-customBlack max-md:text-sm font-railway">{dataNewCollection[0].description}</span>
            <span className="text-customGreen font-railway">{dataNewCollection[0].price}</span>
          </div>
        </div>
        <div className=" flex flex-col items-start w-[480px] max-xl:w-[440px] max-m:w-[450px] max-md:w-[300px] max-smImage:w-[500px] max-sm:w-[350px] max-msm:w-[280px] ">
          <div className="relative w-full max-xl:w-[440px] max-m:w-[360px] h-[640px] max-md:w-[300px] max-md:h-[500px] max-smImage:w-[500px] max-sm:w-[350px] max-msm:w-[280px]">
            <Image src="/images/sliderImg3.png" fill alt="sliderImage" objectFit="cover" />
          </div>
          <span className="mb-[8px] font-railway">Мягкая облачная рубашка</span>
          <p className="text-sm max-m:text-[12px] font-railway">
            В нашем магазине ты найдешь широкий выбор качественной и модной одежды, которая подчеркнет твою индивидуальность и
            поможет выразить себя.
          </p>
        </div>
        <div key={dataNewCollection[1].id}>
          <div className="flex flex-col items-start max-smImage:hidden">
            <div className="relative w-[350px] max-xl:w-[260px] max-m:w-[240px] h-[480px] max-md:h-[350px] ">
              <Image src={dataNewCollection[1].img} fill alt="liderImage" objectFit="cover" />
            </div>
            <span className="text-customBlack max-md:text-sm font-railway">{dataNewCollection[1].description}</span>
            <span className="text-customGreen font-railway">{dataNewCollection[1].price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end max-sm:pr-[25px]">
        <CollectionButton onClick={() => push("/")} />
      </div>
    </div>
  );
}

export default NewCollection;
