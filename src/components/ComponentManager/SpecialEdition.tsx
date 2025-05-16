"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "./SpecialEditionsNew.module.css";

import specialEdition from "@/Data/specialData";
import type { SpecialEdition } from "@/lib";
import Link from "next/link";
const SpecialEdition = ({
  title,
  description,
  specialEditionHotels,
}: SpecialEdition) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget;
    box.style.zIndex = "100"; // Bring to front
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget;
    box.style.zIndex = "100";
    setTimeout(() => {
      box.style.zIndex = ""; // Reset after transition
    }, 500);
  };
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-20 pb-0 md:pt-0 md:pb-32 gap-10 md:gap-16 px-0  md:pl-16 pr-0 lg:px-6">
      <div className=" w-full flex flex-col justify-center items-center gap-4 px-6 md:px-16">
        <h2 className="heading-2-lg text-center">
          Unsere
          <span className="gradient-de-text"> Special Editions</span>
        </h2>
        <p className="w-full max-w-[700px] bodycopy-1-lg text-center">
          Außergewöhnliche Hotels mit 101 Potenzial, die nicht im Ranking
          vertreten sind – entdeckt in den Special Editions.
        </p>
      </div>

      {/* Mobile Section */}
      <div className="w-full lg:hidden flex justify-center items-center pl-6 md:pl-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="flex items-end">
            {specialEdition.map((item) => {
              return (
                <CarouselItem
                  key={item.id}
                  className="flex min-w-[250px] max-[600px]:max-w-[67vw] w-full max-w-[400px] md:max-w-[368px]"
                >
                  <div className="w-full flex flex-col justify-center items-center gap-4">
                    <h4 className="font-ogg font-normal text-[20px] py-3 sm:text-[27px] md:text-[30px] lg:text-[38px] leading-[1.1] text-center">
                      {item.label}
                    </h4>
                    <img
                      src={item.img}
                      className="aspect-square md:aspect-auto object-cover"
                      alt=""
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop Section */}
      <div className="w-full hidden lg:flex justify-between items-end">
        {specialEdition.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.box}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h4
                className={`font-ogg font-normal text-[20px] py-3 sm:text-[27px] md:text-[30px] lg:text-[38px] leading-[1.1] text-center ${styles.title}`}
              >
                {item.label}
              </h4>
              <div className={styles.innerBox}>
                <img src={item.img} alt="" />
                <img className={styles.overlay} />
                <button
                  className={`btn-primary w-[300px] btn-primary-hover-de ${styles.button}`}
                >
                  {item.btnLabel}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecialEdition;
