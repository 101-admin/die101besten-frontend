import React from 'react'

const PastHero = ({youtubeVideo}: {youtubeVideo: string}) => {
  return (
    <div className="w-full max-w-[1920px] mx-auto h-screen flex justify-center items-center mb-10">
      <iframe
        width="100%"
        height="100%"
        src={`${youtubeVideo}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default PastHero
