import React from "react";
import ImageSlider from "../ImageSlider";
import useImageSlider from "../../hooks/useImageSlider";
import { CarouselData } from "@/app/(landing)/types";

const Footer = () => {
  const {
    handleScrollTo: scrollInSliderOnDotClick,
    handleScrollOnArrowClick: handleScrollInSlider,
    currIndex: sliderIndex,
    sliderRef: asociationRef,
  } = useImageSlider();

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

  return (
    <footer className="z-50 lg:h-[40rem] w-full pt-24 px-2 sm:px-6  bg-[url('/wave-footer.svg')] bg-no-repeat bg-cover">
      <div className="grid lg:grid-cols-2 gap-14">
        <div className="text-white backdrop-blur-[1px] p-2 py-6 lg:px-6 rounded-lg  w-full">
          <h2 className="font-bold text-4xl">Informacion de Contacto</h2>
          <div className="mt-4 gap-4 grid">
            <p className=" w-fit  font-medium bg-black/40 p-2 px-4 rounded-lg backdrop-blur-sm">
              Politécnico Nuestra Señora del Carmen (PONSCA)
            </p>
            <div className="grid gap-2">
              <h3 className="text-sm">Telefono:</h3>
              <p className="backdrop-blur-md p-2 rounded-lg bg-black/40 w-fit px-4 font-medium">
                (809)-681-4129
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm">RNC:</h3>
              <p className="backdrop-blur-md p-2 rounded-lg bg-black/40 w-fit px-6 font-medium">
                4-30-06826-8
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm">Direccion:</h3>
              <p className="backdrop-blur-md p-2 rounded-lg bg-black/40 w-fit px-6 font-medium">
                Calle Jesús de Galíndez esq. Jerusalén, Bo. Simón Bolívar, D. N.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-6 ">
          <h2 className="font-bold text-4xl h-fit">Asociaciones</h2>
          <div className="h-80 rounded-xl overflow-hidden">
            <ImageSlider
              ref={asociationRef}
              currIndex={sliderIndex}
              data={carrouselImages}
              handleOnScroll={handleScrollInSlider}
              handleOnDotClick={scrollInSliderOnDotClick}
            />
          </div>
        </div>
      </div>
      <h4 className="mt-12 w-fit mx-auto text-white font-medium">@Ponsca All rights reserved</h4>
    </footer>
  );
};

export default Footer;
