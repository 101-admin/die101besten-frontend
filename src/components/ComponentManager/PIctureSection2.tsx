import React from "react";
import type { RankingMitRelevanz } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
const PIctureSection2 = ({
  title,
  description,
  image,
  ctaButtons,
}: RankingMitRelevanz) => {
  return (
    <section className="w-full lg:max-w-[1920px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none">
      <div className=" w-full flex flex-col justify-center items-center">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-5">
          <ColoredText text={title} />
        </h1>
        <p className="w-full md:w-[60%] px-5 font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte text-center mb-5 lg:mb-20">
          {description}
        </p>
        <div
          style={{ backgroundImage: `url(${image?.url})` }}
          className="w-full h-[400px] md:h-full aspect-[144/60] md:min-h-[600px] md:max-h-[800px] md:bg-fixed bg-center bg-cover bg-no-repeat"
        ></div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mt-10">
          {ctaButtons?.map((ctaButton, index) => (
            <Link href={`/${ctaButton?.link}`} key={index}>
              <button
                className={` w-[300px]  ${
                  ctaButton?.btnStyle == "primary"
                    ? "btn-primary-hover-de btn-primary"
                    : "btn-secondary border-black"
                }`}
              >
                {ctaButton?.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PIctureSection2;
