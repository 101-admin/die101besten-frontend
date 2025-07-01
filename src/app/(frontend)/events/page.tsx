import React from 'react'
import { EventsApi } from '@/lib/services/api/events.api'
import ComponentManager from "@/components/ComponentManager";
const page = async() => {
  const eventsPage = await EventsApi.getEventsPage();
  return (
    <>
    <ComponentManager data={eventsPage?.components}/>
    </>
  )
}

export default page