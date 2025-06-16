import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import ArticleData from "@/Data/ArticleData";

import type { Hotelmomente } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
const Articles = ({
  title,
  description,
  allBlogs,
  ctaButton,
  id,
}: Hotelmomente) => {
  return (
    <section
      id={id}
      className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:pt-14 lg:pb-32 select-none"
    >
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16 xl:px-20">
        {title && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
            <ColoredText text={title} />
          </h1>
        )}
        {description && (
          <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8 w-full md:w-[60%]">
            {description}
          </p>
        )}
        <div className="w-full flex flex-col justify-center items-center mb-7 md:mb-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex justify-start items-start w-full gap-4">
              {allBlogs?.map((item, index) => {
                const { slug, description, mainImage, category, title } = item;
                return (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 xl:basis-1/3  cursor-pointer group/show flex flex-col justify-center items-center w-full"
                  >
                    <Link className="w-full" href={`/blogs/${slug}`}>
                      <div className="w-full h-full relative">
                        {mainImage && (
                          <img
                            className="w-full h-[480px] object-cover"
                            src={`${mainImage?.url}`}
                            alt={`${mainImage?.alt}`}
                          />
                        )}
                        <div className="absolute top-0 left-0 w-full h-full hidden group-hover/show:flex flex-col justify-start items-baseline bg-[#000000B2]">
                          <div className="w-full h-full flex flex-col justify-start items-baseline  pt-32 pl-12 pr-10">
                            {category && (
                              <h2 className="px-2 py-[1px] bg-gradient-to-r from-[#F49E6E] to-[#B64F32] text-center text-white rounded-lg text-[12px] font-Montserrat font-bold leading-[24px] mb-3 uppercase">
                                {category?.[0]?.title}
                              </h2>
                            )}
                            {description && (
                              <p className=" font-gte font-[350] line-clamp-5 text-[20px] md:text-[24px] leading-[24px] md:leading-[32px] text-white mb-3">
                                {description}
                              </p>
                            )}
                            <Link className="w-full" href={`/blogs/${slug}`}>
                              <button className="max-w-[300] w-full h-[64px] font-Montserrat font-bold text-[16px] text-white bg-gradient-to-r from-[#F49E6E] to-[#B64F32] leading-[24px] text-center  uppercase">
                                Weiterlesen
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {title && (
                        <h1 className="font-ogg line-clamp-2 font-normal text-[20px] sm:text-[25px] md:text-[33px] lg:text-[38px] leading-[28px] sm:leading-[33px] md:leading-[38px] lg:leading-[42px] my-3">
                          <ColoredText text={title} />
                        </h1>
                      )}
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
        <div className="w-full flex justify-center items-center">
          {ctaButton && (
            <Link href={`${ctaButton?.link}`}>
              <button className="btn-secondary w-[250px] text-black border-black btn-secondary-hover-de">
                {ctaButton?.text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
