import React from "react";

const HotelCard = ({
  percentage,
  title,
  description,
}: {
  percentage?: number;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="w-full flex flex-col justify-start items-center px-6 md:px-10 pt-6 md:pt-10 pb-3   bg-[#F9F8FA] gap-5 sm:gap-5 lg:gap-7">
      <div className="max-w-[212px] h-[132px] w-full flex justify-center items-center bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] shadow-[0_8px_16px_0_rgba(0,0,0,0.16),0_16px_32px_0_rgba(0,0,0,0.16)] rounded-lg mb-3">
        {percentage && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-white">
            {percentage}%
          </h1>
        )}
      </div>
      {title && (
        <h1 className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px] text-center">
          {title}
        </h1>
      )}
      {description && (
        <p className="font-[350] leading-[20px] lg:leading-[24px] text-[15px] sm:text-[18px] lg:text-[20px] font-gte mb-8 text-start">
          {description}
        </p>
      )}
    </div>
  );
};

export default HotelCard;
