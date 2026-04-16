/**
 * AudioMiniPlayer
 * Desktop: full pill with label, progress, pause/close controls.
 * Mobile:  just the animated sound bars — tap to pause, drag down to X to dismiss.
 */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Pause, X, Play } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAudio } from "@/context/AudioContext";

export default function AudioMiniPlayer() {
  const { isPlaying, play, pause, close, currentTime, duration, setIsFloating } = useAudio();
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  // Track whether user is on /about
  useEffect(() => {
    setIsFloating(location.pathname !== "/about");
  }, [location.pathname, setIsFloating]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const visible = location.pathname !== "/about" && (isPlaying || currentTime > 0);

  const [isOverDismiss, setIsOverDismiss] = useState(false);

  const handleDrag = (_: any, info: any) => {
    // Determine if the pointer is near the bottom of the screen
    const distanceFromBottom = window.innerHeight - info.point.y;
    setIsOverDismiss(distanceFromBottom < 120);
  };

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    setIsOverDismiss(false);
    
    // Close if released near the bottom
    const distanceFromBottom = window.innerHeight - info.point.y;
    if (distanceFromBottom < 120) {
      close();
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── DESKTOP: full pill ── */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex fixed bottom-6 left-6 z-[200] items-center gap-3 bg-foreground text-background rounded-full pl-4 pr-2 py-2 shadow-2xl shadow-black/30"
          >
            {/* Sound wave animation */}
            <div className="flex items-center gap-[3px] h-4 flex-shrink-0">
              {[0, 0.15, 0.3].map((delay, i) => (
                <span
                  key={i}
                  className="block w-[3px] rounded-full bg-background"
                  style={{
                    height: isPlaying ? "100%" : "35%",
                    animation: isPlaying ? `soundWave 0.8s ease-in-out ${delay}s infinite alternate` : "none",
                    transition: "height 0.3s ease",
                    minHeight: "4px",
                  }}
                />
              ))}
            </div>

            {/* Label */}
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap opacity-90">
                Djamel · Voice Note
              </span>
              <div className="w-24 h-[2px] bg-background/20 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-background rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Play / Pause */}
            <button
              onClick={isPlaying ? pause : play}
              className="w-8 h-8 rounded-full bg-background/15 hover:bg-background/25 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" fill="currentColor" /> : <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />}
            </button>

            {/* Close */}
            <button
              onClick={close}
              className="w-8 h-8 rounded-full hover:bg-background/15 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              aria-label="Close player"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* ── MOBILE: animated bars + drag-to-dismiss ── */}
          <div className="md:hidden" ref={constraintsRef}>
            {/* Dismiss target — fades in during drag, turns red when hovered */}
            <AnimatePresence>
              {isDragging && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="fixed bottom-0 left-0 right-0 z-[199] flex items-end justify-center pb-8 pointer-events-none"
                >
                  <motion.div
                    animate={{ scale: isOverDismiss ? 1.05 : 1 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-200 shadow-2xl backdrop-blur-md ${
                      isOverDismiss
                        ? "bg-red-500 text-white shadow-red-500/30 ring-4 ring-red-500/20"
                        : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    <X className={`w-5 h-5 ${isOverDismiss ? "text-white" : "text-red-400"}`} />
                    <span className={`text-[13px] font-semibold tracking-wide ${isOverDismiss ? "text-white" : "text-red-400"}`}>
                      Release to delete
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The draggable sound bars dot */}
            <motion.div
              drag
              dragSnapToOrigin
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: isDragging && !isOverDismiss ? 0.9 : 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={isPlaying ? pause : play}
              className="fixed bottom-8 right-5 z-[200] cursor-pointer touch-none select-none"
              aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
            >
              {/* Outer ring */}
              <div
                className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-200 ${
                  isOverDismiss ? "bg-red-500 shadow-red-500/40" : "bg-foreground shadow-black/40"
                } ${isPlaying && !isOverDismiss ? "ring-2 ring-foreground/30 ring-offset-2 ring-offset-background" : ""}`}
              >
                {/* Inner */}
                {isPlaying ? (
                  <div className="flex items-center gap-[3px] h-5">
                    {[0, 0.1, 0.2].map((delay, i) => (
                      <span
                        key={i}
                        className={`block w-[3px] rounded-full transition-colors duration-200 ${isOverDismiss ? "bg-white" : "bg-background"}`}
                        style={{
                          height: "100%",
                          animation: `soundWave 0.7s ease-in-out ${delay}s infinite alternate`,
                          minHeight: "6px",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <Play className={`w-4 h-4 ml-0.5 transition-colors duration-200 ${isOverDismiss ? "text-white" : "text-background"}`} fill="currentColor" />
                )}
              </div>
            </motion.div>
          </div>

          <style>{`
            @keyframes soundWave {
              from { height: 25%; }
              to   { height: 100%; }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
