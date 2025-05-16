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
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      className="w-full lg:max-w-[1920px] h-[900px] mb-5"
    >
      {allHotelsSection.imageGallery?.images?.map((image, index) => {
        return (
          <SwiperSlide key={index} className="w-full h-full">
            <section
              style={{ backgroundImage: `url(${image?.url})` }}
              className="w-full h-full bg-cover bg-no-repeat bg-center pt-36 mb-5"
            >
              <div className="container px-5 md:px-10 lg:px-14 xl:px-20">
                {image?.caption && (
                  <div className="px-5 py-4 md:pl-10 md:py-7 lg:pl-14 lg:py-10 bg-[#FFFFFF66] backdrop-blur-md max-w-[697px] w-full">
                    <h1
                      className={`text-[30px] leading-[30px] font-normal font-ogg sm:text-[38px] sm:leading-[38px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px] mb-5 md:mb-14 w-full lg:w-[70%] ${
                        image?.textColor == "black"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      <ColoredText text={image?.caption} />
                    </h1>

                    <Link href={`/${image?.link}`}>
                      <button
                        className={`btn-secondary ${
                          image?.textColor == "black"
                            ? "text-black border-black"
                            : "text-white border-white"
                        }`}
                      >
                        {image?.linkText}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AllHotelSlider;
