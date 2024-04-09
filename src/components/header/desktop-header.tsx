import Image from "next/image";
import AccordionContent from "../drawer/accordion";
import Slider from "../slider/slider";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import { Dispatch, SetStateAction, useState } from "react";
import datasubMenu from "../dataBase/dataSubMenu";
import { dataBrands } from "../dataBase/dataBrands";
import { useRouter } from "next/navigation";

interface Props {
  submenuData: Category[] | null;
  isOpen: boolean;
  setActiveGender: Dispatch<SetStateAction<Gender | null>>;
}
export default function DesktopHeader({ isOpen, submenuData, setActiveGender }: Props) {
  const router = useRouter();

  const [activeArrow, setActiveArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<Category[]>([]);
  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [brandGender, setBrandGender] = useState<Gender | null>(submenuData ? submenuData[0].gender : null);

  const onMouseEnter = (id: number, gender: Gender) => {
    setActiveArrow(id);
    setSelectedId(id);
    const hoveredEl = submenuData?.find(el => el.id === id);
    if (hoveredEl) {
      const hoveredSubcategoriesData = datasubMenu.find(item => item.id === hoveredEl.id)?.subcategories || [];
      setHoveredSubcategories(hoveredSubcategoriesData);
    }
    setShowBrands(false);
    setBrandGender(gender);
  };

  const onBrandsMouseEnter = () => {
    setShowBrands(true);
  };
  function onSubCategoryItemClick(id: number, parent_id: number | null, gender: Gender) {
    router.push(`/category?/${parent_id}/subcategories/${id}?gender=${gender}`);
    setActiveGender(null);
  }

  return (
    <div className="px-[252px] mt-[20px]">
      <div className="w-full">
        <AccordionContent isOpen={isOpen}>
          <div className="flex gap-8">
            <div>
              {submenuData?.map(el => (
                <div
                  key={`desktop-header${el.id}`}
                  className="flex gap-8 w-full"
                  onMouseEnter={() => onMouseEnter(el.id, el.gender)}
                >
                  <div className="w-full">
                    <div className={`flex justify-between my-2 border-b py-4 w-[20vw] border-customBlack`}>
                      <p className="font-railway">{el.title}</p>
                      <Image
                        src="/icon/Vector.svg"
                        width={10}
                        height={10}
                        alt="arrow.img"
                        className={activeArrow === el.id && !showBrands ? "" : "hidden"}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="flex justify-between my-2 border-b border-customBlack py-4 w-[20vw]"
                onMouseEnter={onBrandsMouseEnter}
              >
                <p className="font-railway">Бренды</p>

                <Image src="/icon/Vector.svg" width={10} height={10} alt="arrow-image" className={showBrands ? "" : "hidden"} />
              </div>
            </div>

            <div className={`w-full overflow-hidden ${selectedId !== null && !showBrands ? "flex" : "hidden"}`}>
              <Slider hoveredSubcategories={hoveredSubcategories} onSubCategoryItemClick={onSubCategoryItemClick} />
            </div>
            <div className={`w-full flex-wrap content-start gap-4 overflow-hidden ${showBrands ? "flex" : "hidden"}`}>
              {showBrands &&
                dataBrands
                  .filter(brand => brand.gender === brandGender)
                  .map(brand => (
                    <button
                      className="px-8 py-3 w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway"
                      key={`brands-header${brand.id}`}
                    >
                      {brand.title}
                    </button>
                  ))}
            </div>
          </div>
        </AccordionContent>
      </div>
    </div>
  );
}
