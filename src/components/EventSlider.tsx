import React from "react";
import { ColoredText } from "./ui/ColoredText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { allEvent } from "@/lib";
import Link from "next/link";

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "Invalid date";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day}. ${month} ${year}`;
};

const EventSlider = ({ events }: { events: allEvent }) => {
  console.log(events, "events");
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-5 py-10 lg:py-20 px-5 lg:px-16 gap-16">
      <div className="w-full flex flex-col justify-start items-baseline gap-6 lg:gap-16">
        {events?.title && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
            <ColoredText text={events.title} />
          </h1>
        )}
        {events?.events && (
          <div className="w-full flex flex-col justify-center items-center mb-7 md:mb-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full group"
            >
              <CarouselContent className="flex justify-start items-start w-full gap-5">
                {events?.events?.map((event, index) => {
                  const {
                    mainImage,
                    title,
                    description,
                    startDate,
                    slug,
                    location
                  } = event;
                  return (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1/2 lg:basis-1/3"
                    >
                      <Link href={`/events/${slug}`} className="w-full">
                        <div className="w-full flex flex-col justify-start items-baseline gap-8">
                          <div className="w-full h-[394px] flex relative">
                            {mainImage && (
                              <img
                                className="w-full h-full object-cover object-top"
                                src={`${mainImage?.url}`}
                                alt={`${mainImage?.alt}`}
                              />
                            )}
                            {startDate && startDate > new Date().toISOString() && (
                              <div className="absolute top-8 left-3 md:left-8 lg:left-5 xl:left-8 bg-[#FFFFFF8C] backdrop-blur-[30px] p-6 max-w-[244px] xl:max-w-[270px] max-h-[88px] w-full h-full flex justify-center items-center">
                                <h1 className="font-ogg font-normal text-[22px] sm:text-[25px] md:text-[28px xl:text-[32px]">Coming soon</h1>
                              </div>
                            )}
                          </div>
                          <div className="w-full flex flex-col justify-start items-baseline gap-6">
                            {startDate && (
                              <div className="px-2 py-[1px] text-white bg-gradient-to-l from-[#F49E6E] to-[#B64F32] text-center text-[12px] font-Montserrat font-bold uppercase rounded-md">
                                {formatDate(startDate)}
                              </div>
                            )}
                            <div className="w-full flex flex-col justify-start items-baseline gap-2">
                              {location && (
                                <h6 className="fon-gte font-[350] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                                  {location}
                                </h6>
                              )}
                              {title && (
                                <h5 className="font-bold font-gte text-[20px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
                                  {title}
                                </h5>
                              )}
                            </div>
                            {description && (
                              <p className="line-clamp-4 font-[350] font-gte text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                                {description}
                              </p>
                            )}
                            <button className="btn-secondary w-[300px] text-black border-black btn-secondary-hover-de">
                              weiterlesen
                            </button>
                          </div>
                        </div>
                      </Link>
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
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {events?.ctaButton && (
          <Link href={`${events?.ctaButton?.link}`}>
            <button className="btn-primary btn-primary-hover-de w-[300px]">
              {events?.ctaButton?.text}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default EventSlider;
