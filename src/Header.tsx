import React from 'react';
import {Link} from 'react-router-dom'
import {Squash as Hamburger} from 'hamburger-react'
import NavMenu from './components/NavMenu/NavMenu';
import { useState } from 'react';

import OnHoverBar from './components/OnHoverBar';

const Header:React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='z-100 bg-gray-100'>
      <div className='flex flex-row w-full items-center justify-between pt-1 pb-1 sticky top-0 left-0'>
        <Link className='' to='/' onClick={()=>setIsOpen(false)}>
          <h1 className='text-xl font-bold ml-10'>
            DAIKI ITO
          </h1>
        </Link>
        <div className='hidden text-lg font-bold md:flex w-1/3 justify-between mr-10'>
          <OnHoverBar>
            <Link to='/works'>WORKS</Link>
          </OnHoverBar>
          <OnHoverBar>
            <Link to='/profile'>PROFILE</Link>
          </OnHoverBar>
          <OnHoverBar>
            <Link to='/news'>NEWS</Link>
          </OnHoverBar>
        </div>
        <div className='md:hidden mr-10'>
          <Hamburger toggled={isOpen} toggle={toggleIsOpen} size={26} />
        </div>
      </div>
      {isOpen? <NavMenu onClick={toggleIsOpen} />:<span/>}
    </div>
  )
}

export default Header