"use client";
import React, { useState, Suspense } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const SecondaryDropdownContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const [value, setValue] = useState("deutschland");

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (value: string) => {
    updateSearchParams("search", value);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5 lg:px-16  gap-16">
      <div className="w-full flex flex-col justify-start items-baseline gap-5 ">
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
            Editors' Choice
          </h4>
        </div> */}
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
          Special Editions <span className="text-[#B65033]">Deutschland</span>
        </h1>
        <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8">
          Alphabetische Sortierung
        </p>
        <div className="w-full flex flex-col justify-start items-baseline md:flex-row md:justify-between md:items-end mt-4 lg:mt-7 gap-5">
          <div className="w-full max-w-full md:max-w-[310px] flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Edition
            </h3>
            <Select
              defaultValue=""
              onValueChange={(url) => {
                if (url) {
                  window.location.href = url;
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Deutschland" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="https://die-new.vercel.app/special-editions">
                    Deutschland
                  </SelectItem>
                  <SelectItem value="https://die101besten-frontend-dach-steel.vercel.app/special-editions">
                    DACH + Südtirol
                  </SelectItem>
                  <SelectItem value="https://die101besten-frontend-ch-eight.vercel.app/special-editions">
                    Schweiz
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end items-center gap-4 w-full">
            <div className="w-full max-w-full md:max-w-[310px] h-16 relative">
              <input
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  handleSearch(e.target.value);
                }}
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

const SecondaryDropdown = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SecondaryDropdownContent />
    </Suspense>
  );
};

export default SecondaryDropdown;
