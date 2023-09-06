import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  link: string;
  isTextWhite?: boolean;
}

export const HomeLinkToPage:React.FC<Props> = ({title, image, isTextWhite, link}) => {
  return (
    <Link to={link} className="relative">
      <p className={`${isTextWhite && 'z-50 text-gray-50'} absolute text-xl font-bold left-5 top-1/2 -translate-y-1/2`}>{title}</p>
      <img className="w-screen" src={image} alt='image' />
    </Link>
  )
}
