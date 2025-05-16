"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SecondaryDropdown = () => {
  const [seachValue, setSeachValue] = useState("");
  const [value, setValue] = useState("deutschland");
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5 lg:px-16  gap-16">
      <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-10">
        {/* <div className="flex items-center gap-4">
          <h4 className="font-normal font-montserrat text-[14px]">
            Edition Deutschland
          </h4>
          <MdKeyboardArrowRight className="text-[24px]" />
          <h4 className="font-normal font-montserrat text-[14px]">
            Special Editions
          </h4>
          <MdKeyboardArrowRight className="text-[24px]" />
          <h4 className="font-normal font-montserrat text-[14px]">
            Editors’ Choice
          </h4>
        </div> */}
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          Special Editions <span className="text-[#B65033]">Deutschland</span> -
          Editors’ Choice
        </h1>
        <div className="w-full flex flex-col justify-start items-baseline md:flex-row md:justify-between md:items-end mt-4 lg:mt-7 gap-5">
          <div className="w-full max-w-full md:max-w-[310px] flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Edition
            </h3>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger>
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="deutschland">Deutschland</SelectItem>
                  <SelectItem value="sanana">Schweiz</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end items-center gap-4 w-full">
            <div className="w-full max-w-full md:max-w-[310px] h-16 relative">
              <input
                value={seachValue}
                onChange={(e) => setSeachValue(e.target.value)}
                type="text"
                placeholder="Suchen"
                className="w-full h-full border-2 border-black relative text-[16px] font-montserrat font-bold pl-14 placeholder:text-black uppercase"
              />
              <div className="absolute left-4 top-5 text-[24px]">
                <LuSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryDropdown;
