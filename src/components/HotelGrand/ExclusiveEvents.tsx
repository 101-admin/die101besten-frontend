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

// const articles = [
//   {
//     id: 1,
//     title: "Nunc eget ut Facilisis Quis ac tincidunt.",
//     category: "Ostern",
//     description:
//       "Risus aliquet eget vestibulum ut pellentesque dignissim. A luctus aliquet sapien sed mauris euismod et eu faucibus. Maecenas in consectetur in sit vestibulum. Pharetra enim.",
//     image: "/blog artical/image (5).svg",
//     date: "18. April 2025",
//     time: "13:00 - 17:00 Uhr",
//     location: "Details for Location",
//   },
//   {
//     id: 2,
//     title: "Volutpat ullamcorper",
//     category: "Ostern",
//     image: "/blog artical/image(4).svg",
//     description:
//       "Facilisis pretium viverra scelerisque feugiat pretium varius aliquet malesuada egestas. Lectus feugiat sit imperdiet sed pellentesque sodales metus tempor non. Nunc magna.",
//     date: "18. April 2025",
//     time: "11:30 - 14:00 Uhr",
//     location: "Details for Location",
//   },
//   {
//     id: 3,
//     title: "Sit consequat - ultrices",
//     category: "Ostern",
//     image: "/blog artical/image(2).svg",
//     description:
//       "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero...",
//     date: "20. April 2025 (also more rows possible)",
//     time: "ab 17:00 Uhr (also more rows possible)",
//     location: "Details for Location that spans over 2 lines",
//   },
//   {
//     id: 4,
//     title: "Nunc eget ut Facilisis Quis ac tincidunt.",
//     category: "Ostern",
//     description:
//       "Risus aliquet eget vestibulum ut pellentesque dignissim. A luctus aliquet sapien sed mauris euismod et eu faucibus. Maecenas in consectetur in sit vestibulum. Pharetra enim.",
//     image: "/blog artical/image (5).svg",
//     date: "18. April 2025",
//     time: "13:00 - 17:00 Uhr",
//     location: "Details for Location",
//   },
//   {
//     id: 5,
//     title: "Volutpat ullamcorper",
//     category: "Ostern",
//     image: "/blog artical/image(4).svg",
//     description:
//       "Facilisis pretium viverra scelerisque feugiat pretium varius aliquet malesuada egestas. Lectus feugiat sit imperdiet sed pellentesque sodales metus tempor non. Nunc magna.",
//     date: "18. April 2025",
//     time: "11:30 - 14:00 Uhr",
//     location: "Details for Location",
//   },
//   {
//     id: 6,
//     title: "Sit consequat - ultrices",
//     category: "Ostern",
//     image: "/blog artical/image(2).svg",
//     description:
//       "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero...",
//     date: "20. April 2025 (also more rows possible)",
//     time: "ab 17:00 Uhr (also more rows possible)",
//     location: "Details for Location that spans over 2 lines",
//   },
// ];

const ExclusiveEvents = ({ events, title }: HotelEvents) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-32">
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16">
        {/* Title */}
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight mb-6 lg:mb-12">
          <ColoredText text={title} />
        </h1>

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
                        <img
                          className="w-full"
                          src={image?.url || ""}
                          alt={image?.alt || ""}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs uppercase font-montserrat font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] text-white px-2 py-1 rounded-md">
                          {subtitle}
                        </span>
                        <h2 className="font-ogg font-normal text-[25px] sm:text-[28px] md:text-[30px] lg:text-[38px] leading-[28px] sm:leading-[30px] md:leading-[33px] lg:leading-[42px] tracking-tight mt-2">
                          {title}
                        </h2>
                        <p className="mt-5 text-[20px] leading-6 font-light tracking-normal text-black font-gte mb-5">
                          {description}
                        </p>
                        <h3 className="text-[20px] font-bold font-gte flex gap-3">
                          {eventDate?.name}
                          <span className="font-[350]">{eventDate?.date}</span>
                        </h3>
                        <h3 className="text-[20px] font-bold font-gte flex gap-3">
                          {eventTime?.name}
                          <span className="font-[350]">{eventTime?.time}</span>
                        </h3>
                        <h3 className="text-[20px] font-bold font-gte flex gap-3">
                          {eventLocation?.name}
                          <span className="font-[350]">
                            {eventLocation?.location}
                          </span>
                        </h3>
                        <Link href={`/${ctaButton?.url}`}>
                          <button
                            className="mt-4 w-[300px] h-16 uppercase border-2 border-black hover:bg-black hover:text-white transition 
                            font-montserrat font-bold text-base leading-6 tracking-normal 
                            py-4 px-6 gap-3"
                          >
                            {ctaButton?.text}
                          </button>
                        </Link>
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
