import React, { ReactNode } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
interface LayoutProps {
  children: ReactNode;
}
function Layouts({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
