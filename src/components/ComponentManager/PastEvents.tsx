"use client";
import React, { useState } from "react";
import { ColoredText } from "../ui/ColoredText";
import type { Event } from "@/lib";
import Link from "next/link";
const PastEvents = ({ events }: { events: Event[] }) => {
  const [showMore, setShowMore] = useState<number>(4);
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 px-5 lg:px-16 gap-16 lg:gap-24">
      <div className="w-full flex flex-col justify-start items-baseline gap-6 lg:gap-12">
        <h2 className="font-ogg font-normal leading-[30px] text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px]">
          <ColoredText text="#Vergangene# Events" />
        </h2>
        {events && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {events
              ?.filter((event) => {
                if (!event?.startDate) return false;
                return new Date(event.startDate).getTime() <= Date.now();
              })
              ?.slice(0, showMore)
              ?.map((event, index) => {
                const { title, description, location, mainImage, slug } =
                  event;
                return (
                  <Link key={index} className="w-full" href={`/events/${slug}`}>
                    <div className="w-full flex flex-col justify-start items-baseline gap-6 lg:gap-10">
                      <div className="w-full h-[552px] flex">
                        {
                          mainImage && (
                            <img
                              className="w-full h-full object-cover object-top"
                              src={`${mainImage?.url}`}
                              alt={`${mainImage?.alt}`}
                            />
                          )
                        }
                      </div>
                      <div className="w-full flex flex-col justify-start items-baseline gap-4">
                        {
                          location && (
                            <h6 className="font-[350] font-gte text-[20px] sm:text-[24px] leading-[32px]">
                              {location}
                            </h6>
                          )
                        }
                        {
                          title && (
                            <h4 className="font-ogg font-normal text-[24px] sm:text-[32px] leading-[40px] line-clamp-2">
                              {title}
                            </h4>
                          )
                        }
                        {
                          description && (
                            <p className="font-[350] font-gte text-[18px] sm:text-[24px] leading-[32px] line-clamp-3">
                              {description}
                            </p>
                          )
                        }
                      </div>
                      <div className="w-full flex flex-col justify-start items-baseline gap-4">
                        <button className="btn-secondary w-[300px] text-black border-black btn-secondary-hover-de">
                          WEITERLESEN
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {events?.length != 0 && (
          <button
            onClick={() => setShowMore(showMore + 4)}
            className={`btn-primary w-[300px] btn-primary-hover-de justify-center items-center ${
              showMore < events?.length ? "flex" : "hidden"
            }`}
          >
            mehr anzeigen
          </button>
        )}
      </div>
    </section>
  );
};

export default PastEvents;
