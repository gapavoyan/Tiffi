import React from "react";
import Image from "next/image";
import CollectionButton from "../buttons/collectionButton";
import { useRouter } from "next/router";
function WelcomePart() {
  const push = useRouter().push;
  return (
    <div className=" bg-white pl-[252px] mt-[40px]  max-mij:pl-[144px] max-md:pl-[73px] max-sm:pl-[16px] flex max-md:flex-col">
      <div className="w-[50%] max-md:w-full h-full">
        <div className=" flex flex-col gap-8 py-[160px] max-mij:py-[90px] max-md:py-8 pr-[144px] max-mij:pr-[20px]">
          <h1 className="text-[80px] leading-[96px]  font-lora max-lg:text-[60px] max-sm:text-[32px] max-lg:leading-[60px] max-sm:leading-8">
            Весна 2023 коллекция
          </h1>
          <p className="leading-[22px] max-xl:text-[15px] font-lora max-sm:text-[14px]">
            Наша весенняя коллекция 2023 - это сочетание современных трендов и классических элементов, которые подходят для любого
            возраста и стиля. Оставайся на вершине моды и выбирай лучшее с нами!
          </p>
          <CollectionButton onClick={() => push("/")} />
        </div>
      </div>
      <div className="w-[50%] max-md:w-full relative max-md:h-[400px]">
        <Image src="/images/welcome-part.png" fill alt="Image-welcome-part" objectFit="cover" />
      </div>
    </div>
  );
}

export default WelcomePart;
