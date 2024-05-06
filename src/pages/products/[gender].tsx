//there is a problem with data , pass this time , will fix when start working with API
import { dataCategories } from "@/dataBase/data-categories";
import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Head from "next/head";
const GenderPage = () => {
  const push = useRouter().push;
  const gender = useParams()?.gender;
  const isGenderEqualsMan = gender === "man";
  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>
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
      <div className="flex flex-col my-[120px] gap-[120px] max-lg:gap-[80px]">
        {dataCategories.map((item, i) => (
          <div key={`product-by-id-${item.id}`}>
            {i == 2 ? (
              <div>
                <div className="relative h-[600px]">
                  <Image src="/images/gender.png" fill alt="gender-background" objectFit="cover" />
                </div>
                <GenderWrapper
                  title={item.title}
                  data={item.products.map(product => ({ ...product }))}
                  onNavigate={() => push("/")}
                />
              </div>
            ) : (
              <GenderWrapper
                title={item.title}
                data={item.products.map(product => ({ ...product }))}
                onNavigate={() => push("/")}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default GenderPage;
