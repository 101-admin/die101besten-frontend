import { HeroSlider } from "@/lib";
import React from "react";

const color = "white";

const Hero = ({ title, heroSection }: HeroSlider) => {
  return (
    <section
      style={{ backgroundImage: `url(${heroSection?.heroImage?.url})` }}
      className="w-full h-screen bg-cover bg-no-repeat pt-36  mb-7 relative  select-none"
    >
      <div className="container px-5 md:px-10 lg:px-14 xl:px-20">
        <div className="px-5 py-4 md:pl-10 md:py-7 lg:pl-14 lg:py-10 bg-[#FFFFFF66] backdrop-blur-md max-w-[697px] w-full">
          <h1 className="text-[30px] leading-[30px] font-normal font-ogg sm:text-[38px] sm:leading-[38px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[57px] mb-5 md:mb-10">
            {title}
          </h1>
          <button className="btn-secondary w-[232px] text-black border-black">
            {heroSection?.infoOverlay?.ctaButton?.text}
          </button>
        </div>
      </div>
      {/* FIXME: needs to be somewhere else -> own component */}

      {/* <div className="p-5 gap-4 fixed right-0 bottom-36 z-10 hidden lg:flex flex-col justify-center items-center bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] shadow-[0_8px_16px_0_rgba(0,0,0,0.16),0_16px_32px_0_rgba(0,0,0,0.16)] hover:scale-[1.05] active:scale-[1]  duration-200 hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M8.83317 20.8327C8.83317 19.452 9.95246 18.3327 11.3332 18.3327H12.9998C14.3805 18.3327 15.4998 19.452 15.4998 20.8327C15.4998 22.2134 14.3805 23.3327 12.9998 23.3327H11.3332C9.95246 23.3327 8.83317 22.2134 8.83317 20.8327Z"
            fill="white"
          />
          <path
            d="M11.3332 24.9993C9.95246 24.9993 8.83317 26.1186 8.83317 27.4993C8.83317 28.8801 9.95246 29.9993 11.3332 29.9993H12.9998C14.3805 29.9993 15.4998 28.8801 15.4998 27.4993C15.4998 26.1186 14.3805 24.9993 12.9998 24.9993H11.3332Z"
            fill="white"
          />
          <path
            d="M17.1665 14.166C17.1665 12.7853 18.2858 11.666 19.6665 11.666H21.3332C22.7139 11.666 23.8332 12.7853 23.8332 14.166C23.8332 15.5467 22.7139 16.666 21.3332 16.666H19.6665C18.2858 16.666 17.1665 15.5467 17.1665 14.166Z"
            fill="white"
          />
          <path
            d="M19.6665 18.3327C18.2858 18.3327 17.1665 19.452 17.1665 20.8327C17.1665 22.2134 18.2858 23.3327 19.6665 23.3327H21.3332C22.7139 23.3327 23.8332 22.2134 23.8332 20.8327C23.8332 19.452 22.7139 18.3327 21.3332 18.3327H19.6665Z"
            fill="white"
          />
          <path
            d="M17.1665 27.4993C17.1665 26.1186 18.2858 24.9993 19.6665 24.9993H21.3332C22.7139 24.9993 23.8332 26.1186 23.8332 27.4993C23.8332 28.8801 22.7139 29.9993 21.3332 29.9993H19.6665C18.2858 29.9993 17.1665 28.8801 17.1665 27.4993Z"
            fill="white"
          />
          <path
            d="M27.9998 11.666C26.6191 11.666 25.4998 12.7853 25.4998 14.166C25.4998 15.5467 26.6191 16.666 27.9998 16.666H29.6665C31.0472 16.666 32.1665 15.5467 32.1665 14.166C32.1665 12.7853 31.0472 11.666 29.6665 11.666H27.9998Z"
            fill="white"
          />
          <path
            d="M25.4998 20.8327C25.4998 19.452 26.6191 18.3327 27.9998 18.3327H29.6665C31.0472 18.3327 32.1665 19.452 32.1665 20.8327C32.1665 22.2134 31.0472 23.3327 29.6665 23.3327H27.9998C26.6191 23.3327 25.4998 22.2134 25.4998 20.8327Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3332 1.66602C9.95246 1.66602 8.83317 2.7853 8.83317 4.16602V4.99935L7.1665 4.99935C4.40508 4.99935 2.1665 7.23793 2.1665 9.99935L2.1665 31.666C2.1665 34.4274 4.40508 36.666 7.1665 36.666L33.8332 36.666C36.5946 36.666 38.8332 34.4274 38.8332 31.666L38.8332 9.99935C38.8332 7.23793 36.5946 4.99935 33.8332 4.99935H32.1665V4.16602C32.1665 2.7853 31.0472 1.66602 29.6665 1.66602C28.2858 1.66602 27.1665 2.7853 27.1665 4.16602V4.99935L13.8332 4.99935V4.16602C13.8332 2.7853 12.7139 1.66602 11.3332 1.66602ZM7.1665 8.33268C6.24603 8.33268 5.49984 9.07887 5.49984 9.99935L5.49984 31.666C5.49984 32.5865 6.24603 33.3327 7.1665 33.3327H33.8332C34.7536 33.3327 35.4998 32.5865 35.4998 31.666L35.4998 9.99935C35.4998 9.07888 34.7536 8.33268 33.8332 8.33268L7.1665 8.33268Z"
            fill="white"
          />
        </svg>
        <p className="text-center text-white font-montserrat font-bold uppercase text-[14px] leading-[1.3]">
          Events
          <br />
          ansehen
        </p>
        <div className="w-8 h-8 flex justify-center items-center absolute top-[-12px] left-[-12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clipPath="url(#clip0_10766_1242)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 1.39876e-06C7.16344 2.17128e-06 -2.17128e-06 7.16345 -1.39876e-06 16C-6.26248e-07 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 6.26248e-07 16 1.39876e-06Z"
                fill="#F43658"
              />
              <path
                d="M17.5996 22.4C17.5996 23.2837 16.8833 24 15.9996 24C15.116 24 14.3996 23.2837 14.3996 22.4C14.3996 21.5163 15.116 20.8 15.9996 20.8C16.8833 20.8 17.5996 21.5163 17.5996 22.4Z"
                fill="white"
              />
              <path
                d="M15.9996 17.6C16.8833 17.6 17.5996 16.8837 17.5996 16L17.5996 9.6C17.5996 8.71635 16.8833 8 15.9996 8C15.116 8 14.3996 8.71635 14.3996 9.6L14.3996 16C14.3996 16.8837 15.116 17.6 15.9996 17.6Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_10766_1242">
                <rect width="32" height="32" rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
