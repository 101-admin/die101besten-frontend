import React from 'react'
import { ColoredText } from '../ui/ColoredText'
import type {EventsHero} from '@/lib'
const EventHero = ({title}:EventsHero) => {
  return (
    <section className='w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-10 lg:pt-20 px-5 lg:px-16'>
        {
          title && (
            <h1 className='font-normal font-ogg text-[30px] leading-[30px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px]'><ColoredText text={title} /></h1>
          )
        }
    </section>
  )
}

export default EventHero