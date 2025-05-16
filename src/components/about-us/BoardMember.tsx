import React from "react";
import SingleMember from "./SingleMember";
import BoardMemberData from "@/Data/BoardMemeberData";
const BoardMember = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 sm:mb-7 lg:mb-10">
          Das <span className="text-[#B65033]">Kuratorium</span>
        </h1>
        <div className="w-full flex flex-col justify-start items-baseline lg:flex-row lg:items-start gap-5">
          <p className="font-normal text-[15px] sm:text-[18px] lg:text-[20px] font-Epilogue mb-8 w-full">
            Das Ranking der 101 besten Hotels Deutschlands wird nun schon im
            vierten Jahr von einem Kuratorium unterstützt. Die Expertise
            prominenter Mitstreiter auch aus anderen Branchen gibt dem
            101-Besten-Ranking wertvollen Input.{" "}
          </p>
          <p className="font-normal text-[15px] sm:text-[18px] lg:text-[20px] font-Epilogue mb-8 w-full">
            Diese Expertise hat sukzessive den Blick auf Fragen eröffnet, mit
            denen sich auch diese Rangliste auseinandersetzen muss, wenn sie
            weiterhin einen Beitrag zur Lösung der drängenden Probleme leisten
            will, mit denen sich die gesamte Hotellerie seit einigen Jahren
            verstärkt beschäftigen muss.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
          {BoardMemberData.map((singleMember, index) => {
            return <SingleMember key={index} {...singleMember} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BoardMember;
