import React from "react";

const Events = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20 ">
      <div className="w-full flex flex-col justify-start items-baseline px-5 lg:px-16 ">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-10 lg:mb-20">
          Vergangene <span className="text-[#B65033]">101 Events</span> &
          kommende <span className="text-[#B65033]">Highlights</span>
        </h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
          {/* Section 1 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-10">
            <h1 className="font-Ogg font-normal text-[20px] sm:text-[25px] md:text-[33px] lg:text-[38px] leading-[28px] sm:leading-[33px] md:leading-[38px] lg:leading-[42px]">
              Upcoming Events
            </h1>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/eventPic1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h2 className="font-Epilogue font-normal text-[20px]">
                  12.April.2025
                </h2>
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Name, Hotel, Stadt
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px] w-[80%]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/eventPic2.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h2 className="font-Epilogue font-normal text-[20px]">
                  12.Juni.2025
                </h2>
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Name, Hotel, Stadt
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px] w-[80%]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <button className="btn-secondary w-[245px] text-black border-black">
              ALLE EVENTS ANSEHEN
            </button>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-10">
            <h1 className="font-Ogg font-normal text-[20px] sm:text-[25px] md:text-[33px] lg:text-[38px] leading-[28px] sm:leading-[33px] md:leading-[38px] lg:leading-[42px]">
              Vergangene Events
            </h1>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/eventPic3.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Event Name 2024
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px] w-[80%]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/eventPic4.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Event Name
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px] w-[80%]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/eventPic5.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Event Name
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px] w-[80%]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <button className="btn-secondary w-[260px] text-black border-black">
              EVENT ARCHV ANSEHEN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
