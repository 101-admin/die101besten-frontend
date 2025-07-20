import React from "react";
import type { ExclusiveEvents, SanityImage } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
import { OptimizedImage } from "../ui/OptimizedImage";

const HotelsDetail = ({
  title,
  description,
  events,
  ctaButton,
}: ExclusiveEvents) => {
  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "Invalid date";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day}. ${month} ${year}`;
  };

  const latestEvent = events?.[0];
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-28 select-none">
      <div className=" w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16">
        {title && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
            <ColoredText text={title} />
          </h1>
        )}
        {description && (
          <p className="w-full md:w-[60%] font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-10 lg:mb-20">
            {description}
          </p>
        )}
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 mb-10 lg:mb-12">
          {/* Section 1 */}
          <Link className="w-full group" href={`${latestEvent?.link}`}>
            <div className="flex flex-col justify-start items-baseline w-full gap-10">
              <div className="w-full flex flex-col justify-start items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col">
                <div className="max-w-[240px] lg:max-w-full w-full flex">
                  {latestEvent?.image && (
                    // <img
                    //   className="w-[240px] h-[240px] lg:h-[552px] lg:w-full object-cover"
                    //   src={`${latestEvent?.image?.url}`}
                    //   alt={`${latestEvent?.image?.alt}`}
                    // />
                    <OptimizedImage
                      image={latestEvent?.image as SanityImage}
                      className="w-[240px] h-[240px] lg:h-[552px] lg:w-full object-cover"
                    />
                  )}
                </div>
                <div className="max-w-[352px] lg:max-w-full w-full flex flex-col justify-start items-baseline gap-2">
                  {latestEvent?.date && (
                    <h2 className="font-gte font-bold text-[20px]">
                      {formatDate(latestEvent?.date)}
                    </h2>
                  )}
                  {latestEvent?.name && (
                    <h1 className="font-ogg line-clamp-2 text-[23px] sm:text-[32px] leading-[32px] sm:leading-[40px] group-hover:bg-gradient-to-r group-hover:from-[#B64F32] group-hover:to-[#F49E6E] group-hover:text-transparent group-hover:bg-clip-text">
                      {latestEvent?.name}
                    </h1>
                  )}
                  {latestEvent?.description && (
                    <p className="font-gte font-[350] text-[16px] sm:text-[20px] leading-[20px] line-clamp-5 sm:leading-[24px]">
                      {latestEvent?.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
          {/* Section 2 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-6 lg:gap-12">
            {events?.slice(1, 4)?.map((item, index) => {
              const { date, link, name, description, image } = item;
              return (
                <Link key={index} className="w-full group" href={`${link}`}>
                  <div className="w-full flex flex-col justify-start items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col  xl:flex-row">
                    <div className="max-w-[240px] w-full flex">
                      {image && (
                        // <img
                        //   className="w-[240px] h-[240px] object-cover"
                        //   src={`${image?.url}`}
                        //   alt={`${image?.alt}`}
                        // />
                        <OptimizedImage
                          image={image as SanityImage}
                          className="w-[240px] h-[240px] object-cover"
                        />
                      )}
                    </div>
                    <div className="max-w-[352px] w-full flex flex-col justify-start items-baseline gap-2">
                      {date && (
                        <h2 className="font-gte font-bold text-[20px]">
                          {formatDate(date)}
                        </h2>
                      )}
                      {name && (
                        <h1 className="font-ogg line-clamp-2 text-[23px] sm:text-[32px] leading-[32px] sm:leading-[40px] group-hover:bg-gradient-to-r group-hover:from-[#B64F32] group-hover:to-[#F49E6E] group-hover:text-transparent group-hover:bg-clip-text">
                          {name}
                        </h1>
                      )}
                      {description && (
                        <p className="font-gte line-clamp-5 font-[350] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link href={`${ctaButton?.link}`}>
            <button className="btn-primary w-[300px] btn-primary-hover-de">
              {ctaButton?.text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotelsDetail;
