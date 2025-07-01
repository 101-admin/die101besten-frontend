import React from "react";
import UpcommingEvents from "@/components/UpcommingEvents/index";
import PastEvents from "@/components/PastEvents/index";
import { notFound } from "next/navigation";
import { EventsApi } from "@/lib/services";
import { DEFAULT_EDITION, DEFAULT_LANGUAGE, Hotel } from "@/lib";

export async function generateStaticParams() {
  const data = await EventsApi.getAllEvents({
    edition: DEFAULT_EDITION,
    language: DEFAULT_LANGUAGE,
  });
  return (
    data?.hotels?.map((hotel: Hotel) => ({
      slug: (hotel.slug as string) || "#",
    })) || []
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const event = await EventsApi.getEventsBySlug(slug);

  if (!event) {
    return notFound();
  }

  if (event?.startDate > new Date().toISOString()) {
    return (
      <>
        <UpcommingEvents event={event} />
      </>
    );
  }

  return (
    <>
      <PastEvents events={event} />
    </>
  );
};

export default page;
