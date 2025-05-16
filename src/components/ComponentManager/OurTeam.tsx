import React from "react";
import SingleMember from "./SingleMember";
import OurTeamData from "@/Data/OurTeamData";
const OurTeam = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 sm:mb-7 lg:mb-10">
          <span className="text-[#B65033]">Das Team</span> hinter den “101
          besten”
        </h1>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
          {OurTeamData.map((singleMember, index) => {
            return <SingleMember key={index} {...singleMember} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
