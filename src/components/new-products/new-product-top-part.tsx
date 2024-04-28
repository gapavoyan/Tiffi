import Image from "next/image";
import React from "react";

function NewProduct() {
  return (
    <div className=" bg-white px-[252px] mt-[40px] max-mij:px-[200px]  max-lg:px-[142px] max-m:px-[100px] max-md:px-[70px] max-sm:px-[16px] flex flex-col items-center gap-10 max-sm:gap-6 max-sm:mt-6">
      <h1 className="text-[50px] max-mij:text-[44px]  max-md:text-[36px] max-sm:text-[24px] font-lora">Новинки</h1>
      <div className="flex gap-10 max-lg:gap-5 max-md:gap-4 max-sm:flex-col">
        <div className="w-full ">
          <div className="w-full relative h-[700px] max-lg:h-[600px] max-m:h-[500px] max-md:h-[450px]">
            <Image src="/images/welcome-part.png" fill alt="Image-welcome-part" objectFit="cover" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-10">
          <div className="w-full  relative h-[550px] max-lg:h-[400px] max-m:h-[300px] max-md:h-[230px] max-sm:hidden">
            <Image src="/images/new-product.png" fill alt="Image-welcome-part" objectFit="cover" />
          </div>
          <h1 className="font-lora">
            Наша весенняя коллекция 2023 - это сочетание современных трендов и классических элементов, которые подходят для любого
            возраста и стиля. Оставайся на вершине моды и выбирай лучшее с нами!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
