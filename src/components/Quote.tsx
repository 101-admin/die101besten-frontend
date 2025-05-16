import React from "react";

const Quote = () => {
  return (
    <section className="w-full max-w-[1440px]  flex flex-col justify-center items-center py-11 gap-10 lg:py-16 relative">
      <div className="w-full flex flex-col justify-center items-center text-center px-5 lg:px-16">
        <q className="w-[80%] lg:w-[880px] font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[1.2] mb-4 lg:mb-6">
          Es ist den 101 Besten gelungen, in kürzester Zeit{" "}
          <span className="gradient-de-text">das maßgebliche Ranking</span> für
          die Spitzenhotellerie im deutschsprachigen Raum zu etablieren!
        </q>
        <p className="font-gte font-light text-[16px] md:text-[24px] leading-[1.33]">
          Dieter Müller-Elmau - Eigentümer Schloss Elmau
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <button className="btn-primary w-[280px] btn-primary-hover-de">
          Ranking Deutschland
        </button>
        <button className="btn-primary w-[280px] btn-primary-hover-de">
          Ranking Schweiz
        </button>
        <button className="btn-primary w-[280px] btn-primary-hover-de">
          Ranking Dach + Südtirol
        </button>
      </div>
    </section>
  );
};

export default Quote;
