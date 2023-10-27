import React, { useState, useEffect } from 'react';
import MyLoader from './MyLoader';

type Props = {
  className?: string;
  src: string;
  alt?: string;
  onClick?: ()=>void;
}

const ImageWithLoading:React.FC<Props> = ({src, className, alt, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div className={className} onClick={onClick} >
      {!isLoaded && <MyLoader />}
      <img src={src} alt={alt} style={{ display: isLoaded ? 'block' : 'none' }} className='w-full h-full' />
    </div>
  );
}

export default ImageWithLoading;
