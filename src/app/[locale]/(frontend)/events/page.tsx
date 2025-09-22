import React from "react";
import { EventsApi } from "@/lib/services/api/events.api";
import ComponentManager from "@/components/ComponentManager";
import { DEFAULT_SEO } from "@/lib";
import { EventsPage } from "@/lib/types/events.types";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const eventsPage: EventsPage = isEnabled
    ? await EventsApi.getEventsPagePreview(locale)
    : await EventsApi.getEventsPage(locale);

  const metadata: Metadata = {
    title: eventsPage?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description:
      eventsPage?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: eventsPage?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: eventsPage?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        eventsPage?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: eventsPage?.seo?.openGraphImage
        ? [eventsPage.seo.openGraphImage.url]
        : [],
    },
    robots: eventsPage?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (eventsPage?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: eventsPage.seo.canonicalUrl,
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
  const eventsPage = isEnabled
    ? await EventsApi.getEventsPagePreview(locale)
    : await EventsApi.getEventsPage(locale);

  return (
    <>
      <ComponentManager
        data={eventsPage?.components}
        searchParams={searchParams}
        locale={locale}
      />
    </>
  );
};

export default Page;
