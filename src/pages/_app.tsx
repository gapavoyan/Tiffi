import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "@/components/layout";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
