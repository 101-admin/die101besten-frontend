import React from "react";
import type { Events101 } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";

const Events = ({
  title,
  upcomigTitle,
  upcomingEvents,
  upcomingCtaButton,
  pastTitle,
  pastEvents,
  pastCtaButton,
}: Events101) => {
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
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none">
      <div className="w-full flex flex-col justify-start items-baseline px-5 lg:px-16 ">
        {title && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 lg:mb-10">
            <ColoredText text={title} />
          </h1>
        )}
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
          {/* Section 1 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-10">
            {upcomigTitle && (
              <h1 className="font-ogg font-normal text-[20px] sm:text-[25px] md:text-[33px] lg:text-[38px] leading-[28px] sm:leading-[33px] md:leading-[38px] lg:leading-[42px]">
                {upcomigTitle}
              </h1>
            )}
            {upcomingEvents && (
              <div className="w-full flex flex-col justify-start items-start gap-6 lg:gap-12">
                {upcomingEvents
                  ?.filter((event) => {
                    if (!event?.startDate) return false;
                    return new Date(event.startDate).getTime() > Date.now();
                  })
                  ?.slice(0, 3)
                  ?.map((event, index) => {
                    const { title, description, startDate, mainImage, slug } =
                      event;
                    return (
                      <Link
                        href={`/events/${slug}`}
                        className="w-full group"
                        key={index}
                      >
                        <div
                          key={index}
                          className="w-full flex flex-col justify-start items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col  xl:flex-row"
                        >
                          <div className="max-w-[240px] w-full flex">
                            {mainImage && (
                              <img
                                className="w-[240px] h-[240px] object-cover"
                                src={`${mainImage?.url}`}
                                alt={`${mainImage?.alt}`}
                              />
                            )}
                          </div>
                          <div className="max-w-[352px] w-full flex flex-col justify-start items-baseline gap-2">
                            {startDate && (
                              <h2 className="font-gte font-bold text-[20px]">
                                {formatDate(startDate)}
                              </h2>
                            )}
                            {title && (
                              <h1 className="font-ogg line-clamp-2 text-[23px] sm:text-[32px] leading-[32px] sm:leading-[40px] group-hover:bg-gradient-to-r group-hover:from-[#B64F32] group-hover:to-[#F49E6E] group-hover:text-transparent group-hover:bg-clip-text">
                                {title}
                              </h1>
                            )}
                            {description && (
                              <p className="font-gte font-[350] line-clamp-5 text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
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

            {upcomingCtaButton && (
              <Link href={`${upcomingCtaButton?.link}`}>
                <button className="btn-secondary w-[245px] text-black border-black btn-secondary-hover-de">
                  {upcomingCtaButton?.text}
                </button>
              </Link>
            )}
          </div>
          {/* Section 2 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-10">
            {pastTitle && (
              <h1 className="font-ogg font-normal text-[20px] sm:text-[25px] md:text-[33px] lg:text-[38px] leading-[28px] sm:leading-[33px] md:leading-[38px] lg:leading-[42px]">
                {pastTitle}
              </h1>
            )}
            <div className="w-full flex flex-col justify-start items-start gap-6 lg:gap-12">
              {pastEvents
                ?.filter((event) => {
                  if (!event?.startDate) return false;
                  return new Date(event.startDate).getTime() <= Date.now();
                })
                ?.slice(0, 3)
                ?.map((event, index) => {
                  const { title, description, mainImage, slug } = event;
                  return (
                    <Link
                      key={index}
                      href={`/events/${slug}`}
                      className="w-full group"
                    >
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col  xl:flex-row"
                      >
                        <div className="max-w-[240px] w-full flex">
                          {mainImage && (
                            <img
                              className="w-[240px] h-[240px] object-cover"
                              src={`${mainImage?.url}`}
                              alt={`${mainImage?.alt}`}
                            />
                          )}
                        </div>
                        <div className="max-w-[352px] w-full flex flex-col justify-start items-baseline gap-2">
                          {title && (
                            <h1 className="font-ogg line-clamp-2 text-[23px] sm:text-[32px] leading-[32px] sm:leading-[40px] group-hover:bg-gradient-to-r group-hover:from-[#B64F32] group-hover:to-[#F49E6E] group-hover:text-transparent group-hover:bg-clip-text">
                              {title}
                            </h1>
                          )}
                          {description && (
                            <p className="font-gte font-[350] line-clamp-5 text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]">
                              {description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            {pastCtaButton && (
              <Link href={`${pastCtaButton?.link}`}>
                <button className="btn-secondary w-[260px] text-black border-black btn-secondary-hover-de">
                  {pastCtaButton?.text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
