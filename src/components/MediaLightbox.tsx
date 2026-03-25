import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const MediaLightbox = ({ images, initialIndex, isOpen, onClose }: MediaLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 text-white group"
              >
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 text-white group"
              >
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}

          {/* Media Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-full max-h-full flex items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Media ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
            />
            
            {/* Index Indicator */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaLightbox;
