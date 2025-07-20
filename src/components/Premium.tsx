import {
  HotelAchievement,
  HotelDetailsSection,
  CTAButton,
  SanityImage,
} from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { OptimizedImage } from "./ui/OptimizedImage";
// import { CiHeart } from "react-icons/ci";
// import { LuArrowUpFromLine } from "react-icons/lu";

interface PremiumProps extends HotelDetailsSection {
  name?: string;
  city?: string;
  country?: string;
  achievements?: HotelAchievement[];
  ctaButton?: CTAButton;
}
export default function Premium({
  description,
  image,
  brandImages,
  city,
  country,
  name,
  ctaButton,
  achievements,
}: PremiumProps) {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-5 lg:px-16 pb-5 lg:pb-10 pt-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="w-full flex flex-col justify-center items-center gap-10 ">
        <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-10">
          {/* Image Section */}
          <div className="relative">
            {image && (
              // <img
              //   className="w-full max-w-[500px] lg:w-[500px] h-[600px] object-cover"
              //   src={image?.url || ""}
              //   alt={image?.alt || ""}
              // />
              <OptimizedImage
                image={image as SanityImage}
                className="w-full max-w-[500px] lg:w-[500px] h-[600px] object-cover"
                width={500}
                height={600}
                priority
              />
            )}
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col w-full max-w-[500px]">
            {achievements && (
              <div className="w-full flex flex-wrap gap-2 mb-4">
                {achievements?.map((tag, index) => (
                  <div
                    key={index}
                    className="py-1 px-2 border-2 border-black rounded-xl font-montserrat font-bold text-xs leading-3 text-center uppercase"
                  >
                    {tag?.name}
                  </div>
                ))}
              </div>
            )}

            {city && (
              <h3 className="font-gte font-[350] text-[20px] lg:text-[24px] leading-[24px] sm:leading-[32px] mb-1">
                {country}, {city}
              </h3>
            )}
            {name && (
              <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-6">
                {name}
              </h1>
            )}

            {description && (
              <p className="font-gte font-[350] text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] mb-6 sm:mb-8">
                {description}
              </p>
            )}

            <div className="flex flex-col gap-4 mt-auto">
              {ctaButton && (
                <div className="w-full flex justify-start items-center h-20">
                  <Link
                    target="_blank"
                    className="max-w-[300px] w-full"
                    href={`${ctaButton?.url}`}
                  >
                    <button className="w-[300px] btn-secondary border-black text-black btn-secondary-hover-de">
                      {ctaButton?.text}
                    </button>
                  </Link>
                </div>
              )}

              {/* <div className="flex gap-4">
                <button className="flex items-center justify-center gap-2 w-28 sm:w-32 h-14 sm:h-16 font-montserrat font-semibold text-sm sm:text-base leading-6 tracking-normal hover:text-gray-600 transition-colors">
                  <LuArrowUpFromLine size={20} className="sm:w-6 sm:h-6" />
                  <span>{saveOrSplitButtons?.splitButton || "Teilen"}</span>
                </button>
                <button className="flex items-center justify-center gap-2 w-28 sm:w-32 h-14 sm:h-16 font-montserrat font-semibold text-sm sm:text-base leading-6 tracking-normal hover:text-gray-600 transition-colors">
                  <CiHeart size={20} className="sm:w-6 sm:h-6" />
                  <span>{saveOrSplitButtons?.saveButton || "Speichern"}</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
        {brandImages && (
          <div className="w-full flex flex-col justify-center item-center pt-16 sm:pt-24 md:pt-36">
            <div className="flex flex-wrap items-center justify-center lg:gap-16 gap-8 ">
              {brandImages?.map((brandImage, index) => (
                <div
                  key={index}
                  className="relative w-[180px] lg:w-[243.83px] h-[60px] lg:h-[80px]"
                >
                  {brandImage?.image && (
                    // <Image
                    //   src={brandImage?.image?.url || ""}
                    //   alt={brandImage?.image?.alt || ""}
                    //   fill
                    //   className="object-contain"
                    // />
                    <OptimizedImage
                      image={brandImage?.image as SanityImage}
                      className="object-contain"
                      width={180}
                      height={60}
                      fill
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
