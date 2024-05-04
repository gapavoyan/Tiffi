import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ErrorPage() {
  return (
    <>
      <Head>
        <link href="/icons/favicon.svg" rel="icon" />
        <title>TIFFI</title>
      </Head>
      <div className="flex flex-col gap-10 justify-center items-center my-[120px]">
        <div>
          <Image src="/images/error-img.svg" width={400} height={400} alt="error-img" />
        </div>
        <h1 className="text-6">Страница не найдена</h1>
        <div>
          <button className="bg-black flex justify-center items-center gap-3 px-10 py-4 ">
            <Link href="/" className="text-white font-lora">
              Главная
            </Link>
            <Image src="/icons/errorpage-arrow.svg" width={12} height={7} alt="error-page-arrow" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
