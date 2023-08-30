import {motion} from 'framer-motion'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
};

const TransitionFromBottom:React.FC<Props> = ({children, delay}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: '2vh'}}
      animate={{opacity: 1, y: '0vh'}}
      transition={{duration: 1, delay: delay}}
      >
        {children}
    </motion.div>
  )
}

export default TransitionFromBottom