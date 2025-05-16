import React from "react";
import { cn } from "@/lib/utils";
import type {
  AboutComponent,
  HomeComponent,
  HotelPageComponent,
  PartnersComponent,
  BlogComponent,
  SpecialEditionHotelsPageComponent,
} from "@/lib";

import Quote from "./Quote";
// import Hero from "./Hero";
import SuccessStory from "./SuccessStory";
import PIctureSection2 from "./PIctureSection2";
import Events from "./Events";
import DrPeter from "./DrPeter";
import HotelsDetail from "./HotelsDetail";
import SpecialEdition from "./SpecialEdition";
import Articles from "./Articles";
import HotelInfo from "./HotelInfo";
import InstagramPost from "./InstagramPost";
import Form from "./Form";
import Brands from "./Brands";
import NextHotel from "./NextHotel";
import AboutHero from "./AboutHero";
import Testimonial1 from "./Testimonial1";
import BestHotel from "./BestHotel";
import BoardMember from "./BoardMember";
import Principles from "./Principles";
import ShapeFuture from "./ShapeFuture";
import { PortableText } from "@/lib/components/PortableText";
import { HotelsSlider } from "./HotelsSlider";
import PictureSection1 from "./PictureSection1";
import Location from "./Location";
import RelyUs from "./RelyUs";
import HotelCollection from "./HotelCollection";
import AllHotelSlider from "./AllHotelSlider";
import Image1 from "../Image1";
import PageTitle from "./PageTitle";
import StrategischePartner from "./StrategischePartner";
import MedienPartner from "./MedienPartner";
import PartnerSection from "./PartnerSection";
import WerdePartner from "./WerdePartner";
import BlogTitle from "./BlogTitle";
import BlogSection from "./BlogSection";
import HotelCategories from "./HotelCategories";

const components = new Map();
// components.set("heroSlider", Hero);
components.set("partnerLogo", Brands);
components.set("textQuote", Quote);
components.set("businessLeisure", NextHotel);
components.set("rankingMitRelevanz", PIctureSection2);
components.set("specialEdition", SpecialEdition);
components.set("101Events", Events);
components.set("imageQuote", DrPeter);
components.set("exclusiveEvents", HotelsDetail);
components.set("newsletter", Form);
components.set("hotelmomente", Articles);
components.set("dieInstagram", InstagramPost);
components.set("dasBush", HotelInfo);
components.set("successStory", SuccessStory);
components.set("hotels", HotelsSlider);
components.set("mabstab", PictureSection1);
components.set("location", Location);
components.set("imageSection", Image1);
// about components
components.set("heroAbout", AboutHero);
components.set("utr", RelyUs);
components.set("testimonials", Testimonial1);
components.set("dieBesten", BestHotel);
components.set("boardofDas", BoardMember);
components.set("principles", Principles);
components.set("shapingFuture", ShapeFuture);
components.set("portableText", PortableText);

// All Hotels Components
components.set("hotelCollection", HotelCollection);
components.set("allHotelsSlider", AllHotelSlider);

// Special Edition Hotels page
components.set("specialHotels", HotelCategories);

// partners page

components.set("pageTitle", PageTitle);
components.set("strategischePartner", StrategischePartner);
components.set("medienPartner", MedienPartner);
components.set("partner", PartnerSection);
components.set("werde101", WerdePartner);

// Blog page
components.set("blogPageTitle", BlogTitle);
components.set("blogCollection", BlogSection);

export const getSectionComponent = (blockType: string) => {
  const section = components.get(blockType);
  if (!section) {
    const Section = () =>
      React.createElement("div", null, `Section ${blockType} not found`);
    Section.displayName = "UnknownSectionComponent";
    return Section;
  }
  return section;
};

const BlockManager = ({
  data,
  wrapperClass,
  searchParams,
}: {
  data?:
    | HomeComponent[]
    | AboutComponent[]
    | HotelPageComponent[]
    | PartnersComponent[]
    | BlogComponent[]
    | SpecialEditionHotelsPageComponent[];
  wrapperClass?: string;
  searchParams?: any;
}) => {
  return (
    <div className={cn(`flex flex-col w-full`, wrapperClass)}>
      {data?.map(
        (
          item:
            | HomeComponent
            | AboutComponent
            | HotelPageComponent
            | PartnersComponent
            | BlogComponent
            | SpecialEditionHotelsPageComponent,
          index: number
        ) => {
          const Compnent = getSectionComponent(item._type);
          const isFirst = index === 0;
          const isLast = index === data.length - 1;

          // Add specific props based on the component type
          const additionalProps = {};

          return (
            <>
              <Compnent
                key={index}
                spacing={!isFirst && !isLast}
                searchParams={searchParams}
                {...item}
                {...additionalProps}
              />
            </>
          );
        }
      )}
    </div>
  );
};

export default BlockManager;
