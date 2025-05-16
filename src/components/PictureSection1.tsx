import React from "react";

const PictureSection1 = () => {
  return (
    <section className="w-full  flex flex-col justify-center items-center py-10 lg:py-20 ">
      <div className=" w-full flex flex-col justify-center items-center ">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-3 lg:mb-6">
          Maßstab <span className="gradient-de-text">für Exzellenz</span>
        </h1>
        <p className="w-full px-5 lg:px-16 md:w-[60%] font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte text-center mb-5 lg:mb-20">
          Die Marke „Die 101 besten“ ist die erste Anlaufstelle und ein
          relevanter Benchmark, wenn es um die Frage geht: “Welche sind die
          aktuellen Spitzen-Adressen in der Hospitality?”
        </p>
        <div className="flex w-full object-cover justify-center items-center mb-7 lg:mb-14">
          <img className="w-full" src="/images/Sec1.svg" alt="" />
        </div>
        <button className="btn-primary w-[300px] btn-primary-hover-de">
          Mehr erfahren
        </button>
      </div>
    </section>
  );
};

export default PictureSection1;
