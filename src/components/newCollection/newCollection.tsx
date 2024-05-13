import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CollectionButton from "../buttons/collectionButton";
import { Url } from "next/dist/shared/lib/router/router";
import { Product } from "@/hooks/useCategoryInfo";
interface Props {
  newCollection: Product[];
}
function NewCollection({ newCollection }: Props) {
  const router = useRouter();
  const push = (route: Url) => router.push(route);

  return (
    <div className="px-[252px] pb-[120px] max-mij:px-[144px]  max-md:px-[73px] max-sm:px-[16px] flex flex-col gap-[64px]">
      <div>
        <h1 className="text-[50px] max-mij:text-[44px]  max-md:text-[36px] max-sm:text-[24px] font-railway">Новая коллекция</h1>
      </div>
      <div className="flex justify-between gap-4 max-smImage:justify-center">
        <div key={newCollection[0].id} className="max-m:hidden">
          <div className="flex flex-col items-start">
            <div className="relative w-[23vw] max-xl:w-[20vw] h-[600px] max-xl:h-[500px]">
              <Image
                src={`https://api.tiffi.store/${newCollection[0].img}`}
                fill
                alt="sliderImage"
                className="w-full"
                objectFit="cover"
              />
            </div>
            <span className="text-customBlack max-md:text-sm font-railway">{newCollection[0].title}</span>
            <span className="text-customGreen font-railway">{newCollection[0].price}</span>
          </div>
        </div>
        <div className=" flex flex-col items-start w-[800px] max-xl:h-[700px]  max-xl:w-[440px] max-m:w-[450px] max-md:w-[300px] max-sm:w-[350px] ">
          <div className="relative w-full max-xl:w-[440px] max-m:w-[360px] h-[700px] max-md:w-[300px] max-md:h-[500px]  max-sm:w-[80vw] ">
            <Image src="/images/sliderImg3.png" fill alt="sliderImage" objectFit="cover" />
          </div>
          <span className="mb-[8px] font-railway">Мягкая облачная рубашка</span>
          <p className="text-sm max-m:text-[12px] font-railway">
            В нашем магазине ты найдешь широкий выбор качественной и модной одежды, которая подчеркнет твою индивидуальность и
            поможет выразить себя.
          </p>
        </div>
        <div key={newCollection[1].id}>
          <div className="flex flex-col items-start max-sm:hidden">
            <div className="relative w-[23vw] max-xl:w-[20vw] max-m:w-[35vw] h-[600px] max-xl:h-[500px] max-md:h-[350px] ">
              <Image src={`https://api.tiffi.store/${newCollection[1].img}`} fill alt="liderImage" objectFit="cover" />
            </div>
            <span className="text-customBlack max-md:text-sm font-railway">{newCollection[1].title}</span>
            <span className="text-customGreen font-railway">{newCollection[1].price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end max-sm:pr-[25px]">
        <CollectionButton onClick={() => push("/new-products")} />
      </div>
    </div>
  );
}

export default NewCollection;
