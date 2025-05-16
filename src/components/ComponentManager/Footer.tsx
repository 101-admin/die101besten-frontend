"use client";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:pt-20 pb-10">
      <div className="w-full flex flex-col justify-center items-center px-5 lg:px-16 xl:px-20">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 relative mb-14">
          {/* Sec 1 */}
          <div className="w-full flex justify-center sm:justify-start">
            <img
              className="max-w-[96px] max-h-[80.32px] w-full"
              src="/images/mainLogo2.svg"
              alt=""
            />
          </div>
          {/* Sec 2 */}
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-baseline">
            <h1 className="font-gte font-medium text-[18px] mb-3 text-[#2B3034]">
              Kontakt
            </h1>
            <p className="font-light font-gte text-[14px] text-center sm:text-start mb-10 text-[#2B3034]">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>
            <div className="flex items-center gap-3 text-[#2B3034]">
              <MdOutlineMailOutline className="text-[22px]" />
              <h2 className="font-Montserrat font-bold text-[14px]">
                Schreiben Sie uns
              </h2>
            </div>
          </div>
          {/* Sec 3 */}
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-baseline text-[#2B3034]">
            <h1 className="font-gte font-medium text-[18px] mb-3">Service</h1>
            <ul className="flex flex-col justify-center items-center sm:justify-start sm:items-baseline gap-3">
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                FAQ
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Partner werden
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Presse
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Sitemap
              </li>
            </ul>
          </div>
          {/* Sec 4 */}
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-baseline text-[#2B3034]">
            <h1 className="font-gte font-medium text-[18px] mb-3">
              Quick Links
            </h1>
            <ul className="flex flex-col justify-center items-center sm:justify-start sm:items-baseline gap-3">
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Ranking Deutschland
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Ranking Schweiz
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Ranking DACH-Region
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Special Editions
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Buch bestellen
              </li>
            </ul>
          </div>
          {/* Sec 5 */}
          <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-baseline text-[#2B3034]">
            <h1 className="font-gte font-medium text-[18px] mb-3">
              Aus der 101 Welt
            </h1>
            <ul className="flex flex-col justify-center items-center sm:justify-start sm:items-baseline gap-3">
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Club of Icons
              </li>
              <li className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
                Fine Hotels
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-between items-center text-[#2B3034] mt-10">
          <div className="w-full flex justify-center items-center md:justify-start md:items-baseline">
            <h1 className="font-light font-gte text-[14px]">
              &copy; Die 101 besten. All rights reserved.
            </h1>
          </div>
          <div className="hidden md:flex gap-5 lg:gap-10">
            <h1 className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
              Cookies
            </h1>
            <h1 className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
              Impressum
            </h1>
            <h1 className="text-[14px] font-light font-gte hover:underline hover:text-[#B65033] hover:scale-[1.09] duration-200 active:scale-[1] cursor-pointer">
              Datenschutz
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
