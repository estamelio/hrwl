import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BackToWork = () => {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 px-6 pointer-events-none">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md border border-border/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium text-sm">Back to Work</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BackToWork;
