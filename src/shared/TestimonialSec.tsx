import React from "react";
import type { Testimonial } from "@/lib";
import { ColoredText } from "@/components/ui/ColoredText";

const TestimonialSec = ({ author, review, image }: Testimonial) => {
  return (
    <section className="w-full lg:h-[600px] max-w-[1056px] flex flex-col justify-center items-center relative">
      <div className="w-full flex justify-center items-center static lg:absolute lg:left-[-300px] top-[50px] xl:left-[-340px]">
        <img
          className="w-[260px] h-[346px] object-cover"
          src={image?.url}
          alt={image?.alt}
        />
      </div>
      <div className="w-full max-w-[700px] p-10 lg:p-16 bg-[#F9F8FA] lg:mr-[-230px]">
        <div className="w-full flex justify-start items-baseline">
          <img
            className="max-w-[30px] sm:max-w-[40px] md:max-w-[55px]  lg:max-w-[74px]"
            src="/images/TestiIcon.svg"
            alt=""
          />
        </div>
        <h1 className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px] mb-3 lg:mb-6 text-center">
          <ColoredText text={review} />
        </h1>
        <div className="w-[90%] flex justify-end items-baseline lg:mt-[-30px]">
          <img
            className="rotate-180 max-w-[30px] sm:max-w-[40px] md:max-w-[55px]  lg:max-w-[74px]"
            src="/images/TestiIcon.svg"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="w-full text-center text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light mt-5">
            {author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
