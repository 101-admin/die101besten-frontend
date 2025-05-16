"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
interface HeroType {
  img: unknown;
  title: string;
}
const Hero = ({ HotelData }: { HotelData: HeroType[] }) => {
  return (
    <Swiper
      effect="fade"
      modules={[EffectFade, Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      className="w-full h-screen"
    >
      {HotelData.map((Hotel, index) => {
        const { img, title } = Hotel;
        return (
          <SwiperSlide key={index} className="w-full h-full">
            <section
              style={{ backgroundImage: `url(${img})` }}
              className="w-full h-screen bg-cover bg-no-repeat bg-center pt-36 mb-5"
            >
              <div className="container">
                <div className="px-5 py-4 md:pl-10 md:py-7 lg:pl-14 lg:py-10">
                  <h1 className="text-[30px] text-white leading-[30px] font-normal font-ogg sm:text-[38px] sm:leading-[38px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px] mb-5 md:mb-14 w-full lg:w-[70%]">
                    {title}
                  </h1>
                  <button className="btn-secondary w-[150px] text-white border-white">
                    Zum Hotel
                  </button>
                </div>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
