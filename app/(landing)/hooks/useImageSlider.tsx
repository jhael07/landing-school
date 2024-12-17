import { useRef, useState } from "react";

const useImageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (index: number) => {
    sliderRef?.current?.scrollTo({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    });

    setCurrIndex(index);
  };

  const handleScrollOnArrowClick = (type: "prev" | "next", maxLimit: number) => {
    if (type === "next") {
      const isTheLastSlide = currIndex + 1 === maxLimit;

      if (!isTheLastSlide) {
        setCurrIndex((prev) => prev + 1);
        handleScrollTo(currIndex + 1);
        return;
      } else {
        setCurrIndex(0);
        handleScrollTo(0);
        return;
      }
    }

    const isTheFirstSlide = currIndex - 1 > -1;

    if (isTheFirstSlide) {
      setCurrIndex((prev) => prev - 1);
      handleScrollTo(currIndex - 1);
    } else {
      setCurrIndex(maxLimit - 1);
      handleScrollTo(maxLimit - 1);
    }
  };

  return {
    handleScrollOnArrowClick,
    setCurrIndex,
    currIndex,
    sliderRef,
    handleScrollTo,
  };
};

export default useImageSlider;
