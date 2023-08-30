import NavElement from './NavElement';
import { motion } from 'framer-motion';

type Props = {
  onClick: ()=>void;
};

const NavMenu:React.FC<Props> = ({onClick}) => {
  return (
    <motion.nav
      initial={{y: '-2vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 0.75}}
      className="z-50 pt-10 fixed w-screen h-screen bg-white flex justify-center"
      >
      <div onClick={onClick} className='text-lg font-bold mt-10 w-10/12 h-1/3 flex flex-col justify-between items-center divide-y divide-dotted divide-gray-500'>
        <NavElement linkTo='/works' elementName='WORKS'/>
        <NavElement linkTo='/Profile' elementName='PROFILE' />
        <NavElement linkTo='/contact' elementName='CONTACT' />
      </div>
    </motion.nav>
  )
}

export default NavMenu