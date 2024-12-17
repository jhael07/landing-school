/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React, { ReactNode, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = ({
  children,
  scrollValue,
  totalElements,
  onScroll,
}: {
  children: ReactNode;
  scrollValue: number | number[];
  totalElements: number;
  onScroll?: (index: number, currScroll: number) => void;
}) => {
  const [index, setIndex] = useState(0);
  const [carouselRef, setCarouselRef] = useState<HTMLDivElement | null>(null);
  const [showArrow, setShowArrow] = useState({ right: true, left: false });
  const [arrowDisabled, setArrowDisabled] = useState(false);

  useEffect(() => {
    carouselRef?.addEventListener("scroll", () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef;

      if (scrollWidth === clientWidth) {
        setShowArrow({ right: false, left: false });
        return;
      }

      if (scrollLeft === 0) {
        setShowArrow((prev) => ({ ...prev, left: false }));
        return;
      }

      if (scrollLeft * 1.2 + clientWidth >= scrollWidth) {
        setShowArrow((prev) => ({ ...prev, right: false }));
        return;
      }

      setShowArrow({ right: true, left: true });
    });
  }, [carouselRef]);

  const handleScrollTo = (index: number) => {
    if (Array.isArray(scrollValue)) {
      carouselRef?.scrollTo({
        left: index * scrollValue[index],
        behavior: "smooth",
      });
      onScroll?.(index, index * scrollValue[index]);
      return;
    }
    carouselRef?.scrollTo({
      left: index * scrollValue,
      behavior: "smooth",
    });
    onScroll?.(index, index * scrollValue);
  };

  const handleScrollOnArrowClick = (type: "prev" | "next", maxLimit: number) => {
    try {
      setArrowDisabled(true);

      if (type === "next") {
        const isTheLastSlide = index + 1 === maxLimit;

        if (!isTheLastSlide && showArrow.right) {
          handleScrollTo(index + 1);
          setIndex((prev) => prev + 1);
          return;
        }

        setIndex(0);
        handleScrollTo(0);
        return;
      }

      if (!showArrow.left) return;

      const isTheFirstSlide = index - 1 > -1;

      if (isTheFirstSlide) {
        setIndex((prev) => prev - 1);
        handleScrollTo(index - 1);
      }
    } finally {
      setArrowDisabled(false);
    }
  };

  return (
    <div className="w-full sm:w-[90vw] relative mx-auto 5xl:max-w-[90rem] ">
      <div
        ref={(ref) => setCarouselRef(ref)}
        className="lg:gap-6 sm:px-4 flex overflow-hidden w-full sm:w-[90vw] 5xl:max-w-[90rem] rounded-xl"
      >
        {showArrow.left ? (
          <CarouselArrow
            direction="left"
            disabled={arrowDisabled}
            onClick={() => handleScrollOnArrowClick("prev", totalElements)}
          />
        ) : null}
        {children}
        {showArrow.right ? (
          <CarouselArrow
            direction="right"
            disabled={arrowDisabled}
            onClick={() => handleScrollOnArrowClick("next", totalElements)}
          />
        ) : null}
      </div>
    </div>
  );
};

export const CarouselArrow = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "right" | "left";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <div
      className={`absolute h-full items-center flex z-50 ${
        direction === "left" ? "-left-4" : "-right-4"
      }`}
    >
      <button disabled={disabled} onClick={onClick} className="border p-3 rounded-lg bg-white">
        {direction === "right" ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default Carousel;
