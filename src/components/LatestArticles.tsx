import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { ArticleSection } from "@/lib";
import { ColoredText } from "./ui/ColoredText";
import Link from "next/link";

const LatestArticles = ({ data }: { data?: ArticleSection }) => {
  console.log(data, "latest articles");
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-32">
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16 xl:px-20">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[64px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[64px] mb-6 lg:mb-12">
          <ColoredText text={data?.title} />
        </h1>

        {/* Carousel */}
        {data?.articles && (
          <div className="w-full mb-7 md:mb-14 mt-5 md:mt-8 lg:mt-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative group"
            >
              <CarouselContent className="flex">
                {data?.articles?.map((article, index) => {
                  const {
                    category,
                    mainImage,
                    description,
                    title,
                    readMore,
                    slug,
                  } = article;
                  return (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="w-full flex flex-col">
                        <div className="relative w-full h-64">
                          {mainImage && (
                            <Image
                              src={mainImage?.url || ""}
                              alt={mainImage?.alt || ""}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="p-4">
                          {category && (
                            <span className="text-xs uppercase font-montserrat font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] text-white px-2 py-1 rounded-md">
                              {category?.[0]?.title}
                            </span>
                          )}
                          {title && (
                            <h3 className="mt-7 text-2xl font-bold leading-8 tracking-normal font-gte">
                              {title}
                            </h3>
                          )}
                          {description && (
                            <p className="mt-7 text-[20px] leading-6 font-light tracking-normal text-black font-gte">
                              {description}
                            </p>
                          )}
                          {readMore && (
                            <Link href={`/blogs/${slug}`}>
                              <button className="mt-4 w-[300px] btn-secondary border-black text-black btn-secondary-hover-de">
                                {readMore}
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
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

        {/* Button */}
        <div className="mt-6 w-full flex flex-col justify-start items-baseline md:justify-center md:items-center">
          {data?.button && (
            <Link href={`${data?.button?.link}`}>
              <button className="btn-primary w-[300px] btn-primary-hover-de">
                {data?.button?.text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
