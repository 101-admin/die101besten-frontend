import React from "react";
import UpcommingEvents from "./UpcommingEvents";
import PastEvents from "./PastEvents";
import { EventsApi } from "@/lib/services/api/events.api";
import type { EventCollection } from "@/lib";

interface EventCollectionProps extends EventCollection {
  locale: string;
}
const EventCollection = async ({ id, locale }: EventCollectionProps) => {

  
  const events = await EventsApi.getAllEvents(locale);
  // console.log(events , "Success events")
  return (
    <section id={id}>
      <UpcommingEvents events={events} />
      <PastEvents events={events} />
    </section>
  );
};

export default EventCollection;
