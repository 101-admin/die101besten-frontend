import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const DrPeter = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-32 overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative">
          <div className="w-full lg:w-[700px] xl:w-[800px] flex flex-col justify-start items-baseline p-5 bg-[#F9F8FA] lg:p-10 lg:mr-[-300px] relative">
            <div className="w-full text-start">
              <RiDoubleQuotesL className="text-[30px] lg:text-[45px] text-[#B65033]" />
            </div>
            <i className="text-[15px] sm:text-[21px] md:text-[27px] lg:text-[32px] font-Epilogue font-extralight">
              „Mit dem Ranking wird eine Informationslücke geschlossen, die die
              insgesamt hochwertige Hotellandschaft in Deutschland aus Sicht von
              Gästen und Hotelexperten in Bezug auf das Thema Service-Qualität
              schließt.“
            </i>
            <div className="w-full flex justify-end">
              <RiDoubleQuotesR className="text-[30px] lg:text-[45px] text-[#B65033]" />
            </div>
            <h2 className="text-[20px] font-Epilogue font-bold">
              Verantwortung für das Ranking
            </h2>
            <h2 className="font-Epilogue font-normal text-[20px]">
              Prof. Dr. Peter Thuy - IU Internationale Hochschule
            </h2>
          </div>
          <div className="flex static lg:absolute top-[-110px] left-[-410px] px-5">
            <img
              className="max-w-[200px] max-h-[300px] sm:max-w-[400px] sm:max-h-[540px]"
              src="/images/Man.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrPeter;
