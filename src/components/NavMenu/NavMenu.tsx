import React from 'react';
import { motion } from 'framer-motion';

import NavElement from './NavElement';

type Props = {
  onClick: ()=>void;
};

const NavMenu:React.FC<Props> = ({onClick}) => {
  return (
    <motion.nav
      initial={{y: '-2vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 0.75}}
      className="z-10 pt-10 fixed w-screen h-screen bg-white flex justify-center"
      >
      <div onClick={onClick} className='text-lg font-bold mt-10 w-10/12 h-1/2 flex flex-col justify-between items-center divide-y divide-dotted divide-gray-500'>
        <NavElement linkTo='/works' elementName='WORKS'/>
        <NavElement linkTo='/profile' elementName='PROFILE' />
        <NavElement linkTo='/news' elementName='NEWS' />
      </div>
    </motion.nav>
  )
}

export default NavMenu