"use client";
import React, { useState } from "react";
import { SanityImage } from "@/lib";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { ColoredText } from "../ui/ColoredText";

const SingleMember = ({
  image,
  role,
  name,
  description,
  email,
  phone,
  readmore,
  hoverColor,
  title,
}: {
  image?: SanityImage;
  role?: string;
  name?: string;
  description?: string;
  email?: string;
  phone?: string;
  readmore?: string;
  hoverColor?: string;
  title?: string;
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      {/* <button >click her</button> */}

      <div
        onClick={() => setShowPopUp(true)}
        className="w-full flex flex-col justify-start items-baseline gap-5 group cursor-pointer group"
      >
        <div className="flex w-full relative">
          <img
            className="object-top object-cover grayscale group-hover:grayscale-0 h-[230px] w-[230px]"
            src={`${image?.url}`}
            alt={`${image?.alt}`}
          />
          <div
            className={`w-5 h-5 border-2 ${
              hoverColor == "white"
                ? "border-white text-white"
                : "border-black text-black"
            } absolute top-3 rounded-full  justify-center items-center font-bold right-3 hidden group-hover:flex`}
          >
            i
          </div>
        </div>

        <div className="flex flex-col justify-start items-baseline gap-4">
          <div>
            <p className="font-gte font-light text-[16px]">{role}</p>
            <h3 className="font-gte font-bold text-[20px]">{name}</h3>
          </div>
          <div>
            <p className="font-gte font-[350] text-[16px] leading-[20px]">
              {description?.substring(0, 50)}...
            </p>
            <button className="font-bold font-montserrat text-[12px] group-hover:text-[#B65033]">
              {readmore}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-screen h-screen z-50 bg-[black] bg-opacity-25 backdrop-blur-[8px] flex justify-center items-center fixed top-0 left-0 px-5 ${
          showPopUp ? "flex" : "hidden"
        }`}
      >
        <div className="max-w-[1300px] flex flex-col w-full bg-white p-7 sm:p-9 md:p-12 lg:p-16 gap-6 lg:gap-12">
          <div className="w-full flex justify-between items-center mb-5">
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
              <ColoredText text={title} />
            </h1>
            <div
              onClick={() => setShowPopUp(false)}
              className="flex justify-center items-center w-16 h-16 cursor-pointer"
            >
              <IoCloseOutline className="text-black text-[24px] " />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 lg:gap-12 sm:flex-row sm:justify sm:items-center">
            <div className="flex w-full max-w-[276px]">
              <img
                className="w-[276px] h-[360px]"
                src={`${image?.url}`}
                alt={`${image?.alt}`}
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full sm:justify-start sm:items-baseline">
              <h3 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[34px]  lg:text-[38px]">
                {name}
              </h3>
              <p className="font-gte font-[350] text-[16px] lg:text-[24px]">
                {role}
              </p>
              <div className="hidden sm:flex flex-col mt-5">
                <p className="font-gte font-[350] text-[16px] lg:text-[24px] leading-[20px] lg:leading-[32px]">
                  {description}
                </p>

                <div className="w-full flex flex-col justify-start items-baseline mt-5 gap-1">
                  {email && (
                    <div className="flex items-center gap-2">
                      <MdOutlineMailOutline className="text-black text-[16px] lg:text-[24px]" />
                      <p className="font-gte font-[350] text-[16px] lg:text-[24px]">
                        {email}
                      </p>
                    </div>
                  )}

                  {phone && (
                    <div className="flex items-center gap-2">
                      <FiPhone className="text-black text-[16px] lg:text-[24px]" />
                      <p className="font-gte font-[350] text-[16px] lg:text-[24px]">
                        {phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMember;
