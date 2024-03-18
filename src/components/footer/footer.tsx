import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="bg-customBlack px-[252px] max-m:px-[150px] max-md:px-[72px] max-sm:px-4 py-[40px]   flex flex-col gap-[40px]">
        <div className="flex justify-center items-center gap-[48px]">
          <div className="h-[1px] bg-white w-full"></div>
          <div>
            <Image src="/icon/logoWhite.svg" width={300} height={60} alt="logoTiffi" />
          </div>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
        <div className="flex justify-between max-sm:flex-col gap-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-white">Телефонный Номер</p>
              <p className="text-white">+7(547)766992265</p>
            </div>
            <div className="flex-col gap-2">
              <p className="text-white">Адрес</p>
              <p className="text-white">Зубово-Полянский район</p>
            </div>
          </div>
          <div className="flex gap-[64px] max-m:hidden">
            <div>
              <ul className="text-white">
                <li>Главная</li>
                <li>для Женщин</li>
                <li>для Мужчин</li>
              </ul>
            </div>
            <div>
              <ul className="text-white">
                <li>Новинки</li>
                <li>Скидки</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white ">Мы в социальных сетях</p>
            <div className="flex gap-8">
              <div className="px-3 py-3 border-white border-2 rounded-full">
                <Image src="/icon/instagram.svg" width={30} height={30} className="" alt="Instagram Icon" />
              </div>
              <div>
                <div className="px-3 py-3 border-white border-2 rounded-full">
                  <Image src="/icon/facebook.svg" width={30} height={30} className="" alt="Instagram Icon" />
                </div>
              </div>
              <div>
                <div className="px-3 py-3 border-white border-2 rounded-full">
                  <Image src="/icon/send.svg" width={30} height={30} className="" alt="Instagram Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
