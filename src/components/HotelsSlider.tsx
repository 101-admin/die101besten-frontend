import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import { urlFor } from "@/sanity/lib/image";

// import { HOTELS_QUERYResult } from "@/sanity/types";

// type HotelsProps = {
//   hotels: NonNullable<HOTELS_QUERYResult>;
// };

export function HotelsSlider() {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center px-5 lg:px-16 py-32 gap-16">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-full flex flex-col justify-start gap-8">
          <h2 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
            And the <span className="gradient-de-text">Winner</span> is...
          </h2>
          <p className="font-light text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte w-full md:w-1/2">
            Mit unserem Ranking &quot;%edition%&quot; küren wir in
            %number_categories% verschiedenen Kategorien die Spitzenreiter ihres
            Fachs.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex lg:h-[652px] justify-start items-center w-full">
              {/* {hotels.map((hotel, index) => {
                // Check if the index is odd or even
                const even = index % 2 === 0;

                return (
                  <CarouselItem
                    key={hotel._id}
                    className={`max-w-[336px] h-full flex ${
                      even ? "lg:items-end" : "lg:items-start"
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex">
                        {hotel.mainImage ? (
                          <Image
                            className="w-[304px] h-[480px]"
                            src={urlFor(hotel.mainImage)
                              .width(304)
                              .height(480)
                              .url()}
                            width={304}
                            height={480}
                            alt=""
                          />
                        ) : null}
                      </div>
                      <p className="font-ogg font-normal text-[20px] pt-3 sm:text-[27px] md:text-[30px] lg:text-[38px] leading-[1.1] text-center">
                        {hotel.name}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
              ; */}
            </CarouselContent>
            <div className="absolute top-52 left-0 hidden  md:group-hover:block">
              <CarouselPrevious />
            </div>
            <div className="absolute top-52 right-0 hidden md:group-hover:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
