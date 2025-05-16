"use client";
import React, { useState } from "react";

const BlogCatogory = () => {
  const [idx, setIdx] = useState<number>();
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
    <div className="w-full max-w-[1184px] mx-auto font-ogg py-12 lg:pb-24 px-4 gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 xl:gap-8 text-center">
        {buttons.map((item) => {
          const { title, id } = item;
          return (
            <div onClick={() => setIdx(id)} key={id} className="group">
              <h3
                className={`font-gte  cursor-pointer text-[16px] sm:text-[18px] lg:text-[20px] lg:leading-[24px]  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#B65033] to-[#F49E6E] transition-all duration-300 ${
                  idx === id
                    ? "font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] bg-clip-text text-transparent"
                    : "text-black font-[350]"
                }`}
              >
                {title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCatogory;
