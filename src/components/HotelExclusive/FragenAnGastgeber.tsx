"use client";

import { HotelInterviewSection } from "@/lib";
import Image from "next/image";
import React from "react";
import { ColoredText } from "../ui/ColoredText";

const FragenAnGastgeber = ({
  exclusiveQuestions,
  manager,
  title,
}: HotelInterviewSection) => {
  const exclusiveQuestion1 = exclusiveQuestions?.[0];
  const exclusiveQuestion2 = exclusiveQuestions?.[1];

  return (
    <section className=" px-4 sm:px-8 md:px-16 pt-10 md:pt-16 pb-12 sm:pb-20 md:pb-28 lg:pb-40 max-w-[1440px] w-full mx-auto text-black">
      <h2 className="font-ogg text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px]  lg:leading-[110%] mb-8">
        <ColoredText text={title} />
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 items-start">
        {/* First Q&A */}
        <div>
          <h3 className="font-gte font-bold text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px] tracking-normal">
            {exclusiveQuestion1?.question}
          </h3>
          <p className="mt-2 font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] tracking-[0%] font-gte">
            {exclusiveQuestion1?.answer}
          </p>
        </div>

        {/* Image and Name */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={manager?.image?.url || ""}
            alt={manager?.image?.alt || ""}
            width={300}
            height={348}
            className="rounded-lg mb-4 object-cover w-[300px] h-[348px]"
          />
          <p className="text-sm  font-gte font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] tracking-normal text-center">
            {manager?.role}
          </p>
          <p className="font-gte font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px] tracking-normal text-center">
            {manager?.name}
          </p>
        </div>

        {/* Second Q&A */}
        <div>
          <h3 className="font-gte font-bold text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px] tracking-normal">
            {exclusiveQuestion2?.question}
          </h3>
          <p className="mt-2 font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] tracking-[0%] font-gte">
            {exclusiveQuestion2?.answer}
          </p>
        </div>
      </div>

      {/* Bottom 3 Q&As */}
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {exclusiveQuestions?.slice(2, 5)?.map((question, index) => {
          return (
            <div key={index}>
              <h3 className="font-gte font-bold text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px] tracking-normal">
                {question?.question}
              </h3>
              <p className="mt-2 font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] tracking-[0%] font-gte">
                {question?.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FragenAnGastgeber;
