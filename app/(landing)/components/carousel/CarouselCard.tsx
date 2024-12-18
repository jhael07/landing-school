/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { CardButtonProps } from "./Card/types";
import Button from "./Card/Button";
import Title from "./Card/Title";
import Image from "next/image";

type CardCarouselProps = {
  isActive?: boolean;
  img: string;
  title: string;
  description: string;
  button: CardButtonProps;
};

const CardCarousel = forwardRef<HTMLDivElement, CardCarouselProps>((props, ref) => {
  const { description, img, title, isActive, button } = props;

  button.showButton ??= true;

  const containerStyle = ` h-80 w-full sm:w-96  flex-shrink-0 rounded-2xl overflow-hidden 
         relative group transition-all ${isActive ? "" : "brightness-[.6] sm:brightness-100"}`;

  const imageStyle =
    "w-full h-full object-cover group-hover:brightness-[.35] group-hover:blur-[1px] transition-all";

  const onHoverStyle = `opacity-0 group-hover:opacity-100 absolute h-full w-full top-40 duration-300
   transition-all group-hover:top-0 text-white p-4 px-5 flex flex-col justify-between gap-4 select-none`;

  return (
    <div className={containerStyle} ref={ref}>
      <Image alt="" fill src={img} quality={100} className={imageStyle} />
      <Title>{title.length > 47 ? title.substring(20) + "..." : title}</Title>

      <div className={onHoverStyle}>
        <p className="text-justify font-bold">{description}</p>
        {button.showButton ? <Button {...button} /> : null}
      </div>
    </div>
  );
});

export default CardCarousel;
