import React, { useState } from 'react'
import {MdSmartDisplay} from 'react-icons/md'



type Props = {
  thumbnail: string;
  videoSrc: string | undefined;
}

const YoutubeVideo: React.FC<Props> = ({thumbnail, videoSrc}) => {
  const [isThumbnail, setIsThumbnail] = useState(true);

  return (
    <div>
      {isThumbnail ? (
        <div className='relative' onClick={()=>setIsThumbnail(false)}>
          <MdSmartDisplay className='absolute text-9xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600' />
          <img src={thumbnail} alt='videoSrc' />
        </div>
      ):(
        <div className='w-screen aspect-w-2 aspect-h-1'>
          <iframe
            className='w-5/6 md:w-4/5 m-auto'
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default YoutubeVideo