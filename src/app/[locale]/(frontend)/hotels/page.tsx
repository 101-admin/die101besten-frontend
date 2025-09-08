import ComponentManager from "@/components/ComponentManager";
import { HotelsApi } from "@/lib";
import { DEFAULT_SEO } from "@/lib";
import type { AllHotelsPage } from "@/lib";
import { Metadata } from "next";
import React from "react";
import { setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const hotelData: AllHotelsPage = isEnabled
    ? await HotelsApi.getHotelPagePreview(locale)
    : await HotelsApi.getHotelPage(locale);

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

const Page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const { isEnabled } = await draftMode();
  const hotelPage = isEnabled
    ? await HotelsApi.getHotelPagePreview(locale)
    : await HotelsApi.getHotelPage(locale);
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
