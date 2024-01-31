import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </div>
  );
}
