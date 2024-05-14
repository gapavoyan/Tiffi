//there is a problem with data , pass this time , will fix when start working with API

import GenderWrapper from "@/components/gender-wrapper/gender-wrapper";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Api from "@/api";
import { Product } from "@/hooks/useCategoryInfo";
import { Gender } from "@/hooks/useHeaderInfo";
interface Props {
  data: Product[];
  title: string;
  isGenderEqualMen: string;
}
const GenderPage = ({ data, title, isGenderEqualMen }: Props) => {
  const push = useRouter().push;

  return (
    <>
      <Head>
        <title>TIFFI</title>
      </Head>
      <div className="px-[252px] max-xl:px-[144px] max-m:px-0 pt-[40px] flex flex-col gap-[40px] ">
        <div className="flex justify-center">
          <h1 className="text-lg max-xl:text-[44px] max-m:text-[36px] max-sm:text-[24px] font-railway">{title}</h1>
        </div>
        <div className="relative h-[600px]">
          <Image src={`/images/${isGenderEqualMen ? "man" : "woman"}Img.png`} fill alt="manImage" objectFit="cover" />
        </div>
      </div>
      <div className="flex flex-col my-[120px] gap-[120px] max-lg:gap-[80px]">
        {data.map((item, i) => (
          <div key={`product-by-id-${item.id}`}>
            {i == 2 ? (
              <div>
                <div className="relative h-[600px]">
                  <Image src="/images/gender.png" fill alt="gender-background" objectFit="cover" />
                </div>
                {item.data.length > 0 && (
                  <GenderWrapper
                    title={item.title}
                    data={item.data.map((product: Product) => ({ ...product }))}
                    onNavigate={() => push("/")}
                  />
                )}
              </div>
            ) : (
              <>
                {item.data.length > 0 && (
                  <GenderWrapper
                    title={item.title}
                    data={item.data.map((product: Product) => ({ ...product }))}
                    onNavigate={() => push("/")}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ query: { gender } }) => {
  const title = gender === "man" ? "для Мужчин" : "для Женщин";
  const isGenderEqualMen = gender === "man";
  const {
    data: { items: categories }
  } = await Api.gender.GetCategoriesByGender(gender as Gender);
  const promises = categories?.map(async item => {
    const { gender, title, id } = item;
    const response = await Api.gender.GetProductsByCategory(id);
    return { gender, title, parent_id: id, data: response.data.items };
  });

  const results = await Promise.all(promises);
  return {
    props: { data: results, title, isGenderEqualMen }
  };
};

export default GenderPage;
