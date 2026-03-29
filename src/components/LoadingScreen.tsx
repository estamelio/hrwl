import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoAnimation from "@/assets/logo_animation_1.mp4";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide if video takes too long or fails
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 4s fallback

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "all",
          }}
        >
          <video
            src={logoAnimation}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "800px",
              maxHeight: "800px",
              objectFit: "contain",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
