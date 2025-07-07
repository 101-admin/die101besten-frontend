"use client";
import React, { useState, Suspense } from "react";
import { FiSearch } from "react-icons/fi";
// import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Edition from "@/Data/Edition";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const NavbarContent = ({ navbar }) => {
  const navbarData = navbar[0];
  // console.log(navbarData, "navbarData");
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [barBtn, setBarBtn] = useState(true);
  const [search, setSearch] = useState(false);
  const [displaySearch, setdisplaySearch] = useState(true);
  const [menu, setMenu] = useState(false);
  const [editionIndex, setEditionIndex] = useState(0);
  const [showEdition, setShowEdition] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    if (search) {
      setSearch(false);
      setMenu(false);
    } else {
      setSearch(true);
      setMenu(false);
      if (barBtn === false) {
        setBarBtn(true);
      }
    }
  };

  const handleNav = () => {
    if (barBtn) {
      setBarBtn(false);
      setSearch(false);
      setMenu(false);
    } else {
      setBarBtn(true);
      setSearch(false);
      setMenu(false);
    }
  };

  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (
      value === "AlleKategorien" ||
      value === "alleStädte" ||
      value === "bittewählen" ||
      !value
    ) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/hotels?search=${value}#anchor-ranking`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearchParams("search", displayText);
  };

  return (
    <>
      <section className="w-full flex justify-center items-center bg-[#000000] max-w-[1440px] mx-auto select-none">
        {/* Mobile Edition Section Desin */}
        <div
          onClick={() => setMenu(false)}
          className="w-full flex lg:hidden text-white"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Edition.map((data, idx) => {
                return (
                  <CarouselItem
                    key={idx}
                    className="flex flex-col justify-center items-center"
                  >
                    <div
                      onClick={() => setEditionIndex(idx)}
                      key={idx}
                      className="relative py-4 group flex flex-col justify-center items-center cursor-pointer"
                    >
                      {/* <div
                        className={`w-full h-1 [clip-path:polygon(0%_50%,45%_0%,55%_0%,100%_50%,55%_100%,45%_100%)] bg-white absolute top-[0px] rounded-full group-hover:block ${
                          editionIndex === idx ? "block" : "hidden"
                        }`}
                      ></div> */}
                      <div
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[4px] border-t-white group-hover:block ${
                          editionIndex === idx ? "block" : "hidden"
                        }`}
                      ></div>
                      <h2 className="font-light font-gte text-[18px]">
                        {data.title}
                      </h2>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        {/* Destop Edition Section Desin */}
        <div
          className={`hidden lg:flex font-gte font-[350] w-full justify-center items-center bg-black px-16 absolute z-30 top-0 duration-500 ${
            showEdition
              ? "h-[164px] overflow-hidden"
              : "h-[52px] overflow-hidden"
          }   `}
        >
          <div className="w-full h-full max-w-[616px] flex justify-between items-start pt-4">
            {Edition.map((data, idx) => {
              return (
                <div
                  onMouseOver={() => setShowEdition(true)}
                  onMouseOut={() => setShowEdition(false)}
                  onClick={() => setEditionIndex(idx)}
                  key={idx}
                  className="relative group flex flex-col justify-center items-center cursor-pointer w-full"
                >
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[4px] border-t-white group-hover:block ${
                      editionIndex === idx ? "block" : "hidden"
                    }`}
                  ></div>
                  <h2
                    className={`font-light font-gte text-[18px] text-white ${
                      editionIndex === idx
                        ? "text-opacity-100"
                        : "text-opacity-60"
                    }`}
                  >
                    {data.title}
                  </h2>
                  <div
                    className={`duration-500 group-hover:flex py-3  ${
                      editionIndex === idx ? "flex" : "hidden"
                    } `}
                  >
                    <img src={data.img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <header className="w-full sticky top-0 lg:mt-[52px] z-20 max-w-[1920px] mx-auto select-none">
        {/* Mobile Navbar  */}

        <nav className="w-full flex flex-col lg:hidden justify-center items-center py-2 relative duration-200 bg-white">
          <div
            onClick={() => setMenu(false)}
            className="flex justify-between items-center w-full px-4 mb-5"
          >
            <div>
              <button onClick={handleSearch}>
                <FiSearch
                  className={`text-[20px] ${
                    search ? "text-[#B64F32]" : "text-black"
                  }`}
                />
              </button>
            </div>

            <Link onClick={() => setBarBtn(true)} href="/">
              <div className="flex">
                <img
                  className="max-w-[83.78px]"
                  src={`${navbarData?.logo}`}
                  alt="MAIN LOGO"
                />
              </div>
            </Link>

            <button onClick={handleNav}>
              {barBtn ? (
                <div className="flex justify-center items-center border-2 border-black px-[10px] py-[6px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8L21 8C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6L3 6Z"
                      fill="black"
                    />
                    <path
                      d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L3 11Z"
                      fill="black"
                    />
                    <path
                      d="M2 17C2 16.4477 2.44772 16 3 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17Z"
                      fill="black"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex justify-center items-center border-2 border-black px-[10px] py-[6px]">
                  <AiOutlineClose className="text-[25px]" />
                </div>
              )}
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <form
              className={`w-full  justify-center items-center ${
                search ? "flex " : "hidden"
              }`}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                onChange={(e) => setDisplayText(e.target.value)}
                value={displayText}
                className="w-[60%] h-8  border-black border-2 placeholder:text-black pl-3 py-5 font-gte outline-none"
                placeholder={navbarData?.utilities?.search?.placeholder}
              />
              <button className="w-[15%] h-[43px] p-5 bg-black text-white flex justify-center items-center">
                <FiSearch className="text-[30px]" />
              </button>
            </form>
          </div>
          <div
            className={`flex flex-col absolute right-0 py-3 top-[80px] justify-start items-center z-10 duration-100 bg-white overflow-y-auto max-h-[calc(100vh-80px)] ${
              barBtn ? "w-0 " : "w-full"
            }`}
          >
            <ul className="flex flex-col w-full gap-4">
              {navbarData?.mainMenu?.map((navitem, index) => {
                const { label, url, hasSubmenu } = navitem;
                return (
                  <div
                    className="w-full flex justify-start items-baseline"
                    key={index}
                  >
                    {hasSubmenu ? (
                      <li
                        onClick={() => {
                          setMenu(!menu);
                        }}
                        className="font-gte mt-3 w-full px-3 text-[18px] uppercase font-[350] leading-[24px] border-b border-black pb-2 hover:text-[#B64F32] hover:border-[#B64F32]"
                      >
                        <div onClick={scrollToTop}>{label}</div>
                      </li>
                    ) : (
                      <Link
                        className="w-full flex justify-start items-baseline"
                        onClick={() => setBarBtn(true)}
                        href={`${url}`}
                      >
                        <li className="font-gte mt-3 w-full px-3 text-[18px] uppercase font-[350] leading-[24px] border-b border-black pb-2 hover:text-[#B64F32] hover:border-[#B64F32]">
                          {label}
                        </li>
                      </Link>
                    )}
                  </div>
                );
              })}
              {/* <button className="w-1/2 md:w-1/3 bg-black text-white flex justify-center items-center py-2 font-bold font-montserrat active:scale-95">
              Login
            </button> */}
            </ul>
            <div
              onMouseOver={() => setMenu(true)}
              className={`w-full bg-[#F9F8FA] py-6 md:py-8 lg:py-12 flex flex-col justify-center items-center ${
                menu ? "flex  lg:hidden" : "hidden"
              }`}
            >
              {navbarData?.mainMenu?.map((navitem, index) => {
                const { hasSubmenu, submenu } = navitem;
                return (
                  <div
                    className="w-full max-w-[1000px] px-5 sm:px-10 md:px-14 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                    key={index}
                  >
                    {hasSubmenu &&
                      submenu?.columns?.map((navitem, index) => {
                        const { columnTitle, links } = navitem;
                        return (
                          <div
                            key={index}
                            className="w-full max-w-[220px] flex flex-col justify-start items-baseline gap-4"
                          >
                            <span className="text-[16px] font-gte font-medium ">
                              {columnTitle}
                            </span>
                            {links?.map((navitem, index) => {
                              return (
                                <Link
                                  href={`${navitem?.url}`}
                                  onClick={() => setBarBtn(true)}
                                  key={index}
                                  className="text-[14px] font-gte font-light hover:text-[#B65033]"
                                >
                                  {navitem?.label}
                                </Link>
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Display Navbar */}
        <nav className="w-full hidden lg:flex justify-between items-center self-center justify-self-center h-[112px] px-6 duration-200 bg-white">
          <div className="flex items-center gap-10 w-1/6">
            <Link href="/">
              <div className="flex">
                <img
                  className="max-w-[83.78px]"
                  src={`${navbarData?.logo}`}
                  alt="navbar logo"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center w-4/6 h-full">
            {navbarData?.mainMenu?.map((navitem, index) => {
              const { label, url, hasSubmenu } = navitem;
              return (
                <div className="h-full" key={index}>
                  {hasSubmenu ? (
                    <h1
                      onMouseOver={() => setMenu(true)}
                      onMouseOut={() => setMenu(false)}
                      className={`text-[16px] font-bold font-montserrat uppercase leading-[24px] hover:text-[#B64F32] cursor-pointer h-full flex justify-center items-center px-4 ${
                        menu === true
                          ? "text-[#B64F32] bg-[#F9F8FA]"
                          : "text-black bg-transparent"
                      }`}
                    >
                      {label}
                    </h1>
                  ) : (
                    <Link href={`${url}`}>
                      <button className="text-[16px] h-full flex justify-center items-center font-bold font-montserrat uppercase leading-[24px] hover:text-[#B64F32] px-4 cursor-pointer">
                        {label}
                      </button>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end gap-4 w-1/6">
            <div
              className={`flex h-10 items-center border-black  ${
                displaySearch ? "border-none" : "border-2"
              }`}
            >
              <button
                onClick={() => {
                  setdisplaySearch(false);
                }}
                className={`flex h-full px-3 justify-center items-center  ${
                  displaySearch
                    ? "hover:text-[#B64F32] cursor-pointer"
                    : "hover:none cursor-auto"
                } `}
              >
                <FiSearch className="text-[20px]" />
              </button>
              <div
                className={`w-full relative h-full ${
                  displaySearch ? "hidden" : "flex"
                }`}
              >
                <form className="h-full" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    onChange={(e) => setDisplayText(e.target.value)}
                    value={displayText}
                    placeholder={navbarData?.utilities?.search?.placeholder}
                    className="h-full placeholder:text-black text-[12px] font-bold font-montserrat outline-none  pl-[-20px] pr-10"
                  />
                </form>
                <button
                  onClick={() => {
                    setdisplaySearch(true);
                  }}
                  className={`absolute right-2 top-0 h-full  ${
                    displaySearch
                      ? "hover:none cursor-auto"
                      : "hover:text-[#B64F32] cursor-pointer"
                  } `}
                >
                  <IoClose className="text-[20px] font-bold" />
                </button>
              </div>
            </div>
            {/* <div className="gap-4 flex">
              <button className="font-montserrat font-bold text-[12px] uppercase py-2 px-3 max-h-7 leading-3 bg-black text-white cursor-pointer">
                Login
              </button>

              <select className="font-bold appearance-none font-montserrat text-[12px] uppercase py-1 px-3 max-h-7 leading-3 border-2 border-black cursor-pointer">
                {navbarData?.utilities?.languageSelector?.languages?.map(
                  (lang, index) => {
                    return (
                      <option key={index} value={lang?.code}>
                        {lang?.label}
                      </option>
                    );
                  }
                )}
              </select>
            </div> */}
          </div>
        </nav>
        <div
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
          className={`absolute w-full bg-[#F9F8FA] py-6 md:py-8 lg:py-12 flex flex-col justify-center items-center  ${
            menu ? "lg:flex hidden" : "hidden"
          }`}
        >
          {navbarData?.mainMenu?.map((navitem, index) => {
            const { hasSubmenu, submenu } = navitem;
            return (
              <div
                className="w-full max-w-[1000px] px-5 sm:px-10 md:px-14 lg:px-0 flex flex-wrap justify-center items-start  gap-10"
                key={index}
              >
                {hasSubmenu &&
                  submenu?.columns?.map((navitem, index) => {
                    const { columnTitle, links } = navitem;
                    return (
                      <div
                        key={index}
                        className="w-full max-w-[220px] flex flex-col justify-start items-baseline gap-4"
                      >
                        <span className="text-[16px] font-gte font-medium ">
                          {columnTitle}
                        </span>
                        {links?.map((navitem, index) => {
                          return (
                            <Link
                              href={`${navitem?.url}#${navitem?.id}`}
                              key={index}
                              className="text-[14px] font-gte font-light hover:text-[#B65033]"
                            >
                              {navitem?.label}
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
};

const Navbar = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarContent {...props} />
    </Suspense>
  );
};

export default Navbar;
