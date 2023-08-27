import {motion} from 'framer-motion'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const PageTransitionMotion:React.FC<Props> = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: '-2vh'}}
      animate={{opacity: 1, y: '0vh'}}
      transition={{duration: 1}}
      >
        {children}
    </motion.div>
  )
}
