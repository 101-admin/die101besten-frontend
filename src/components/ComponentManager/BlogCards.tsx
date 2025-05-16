"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { BlogPage } from "@/lib";
import Link from "next/link";

const BlogCards = ({ blogData }: { blogData: BlogPage[] }) => {
  // console.log(blogData, "@blogData");

  const [numOfBlogs, setNumOfBlogs] = useState<number>(5);

  return (
    <section className="py-8 sm:py-12 lg:py-20  sm:px-6 px-5 lg:px-16">
      <div className="max-w-[1312px] mx-auto flex flex-col justify-center items-center w-full gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {blogData?.slice(1, numOfBlogs)?.map((post, index) => {
            const { category, readMore, mainImage, title, description, slug } =
              post;
            return (
              <div
                key={index}
                className="flex flex-col relative pb-24 cursor-pointer"
              >
                {/* Image  */}
                <div className="relative w-full mb-4 sm:mb-6 rounded-lg overflow-hidden">
                  <img
                    src={`${mainImage?.url}`}
                    alt={`${mainImage?.alt}`}
                    className="object-cover w-full  max-w-[632px] h-[552px]"
                  />
                  {/* <Image
                    width={632}
                    height={552}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  /> */}
                </div>

                {/* text */}
                <div className="max-w-[632px] space-y-4 sm:space-y-6">
                  <div className="mb-2 sm:mb-4">
                    <div className="inline-block border border-black rounded-sm px-2 py-1">
                      <h2 className="text-[12px] font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
                        {category}
                      </h2>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-grow space-y-2">
                    <h3 className="font-ogg font-normal text-[32px] sm:text-2xl leading-[32px] sm:leading-[40px] tracking-[0]">
                      {title}
                    </h3>

                    <p className="font-gte text-[24px] sm:text-xl font-[350] leading-[32px] sm:leading-8 tracking-[0]">
                      {description}
                    </p>

                    <div className="mt-4 sm:mt-8 absolute bottom-2">
                      <Link href={`/blogs/${slug}`}>
                        <button className="w-full sm:w-[300px] h-[56px] sm:h-[64px] px-6 py-3 border-2 border-black text-[16px] font-bold leading-[24px] tracking-[0] uppercase font-montserrat hover:bg-black hover:text-white transition-colors duration-300">
                          {readMore}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-start items-baseline md:justify-center ms:items-center mt-10">
          <button
            onClick={() => setNumOfBlogs(numOfBlogs + 4)}
            className="w-[300px] h-[56px] sm:h-[64px] px-6 py-3  text-white bg-black text-[16px] font-bold leading-[24px] uppercase font-montserrat"
          >
            mehr anzeigen
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
