"use client";

import React from "react";
import Navbar from "./(landing)/shared/components/navbar/Navbar";
import useNavbar from "./(landing)/shared/hooks/useNavbar";
import { BiSolidErrorAlt } from "react-icons/bi";

const NotFound = () => {
  const { logoImg, navbarOptions } = useNavbar();
  return (
    <div>
      <header>
        <Navbar options={navbarOptions} logo={logoImg} />
      </header>

      <main className="w-full ">
        <div className="h-[100vh] w-full bg-[url('/graduate.svg')] bg-no-repeat bg-cover flex items-center">
          <div className="rounded-xl shadow-xl w-5/12 p-10  py-16 mx-auto flex border flex-col gap-4 justify-center items-center bg-white border-gray-300">
            <BiSolidErrorAlt className="text-[10rem] mx-auto flex text-red-600" />
            <p className="text-4xl font-semibold ">404 Page Not Found</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
