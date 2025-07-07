"use client";
import { MdOutlineMailOutline } from "react-icons/md";
import type { Footer } from "@/lib/types/navigation.types";
import Link from "next/link";
const Footer = ({ footer }: { footer: Footer[] }) => {
  const footerData = footer[0];

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-centefoor items-center py-10 lg:pt-20 pb-10 text-black">
      <div className="w-full flex flex-col justify-center items-center px-5 lg:px-16 xl:px-20 gap-16">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 relative mb-14">
          {/* Sec 1 */}
          <div className="w-full lg:w-[20%] flex justify-center lg:justify-start lg:items-baseline">
            <Link href={"/"}>
              <img
                className="max-w-[96px] max-h-[80.32px] w-full"
                src={`${footerData?.logo}`}
                alt=""
              />
            </Link>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {/* Sec 2 */}
            <div className="w-full flex flex-col justify-start items-baseline">
              <h1 className="font-gte font-medium text-[18px] mb-3 text-black">
                {footerData?.kontakt?.title}
              </h1>
              <p className="font-light font-gte text-[14px] text-start mb-10 text-black">
                {footerData?.kontakt?.description}
              </p>
              <Link
                target="_blank"
                href={`${footerData?.kontakt?.emailLink}`}
                className="flex items-center gap-3 group text-black hover:bg-gradient-to-l from-[#F49E6E] to-[#B64F32] hover:text-transparent hover:bg-clip-text cursor-pointer"
              >
                <MdOutlineMailOutline className="text-[22px] group-hover:text-[#B64F32]" />
                <h2 className="font-Montserrat font-bold text-[14px]">
                  {footerData?.kontakt?.emailText}
                </h2>
              </Link>
            </div>
            {/* Sec 3 */}
            <div className="w-full flex flex-col justify-start items-baseline text-black">
              <h1 className="font-gte font-medium text-[18px] mb-3">
                {footerData?.service?.title}
              </h1>
              <ul className="flex flex-col justify-start items-baseline gap-3">
                {footerData?.service?.links?.map((item, index) => {
                  return (
                    <div key={index}>
                      {item?.newTab ? (
                        <Link key={index} target="_blank" href={`${item?.url}`}>
                          <li className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </li>
                        </Link>
                      ) : (
                        <Link key={index} href={`${item?.url}`}>
                          <li className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </li>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* Sec 4 */}
            <div className="w-full flex flex-col justify-start items-baseline text-black">
              <h1 className="font-gte font-medium text-[18px] mb-3">
                {footerData?.quickLinks?.title}
              </h1>
              <ul className="flex flex-col justify-start items-baseline gap-3">
                {footerData?.quickLinks?.links?.map((item, index) => {
                  return (
                    <div key={index}>
                      {item?.newTab ? (
                        <Link key={index} target="_blank" href={`${item?.url}`}>
                          <li className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </li>
                        </Link>
                      ) : (
                        <Link key={index} href={`${item?.url}`}>
                          <li className="text-[14px] font-light font-gte  hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </li>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* Sec 5 */}
            <div className="w-full flex flex-col justify-start items-baseline text-black">
              <h1 className="font-gte font-medium text-[18px] mb-3">
                {footerData?.ausDer101Welt?.title}
              </h1>
              <ul className="flex flex-col justify-start items-baseline gap-3">
                {footerData?.ausDer101Welt?.links?.map((item, index) => {
                  return (
                    <div key={index}>
                      {item?.newTab ? (
                        <Link key={index} target="_blank" href={`${item?.url}`}>
                          <li className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </li>
                        </Link>
                      ) : (
                        <Link key={index} href={`${item?.url}`}>
                          <li className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </li>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center text-black">
          <div className="w-full flex justify-center items-center md:justify-start md:items-baseline">
            <h1 className="font-light font-gte text-[14px]">
              {footerData?.bottomSection?.copyright}
            </h1>
          </div>
          <div className="hidden md:flex gap-5 lg:gap-10">
            {footerData?.bottomSection?.legalLinks?.map((item, index) => {
              return (
                <div key={index}>
                  {item?.label === "Cookies" ? (
                    <Link href="#" data-cc="c-settings">
                      <div className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                        {item?.label}
                      </div>
                    </Link>
                  ) : (
                    <div>
                      {item?.newTab && (
                        <Link target="_blank" href={`${item?.url}`}>
                          <div className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </div>
                        </Link>
                      )}

                      {!item?.newTab && (
                        <Link key={index} href={`${item?.url}`}>
                          <div className="text-[14px] font-light font-gte   hover:text-[#B65033] cursor-pointer">
                            {item?.label}
                          </div>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
