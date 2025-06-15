import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { HotelEvents } from "@/lib";
import { ColoredText } from "../ui/ColoredText";
import Link from "next/link";

const ExclusiveEvents = ({ events, title }: HotelEvents) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-32">
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16">
        {/* Title */}
        {title && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight mb-6 lg:mb-12">
            <ColoredText text={title} />
          </h1>
        )}

        {/* Carousel */}
        <div className="w-full mb-7 md:mb-14 mt-5 md:mt-8 lg:mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex gap-6">
              {events?.map((event, index) => {
                const {
                  eventLocation,
                  ctaButton,
                  description,
                  eventDate,
                  eventTime,
                  image,
                  subtitle,
                  title,
                } = event;
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className=" h-full">
                      <div className="relative w-full">
                        {image && (
                          <img
                            className="w-full"
                            src={image?.url || ""}
                            alt={image?.alt || ""}
                          />
                        )}
                      </div>
                      <div className="p-4">
                        {subtitle && (
                          <span className="text-xs uppercase font-montserrat font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] text-white px-2 py-1 rounded-md">
                            {subtitle}
                          </span>
                        )}
                        {title && (
                          <h2 className="font-ogg font-normal text-[25px] sm:text-[28px] md:text-[30px] lg:text-[38px] leading-[28px] sm:leading-[30px] md:leading-[33px] lg:leading-[42px] tracking-tight mt-2">
                            {title}
                          </h2>
                        )}
                        {description && (
                          <p className="mt-5 text-[20px] leading-6 font-light tracking-normal text-black font-gte mb-5">
                            {description}
                          </p>
                        )}
                        {eventDate && (
                          <h3 className="text-[20px] font-bold font-gte flex gap-3">
                            {eventDate?.name}
                            <span className="font-[350]">
                              {eventDate?.date}
                            </span>
                          </h3>
                        )}
                        {eventTime && (
                          <h3 className="text-[20px] font-bold font-gte flex gap-3">
                            {eventTime?.name}
                            <span className="font-[350]">
                              {eventTime?.time}
                            </span>
                          </h3>
                        )}
                        {eventLocation && (
                          <h3 className="text-[20px] font-bold font-gte flex gap-3">
                            {eventLocation?.name}
                            <span className="font-[350]">
                              {eventLocation?.location}
                            </span>
                          </h3>
                        )}
                        {ctaButton && (
                          <Link href={`${ctaButton?.url}`}>
                            <button className="mt-4 w-[300px] btn-secondary border-black text-black btn-secondary-hover-de">
                              {ctaButton?.text}
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="absolute top-44 left-2 hidden md:group-hover:block">
              <CarouselPrevious />
            </div>
            <div className="absolute top-20 right-0 hidden md:group-hover:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveEvents;
