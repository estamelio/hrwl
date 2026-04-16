import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import djamelPhoto from "@/assets/djamel-photo.jpg";
import { useAudio } from "@/context/AudioContext";

const subtitles = [
  { start: 0, end: 1, text: "Oh, hello there stranger!" },
  { start: 2, end: 3, text: "I hope you're having a lovely day —" },
  { start: 3.5, end: 6, text: "and I surely do hope you find my website to be as cool as I intended it to be." },
  { start: 7, end: 8, text: "You're probably here for one of two reasons:" },
  { start: 9, end: 10, text: "Either you're just curious —" },
  { start: 10.2, end: 11, text: "exploring every corner," },
  { start: 11.5, end: 12, text: "checking the designs," },
  { start: 12.2, end: 15.5, text: "trying to get a little sneak peek of who I am, what I do," },
  { start: 16, end: 17, text: "maybe even… stalking me 👀" },
  { start: 18, end: 22, text: "Or, you're here because you want to hire me for a project similar to what you've seen in my case studies." },
  { start: 23, end: 24, text: "In anyway, this section's just about me." },
  { start: 25, end: 29, text: "I figured it'd be nicer to record a voice note instead of making you read a wall of text just to get to know me." },
  { start: 30, end: 32, text: "(you still have the option to read tho)" },
  { start: 32.2, end: 35, text: "So— if you haven't seen my name already, I'm Djamel," },
  { start: 35.5, end: 39, text: "a freelance motion designer who specializes in brand films and commercials" },
  { start: 39.5, end: 43, text: "for brands that value creative solutions to business problems." },
  { start: 43.5, end: 45.5, text: "But that's not all who I am though." },
  { start: 46, end: 49.5, text: "I'm also a total nerd — I love games like Pokémon, Sonic, Mario, Zelda," },
  { start: 50, end: 51.5, text: "(Hollow Knight, Dispatch..)" },
  { start: 52, end: 54, text: "AND I'm definitely addicted to coffee. ☕" },
  { start: 54.5, end: 59, text: "I love the gym, reading, writing stories and poems, doing voiceovers.. If you could tell!" },
  { start: 59.5, end: 62, text: "and— maybe most importantly— cooking and baking." },
  { start: 62.5, end: 69, text: "I'm a huge Game of Thrones fan — read the books, watched the series… like six times (no shame)." },
  { start: 69.5, end: 70.5, text: "And of course, I love anime.." },
  { start: 71, end: 76, text: "Anyway, that was me — thanks for stopping by and listening (or reading)." },
  { start: 76.2, end: 79, text: "I hope my work speaks to you as much as I've spoken here." },
  { start: 79.2, end: 83.5, text: "And if you don’t want us to stay strangers, feel free to say Hi! at djamel@hrwl.studio" },
  { start: 84, end: 88, text: "That’s DJAMEL @ H R W L DOT STUDIO" },
  { start: 88.5, end: 90, text: "In the meantime go finish exploring the website! Bybye 👋" },
];

const VoiceNotePlayer = () => {
  const { isPlaying, currentTime, duration, play, pause, setIsFloating } = useAudio();
  const location = useLocation();

  const [displayText, setDisplayText] = useState<string | null>(null);

  // When user navigates away from /about while audio is playing, show mini player
  useEffect(() => {
    const onAbout = location.pathname === "/about";
    setIsFloating(!onAbout);
  }, [location.pathname, setIsFloating]);

  // Keep track of active subtitle, persist previous one during gaps
  useEffect(() => {
    if (currentTime === 0 && !isPlaying) {
      setDisplayText(null);
    } else {
      const active = subtitles.find((s) => currentTime >= s.start && currentTime < s.end);
      if (active) {
        setDisplayText(active.text);
      }
    }
  }, [currentTime, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  return (
    <div className="w-full max-w-[560px] mx-auto">
      {/* Spotify-style card */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/60 hover:border-border transition-colors duration-500">
        <div className="flex items-center gap-4 mb-5">
          {/* Photo */}
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-border/50">
            <img src={djamelPhoto} alt="Djamel Haroual" className="w-full h-full object-cover" />
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-0.5">A Personal Introduction</h3>
            <p className="text-xs text-muted-foreground">Djamel Haroual · Voice Note</p>
          </div>
          {/* Play button */}
          <button
            onClick={togglePlayPause}
            className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            {isPlaying ? (
              <Pause className="w-4.5 h-4.5" fill="currentColor" />
            ) : (
              <Play className="w-4.5 h-4.5 ml-0.5" fill="currentColor" />
            )}
          </button>
        </div>

        {/* Waveform / Progress — read-only, no seek */}
        <div className="mb-3">
          <div className="relative h-1.5 bg-border/80 rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] font-mono text-muted-foreground">{fmt(currentTime)}</span>
            <span className="text-[10px] font-mono text-muted-foreground">{fmt(duration)}</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="min-h-[48px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={displayText || "placeholder"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-sm md:text-base text-foreground/80 leading-relaxed"
            >
              {displayText ? (
                displayText
              ) : (
                <span className="text-muted-foreground italic text-sm">
                  Press play to hear from Djamel
                </span>
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VoiceNotePlayer;
