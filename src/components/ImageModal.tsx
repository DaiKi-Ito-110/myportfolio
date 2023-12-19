import React, { useState } from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import ImageWithLoading from './ImageWithLoading';

type Props = {
  src: string;
  className?: string;
  alt?: string;
};

const ImageModal:React.FC<Props> = ({src,alt, className}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <ImageWithLoading onClick={handleOpen} src={src} alt='image' />
      {isOpen &&
        <div onClick={handleClose} className='fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-90 z-10'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3' >
            <AiOutlineCloseCircle className='absolute translate-y-full -bottom-5 right-1/2 translate-x-1/2 md:-translate-y-full md:-top-5 md:right-5 text-2xl md:text-3xl hover:cursor-pointer'/>
            <ImageWithLoading src={src} alt={alt} className='m-auto'/>
          </div>
        </div>
      }
    </div>
  )
}

export default ImageModal