"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { BlogPage } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";

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
              <Link key={index} href={`/blogs/${slug}`}>
                <div className="flex flex-col relative pb-24 cursor-pointer">
                  {/* Image  */}
                  <div className="relative w-full mb-4 sm:mb-6  overflow-hidden">
                    {mainImage && (
                      <img
                        src={`${mainImage?.url}`}
                        alt={`${mainImage?.alt}`}
                        className="object-cover w-full  max-w-[632px] h-[552px]"
                      />
                    )}
                  </div>

                  {/* text */}
                  <div className="max-w-[632px] space-y-4 sm:space-y-6">
                    <div className="mb-2 sm:mb-4">
                      <div className="inline-block border border-black rounded-sm px-2 py-1">
                        {category && (
                          <h2 className="text-[12px] font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
                            {category[0]?.title}
                          </h2>
                        )}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-grow space-y-2">
                      {title && (
                        <h3 className="font-ogg font-normal text-[32px] sm:text-2xl leading-[32px] sm:leading-[40px] tracking-[0]">
                          <ColoredText text={title} />
                        </h3>
                      )}

                      {description && (
                        <p className="font-gte text-[24px] sm:text-xl font-[350] leading-[32px] sm:leading-8 tracking-[0]">
                          {description}
                        </p>
                      )}

                      <div className="mt-4 sm:mt-8 absolute bottom-2">
                        {readMore && (
                          <button className="w-[300px] btn-secondary border-black text-black btn-secondary-hover-de">
                            {readMore}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full flex justify-start items-baseline md:justify-center ms:items-center mt-10">
          {blogData?.length != 0 && (
            <button
              onClick={() => setNumOfBlogs(numOfBlogs + 4)}
              className={`btn-primary w-[300px] btn-primary-hover-de justify-center items-center ${
                numOfBlogs < blogData?.length ? "flex" : "hidden"
              }`}
            >
              mehr anzeigen
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
//
