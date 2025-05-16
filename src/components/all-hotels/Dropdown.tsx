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
const Dropdown = () => {
  const [seachValue, setSeachValue] = useState("");
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center px-5 lg:px-16  gap-16">
      <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-10">
        <div className="flex items-center gap-4">
          <h4 className="font-normal font-montserrat text-[14px]">
            Edition Deutschland Ranking
          </h4>
          <MdKeyboardArrowRight className="text-[24px]" />
          <h4 className="font-normal font-montserrat text-[14px]">
            Alle Kategorien
          </h4>
          <MdKeyboardArrowRight className="text-[24px]" />
          <h4 className="font-normal font-montserrat text-[14px]">
            Alle Städte
          </h4>
        </div>
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          Die 101 besten Hotels{" "}
          <span className="text-[#B65033]">Deutschland</span>
        </h1>
        <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Ranking Edition
            </h3>
            <Select>
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
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Kategorie
            </h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alleKategorien">
                    Alle Kategorien
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Stadt
            </h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alleStädte">Alle Städte</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Weiterer Filter
            </h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="bittewählen">Bittewählen</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="lg:w-full flex flex-col justify-start items-baseline lg:flex-row-reverse lg:justify-between lg:items-end mt-4 lg:mt-7 gap-5">
          <div className="flex justify-end items-center gap-4 w-full">
            <div className="w-full max-w-[300px] h-16 relative">
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
            <button className="btn-secondary w-16 text-black border-black h-16">
              <img src="/Logos/SeachLogo.svg" alt="" />
            </button>
          </div>
          <div className="w-full">
            <h4 className="font-montserrat font-normal text-[16px]">
              12 von 101
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
