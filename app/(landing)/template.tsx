"use client";

/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import Navbar from "./shared/components/navbar/Navbar";
import useNavbar from "./shared/hooks/useNavbar";
import Footer from "./shared/components/footer/Footer";

const template = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { navbarOptions, logoImg } = useNavbar();

  return (
    <div>
      <header>
        <Navbar options={navbarOptions} logo={logoImg} />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default template;
