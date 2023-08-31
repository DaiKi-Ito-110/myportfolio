import { ReactNode } from "react";
import {motion, useAnimation} from 'framer-motion'

type Props = {
  children: ReactNode;
};

const OnHoverBar:React.FC<Props> = ({children}) => {

  const barAnimationControls = useAnimation();
  const barAnimationVariants = {
    init: {
      width: 0,
    },
    transition: {
      duration: 0.24,
      ease: 'easeOut',
    },
    animStart: {
      width: '100%',
    },
    animEnd: {
      width: 0,
    }
  };

return (
    <motion.div onHoverStart={()=>barAnimationControls.start(barAnimationVariants.animStart)} onHoverEnd={()=>barAnimationControls.start(barAnimationVariants.animEnd)}>
      {children}
      <motion.div transition={barAnimationVariants.transition}  initial={barAnimationVariants.init} animate={barAnimationControls}  className='w-full h-0.5 bg-gray-950'></motion.div>
    </motion.div>
  )
}

export default OnHoverBar