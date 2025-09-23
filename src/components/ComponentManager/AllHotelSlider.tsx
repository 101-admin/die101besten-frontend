"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import type { AllHotelsSlider, SanityImage } from "@/lib";
import { ColoredText } from "../ui/ColoredText";
import { OptimizedImage } from "../ui/OptimizedImage";
import NextLink from "../NextLink";

const AllHotelSlider = ({ allHotelsSection }: AllHotelsSlider) => {
  return (
    <Swiper
      effect="fade"
      modules={[EffectFade, Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop
      className="w-full lg:max-w-[1920px] h-[500px] sm:h-[700px] md:h-[900px] mb-5"
    >
      {allHotelsSection.imageGallery?.images?.map((image, index) => {
        return (
          <SwiperSlide key={index} className="w-full h-full">
            {image?.link && (
              <NextLink href={`${image?.link}`}>
                <section className="w-full h-full relative">
                  <div className="w-full h-full">
                    <OptimizedImage
                      image={image as SanityImage}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-full pt-36 mb-5 z-1 absolute  top-0 left-0">
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
                  </div>
                </section>
              </NextLink>
            )}
            {image?.link !== "" && (
              <section className="w-full h-full">
                <OptimizedImage
                  image={image as SanityImage}
                  width={(image.metadata?.dimensions.width as number) * 4}
                  height={(image.metadata?.dimensions.height as number) * 4}
                  className="w-full h-full object-cover bg-no-repeat"
                />
                <div className="w-full h-full pt-36 mb-5">
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
