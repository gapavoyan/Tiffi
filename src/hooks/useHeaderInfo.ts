import { useEffect, useRef, useState } from "react";
import { useToggle } from "./use-toggle";
import { useMediaQuery } from "./use-media-query";
import useWindowResize from "./useWindowResize";
import { useRouter } from "next/router";
import Api from "@/api";

export type Gender = "man" | "woman";

export interface I_Brand {
  id: number;
  title: string;
  gender: Gender;
}

export interface Category {
  id: number;
  title: string;
  parent_id?: number | null;
  gender: Gender;
  img: null | string;
  subcategories: Category[];
  data?: Category[];
}

export interface ICacheRef {
  man: Category[] | null;
  woman: Category[] | null;
}

export function useHeaderInfo() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width : 1200px)");
  const [isDrawerMenuOpen, onToggleDrawer] = useToggle();
  const [loading, setLoading] = useState(false);
  const [activeGender, setActiveGender] = useState<Gender | null>(null);
  const [submenuData, setSubmenuData] = useState<Category[] | null>(null);
  const [brandsData, setBrandsData] = useState<I_Brand[]>([]);
  const cachedInfo = useRef<ICacheRef>({ man: null, woman: null });

  const onSubmenuOpen = async (gender: Gender) => {
    if (activeGender === gender) {
      document.body.style.overflow = "auto";
      setActiveGender(null);
      return;
    }
    document.body.style.overflow = "hidden";
    setActiveGender(gender);

    if (cachedInfo.current[gender]) {
      setSubmenuData(cachedInfo.current[gender]);
    } else {
      setLoading(true);
      const categoriesPromise = Api.gender.GetCategoriesByGender(gender);
      const brandsPromise = Api.gender.GetBrandsByGender(gender);
      const [categoriesResponse, brandsResponse] = await Promise.all([categoriesPromise, brandsPromise]);

      const { data: categoriesData } = categoriesResponse;
      const { data: brandsData } = brandsResponse;

      setBrandsData(brandsData?.items ?? []);
      setSubmenuData(categoriesData.items);
      cachedInfo.current[gender] = submenuData;
      setLoading(false);
    }
  };
  const onDrawerToggle = () => {
    const milliseconds = 0.1 * 1.5 * 1000;
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
  useEffect(() => {
    const handleRouteChange = () => {
      setActiveGender(null);
      document.body.style.overflow = "auto";
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

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
    onBrandsItemClick,
    brandsData
  };
}
