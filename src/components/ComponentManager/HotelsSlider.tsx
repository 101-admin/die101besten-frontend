import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Hotels } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
// import { urlFor } from "@/sanity/lib/image";

// import { HOTELS_QUERYResult } from "@/sanity/types";

// type HotelsProps = {
//   hotels: NonNullable<HOTELS_QUERYResult>;
// };

export function HotelsSlider({ title, description, hotels }: Hotels) {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5 lg:px-16 py-32 gap-16 select-none">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-full flex flex-col justify-start">
          {title && (
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
              <ColoredText text={title} />
            </h1>
          )}
          {description && (
            <p className="font-light text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte w-full md:w-1/2 mb-6 md:mb-12">
              {description}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex lg:h-[652px] justify-start items-center w-full">
              {hotels?.map((hotel, index) => {
                // Check if the index is odd or even
                const even = index % 2 === 0;

                return (
                  <CarouselItem
                    key={index}
                    className={`max-w-[336px] h-full flex ${
                      even ? "lg:items-end" : "lg:items-start"
                    }`}
                  >
                    <Link
                      href={`${hotel?.link}`}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex">
                        {hotel?.image && (
                          <Image
                            className="w-[304px] h-[480px] object-cover"
                            src={`${hotel.image?.url}`}
                            width={304}
                            height={480}
                            alt={`${hotel.image?.alt}`}
                          />
                        )}
                      </div>
                      {hotel?.name && (
                        <p className="font-ogg font-normal text-[20px] pt-3 sm:text-[27px] md:text-[30px] lg:text-[38px] leading-[1.1] text-center">
                          {hotel.name}
                        </p>
                      )}
                    </Link>
                  </CarouselItem>
                );
              })}
              ;
            </CarouselContent>
            <div className="absolute top-52 left-0 hidden  md:group-hover:block">
              <CarouselPrevious />
            </div>
            <div className="absolute top-52 right-0 hidden md:group-hover:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
