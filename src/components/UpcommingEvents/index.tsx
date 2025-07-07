import React from 'react'
import UpcommingHero from './UpcommingHero'
import EventSlider from '../EventSlider'
import Form from '../Form'
import Adds from '../Adds'
import type { Event } from '@/lib'
const index = ({event}: {event: Event}) => {
  console.log(event , "event")

  return (
    <section className='w-full flex flex-col'>
        {
          event && (
            <UpcommingHero event={event}/>
          )
        }

       {
        event?.allEvents && (
          <EventSlider events={event?.allEvents}/>
        )
       }
        {
          event?.adds && (
            <Adds data={event?.adds}/>
          )
        }
        <Form/>
    </section>
  )
}

export default index