"use client";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <div className="h-[90vh] w-full bg-[url('/graduate.svg')] bg-no-repeat bg-cover flex items-center">
        <div className="rounded-xl shadow-xl w-fit p-10  py-16 mx-auto flex border flex-col gap-4 justify-center items-center bg-white border-gray-300">
          <BiSolidErrorAlt className="text-[10rem] mx-auto flex text-red-600" />
          <p className="text-xl font-semibold ">{error.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
