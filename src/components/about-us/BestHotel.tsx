import React from "react";
import HotelCard from "./HotelCard";

const bestHotelData = [
  {
    num: "33,3%",
    title: "Gastsicht",
    description:
      "Zum einen reflektiert es die Gastsicht, dabei bildet die statistische Auswertung öffentlicher Gesamtbewertungen der Hotels auf den Portalen TripAdvisor und Bokking.com die Grundlage.",
  },
  {
    num: "33,3%",
    title: "Expertensicht",
    description:
      "Zum Dritten beurteilen Hospitality Experten nach den “die 101 besten Hotels” Ranking-Kriterien, vor Ort die Hotels.",
  },
  {
    num: "33,3%",
    title: "Auszeichnungen in Publikationen",
    description:
      "Die Zweite Säule fokusiert die Auszeichnung der Hotels in etablierten Publikationen, wie Forbes, dem Hornstein Ranking und dem Bilanz Ranking.",
  },
];

const BestHotel = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          Was macht ein Hotel zu einem
          <span className="text-[#B65033]">“Die 101 besten”</span>Hotel?
        </h1>
        <p className="font-normal text-[15px] sm:text-[18px] lg:text-[20px] font-Epilogue mb-8 lg:w-1/2">
          Das Ranking basiert auf 3 Säulen. Für das Ergebnis werden alle Säulen
          gleich gewichtet.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5 sm:py-7 lg:py-10">
          {bestHotelData.map((bestHotel, index) => {
            return <HotelCard key={index} {...bestHotel} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BestHotel;
