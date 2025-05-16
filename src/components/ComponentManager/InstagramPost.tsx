import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import instaData from "@/Data/instaData";
import type { DieInstagram } from "@/lib";
import { ColoredText } from "../ui/ColoredText";
import Link from "next/link";
const InstagramPost = ({
  title,
  description,
  instagramSlider,
}: DieInstagram) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-32 select-none">
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16 xl:px-20">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 lg:mb-10">
          <ColoredText text={title} />
        </h1>
        <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8">
          {description}
        </p>
        <div className="w-full flex justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex justify-start items-center w-full gap-2">
              {instagramSlider?.map((item, index) => {
                const { image } = item;
                return (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4  xl:basis-1/5"
                  >
                    <Link target="_blank" href={`${item?.link}`}>
                      <div className="flex">
                        <img src={`${image?.url}`} alt={`${image?.alt}`} />
                      </div>
                    </Link>
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
