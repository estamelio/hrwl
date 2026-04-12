import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}



const contentVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 } 
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4 } 
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="relative w-full min-h-screen">
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  );
}
