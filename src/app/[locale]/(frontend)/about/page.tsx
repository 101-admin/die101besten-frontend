import ComponentManager from "@/components/ComponentManager";
import { AboutApi } from "@/lib/services/api/about.api";
import { DEFAULT_SEO } from "@/lib";
import type { AboutPage } from "@/lib";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import React from "react";
import { setRequestLocale } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: any;
}): Promise<Metadata> => {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const aboutData: AboutPage = isEnabled
    ? await AboutApi.getAboutPagePreview(locale)
    : await AboutApi.getAboutPage(locale);
  const metadata: Metadata = {
    title: aboutData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description: aboutData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: aboutData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: aboutData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        aboutData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: aboutData?.seo?.openGraphImage
        ? [aboutData.seo.openGraphImage.url]
        : [],
    },
    robots: aboutData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (aboutData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: aboutData.seo.canonicalUrl,
    };
  }

  return metadata;
};

const Page = async ({ params }: { params: any }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const { isEnabled } = await draftMode();
  const aboutPage = isEnabled
    ? await AboutApi.getAboutPagePreview(locale)
    : await AboutApi.getAboutPage(locale);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <ComponentManager data={aboutPage?.components} />
    </section>
  );
};

export default Page;
