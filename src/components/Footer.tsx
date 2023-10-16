import React from 'react'
import {BsInstagram} from 'react-icons/bs'

import FooterLink from "./FooterLink"

const Footer:React.FC = () => {
  return (
    <div className="h-40 bg-gray-100 w-screen flex justify-center absolute bottom-0">
      <div className='flex justify-around h-full w-10/12'>
        <FooterLink linkTo="/works" elementName="WORKS" />
        <FooterLink linkTo="/profile" elementName="PROFILE" />
        <FooterLink linkTo="/news" elementName="NEWS" />
      </div>
      <a href="https://www.instagram.com/daiki_ito_art/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
        <BsInstagram className='text-xl absolute bottom-7 right-10' />
      </a>
    </div>
  )
}

export default Footer