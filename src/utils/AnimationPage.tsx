import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = { children: React.ReactNode };

const AnimationPage = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationPage;