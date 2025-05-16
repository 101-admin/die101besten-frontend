import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ArticleData from "@/Data/ArticleData";
const Articles = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-32">
      <div className="w-full flex flex-col justify-statrt items-baseline px-5 lg:px-16 xl:px-20">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          Hotelmomente -{" "}
          <span className="text-[#B65033]">
            Emotionen, Erlebnisse, Erzählungen
          </span>
        </h1>
        <p className="font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-Epilogue mb-8 w-full md:w-[60%]">
          Hier finden Sie aktuelle und ausgewählte Artikel, Kolumnen und
          Interviews rund um unser Hotelranking – direkt von den Machern und
          unserer Redaktion.
        </p>
        <div className="w-full flex flex-col justify-center items-center mb-7 md:mb-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent className="flex justify-start items-center w-full gap-8">
              {ArticleData.map((data) => {
                return (
                  <CarouselItem
                    key={data.id}
                    className="sm:basis-1/2 xl:basis-1/3  cursor-pointer group/show relative  w-full"
                  >
                    <div className="w-full ">
                      <img className="w-full" src={data.img} alt="" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full hidden group-hover/show:flex flex-col justify-start items-baseline bg-[#000000B2]">
                      <div className="w-full h-full flex flex-col justify-start items-baseline pt-20 sm:pt-5 lg:pt-44 pl-12 pr-10">
                        <h2 className="w-[113px] h-[24px] bg-gradient-to-r from-[#F49E6E] to-[#B64F32] text-center text-white rounded-lg text-[12px] font-Montserrat font-bold leading-[24px] mb-3">
                          {data.name}
                        </h2>
                        <p className="font-Epilogue font-normal text-[18px] md:text-[24px] text-white mb-3">
                          {data.para}
                        </p>
                        <button className="max-w-[300] w-full h-[64px] font-Montserrat font-bold text-[16px] text-white bg-gradient-to-r from-[#F49E6E] to-[#B64F32] leading-[24px] text-center hover:scale-[1.05] active:scale-[1] hover:bg-gradient-to-r hover:from-[#B64F32] hover:to-[#F49E6E] duration-200 hover:rounded-md">
                          WEITERLESEN
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute top-44 left-0 hidden md:group-hover:block">
              <CarouselPrevious />
            </div>
            <div className="absolute top-44 right-0 hidden md:group-hover:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="btn-secondary w-[250px] text-black border-black">
            ALLE ARTIKEL ANSEHEN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
