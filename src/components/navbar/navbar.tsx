import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="flex max-md:flex-col max-md:items-center max-md:gap-[64px] gap-[64px] max-lg:gap-[32px] text-sm font-railway text-customBlack px-10 py-6">
        <li>
          {" "}
          <Link href="/" className="hover:text-customGreen">
            Главная
          </Link>
        </li>
        <li>
          {" "}
          <Link href="" className="hover:text-customGreen">
            для Женщин
          </Link>
        </li>
        <li>
          {" "}
          <Link href="" className="hover:text-customGreen">
            для Мужчин
          </Link>
        </li>
        <li>
          {" "}
          <Link href="" className="hover:text-customGreen">
            Новинки
          </Link>
        </li>
        <li>
          {" "}
          <Link href="" className="hover:text-customGreen">
            Скидки
          </Link>
        </li>
        <li>
          {" "}
          <Link href="" className="hover:text-customGreen">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
