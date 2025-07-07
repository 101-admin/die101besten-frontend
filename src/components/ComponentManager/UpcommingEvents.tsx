import React from "react";
import { ColoredText } from "../ui/ColoredText";
import type { Event } from "@/lib";
import Link from "next/link";

const UpcommingEvents = ({ events }: { events: Event[] }) => {
  const formatDay = (dateString: string | undefined): string => {
    if (!dateString) return "Invalid date";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const day = date.getDate().toString().padStart(2, "0");

    return `${day}`;
  };
  const formatMonth = (dateString: string | undefined): string => {
    if (!dateString) return "Invalid date";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const month = date.toLocaleString("en-US", { month: "long" });

    return `${month}`;
  };
  const formatYear = (dateString: string | undefined): string => {
    if (!dateString) return "Invalid date";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const year = date.getFullYear();

    return `${year}`;
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 px-5 lg:px-16">
      <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-12">
        <h2 className="font-ogg font-normal leading-[30px] text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px]">
          <ColoredText text="#Kommende# Events" />
        </h2>
        {events && (
          <div className="w-full flex flex-col justify-center items-center gap-5 lg:gap-12">
            {events
              ?.filter((event) => {
                if (!event?.startDate) return false;
                return new Date(event.startDate).getTime() > Date.now();
              })
              ?.slice(0, 2)
              ?.map((event, index) => {
                const {
                  title,
                  description,
                  startDate,
                  location,
                  slug,
                } = event;
                return (
                  <Link className="w-full" href={`/events/${slug}`} key={index}>
                    <div className="w-full flex flex-col justify-start items-baseline lg:flex-row lg:items-center lg:justify-center lg:border-2 lg:border-[#000000] lg:max-h-[200px]">
                      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-[#000000] flex flex-col justify-center items-center gap-6 sm:gap-8 text-white">
                        {startDate && (
                          <p className="font-[350] font-gte text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
                            {formatMonth(startDate)}
                          </p>
                        )}
                        {startDate && (
                          <h4 className="font-bold text-[45px] sm:text-[60px] leading-[24px] font-gte">
                            {formatDay(startDate)}
                          </h4>
                        )}
                        <p className="font-[350] font-gte text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
                          {formatYear(startDate)}
                        </p>
                      </div>
                      <div className="w-full p-5 lg:p-8 border-2 border-[#000000] lg:border-none flex flex-col justify-start items-baseline gap-2">
                        {location && (
                          <h5 className="font-[350] font-gte text-[20px] sm:text-[24px] leading-[32px]">
                            {location}
                          </h5>
                        )}
                        {title && (
                          <h4 className="font-ogg font-normal text-[24px] sm:text-[32px] leading-[40px]">
                            {title}
                          </h4>
                        )}
                        {description && (
                          <p className="font-[350] font-gte text-[16px] sm:text-[20px] leading-[24px]">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcommingEvents;
