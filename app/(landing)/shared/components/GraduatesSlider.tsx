"use client";

import { useCallback, useState } from "react";
import Carousel from "./carousel/Carousel";
import CardCarousel from "./carousel/CarouselCard";

const GraduatesSlider = () => {
  const [graduatesScrollWidthGroup, setGraduatesScrollWidthGroup] = useState<
    (HTMLDivElement | null)[]
  >([]);

  const [graduatesSliderIndex, setGraduateSliderIndex] = useState(0);

  const refCallback = useCallback(
    (ref: HTMLDivElement | null) => {
      if (ref) {
        setGraduatesScrollWidthGroup((prev) => [...prev, ref]);
      }
    },
    [setGraduatesScrollWidthGroup]
  );

  const carouselImages: { img: string; title: string; description: string }[] = [
    {
      img: "https://www.uwinnipeg.ca/accepted-students/images/whats-university-like-accepted-students.jpg",
      title: "Life as a University Student: An In-Depth Overview",
      description: "An overview of university life for new students.",
    },
    {
      img: "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
      title: "The Student Journey: Daily Life and Challenges",
      description: "Insights into the daily life of students.",
    },
    {
      img: "https://studyportals.com/app/uploads/2024/11/shutterstock_2484576879-640x560.jpg",
      title: "Exploring Opportunities for Studying Abroad",
      description: "Opportunities and experiences for students studying internationally.",
    },
    {
      img: "https://stradaeducation.org/wp-content/uploads/2018/01/crisis-scaled-1.jpeg",
      title: "Managing Educational Crises Effectively",
      description: "How educational institutions manage crises.",
    },
    {
      img: "https://stradaeducation.org/wp-content/uploads/2018/01/crisis-scaled-1.jpeg",
      title: "Repeated Image",
      description: "This image appears twice for illustration purposes.",
    },
  ];

  return (
    <div className="w-11/12  mx-auto grid gap-16">
      <h2 className="ml-4 lg:ml-0 text-5xl lg:text-7xl text-white font-bold 5xl:mx-auto drop-shadow-md">
        Nuestros Egresados
      </h2>

      <Carousel
        scrollValue={graduatesScrollWidthGroup.map((item) => item?.offsetWidth ?? 0)}
        totalElements={graduatesScrollWidthGroup.length}
        onScroll={(index) => {
          setGraduateSliderIndex(index);
        }}
      >
        {carouselImages.map((props, i) => (
          <CardCarousel
            ref={refCallback}
            key={i}
            button={{ title: "Ver mas" }}
            isActive={graduatesSliderIndex === i}
            {...props}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default GraduatesSlider;
