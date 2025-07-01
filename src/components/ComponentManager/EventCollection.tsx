import React from "react";
import UpcommingEvents from "./UpcommingEvents";
import PastEvents from "./PastEvents";
import { EventsApi } from "@/lib/services/api/events.api";
import type { EventCollection } from "@/lib";
const EventCollection = async ({ id }: EventCollection) => {
  const events = await EventsApi.getAllEvents();
  // console.log(events , "Success events")
  return (
    <section id={id}>
      <UpcommingEvents events={events} />
      <PastEvents events={events} />
    </section>
  );
};

export default EventCollection;
