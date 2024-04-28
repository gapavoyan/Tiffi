import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactsAndInfo() {
  return (
    <div>
      <div className=" bg-white px-[252px] mt-[40px] max-mij:px-[200px]  max-lg:px-[142px] max-m:px-[100px] max-md:px-[70px] max-sm:px-[16px] flex flex-col  gap-10 max-sm:gap-6 max-sm:mt-6">
        <div className="flex flex-col  items-center">
          <h1 className="text-[50px] max-mij:text-[44px]  max-md:text-[36px] max-sm:text-[24px] font-lora">Контакты</h1>
          <div className="flex max-sm:flex-col gap-10 max-md:gap-6 w-full mt-10 mb-[120px] max-lg:mb-10 ">
            <div className="w-[50%] max-sm:w-full bg-red-50 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.015676987057!2d37.77323147501886!3d44.71929158283277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f1f93dc089b177%3A0xe0b865414696d70a!2sZdorov&#39;ye%20Natsii!5e0!3m2!1sen!2sam!4v1714318045596!5m2!1sen!2sam"
                loading="lazy"
                className="w-full h-[410px] max-lg:h-[320px]"
              ></iframe>
            </div>
            <div className="w-[50%] max-sm:w-full flex flex-col gap-10">
              <div>
                <p className="text-customGreen font-lora">Адрес</p>
                <p className="text-[24px] font-lora">Зубово Полянский район</p>
              </div>
              <div>
                <p className="text-customGreen font-lora">Телефонный номер</p>
                <p className="text-[24px] font-lora">+7(547)766992265</p>
              </div>
              <div>
                <p className="text-customGreen font-lora">Эл. адрес</p>
                <p className="text-[24px] font-lora">tiffi.2022@gmail.com</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-customGreen ">Мы в социальных сетях</p>
                <div className="flex gap-8 ">
                  <div className="px-3 py-3 border-black border-2 rounded-full cursor-pointer">
                    <Link href="https://www.instagram.com/tiffi_nvrsk/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="blank">
                      <Image src="/icons/instagram-black.svg" width={30} height={30} className="" alt="Instagram Icon" />
                    </Link>
                  </div>
                  <div>
                    <div className="px-3 py-3 border-black border-2 rounded-full cursor-pointer">
                      <Link href="https://www.facebook.com/italshoesnvr" target="blank">
                        <Image src="/icons/facebook-black.svg" width={30} height={30} className="" alt="Facebook Icon" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="px-3 py-3 border-black border-2 rounded-full cursor-pointer">
                      <Link href="https://t.me/tiffinvrsk" target="blank">
                        <Image src="/icons/send-black.svg" width={30} height={30} className="" alt="Telegram Icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsAndInfo;
