import React, { ReactNode } from "react";
import Header from "./header/header";
interface LayoutProps {
  children: ReactNode;
}
function Layouts({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layouts;
