import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SpEdition from "@/Data/SpEdition";
import type { SpecialHotels } from "@/lib";
import { ColoredText } from "../ui/ColoredText";
const HotelCategories = ({ title, hotels }: SpecialHotels) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-10 lg:pt-32">
      <div className="w-full flex flex-col justify-center item-center px-5 lg:px-16 xl:px-20">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-7 lg:mb-14 text-center">
          <ColoredText text={title} />
        </h1>
        <div className="w-full flex flex-col justify-center items-center mb-7 md:mb-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex justify-start items-start w-full gap-8">
              {hotels?.map((data, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 xl:basis-1/3  cursor-pointer  w-full"
                  >
                    <div className="w-full ">
                      <img
                        className="w-full max-h-[536px] h-[480px] object-cover"
                        src={data?.image?.url || ""}
                        alt={data?.image?.alt || ""}
                      />
                    </div>
                    <div className="w-full">
                      <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] text-center mt-3">
                        {data?.name}
                      </h1>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute top-44 left-0 hidden md:group-hover:block">
              <CarouselPrevious />
            </div>
            <div className="absolute top-44 right-0 hidden md:group-hover:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HotelCategories;
