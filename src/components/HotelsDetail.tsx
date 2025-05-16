import React from "react";

const HotelsDetail = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-28">
      <div className=" w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          <span className="text-[#B65033]">Exklusive</span> Hotel Events
        </h1>
        <p className="w-full md:w-[60%] font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-Epilogue mb-10 lg:mb-20">
          Sie möchten sich für Ihre nächste Reise inspirieren lassen oder sich
          über aktuellste Events informieren?Wir haben ausgewählte Hotel Events
          in unserem 101 Besten-Eventkalender für Sie zusammengefasst.
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16 mb-10 lg:mb-12">
          {/* Section 1 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-10">
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col">
              <div className="flex lg:w-full">
                <img
                  className="max-w-[240px] max-h-[240px] lg:max-w-[550px] lg:max-h-[480px] xl:max-w-[624px] xl:max-h-[552px] "
                  src="/images/hotelImg1.svg"
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
          </div>
          {/* Section 2 */}
          <div className="flex flex-col justify-start items-baseline w-full gap-10">
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/hotelImg2.svg"
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
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/hotelImg3.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h2 className="font-Epilogue font-normal text-[20px]">
                  12.Juni 2025
                </h2>
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Name, Hotel, Stadt
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start  gap-4 md:gap-8 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex">
                <img
                  className="max-w-[240px] max-h-[240px]"
                  src="/images/hotelImg4.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-baseline">
                <h2 className="font-Epilogue font-normal text-[20px]">
                  12.November 2025
                </h2>
                <h1 className="font-Ogg text-[23px] sm:text-[30px]">
                  Name, Hotel, Stadt
                </h1>
                <p className="font-Epilogue font-normal text-[16px] sm:text-[20px]">
                  Aliquam sed orci tellus. Nam et dapibus leo, ultrices lobortis
                  metus. In eget neque varius, porttitor risus facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="btn-primary w-[300px] btn-primary-hover-de">
            HOTEL EVENTS ANSEHEN
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelsDetail;
