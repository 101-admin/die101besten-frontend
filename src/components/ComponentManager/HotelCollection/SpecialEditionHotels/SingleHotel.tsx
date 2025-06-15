import React from "react";
import Link from "next/link";
import { Hotel } from "@/lib/types";

const SingleHotel = ({ data }: { data: Hotel }) => {
  return (
    <Link className="w-full" href={`/hotels/${data?.slug}`}>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:items-start cursor-pointer hover:scale-[1.03] duration-200">
        <div className="w-full lg:w-auto flex flex-col justify-start items-baseline">
          <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] flex justify-center items-center font-gte font-bold text-[20px] sm:text-[24px] text-white rounded-t-lg lg:rounded-l-xl lg:rounded-r-none uppercase">
            {data?.name?.substring(0, 1)}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${data?.image?.url})`,
          }}
          className="w-full h-[420px] flex justify-start items-baseline p-5 sm:p-10 bg-cover bg-no-repeat bg-center "
        >
          <div className="p-10 flex flex-col justify-start items-baseline bg-[#FFFFFF8C] w-full max-w-[460px] gap-5 backdrop-blur-[15px]">
            {/* {data?.segment === "leisure" && (
              <div className="h-[32px] flex justify-center items-center text-[14px] font-montserrat font-bold bg-gradient-to-br from-[#0C2432] to-[#37CA60] px-4 text-white rounded-lg uppercase">
                {data?.segment}
              </div>
            )}
            {data?.segment === "business" && (
              <div className="h-[32px] flex justify-center items-center text-[14px] font-montserrat font-bold bg-gradient-to-br from-[#0C2432] to-[#FF1640] px-4 text-white rounded-lg uppercase">
                {data?.segment}
              </div>
            )} */}
            {data?.name && (
              <h1 className="text-[28px] leading-[32px] md:text-[38px] md:leading-[42px] font-ogg font-normal">
                {data?.name}
              </h1>
            )}
            {data?.address?.city && (
              <h4 className="text-[20px] leading-[25px] md:text-[24px] md:leading-[32px] font-gte font-[350]">
                {data?.address?.city}
              </h4>
            )}
            {data?.achievements && (
              <div className="w-full max-w-[380px] flex flex-wrap items-center gap-2">
                {data?.achievements?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-2 border-2 border-black rounded-xl"
                    >
                      <p className="font-bold font-montserrat text-[12px] uppercase">
                        {item?.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleHotel;
