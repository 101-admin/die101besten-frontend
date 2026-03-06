"use client";
import React, { useState, Suspense } from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
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
import { useParams } from "next/navigation";
import { ColoredText } from "@/components/ui/ColoredText";
import NextLink from "@/components/NextLink";

const SecondaryDropdownContent = () => {
  const params = useParams();
  const locale = params.locale;
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("rankingCategory");
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
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
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5  gap-16">
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
          <ColoredText
            text={
              locale === "de"
                ? "Special Editions #Deutschland#"
                : "Special Editions #Germany#"
            }
          />
        </h1>

        {/* Default Choice */}
        {currentCategory == null && (
          <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-8">
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "Alphabetische Sortierung"
                : "Alphabetical Sorting"}
            </p>
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "»Editor’s Choice - Special Editions« ist eine besondere Kollektion erstklassiger Hotels, die bisher unsere Trouvaillen waren und nicht im Ranking vorhanden sind. Gleichzeitig sind sie in ihren eigenen Klassen herausragend. Sie passen aus verschiedenen Gründen nicht in die Methodik der 101 Besten und werden von renommierten Hospitality-Insidern nach anerkannten Kriterien ausgewählt."
                : "»Editor’s Choice – Special Editions« is a special collection of first-class hotels that have previously been our treasures and are not included in the ranking. At the same time, they are outstanding in their own classes. For various reasons, they do not fit into the 101 Best methodology and are selected by renowned hospitality insiders according to recognized criteria."}
            </p>
            <div className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8">
              {locale === "de" ? (
                <p>
                  Möchten Sie Teil der exklusiven »Editor’s Choice - Special
                  Editions« werden? Dann klicken Sie auf{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    „Jetzt bewerben“
                  </NextLink>{" "}
                  und senden uns direkt Ihre Informationen per E-Mail.
                </p>
              ) : (
                <p>
                  Would you like to be part of the exclusive “Editor’s Choice –
                  Special Editions”? Then click on{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    “Apply now”
                  </NextLink>{" "}
                  and send us your information directly by email.
                </p>
              )}
            </div>
          </div>
        )}

        {/* international Luxury Partner */}
        {currentCategory == "luxury" && (
          <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-8">
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "Alphabetische Sortierung"
                : "Alphabetical Sorting"}
            </p>
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "Ob Berge, Wälder, Seen oder Meere - die Natur bietet auch auf internationalem Terrain vielerorts die perfekte Kulisse für beste Hotels, ebenso wie faszinierende Städte. Wenn sich dazu exquisiter Service, hochklassige Kulinarik, besonderen Spa-Landschaften und eine unverwechselbare Architektur gesellen, ist Luxus auf höchstem Niveau garantiert."
                : "Whether mountains, forests, lakes or seas - in many places on the international terrain, nature offers the perfect backdrop for the best hotels, as well as fascinating cities. When combined with exquisite service, high-class cuisine, special spa landscapes and distinctive architecture, luxury at the highest level is guaranteed."}
            </p>
            <div className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8">
              {locale === "de" ? (
                <p>
                  Möchten Sie Teil der exklusiven »International Luxury Partner
                  - Special Editions« werden? Dann klicken Sie auf{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    „Jetzt bewerben“
                  </NextLink>{" "}
                  und senden uns direkt Ihre Informationen per E-Mail.
                </p>
              ) : (
                <p>
                  Would you like to be part of the exclusive “International
                  Luxury Partner - Special Editions”? Then click on{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    “Apply now”
                  </NextLink>{" "}
                  and send us your information directly by email.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Editor Choice */}
        {currentCategory == "editors-choice" && (
          <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-8">
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "Alphabetische Sortierung"
                : "Alphabetical Sorting"}
            </p>
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "»Editor’s Choice - Special Editions« ist eine besondere Kollektion erstklassiger Hotels, die bisher unsere Trouvaillen waren und nicht im Ranking vorhanden sind. Gleichzeitig sind sie in ihren eigenen Klassen herausragend. Sie passen aus verschiedenen Gründen nicht in die Methodik der 101 Besten und werden von renommierten Hospitality-Insidern nach anerkannten Kriterien ausgewählt."
                : "»Editor’s Choice – Special Editions« is a special collection of first-class hotels that have previously been our treasures and are not included in the ranking. At the same time, they are outstanding in their own classes. For various reasons, they do not fit into the 101 Best methodology and are selected by renowned hospitality insiders according to recognized criteria."}
            </p>
            <div className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8">
              {locale === "de" ? (
                <p>
                  Möchten Sie Teil der exklusiven »Editor’s Choice - Special
                  Editions« werden? Dann klicken Sie auf{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    „Jetzt bewerben“
                  </NextLink>{" "}
                  und senden uns direkt Ihre Informationen per E-Mail.
                </p>
              ) : (
                <p>
                  Would you like to be part of the exclusive “Editor’s Choice –
                  Special Editions”? Then click on{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    “Apply now”
                  </NextLink>{" "}
                  and send us your information directly by email.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Best New Hotel Openings */}
        {currentCategory == "new" && (
          <div className="w-full flex flex-col justify-start items-baseline gap-5 lg:gap-8">
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "Alphabetische Sortierung"
                : "Alphabetical Sorting"}
            </p>
            <p className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte">
              {locale === "de"
                ? "Die Hotellerie sorgt regelmäßig für völlig neue Eindrücke und Überraschungen. Der Gast ist neugierig und sucht die Abwechslung, Neueröffnungen bringen neue Impulse für Urlaubs- und Geschäftsreisende. Wo alte Konzepte nicht mehr dem Zeitgeist entsprechen, erfindet sich die Luxushotellerie immer wieder neu - zum Wohl des Gastes, auch über unsere Landesgrenzen hinaus."
                : "The hotel industry regularly provides completely new impressions and surprises. The guest is curious and looks for variety, new openings bring new impulses for holiday and business travelers. Where old concepts no longer correspond to the spirit of the times, the luxury hotel industry continues to reinvent itself - for the benefit of the guest, even beyond our national borders."}
            </p>
            <div className="font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte mb-8">
              {locale === "de" ? (
                <p>
                  Möchten Sie Teil der exklusiven »Best New Hotel Openings -
                  Special Editions« werden? Dann klicken Sie auf{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    „Jetzt bewerben“
                  </NextLink>{" "}
                  und senden uns direkt Ihre Informationen per E-Mail.
                </p>
              ) : (
                <p>
                  Would you like to be part of the exclusive “Best New Hotel
                  Openings – Special Editions”? Then click on{" "}
                  <NextLink
                    target="_blank"
                    href="mailto:board@i-sle.ch?subject=Bewerbung%20f%C3%BCr%20die%20101%20Special%20Editions"
                    className="font-bold underline hover:text-[#B65033]"
                  >
                    “Apply now”
                  </NextLink>{" "}
                  and send us your information directly by email.
                </p>
              )}
            </div>
          </div>
        )}

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
                <SelectValue
                  placeholder={locale === "de" ? "Deutschland" : "Germany"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="https://die101besten-frontend-de.vercel.app/special-editions">
                    {locale === "de" ? "Deutschland" : "Germany"}
                  </SelectItem>
                  <SelectItem value="https://die101besten-frontend-dach.vercel.app/special-editions">
                    {locale === "de" ? "DACH + Südtirol" : "DACH-region"}
                  </SelectItem>
                  <SelectItem value="https://die101besten-frontend-ch.vercel.app/special-editions">
                    {locale === "de" ? "Schweiz" : "Switzerland"}
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
                placeholder={locale === "de" ? "Suchen" : "Search"}
                className="w-full h-full border-2 border-black relative text-[16px] font-montserrat font-bold pl-14 placeholder:text-black uppercase outline-none focus:outline-none"
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
