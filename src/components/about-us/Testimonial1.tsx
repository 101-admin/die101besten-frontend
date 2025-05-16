import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialSec from "@/shared/TestimonialSec";

const TestiData = [
  {
    title:
      "Das Ranking der ‘101 Besten’ schickt sich an der ‘Guide Michelin’ der Hotellerie zu werden",
    description: "Frank Marrenbach - CEO Althoff Hotel Collection",
  },
  {
    title:
      "Das Ranking der ‘101 Besten’ schickt sich an der ‘Guide Michelin’ der Hotellerie zu werden",
    description: "Frank Marrenbach - CEO Althoff Hotel Collection",
  },
  {
    title:
      "Das Ranking der ‘101 Besten’ schickt sich an der ‘Guide Michelin’ der Hotellerie zu werden",
    description: "Frank Marrenbach - CEO Althoff Hotel Collection",
  },
];

const Testimonial1 = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-24">
      <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="w-full">
            {TestiData.map((testiItem, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="w-full flex flex-col justify-center items-center"
                >
                  {/* <TestimonialSec
                    author={testiItem.title}
                    review={testiItem.description}
                  /> */}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial1;
