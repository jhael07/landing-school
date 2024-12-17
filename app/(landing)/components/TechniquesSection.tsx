import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export type Technique = {
  name: string;
  icon: ReactNode;
  bg: string;
  textColor: string;
};

const TechniquesSection = ({ techniques }: { techniques: Technique[] }) => {
  const [optionHover, setOptionHover] = useState("");
  return (
    <section className="py-28 pb-60 bg-[url('/wave-haikei.svg')] p-4 bg-no-repeat bg-cover transition-all">
      <h1 className="mx-auto w-fit text-6xl font-bold text-white text-center  ">
        Tecnicas impartidas
      </h1>

      <div
        className="grid grid-cols-2  xl:flex xl:h-60 mx-auto place-items-center max-w-full xl:w-fit
       mt-20 rounded-2xl overflow-hidden transition-all"
      >
        {techniques.map(({ bg, icon, name, textColor }) => (
          <button
            key={name}
            onMouseEnter={() => {
              setOptionHover(name);
            }}
            onMouseLeave={() => {
              setOptionHover("");
            }}
            className={twMerge(
              ` flex flex-col justify-evenly gap-4 p-8 transition-all duration-700 relative
              items-center group select-none h-full  last:col-span-2 `,
              `${bg} ${textColor} ${
                optionHover === name ? " w-full xl:w-96 flex-shrink-0" : " w-full xl:w-56"
              }`
            )}
          >
            <h2 className="text-base font-bold">{name}</h2>
            {icon}

            <p className=" bottom-14 absolute opacity-0 group-hover:opacity-100 group-hover:bottom-1 transition-all duration-700">
              Haz click para ver mas
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TechniquesSection;
