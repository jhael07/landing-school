/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TechniquesSection, { Technique } from "./components/TechniquesSection";
import { FaComputer, FaHotel, FaSackDollar, FaTruck } from "react-icons/fa6";
import AdmissionsSection from "./components/AdmissionsSection";
import GraduatesSlider from "./components/GraduatesSlider";
import useImageSlider from "./hooks/useImageSlider";
import ImageSlider from "./components/ImageSlider";
import NewsSlider from "./components/NewsSlider";
import { MdElectricBolt } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { CarouselData } from "./types";

export default function Home() {
  const { handleScrollOnArrowClick, currIndex, sliderRef, handleScrollTo } = useImageSlider();

  const carrouselImages: CarouselData[] = [
    {
      content: (
        <h1 className=" text-center mx-auto mt-[20vh] text-7xl font-bold z-10  rounded-xl drop-shadow-2xl text-white font-stroke-[0.5px]">
          Bievenido al año Escolar 2025
        </h1>
      ),
      img: "/slider.jpg",
    },
    {
      img: "/slider-2.jpg",
    },
    {
      img: "/slider-3.jpg",
    },
  ];

  const techniques: Technique[] = [
    {
      name: "Hoteleria y Turismo",
      icon: <FaHotel className="techniques-hover-effect text-7xl" />,
      bg: "bg-red-500",
      textColor: "text-white",
    },
    {
      name: "Enfermeria",
      icon: <FaHospital className="techniques-hover-effect text-7xl mt-[1.4rem]" />,
      bg: "bg-pink-400",
      textColor: "text-white",
    },
    {
      name: "Informatica",
      icon: <FaComputer className="techniques-hover-effect text-7xl mt-[2.4rem]" />,
      bg: "bg-gray-900",
      textColor: "text-white",
    },
    {
      name: "Logistica",
      icon: <FaTruck className="techniques-hover-effect text-7xl mt-[2.4rem]" />,
      bg: "bg-purple-500",
      textColor: "text-white",
    },
    {
      name: "Electricidad",
      icon: <MdElectricBolt className="techniques-hover-effect text-7xl mt-9" />,
      bg: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "Contabilidad",
      icon: <FaSackDollar className="techniques-hover-effect text-6xl mt-9" />,
      bg: "bg-pink-600",
      textColor: "text-white",
    },
    {
      name: "Comercio y Mercadeo",
      icon: <IoIosCart className="techniques-hover-effect text-7xl mt-5" />,
      bg: "bg-orange-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <title>Ponsca</title>

      <div className="h-96 lg:h-[85dvh] ">
        <ImageSlider
          ref={sliderRef}
          currIndex={currIndex}
          data={carrouselImages}
          handleOnScroll={handleScrollOnArrowClick}
          handleOnDotClick={handleScrollTo}
        />
      </div>
      <div className="mt-20 sm:mt-28"></div>
      <AdmissionsSection />
      <TechniquesSection techniques={techniques} />
      <div className="pb-20 pt-20 w-full bg-[url('/graduate.svg')] bg-no-repeat bg-cover">
        <GraduatesSlider />
        <NewsSlider />
      </div>
    </div>
  );
}
