import React from "react";
import Image from "next/image";
import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import { useRouter } from "next/router";
import { Category, Gender } from "@/hooks/useHeaderInfo";

interface Props {
  gender: Gender;
  categories: Category[];
  limitedProducts: Category[];
}

function GenderPages({ categories, gender, limitedProducts }: Props) {
  const productArrayTop = limitedProducts.slice(0, 2);
  const productArrayBottom = limitedProducts.slice(2);
  const push = useRouter().push;
  const isGenderEqualsMan = gender === "man";
  const categoriesArrayTop = categories.slice(0, 2);

  return (
    <>
      <div className="px-[252px] max-xl:px-[144px] max-m:px-0 pt-[40px] flex flex-col gap-[40px] ">
        <div className="flex justify-center">
          <h1 className="text-lg max-xl:text-[44px] max-m:text-[36px] max-sm:text-[24px] font-railway">
            {isGenderEqualsMan ? "для Мужчин" : "для Женщин"}
          </h1>
        </div>
        <div className="relative h-[600px]">
          <Image src={`/images/${isGenderEqualsMan ? "man" : "woman"}Img.png`} fill alt="manImage" objectFit="cover" />
        </div>
      </div>
      <div className="my-[120px]">
        {categoriesArrayTop.map(items => (
          <div key={items.id}>
            {productArrayTop.map(item => (
              <div key={item.id}>
                <GenderWrapper title={items.title} data={item.data.items} onNavigate={() => push("/")} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="relative h-[600px]">
        <Image src="/images/womanImg2.png" fill alt="gender-background" objectFit="cover" />
      </div>
      {productArrayBottom.map(item => (
        <div key={item.id}>
          <GenderWrapper title={categories[2].title} data={item.data.items} onNavigate={() => push("/")} />
        </div>
      ))}
    </>
  );
}

export default GenderPages;
