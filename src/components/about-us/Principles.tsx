import React from "react";
import PrincipleComponent from "./PrincipleComponent";
import PrincipleData from "@/Data/PrincipleData";
const Principles = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          Die <span className="text-[#B65033]">Grundsätze</span> des 101
          Rankings
        </h1>
        <h2 className="font-bold text-[15px] sm:text-[18px] lg:text-[20px] font-gte text-transparent bg-clip-text bg-gradient-to-r from-[#B65033] from-50% to-[#F49E6E]  mb-5">
          Unabhängig. Transparent. Relevant.
        </h2>
        <p className="font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] font-Epilogue mb-3 lg:w-1/2">
          Das Institute for Service- and Leadership Excellence als Träger des
          Hotel-Rankings “Die 101 besten” erstellt gemeinsam mit seinen
          mitwirkenden Partnern ein aussagekräftiges und neutrales Ranking.
        </p>
        <p className="font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] font-Epilogue lg:w-1/2">
          Im Rahmen des gesamten Ranking-Prozesses setzen die handelnden Akteure
          ausnahmslos höchste Maßstäbe an und verpflichten sich den
          nachfolgenden 12 Grundsätzen.
        </p>
        <div className="w-full py-5 md:py-10 flex flex-col justify-center items-center">
          {PrincipleData.map((data, index) => {
            return <PrincipleComponent key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Principles;
