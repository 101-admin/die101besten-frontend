import React from "react";

const Location = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10 ">
      <div className=" w-full flex flex-col justify-center items-center ">
        <div className="w-full max-w-[1440px]">
          <p className="w-full px-5 lg:px-16 md:w-[60%] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] mb-5 font-normal">
            Vestibulum diam aliquam arcu cras donec tristique id vulputate cum..
            Tellus convallis placerat viverra turpis.
          </p>
        </div>

        <div className="flex w-full object-cover justify-center items-center mb-7 lg:mb-14">
          <img className="w-full" src="/images/Map.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Location;
