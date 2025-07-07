import React from 'react'

const PastHero = ({youtubeVideo}: {youtubeVideo: string}) => {
  return (
    <div className="w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px] xl:h-[1080px] max-w-[1920px] mx-auto flex justify-center items-center mb-10">
      <iframe
      className='w-full h-full'
        src={`${youtubeVideo}`}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default PastHero
