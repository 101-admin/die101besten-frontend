import ComponentManager from "@/components/ComponentManager";
import { HotelsApi } from "@/lib";
import { DEFAULT_SEO } from "@/lib";
import type { AllHotelsPage } from "@/lib";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const hotelData: AllHotelsPage = await HotelsApi.getHotelPage();

  const metadata: Metadata = {
    title: hotelData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description: hotelData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: hotelData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: hotelData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        hotelData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: hotelData?.seo?.openGraphImage
        ? [hotelData.seo.openGraphImage.url]
        : [],
    },
    robots: hotelData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (hotelData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: hotelData.seo.canonicalUrl,
    };
  }

  return metadata;
}

const Page = async ({ searchParams }: { searchParams: any }) => {
  const hotelPage = await HotelsApi.getHotelPage();
  const queryParams = await searchParams;

  console.log(hotelPage, "@hotel page");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 ">
      <ComponentManager
        data={hotelPage?.components}
        searchParams={queryParams}
      />
      {/* <Hero />
      <Dropdown />
      <Hotels hotels={hotels} />
      <SpecialEdition />
      <InstagramPost />
      <Form />
      <Footer /> */}
    </section>
  );
};

export default Page;
