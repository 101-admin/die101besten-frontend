"use client";
import React, { useState, Suspense } from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_EDITION } from "@/lib/config/sanity";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HotelCategory, HotelCity } from "@/lib";

const DropdownContent = ({
  totalHotels,
  categories,
  cities,
}: {
  totalHotels: number;
  categories: HotelCategory[];
  cities: HotelCity[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  const updateSearchParams = (key: string, value: string) => {
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
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (value: string) => {
    updateSearchParams("search", value);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-16">
      <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-10">
        {/* <div className="flex items-center gap-4">
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
        </div> */}
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
          Die 101 besten Hotels{" "}
          <span className="text-[#B65033]">Deutschland</span>
        </h1>
        <div
          className={`w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6 ${
            DEFAULT_EDITION === "deutschland"
              ? "xl:grid-cols-3"
              : "xl:grid-cols-4"
          }`}
        >
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Ranking Edition
            </h3>
            <Select
              defaultValue={searchParams.get("edition") || ""}
              // onValueChange={(value) => updateSearchParams("edition", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Deutschland" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="deutschland">Deutschland</SelectItem>
                  <SelectItem value=" dachSüdtirol">
                    {" "}
                    DACH + Südtirol
                  </SelectItem>
                  <SelectItem value="schweiz">Schweiz</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div
            className={`w-full  flex-col justify-start items-baseline gap-1 ${
              DEFAULT_EDITION === "deutschland" ? "hidden" : "flex"
            }`}
          >
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Hotel Segment
            </h3>
            <Select
              defaultValue={searchParams.get("segment") || ""}
              onValueChange={(value) => updateSearchParams("segment", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="bittewählen">Bitte wählen</SelectItem>
                  <SelectItem value="leisure">Leisure</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Kategorie
            </h3>
            <Select
              defaultValue={searchParams.get("category") || ""}
              onValueChange={(value) => updateSearchParams("category", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Alle Kategorien" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="AlleKategorien">
                    Alle Kategorien
                  </SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category?._id} value={category?.value}>
                      {category?.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col justify-start items-baseline gap-1">
            <h3 className="text-[18px] font-montserrat font-semibold px-1">
              Stadt
            </h3>
            <Select
              defaultValue={searchParams.get("city") || ""}
              onValueChange={(value) => updateSearchParams("city", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Alle Städte" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alleStädte">Alle Städte</SelectItem>
                  {cities?.map((city) => (
                    <SelectItem key={city._id} value={city?.value}>
                      {city?.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="lg:w-full flex flex-col justify-start items-baseline lg:flex-row-reverse lg:justify-between lg:items-end my-4 lg:my-7 gap-5">
          <div className="flex justify-end items-center gap-4 w-full">
            <div className="w-full max-w-[300px] h-16 relative">
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
          <div className="w-full">
            <h4 className="font-montserrat font-normal text-[16px]">
              {totalHotels} {totalHotels === 1 ? "Hotel" : "Hotels"}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

const Dropdown = (props: {
  totalHotels: number;
  categories: HotelCategory[];
  cities: HotelCity[];
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DropdownContent {...props} />
    </Suspense>
  );
};

export default Dropdown;
