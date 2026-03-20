import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const BackToWork = () => {
  return (
    <div className="fixed top-24 left-0 right-0 z-[100] pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-start">
        <Link to="/work" className="pointer-events-auto">
          {/* Desktop Version */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-full hover:bg-background transition-colors shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">Back to Work</span>
          </motion.div>

          {/* Mobile Version — Tailless arrow (Chevron) under hamburger */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm border border-border/40 mt-[-40px]"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default BackToWork;
