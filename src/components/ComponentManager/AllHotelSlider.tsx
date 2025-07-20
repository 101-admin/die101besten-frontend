"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import type { AllHotelsSlider } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";

const AllHotelSlider = ({ allHotelsSection }: AllHotelsSlider) => {
  return (
    <Swiper
      effect="fade"
      modules={[EffectFade, Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop
      className="w-full lg:max-w-[1920px] h-[500px] md:h-[900px] mb-5"
    >
      {allHotelsSection.imageGallery?.images?.map((image, index) => {
        return (
          <SwiperSlide key={index} className="w-full h-full">
            {image?.link && (
              <Link href={`${image?.link}`}>
                <section
                  style={{ backgroundImage: `url(${image?.url})` }}
                  className="w-full h-full bg-cover bg-no-repeat bg-center pt-36 mb-5"
                >
                  <div className="container px-5 md:px-10 lg:px-14 xl:px-20">
                    {image?.caption && (
                      <div className="px-5 py-4 md:pl-10 md:py-7 lg:pl-14 lg:py-10 bg-[#FFFFFF66] backdrop-blur-md max-w-[800px] w-full">
                        <h1
                          className={`text-[30px] leading-[30px] font-normal font-ogg sm:text-[38px] sm:leading-[38px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px] mb-5 md:mb-14 w-full lg:w-[90%] ${
                            image?.textColor == "black"
                              ? "text-black"
                              : "text-white"
                          }`}
                        >
                          <ColoredText text={image?.caption} />
                        </h1>
                        <button
                          className={`btn-secondary btn-secondary-hover-de ${
                            image?.textColor == "white"
                              ? "text-white border-white"
                              : "text-black border-black"
                          }`}
                        >
                          {image?.linkText}
                        </button>
                      </div>
                    )}
                  </div>
                </section>
              </Link>
            )}
            {image?.link !== "" && (
              <section
                style={{ backgroundImage: `url(${image?.url})` }}
                className="w-full h-full bg-cover bg-no-repeat bg-center pt-36 mb-5"
              >
                <div className="container px-5 md:px-10 lg:px-14 xl:px-20">
                  {image?.caption && (
                    <div className="px-5 py-4 md:pl-10 md:py-7 lg:pl-14 lg:py-10 bg-[#FFFFFF66] backdrop-blur-md max-w-[800px] w-full">
                      <h1
                        className={`text-[30px] leading-[30px] font-normal font-ogg sm:text-[38px] sm:leading-[38px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px] mb-5 md:mb-14 w-full lg:w-[90%] ${
                          image?.textColor == "black"
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        <ColoredText text={image?.caption} />
                      </h1>
                      <button
                        className={`btn-secondary btn-secondary-hover-de ${
                          image?.textColor == "white"
                            ? "text-white border-white"
                            : "text-black border-black"
                        }`}
                      >
                        {image?.linkText}
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AllHotelSlider;
