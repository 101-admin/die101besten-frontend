import { HotelAchievement, CTAButton, SecondaryHeroSection } from "@/lib";
import Image from "next/image";
import Link from "next/link";
// import { CiHeart } from "react-icons/ci";
// import { LuArrowUpFromLine } from "react-icons/lu";

interface HotelOfTheYearProps extends SecondaryHeroSection {
  achievements?: HotelAchievement[];
  city?: string;
  name?: string;
  ctaButton?: CTAButton;
}
export default function HotelOfTheYear({
  brandImages,
  image,
  achievements,
  city,
  name,
  ctaButton,
}: HotelOfTheYearProps) {
  return (
    <section className="max-w-1440 mx-auto px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">
        {/* Left text */}
        <div className="max-w-[352px] lg:min-w-[352px] gap-2 lg:gap-[8px] lg:mt-16 mx-auto lg:mx-0 text-center lg:text-left">
          {achievements && (
            <div className="flex flex-wrap justify-center lg:justify-start lg:flex-row gap-1 mb-4">
              {achievements?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="py-1 px-2 border-2 border-black rounded-xl font-montserrat font-bold text-[12px] leading-[12px] text-center uppercase tracking-normal"
                  >
                    {item?.name}
                  </span>
                );
              })}
            </div>
          )}

          {city && (
            <h3 className="font-gte font-[350] text-[20px] lg:text-[24px] lg:leading-[32px] mb-1">
              {city}
            </h3>
          )}
          {name && (
            <h1 className="font-ogg font-[350] text-[32px] lg:text-[48px] lg:leading-[110%] mb-6">
              {name}
            </h1>
          )}

          <div className="mb-8 flex flex-col items-center lg:items-start gap-4">
            {ctaButton && (
              <Link target="_blank" href={`${ctaButton?.url}`} className="w-full max-w-[300px]">
                <button className="w-full  h-[64px] gap-[8px] py-[16px] px-[24px] bg-black text-white uppercase font-montserrat font-bold text-[16px] leading-[24px] text-center tracking-normal">
                  {ctaButton?.text}
                </button>
              </Link>
            )}

            {/* <div className="flex gap-4">
              <button className="flex items-center justify-center gap-2 w-[115px] h-[64px] font-montserrat font-semibold text-[16px] leading-[24px] tracking-normal ">
                <LuArrowUpFromLine size={24} />
                <span>{saveOrSplitButtons?.splitButton}</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-[115px] h-[64px] font-montserrat font-semibold text-[16px] leading-[24px] tracking-normal ">
                <CiHeart size={24} />
                <span>{saveOrSplitButtons?.saveButton}</span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="max-w-[960px] w-full lg:w-auto relative mx-auto lg:mx-0 px-4 lg:px-0">
          {image && (
            <Image
              src={image?.url || ""}
              alt={image?.alt || ""}
              width={960}
              height={600}
              className="object-cover w-full h-[600px]"
            />
          )}
        </div>
      </div>

      {/* images2*/}
      {brandImages && (
        <div className="flex flex-wrap items-center justify-center lg:gap-16 gap-8 mt-16 px-4 lg:px-16">
          {brandImages?.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-[180px] lg:w-[243.83px] h-[60px] lg:h-[80px]"
              >
                {item && (
                  <Image
                    src={item?.image?.url || ""}
                    alt={item?.image?.alt || ""}
                    width={180}
                    height={60}
                    className="w-full h-full"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
