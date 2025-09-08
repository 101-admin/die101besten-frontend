import React from "react";
import { HomeApi } from "@/lib/services/api/home.api";
import ComponentManager from "@/components/ComponentManager";
import type { HomePage } from "@/lib";
import { DEFAULT_SEO } from "@/lib";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { setRequestLocale } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: any }) => {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const homeData: HomePage = isEnabled
    ? await HomeApi.getHomePagePreview(locale)
    : await HomeApi.getHomePage(locale);
  const metadata: Metadata = {
    title: homeData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description: homeData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: homeData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: homeData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        homeData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: homeData?.seo?.openGraphImage
        ? [homeData.seo.openGraphImage.url]
        : [],
    },
    robots: homeData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (homeData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: homeData.seo.canonicalUrl,
    };
  }

  return metadata;
};

export default async function Page({ params }: { params: any }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { isEnabled } = await draftMode();
  const homeData: HomePage = isEnabled
    ? await HomeApi.getHomePagePreview(locale)
    : await HomeApi.getHomePage(locale);
  // console.log(JSON.stringify(homeData, null, 2), "@step 1: home data");

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6">
        <ComponentManager data={homeData?.components} />
      </section>
    </>
  );
}
