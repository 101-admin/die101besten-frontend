import React from "react";

const PIctureSection2 = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10 lg:py-20 ">
      <div className=" w-full flex flex-col justify-center items-center">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-3 lg:mb-6">
          Ranking mit <span className="gradient-de-text">Relevanz</span>
        </h1>
        <p className="w-full md:w-[60%] px-5 font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte text-center mb-5 lg:mb-20">
          Das Ranking “Die 101 Besten” ordnet und kategorisiert die
          Hotellandschaft in Deutschland, Österreich, Südtirol und der Schweiz
          nach messbaren, relevanten, nachvollziehbaren und aussagekräftigen
          Kriterien.
        </p>
        <div className="flex w-full object-cover justify-center items-center mb-7 lg:mb-14">
          <img className="w-full" src="/images/Sec2.svg" alt="" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
          <button className="btn-primary w-[300px] btn-primary-hover-de">
            Mehr erfahren
          </button>
          <button className="btn-secondary w-[300px] text-black border-black">
            Zum Ranking
          </button>
        </div>
      </div>
    </section>
  );
};

export default PIctureSection2;
