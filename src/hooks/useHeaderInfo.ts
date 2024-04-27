import { useRef, useState } from "react";
import { useToggle } from "./use-toggle";
import datasubMenu from "@/dataBase/dataSubMenu";
import { useMediaQuery } from "./use-media-query";
import useWindowResize from "./useWindowResize";
import { useRouter } from "next/router";
export type Gender = "man" | "woman";

export interface Category {
  id: number;
  title: string;
  parent_id?: number | null;
  gender: Gender;
  img: null | string;
  subcategories: Category[];
}

export interface CacheRef {
  man: Category[] | null;
  woman: Category[] | null;
}
export function useHeaderInfo() {
  const isMobile = useMediaQuery("(max-width : 1200px)");
  const [isDrawerMenuOpen, onToggleDrawer] = useToggle();
  const [loading, setLoading] = useState(false);
  const [activeGender, setActiveGender] = useState<Gender | null>(null);
  const [submenuData, setSubmenuData] = useState<Category[] | null>(null);
  const cachedInfo = useRef<CacheRef>({ man: null, woman: null });
  const router = useRouter();

  const onSubmenuOpen = (gender: Gender) => {
    setActiveGender(activeGender === gender ? null : gender);
    if (cachedInfo.current[gender]) {
      setSubmenuData(cachedInfo.current[gender]);
    } else {
      setLoading(true);
      const submenuData = datasubMenu.filter(item => item.gender === gender);
      setSubmenuData(submenuData);
      cachedInfo.current[gender] = submenuData;
      setLoading(false);
    }
  };
  const onDrawerToggle = () => {
    const milliseconds = 0.1 * 1.5 * 1000;
    // document.body.style.overflow = !isDrawerMenuOpen ? "hidden" : "auto";
    if (activeGender) setActiveGender(null);
    setTimeout(() => {
      onToggleDrawer();
    }, milliseconds);
  };

  const onCloseMobileModal = () => {
    setActiveGender(null);
  };
  useWindowResize(() => {
    // close Drawer when change screen size
    if (isDrawerMenuOpen) {
      onToggleDrawer();
    }
    if (activeGender) {
      onCloseMobileModal();
    }
  });

  //routing to category page
  function onSubCategoryItemClick(id: number, parent_id: number | null, gender: Gender) {
    router.push(`/category/${parent_id}/subcategories/${id}?gender=${gender}`);
    if (isMobile) {
      onDrawerToggle(); // Close the drawer only if mobile
    }
    setActiveGender(null);
  }
  //routing to brandsItem page
  function onBrandsItemClick(id: number, gender: Gender) {
    router.push(`/products/brands/${id}?gender=${gender}`);
    if (isMobile) {
      onDrawerToggle(); // Close the drawer only if mobile
    }
    setActiveGender(null);
  }
  return {
    onSubmenuOpen,
    submenuData,
    loading,
    isOpen: !!activeGender,
    onDrawerToggle,
    isDrawerMenuOpen,
    isMobile,
    onCloseMobileModal,
    setActiveGender,
    onSubCategoryItemClick,
    onBrandsItemClick
  };
}
