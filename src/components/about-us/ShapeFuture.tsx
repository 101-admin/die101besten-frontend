import React from "react";

const ShapeFuture = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 lg:mb-10">
          Zurück geben und
          <span className="text-[#B65033]"> Zukunft gestalten.</span>
        </h1>
        <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-10">
          <div className="flex w-full">
            <img src="/images/Future.svg" alt="" />
          </div>
          <div className="w-full flex flex-col justify-start items-baseline">
            <h1 className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px] mb-5">
              Unsere Verantwortung
            </h1>
            <h2 className="font-bold text-[15px] sm:text-[18px] lg:text-[20px] font-gte mb-5">
              Reiner Meutsch Stiftung FLY & HELP
            </h2>
            <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light">
              Wir wollen Kindern eine bessere Zukunft durch Bildung ermöglichen,
              deswegen unterstützen wir die Reiner Meutsch Stiftung FLY & HELP.
            </p>
            <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light">
              Hauptziel der Reiner Meutsch Stiftung FLY & HELP ist die Förderung
              von Bildung und Erziehung. Mit Hilfe der Spender errichtet FLY &
              HELP Schulen in Entwicklungsländern.
            </p>
            <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light">
              Bisher konnten schon über 750 Projekte rund um den Globus
              initiiert, gefördert und betreut werden.
            </p>
            <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light mb-5 lg:mb-10">
              “Hier wäre noch eine persönliche Aussage von Carsten schön,
              vielleicht warum ihm genau das Projekt am Herzen liegt oder wie er
              darauf gekommen ist.”
            </p>
            <button className="btn-secondary w-[234px] text-black border-black">
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeFuture;
