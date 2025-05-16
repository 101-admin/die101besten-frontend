import React from "react";
import PrincipleComponent from "./PrincipleComponent";
// import PrincipleData from "@/Data/PrincipleData";
import type { Principles } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "../ui/ColoredText";
const Principles = ({
  title,
  subTitle,
  body,
  principlesSection,
}: Principles) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          <ColoredText text={title} />
        </h1>
        <h3 className="mb-5 text-[18px] md:text-[20px] lg:text-[24px] font-gte font-bold bg-gradient-to-r from-[#B65033] to-[#F49E6E] text-transparent bg-clip-text">
          {subTitle}
        </h3>
        <div className="font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] font-gte mb-3 lg:w-1/2">
          {body && <PortableText value={body} />}
        </div>

        <div className="w-full py-5 md:py-10 flex flex-col justify-center items-center">
          {principlesSection?.map((data, index) => {
            const { title, description } = data;
            return (
              <PrincipleComponent
                key={index}
                title={title}
                description={description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Principles;
