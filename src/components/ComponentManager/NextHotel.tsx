import React from "react";
import type { BusinessLeisure } from "@/lib";
import Link from "next/link";

const NextHotel = ({ title, image, ctaButtons }: BusinessLeisure) => {
  return (
    <section
      style={{ backgroundImage: `url(${image?.url})` }}
      className="w-full h-[500px] md:h-[900px] lg:max-w-[1920px] mx-auto bg-cover bg-no-repeat bg-center mb-7 flex justify-center items-center select-none"
    >
      <div className="w-full h-full flex flex-col justify-center items-center px-5 text-white gap-5">
        {title && (
          <h1 className="text-[35px] leading-[25px] font-normal font-ogg sm:text-[45px] sm:leading-[30px] md:text-[55px] md:leading-[45px] lg:text-[70px] lg:leading-[55px] xl:text-[84px] xl:leading-[64px] mb-5 md:mb-10">
            {title}
          </h1>
        )}
        {ctaButtons && (
          <div className="flex flex-col justify-center items-center lg:flex-row gap-5">
            {ctaButtons?.map((button, index) => {
              return (
                <Link href={`${button.link}`} key={index}>
                  <button className="btn-secondary w-[310px] text-white border-white btn-secondary-hover-de">
                    {button.text}
                  </button>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default NextHotel;
