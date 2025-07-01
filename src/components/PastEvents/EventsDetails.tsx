import React from "react";
import { Event } from "@/lib/types/events.types";
import { PortableText } from "@/lib/components/PortableText";

const EventsDetails = ({ events }: { events: Event }) => {
    const formatDate = (dateString: string | undefined): string => {
        if (!dateString) return "Invalid date";
    
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid date";
    
        const day = date.getDate().toString().padStart(2, "0");
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();
    
        return `${day}. ${month} ${year}`;
      };
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-5 pb-10 lg:pb-20 px-5 lg:px-16">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse lg:items-start gap-6 lg:gap-16">
        {events?.mainImage && (
          <div className="w-full lg:max-w-[600px] h-[400px] flex">
            <img
              className="w-full h-full object-cover object-top"
              src={events?.mainImage?.url}
              alt={events?.mainImage?.alt}
            />
          </div>
        )}
        <div className="w-full flex flex-col justify-start items-baseline gap-6 lg:gap-12">
          <div className="w-full flex flex-col justify-start items-baseline gap-4">
          <div className="w-full flex flex-wrap gap-2">
              {events?.tags?.map((tag, index) => (
                <div
                  key={index}
                  className="uppercase font-bold text-[12px] leading-[12px] font-montserrat p-1 border-[1px] border-black rounded-md"
                >
                  {tag?.title}
                </div>
              ))}
            </div>
            {
                events?.title && (
                    <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
                        {events?.title}
                    </h1>
                )
            }
            <div className="w-full flex flex-col justify-start items-baseline md:flex-row gap-6 lg:gap-16 ">
              {
                events?.startDate && (
                    <div className="flex flex-col justify-start items-baseline gap-1">
                        <p className="font-gte font-[350] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                          Datum
                        </p>
                        <p className="font-gte font-[350] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
                          {formatDate(events?.startDate)}
                        </p>
                      </div>
                )
              }
              {
                events?.location && (
                    <div className="flex flex-col justify-start items-baseline gap-1">
                        <p className="font-gte font-[350] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                          Location
                        </p>
                        <p className="font-gte font-[350] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
                          {events?.location}
                        </p>
                      </div>
                )
              }
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-baseline">
            <div className="font-[350] font-gte text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
              {
                events?.body && (
                  <PortableText value={events?.body}/>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsDetails;
