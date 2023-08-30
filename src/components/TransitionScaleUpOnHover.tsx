import {motion} from 'framer-motion'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TransitionScaleUpOnHover:React.FC<Props> = ({children}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition:{duration: 0.3}
      }}
      >
        {children}
    </motion.div>
  )
}

export default TransitionScaleUpOnHover