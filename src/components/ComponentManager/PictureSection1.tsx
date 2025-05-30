import React from "react";
import type { Masbstab } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";

const PictureSection1 = ({
  title,
  image,
  description,
  ctaButton,
}: Masbstab) => {
  // console.log(image);
  return (
    <section className="w-full lg:max-w-[1920px] mx-auto flex flex-col justify-center items-center pt-20 pb-0 lg:pt-32 select-none">
      <div className=" w-full flex flex-col justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center">
          {title && (
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-5">
              <ColoredText text={title} />
            </h1>
          )}
          {description && (
            <p className="w-full px-5 lg:px-16 md:w-[60%] font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte text-center mb-5 lg:mb-20">
              {description}
            </p>
          )}
        </div>
        <div
          style={{ backgroundImage: `url(${image?.url})` }}
          className="w-full h-[400px] md:h-full aspect-[144/60] md:min-h-[600px] md:max-h-[800px] md:bg-fixed bg-center bg-cover bg-no-repeat"
        ></div>
        {ctaButton && (
          <Link href={`${ctaButton?.link}`} className="pt-10">
            <button className="btn-primary w-[300px] btn-primary-hover-de">
              {ctaButton?.text}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PictureSection1;
