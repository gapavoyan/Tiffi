import React from "react";
import Link from "next/link";
import dataHeader from "@/dataBase/data-header";
import { Gender } from "@/hooks/useHeaderInfo";
import { useRouter } from "next/router";

interface Props {
  onSubmenuOpen: (gender: Gender) => void;
}

function Navbar({ onSubmenuOpen }: Props) {
  const router = useRouter();
  const isActive = (href: string | undefined) => {
    return router.pathname === href || router.query.gender === href ? "text-customGreen" : "customBlack";
  };

  return (
    <ul className="flex max-m:flex-col items-center overflow-auto ">
      {dataHeader.map(el => (
        <li
          onClick={() => {
            if (el.id === 2 || el.id === 3) {
              onSubmenuOpen(el.id === 3 ? "man" : "woman");
            }
          }}
          key={`title-navbar${el.id}`}
          className="text-sm font-lora px-10 py-6 max-lg:px-6 hover:text-customGreen"
        >
          {el.link ? (
            <Link href={el.link}>
              <span className={`cursor-pointer ${isActive(el.link)}`}>{el.title}</span>
            </Link>
          ) : (
            <span className={`cursor-pointer ${isActive(el.gender)}`}>{el.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
