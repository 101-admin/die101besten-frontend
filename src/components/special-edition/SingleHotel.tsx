import React from "react";
import Link from "next/link";

interface DetailItem {
  detail: string;
}
const SingleHotel = ({
  title,
  subTitle,
  bgImg,
  allDetail,
}: {
  title: string;
  subTitle: string;
  bgImg: unknown;
  allDetail: DetailItem[];
}) => {
  return (
    <Link className="w-full" href="single-hotel">
      <div className="w-full flex flex-col justify-center items-center cursor-pointer hover:scale-[1.03] duration-200">
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="w-full h-[420px] flex justify-start items-baseline p-5 sm:p-10 bg-cover bg-no-repeat bg-center "
        >
          <div className="p-10 flex flex-col justify-start items-baseline bg-[#FFFFFFDB] w-full max-w-[460px] gap-5 backdrop-blur-sm">
            <h1 className="text-[28px] leading-[32px] md:text-[38px] md:leading-[42px] font-ogg font-normal">
              {title}
            </h1>
            <h4 className="text-[20px] leading-[25px] md:text-[24px] md:leading-[32px] font-gte font-[350]">
              {subTitle}
            </h4>
            <div className="w-full max-w-[380px] flex flex-wrap items-center gap-2">
              {allDetail.map((item, index) => {
                const { detail } = item;
                return (
                  <div
                    key={index}
                    className="py-1 px-2 border-2 border-black rounded-xl"
                  >
                    <p className="font-bold font-montserrat text-[12px] uppercase">
                      {detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleHotel;
