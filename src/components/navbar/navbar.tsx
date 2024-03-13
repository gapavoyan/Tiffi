// navbar.js
import React from "react";
import Link from "next/link";
import dataHeader from "../dataBase/dataHeader";
import { Gender } from "@/hooks/useHeaderInfo";

interface Props {
  onSubmenuOpen: (gender: Gender) => void;
}

function Navbar({ onSubmenuOpen }: Props) {
  return (
    <ul className="flex max-m:flex-col items-center">
      {dataHeader.map(el => (
        <li
          onClick={() => {
            if (el.id === 2 || el.id === 3) {
              onSubmenuOpen(el.id === 3 ? "man" : "woman");
            }
          }}
          key={`title-${el.id}`}
          className="text-sm font-railway text-customBlack px-10 py-6 max-lg:px-6 hover:text-customGreen"
        >
          <Link href={el.link}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
