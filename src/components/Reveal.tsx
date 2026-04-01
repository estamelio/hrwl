import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  staggerChildren?: number;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    }
  },
};

const containerVariants = (staggerChildren: number, delay: number) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: delay,
    },
  },
});

/**
 * A Framer Motion wrapper for staggered, gradual entrance animations.
 */
export const RevealContainer = ({ 
  children, 
  staggerChildren = 0.15, 
  delay = 0, 
  className 
}: RevealProps) => {
  return (
    <motion.div
      variants={containerVariants(staggerChildren, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  y = 30, 
  className 
}: RevealProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] as any }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};
