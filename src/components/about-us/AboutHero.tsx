import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/about-us-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
        />
      </div>
      <div className="my-5 sm:my-8 md:my-10 lg:my-16 w-full flex justify-center items-center gap-5 lg:gap-10">
        <h1 className="text-[20px] leading-[20px] font-normal font-ogg sm:text-[30px] sm:leading-[30px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px]">
          Unabhängig.{" "}
        </h1>
        <h1 className="text-[20px] leading-[20px] font-normal font-ogg sm:text-[30px] sm:leading-[30px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px]">
          Transparent.{" "}
        </h1>
        <h1 className="text-[20px] leading-[20px] font-normal font-ogg sm:text-[30px] sm:leading-[30px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px]">
          Relevant.
        </h1>
      </div>
    </>
  );
};

export default AboutHero;
