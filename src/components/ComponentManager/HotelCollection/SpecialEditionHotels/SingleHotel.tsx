import React from "react";
import Link from "next/link";
import { Hotel } from "@/lib/types";

const SingleHotel = ({ data }: { data: Hotel }) => {
  return (
    <Link className="w-full" href={`/hotels/${data?.slug}`}>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:items-start cursor-pointer hover:scale-[1.03] duration-200">
        <div className="w-full lg:w-auto flex flex-col justify-start items-baseline">
          <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] flex justify-center items-center font-gte font-bold text-[20px] sm:text-[24px] text-white rounded-l-xl uppercase">
            {data?.name?.substring(0, 1)}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${data?.image?.url})`,
          }}
          className="w-full h-[420px] flex justify-start items-baseline p-5 sm:p-10 bg-cover bg-no-repeat bg-center "
        >
          <div className="p-10 flex flex-col justify-start items-baseline bg-[#FFFFFFDB] w-full max-w-[460px] gap-5 backdrop-blur-sm">
            <h1 className="text-[28px] leading-[32px] md:text-[38px] md:leading-[42px] font-ogg font-normal">
              {data?.name}
            </h1>
            <h4 className="text-[20px] leading-[25px] md:text-[24px] md:leading-[32px] font-gte font-[350]">
              {data?.city}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleHotel;
