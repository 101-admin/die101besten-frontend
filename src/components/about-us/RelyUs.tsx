import React from "react";
import type { Utr } from "@/lib";

const RelyUs = ({ title }: Utr) => {
  return (
    <>
      <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20">
        <div className="my-5 sm:my-8 md:my-10 lg:my-16 w-full flex justify-center items-center gap-5 lg:gap-10">
          <h1 className="text-[20px] leading-[20px] font-normal font-ogg sm:text-[30px] sm:leading-[30px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px]">
            {title}
          </h1>
        </div>
        {/* <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse gap-10 lg:gap-5">
            <div className="flex w-full">
              <img src="/images/Rely.svg" alt="" />
            </div>
            <div className="w-full flex flex-col justify-start items-baseline">
              <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-3 lg:mb-6">
                Warum Sie sich
                <span className="text-[#B65033]">auf uns verlassen</span>{" "}
                können!
              </h1>
              <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light">
                Die 101 Besten ist eine neutrale, nicht bestechliche Instanz. 
                Dafür arbeiten wir mit ausgewählten, seriösen Partnern aus der
                Luxus- und Hotelbranche zusammen. On Top fließen
                Gästebewertungen in die Gesamtbewertung mit ein.
              </p>
              <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light mt-3">
                Unsere Vision ist es, ein Netzwerk aus Gästen, Hoteliers und
                Partnern zu knüpfen, in dem Hintergrundstories, gemeinsame
                Events und Partnerschaften entstehen und dadurch die 101 Besten
                zu einem ganz besonderen, exklusiven und familiären Erlebnis
                werden.
              </p>
              <p className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light mt-3">
                Hier noch persönliche Worte von Carsten einfügen, in denen er
                sagt, warum ihm diese Verlässlichkeit so wichtig ist. Phasellus
                sollicitudin dui ac lectus egestas rhoncus. Morbi commodo justo
                quis turpis faucibus, feugiat sodales massa sodales.
                Pellentesque a dictum quam, ut tempus tortor. Phasellus
                tristique eu metus sit amet luctus. Nulla lacinia suscipit
                felis, ac fringilla ipsum ultricies quis. Morbi vitae est in
                odio maximus consectetur imperdiet et enim.
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default RelyUs;
