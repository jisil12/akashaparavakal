'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionContainerProps {
  children: ReactNode;
  delay?: number;
}

export const MotionContainer = ({ children, delay = 0 }: MotionContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.48, 0.15, 0.25, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInView = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnHover = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};
