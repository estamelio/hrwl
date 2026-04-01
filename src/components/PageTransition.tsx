import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const curtainVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1] as any,
    },
  },
  exit: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1] as any,
    },
  },
};

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
    <div className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>

      {/* Cinematic Curtain Swipe Layer */}
      <motion.div
        variants={curtainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-[9999] bg-foreground pointer-events-none"
        style={{
          // Use the foreground color for the wipe to match the brand
          backgroundColor: "hsl(var(--foreground))",
        }}
      />
    </div>
  );
}
