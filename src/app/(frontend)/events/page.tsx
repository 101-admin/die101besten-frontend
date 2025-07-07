import React from "react";
import { EventsApi } from "@/lib/services/api/events.api";
import ComponentManager from "@/components/ComponentManager";
import { DEFAULT_SEO } from "@/lib";
import { EventsPage } from "@/lib/types/events.types";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const eventsPage: EventsPage = await EventsApi.getEventsPage();

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

const Page = async ({ searchParams }: { searchParams: any }) => {
  const eventsPage = await EventsApi.getEventsPage();

  return (
    <>
      <ComponentManager
        data={eventsPage?.components}
        searchParams={searchParams}
      />
    </>
  );
};

export default Page;
