import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import instaData from "@/Data/instaData";
const InstagramPost = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-32">
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16 xl:px-20">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          <span className="text-[#B65033]">“Die 101 besten”</span> auf Instagram
        </h1>
        <p className="font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-Epilogue mb-8">
          Entdecken, Erleben, Genießen! Folgen Sie uns für exklusive Highlights
          & Geheimtipps!
        </p>
        <div className="w-full flex justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex justify-start items-center w-full gap-3">
              {instaData.map((item) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4  xl:basis-1/5"
                  >
                    <div className="flex">
                      <img src={item.img} alt="" />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute top-20 left-0 hidden  md:group-hover:block">
              <CarouselPrevious />
            </div>
            <div className="absolute top-20 right-0 hidden  md:group-hover:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InstagramPost;
