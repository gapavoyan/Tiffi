import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="flex gap-[64px] text-sm font-railway text-customBlack ">
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
