"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "./SpecialEditionsNew.module.css";

// import specialEdition from "@/Data/specialData";
import type { SpecialEdition } from "@/lib";
// import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
import Link from "next/link";

const SpecialEdition = ({
  title,
  description,
  specialEditionHotels,
}: SpecialEdition) => {

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const box = e.currentTarget;
    box.style.zIndex = "2"; // Bring to front
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const box = e.currentTarget;
    box.style.zIndex = "1";
    setTimeout(() => {
      box.style.zIndex = ""; // Reset after transition
    }, 500);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-20 pb-0 md:pt-0 md:pb-32 gap-10 md:gap-16 px-0  md:pl-16 pr-0 lg:px-6">
      <div className=" w-full flex flex-col justify-center items-center gap-4 px-6 md:px-16">
        {title && (
          <h1 className="heading-2-lg text-center">
            <ColoredText text={title} />
          </h1>
        )}
        {description && (
          <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8 w-full max-w-[700px] text-center">
            {description}
          </p>
        )}
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
            {specialEditionHotels?.slice(0, 3)?.map((item, index) => (
              <Link key={index} href={`${item?.link}`}>
                <CarouselItem className="flex min-w-[250px] max-[600px]:max-w-[67vw] w-full max-w-[400px] md:max-w-[368px]">
                  <div className="w-full flex flex-col justify-center items-center gap-4">
                    {item.title && (
                      <h4 className="font-ogg font-normal text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] sm:leading-[28px] md:leading-[38px] lg:leading-[40px] text-center mb-5">
                        {item.title}
                      </h4>
                    )}
                    {item?.image && (
                      <img
                        src={`${item.image?.url}`}
                        className="aspect-square md:aspect-auto object-cover"
                        alt=""
                      />
                    )}
                  </div>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop Section */}
      <div className="w-full hidden lg:flex justify-between items-end">
        {specialEditionHotels?.slice(0, 3)?.map((item, index) => (
          <Link
            key={index}
            href={`${item?.link}`}
            className={styles.box}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.title && (
              <h4
                className={`font-ogg font-normal text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] sm:leading-[28px] md:leading-[38px] lg:leading-[40px] text-center mb-5 ${styles.title}`}
              >
                {item.title}
              </h4>
            )}
            <div className={styles.innerBox}>
              {item?.image && <img src={`${item?.image?.url}`} alt="" />}
              <img className={styles.overlay} />
                <div
                  className={`${styles.button}`}
                >
                  <button
                    className={`btn-primary w-[300px] btn-primary-hover-de z-3 `}
                  >
                    Special Editions Ansehen
                  </button>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialEdition;
