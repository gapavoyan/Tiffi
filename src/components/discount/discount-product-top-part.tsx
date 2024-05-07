import Image from "next/image";
import React from "react";

function DiscountProductsPart() {
  return (
    <div className=" bg-white px-[252px] mt-[40px] max-mij:px-[200px]  max-lg:px-[142px] max-m:px-[100px] max-md:px-[70px] max-sm:px-[16px] flex flex-col  gap-10 max-sm:gap-6 max-sm:mt-6">
      <div className="flex flex-col gap-6  items-center">
        <h1 className="text-[50px] max-mij:text-[44px]  max-md:text-[36px] max-sm:text-[24px] font-lora">Скидки</h1>
        <div className="flex gap-4 w-full max-sm:flex-col">
          <div className="w-[50%] max-sm:w-full">
            <div className="w-full relative h-[400px] max-sm:h-[200px] ">
              <Image src="/images/discount.png" fill alt="Image-welcome-part" objectFit="cover" />
            </div>
          </div>
          <div className="w-[50%] max-sm:w-full flex flex-col gap-10">
            <div className="w-full  relative h-[400px] max-sm:h-[200px] ">
              <Image src="/images/discount2.png" fill alt="Image-welcome-part" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-[auto,1fr] max-sm:grid-cols-1">
        <div className=" px-6 py-4 max-lg:py-2     bg-black flex justify-center items-center">
          <p className="text-white h-max  text-[50px] max-lg:text-[36px]">10-60%</p>
        </div>
        <div className="px-10 py-6  max-sm:px-0">
          <p className=" text-sm">
            Наша весенняя коллекция 2023 - это сочетание современных трендов и классических элементов, которые подходят для любого
            возраста и стиля. Оставайся на вершине моды и выбирай лучшее с нами!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscountProductsPart;
