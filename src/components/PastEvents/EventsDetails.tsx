"use client";
import React, { useState } from "react";
import { Event } from "@/lib/types/events.types";
import { PortableText } from "@/lib/components/PortableText";
import { HiPhoto } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { OptimizedImage } from "../ui/OptimizedImage";
import { SanityImage } from "@/lib";

const EventsDetails = ({ events }: { events: Event }) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  console.log(events.gallery, "gallery");
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
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-5 pb-10 lg:pb-20 px-5 lg:px-16 relative">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse lg:items-start gap-6 lg:gap-16">
        {events?.mainImage && (
          <div className="w-full lg:max-w-[600px] h-[400px] flex relative">
            {/* <img
              className="w-full h-full object-cover object-top"
              src={events?.mainImage?.url}
              alt={events?.mainImage?.alt}
            /> */}
            <OptimizedImage
              image={events?.mainImage as SanityImage}
              className="w-full h-full object-cover object-top"
              priority
            />
            {events?.gallery && events?.gallery?.length !== 0 && (
              <button
                onClick={() => setShowPopUp(true)}
                className="w-[240px] flex items-center justify-center gap-2 text-white uppercase font-montserrat font-bold text-xs sm:text-sm bg-black hover:bg-opacity-90 transition px-4 py-4 absolute top-3 right-3 sm:top-5 sm:right-5"
              >
                <HiPhoto className="w-[22px] h-[18px]" />
                <span>{"ALLE FOTOS ANZEIGEN"}</span>
              </button>
            )}
          </div>
        )}
        <div className="w-full flex flex-col justify-start items-baseline gap-6 lg:gap-12">
          <div className="w-full flex flex-col justify-start items-baseline gap-4">
            <div className="w-full flex flex-wrap gap-3">
              {events?.eventType?.map((type, index) => (
                <div
                  key={index}
                  className="uppercase font-bold text-[12px] leading-[12px] font-montserrat p-1 border-[1px] border-black rounded-md"
                >
                  {type?.title}
                </div>
              ))}
            </div>
            {events?.title && (
              <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
                {events?.title}
              </h1>
            )}
            <div className="w-full flex flex-col justify-start items-baseline md:flex-row gap-6 lg:gap-16 ">
              {events?.startDate && (
                <div className="flex flex-col justify-start items-baseline gap-1">
                  <p className="font-gte font-[350] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                    Datum
                  </p>
                  <p className="font-gte font-[350] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
                    {formatDate(events?.startDate)}
                  </p>
                </div>
              )}
              {events?.location && (
                <div className="flex flex-col justify-start items-baseline gap-1">
                  <p className="font-gte font-[350] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                    Location
                  </p>
                  <p className="font-gte font-[350] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
                    {events?.location}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-baseline">
            {events?.description && (
              <h2 className="font-gte text-[16px] lg:text-[20px] font-[350] leading-[20px] lg:leading-[24px] mb-3 container-primary text-black">
                {events?.description}
              </h2>
            )}
            <div className="font-[350] font-gte text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px]">
              {events?.body && <PortableText value={events?.body} />}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowPopUp(false)}
        className={`w-screen h-screen z-50 bg-[black] bg-opacity-25 backdrop-blur-[8px] fixed top-0 left-0 px-5 ${
          showPopUp ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute w-full lg:top-[50%] max-w-[1300px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-2 bg-white flex-col justify-center items-center ${
          showPopUp ? "flex" : "hidden"
        }`}
      >
        <div className="w-full flex justify-end items-center py-4 pr-4">
          <IoCloseOutline
            onClick={() => setShowPopUp(false)}
            className="text-[22px] cursor-pointer"
          />
        </div>
        <div className="w-full " style={{ columnCount: 3, columnGap: "8px" }}>
          {events?.gallery?.map((image, i) => (
            // <img
            //   key={i}
            //   src={image?.image?.url}
            //   alt={image?.image?.alt}
            //   style={{
            //     width: "100%",
            //     display: "block",
            //     marginBottom: "8px",
            //     breakInside: "avoid", // Prevents image break between columns
            //   }}
            // />
            <OptimizedImage
              key={i}
              image={image?.image as SanityImage}
              className="w-full mb-2 break-inside-avoid block"
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsDetails;
