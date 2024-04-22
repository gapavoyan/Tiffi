import { Gender } from "@/hooks/useHeaderInfo";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  activeSubcategoryId?: number | null;
  onChangeSubcategory: (subcategory: number | null) => void;
  item?: number;
  parent_id?: number | null;
  gender: Gender;
}

function Button({ children, activeSubcategoryId, onChangeSubcategory, item, parent_id, gender }: Props) {
  const router = useRouter();
  const onSubCategoryItemClick = () => {
    onChangeSubcategory(item ?? null);
    router.push(`/category/${parent_id}/subcategories/${item ?? parent_id}?gender=${gender}`);
  };

  return (
    <div>
      <button
        className={`px-8 py-3 rounded-[8px] transition-all text-sm w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway ${
          activeSubcategoryId === item ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={onSubCategoryItemClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
