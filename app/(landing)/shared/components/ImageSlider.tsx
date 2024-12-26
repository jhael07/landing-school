/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CarouselData } from "../types";
import { forwardRef, ReactNode } from "react";
import Image from "next/image";

type ImageSliderProps = {
  data: CarouselData[];
  currIndex: number;
  handleOnScroll: (position: "prev" | "next", maxLimit: number) => void;
  handleOnDotClick?: (index: number) => void;
};

const ImageSlider = forwardRef<HTMLDivElement, ImageSliderProps>(
  ({ data, currIndex, handleOnScroll, handleOnDotClick }, ref) => {
    const dotColor = (index: number) => (currIndex === index ? "bg-primary-500" : "bg-black/40");

    return (
      <Slider ref={ref}>
        {data.map(({ content, img }, i) => (
          <SliderContent content={content} img={img} key={i} />
        ))}

        <div className="flex mx-auto absolute w-fit bottom-8 left-0 right-0 gap-x-2 z-40">
          {data.map((_: any, index: number) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-[100%] ${dotColor(index)}`}
              onClick={() => handleOnDotClick?.(index)}
            ></button>
          ))}
        </div>

        <SliderArrowDirections handleOnScroll={handleOnScroll} maxLimit={data.length} />
      </Slider>
    );
  }
);

export default ImageSlider;

const Slider = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <div className="relative w-full h-full">
      <div ref={ref} className="h-full  bg-black overflow-hidden flex w-full  ">
        {children}
      </div>
    </div>
  );
});

const SliderContent = ({ content, img }: CarouselData) => {
  return (
    <div className="flex-shrink-0 w-full flex items-center justify-center object-cover relative h-full">
      <div className="absolute left-0 right-0 w-[60vw] top-0 z-10 mx-auto h-full">{content}</div>
      <Image
        alt="image-slider"
        src={img}
        fill
        quality={100}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const SliderArrowDirections = ({
  handleOnScroll,
  maxLimit,
}: Pick<ImageSliderProps, "handleOnScroll"> & { maxLimit: number }) => {
  return (
    <div className="absolute w-full flex justify-between top-0 bottom-0 items-center ">
      <button
        className="bg-black/20 p-3 rounded-lg backdrop-blur-md ml-4 z-40 hover:bg-primary-600/40 transition-all"
        onClick={() => handleOnScroll("prev", maxLimit)}
      >
        <FaAngleLeft className="text-white text-3xl" />
      </button>
      <button
        className="bg-black/20 p-3 rounded-lg backdrop-blur-md mr-4 z-40 hover:bg-primary-600/40 transition-all"
        onClick={() => handleOnScroll("next", maxLimit)}
      >
        <FaAngleRight className="text-white text-3xl" />
      </button>
    </div>
  );
};
