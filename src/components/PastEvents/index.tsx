import React from 'react'
import EventSlider from '../EventSlider'
import Form from '../Form'
import EventsDetails from './EventsDetails'
import  PastHero from './PastHero'
import Adds from '../Adds'
import type { Event } from '@/lib'
const index = ({events}: {events: Event}) => {
  console.log(events , "Events")
  return (
    <section className='w-full flex flex-col'>
        {
          events?.youtubeVideo?.url && (
            <PastHero youtubeVideo={events?.youtubeVideo?.url}/>
          )
        }
        {
          events && (
            <EventsDetails events={events}/>
          )
        }
        {
          events?.allEvents && (
            <EventSlider events={events?.allEvents}/>
          )
        }
        {
          events?.adds && (
            <Adds data={events?.adds}/>
          )
        }
        <Form/>
    </section>
  )
}

export default index