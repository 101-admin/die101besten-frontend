"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import { Autoplay, FreeMode } from "swiper/modules";

import type { PartnerLogo } from "@/lib";

import Link from "next/link";

const Brands = ({ logoSlider, id }: PartnerLogo) => {
  return (
    <section
      id={id}
      className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-10 lg:gap-16 py-5 lg:py-10  select-none"
    >
      <div className="w-full flex justify-center items-center">
        <div className="container xl:w-[80%] flex h-[87px] justify-between items-center">
          {logoSlider && (
            <Swiper
              className="w-full h-full"
              modules={[Autoplay, FreeMode]}
              loop={true}
              slidesPerView={2}
              spaceBetween={20}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              freeMode={{
                enabled: true,
                momentum: false,
              }}
              // grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {logoSlider?.map((brand, index) => {
                const { image, link } = brand;
                return (
                  <SwiperSlide key={index}>
                    <div key={index} className="">
                      <Link href={`${link}`}>
                        {image && (
                          <img
                            className="max-w-[141px]"
                            src={`${image?.url}`}
                            alt={`${image?.alt}`}
                          />
                        )}
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>

      {/* <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        speed={5000} // Increase for slower, smoother movement
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true}
        // freeModeMomentum={false}
        grabCursor={true}
      >
        {slides.map((text, index) => (
          <SwiperSlide
            key={index}
            className="w-[300px] h-[150px] flex items-center justify-center rounded-md bg-blue-600 text-white text-xl"
          >
            {text}
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};

export default Brands;
