import { HotelAchievement, HotelDetailsSection } from "@/lib";
import Image from "next/image";
import Link from "next/link";
// import { CiHeart } from "react-icons/ci";
// import { LuArrowUpFromLine } from "react-icons/lu";

interface PremiumProps extends HotelDetailsSection {
  name?: string;
  city?: string;
  country?: string;
  achievements?: HotelAchievement[];
}
export default function Premium({
  description,
  image,
  brandImages,
  city,
  ctaButton,
  name,
  // saveOrSplitButtons,
  achievements,
}: PremiumProps) {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-5 lg:px-16 pt-8 sm:pt-12">
      <div className="w-full flex flex-col justify-center items-center gap-10 pt-16 md:pt-32 pb-16 md:pb-32">
        <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-10">
          {/* Image Section */}
          <div className="relative">
            {image && (
              <img
                className="w-full max-w-[500px] h-[600px] object-cover"
                src={image?.url || ""}
                alt={image?.alt || ""}
              />
            )}
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col w-full max-w-[500px]">
            {achievements && (
              <div className="flex flex-wrap gap-2 mb-4">
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
              <h3 className="font-gte font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-7 mb-1">
                {city}
              </h3>
            )}
            {name && (
              <h1 className="font-ogg font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-normal lg:leading-[110%] mb-6">
                {name}
              </h1>
            )}

            {description && (
              <p className="font-gte text-sm sm:text-base lg:text-lg leading-6 font-light mb-6 sm:mb-8">
                {description}
              </p>
            )}

            <div className="flex flex-col gap-4 mt-auto">
              {ctaButton && (
                <Link
                  className="max-w-[300px] w-full"
                  href={`${ctaButton?.url}`}
                >
                  <button className="w-[300px] btn-secondary border-black text-black btn-secondary-hover-de">
                    {ctaButton?.text || "Zur Buchung"}
                  </button>
                </Link>
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
        <div className="w-full flex flex-col justify-center item-center pt-16 sm:pt-24 md:pt-36 lg:pt-44">
          {brandImages && (
            <div className="flex flex-wrap items-center justify-center lg:gap-16 gap-8 ">
              {brandImages?.map((brandImage, index) => (
                <div
                  key={index}
                  className="relative w-[180px] lg:w-[243.83px] h-[60px] lg:h-[80px]"
                >
                  {brandImage && (
                    <Image
                      src={brandImage?.url || ""}
                      alt={brandImage?.alt || ""}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
