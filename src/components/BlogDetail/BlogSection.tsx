"use client";
import React, { useState } from "react";

const BlogSection = () => {
  const [idx, setIdx] = useState<number>();

  interface ButtonType {
    id: number;
    title: string;
  }

  const buttons = [
    {
      id: 1,
      title: "Alle Artikel anzeigen",
    },
    {
      id: 2,
      title: "Blog Kategorie",
    },
    {
      id: 3,
      title: "Weitere Blog Kategorie",
    },
    {
      id: 4,
      title: "Noch eine Kategorie",
    },
    {
      id: 5,
      title: "Blog Kategorie",
    },
  ];

  return (
    <div className="w-full  pb-12 pt-12 lg:pt-20">
      <div className="w-full max-w-[1184px] mx-auto font-ogg py-12 px-4 gap-8">
        {/* Main Heading */}
        <div className="max-w-[700px] mx-auto">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[64px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[64px] text-center mb-6 lg:mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Inside 101:
            </span>{" "}
            Artikel, Kolumnen und Interviews
          </h1>

          {/* Subheading */}
          <div className="font-gte font-[350] leading-[18px] text-[16px] sm:leading-[18px] sm:text-[16px] md:leading-[22px] md:text-[18px] lg:leading-[32px] lg:text-[24px] text-center mb-8 lg:mb-16 max-w-[800px] mx-auto">
            Melde dich an und erfahre von aktuellen Reise Trends,
            Insider-Stories & Hotel-Highlights.
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 xl:gap-8 text-center">
          {buttons.map((item: ButtonType) => {
            const { title, id } = item;
            return (
              <div onClick={() => setIdx(id)} key={id} className="group">
                <h3
                  className={`font-gte  cursor-pointer text-[16px] sm:text-[18px] lg:text-[20px] lg:leading-[24px]  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#B65033] to-[#F49E6E] transition-all duration-300 ${idx === id ? "font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent" : "text-black font-[350]"}`}
                >
                  {title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
