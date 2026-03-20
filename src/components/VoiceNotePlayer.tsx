import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import djamelPhoto from "@/assets/djamel-photo.jpg";
import voiceNoteAudio from "@/assets/about-voice-note.mp3";

const subtitles = [
  { start: 0, end: 1, text: "Oh, hello there stranger!" },
  { start: 1, end: 2, text: "I hope you're having a lovely day —" },
  { start: 2, end: 6, text: "and I surely do hope you find my website to be as cool as I intended it to be." },
  { start: 6, end: 8, text: "You're probably here for one of two reasons:" },
  { start: 8, end: 9, text: "Either you're just curious —" },
  { start: 9, end: 11, text: "exploring every corner," },
  { start: 11, end: 12, text: "checking the designs," },
  { start: 12, end: 14, text: "trying to get a little sneak peek of who I am, what I do," },
  { start: 14, end: 16, text: "maybe even… stalking me 👀" },
  { start: 16, end: 20, text: "Or, you're here because you want to hire me for a project similar to what you've seen in my case studies." },
  { start: 20, end: 22, text: "In anyway, this section's just about me." },
  { start: 22, end: 26, text: "I figured it'd be nicer to record a voice note instead of making you read a wall of text just to get to know me." },
  { start: 26, end: 28, text: "(you still have the option to read tho)" },
  { start: 28, end: 31, text: "So— if you haven't seen my name already, I'm Djamel," },
  { start: 31, end: 34, text: "a freelance motion designer who specializes in brand films and commercials" },
  { start: 34, end: 38, text: "for brands that value creative solutions to business problems." },
  { start: 38, end: 40, text: "But that's not all who I am though." },
  { start: 40, end: 45, text: "I'm also a total nerd — I love games like Pokémon, Sonic, Mario, Zelda," },
  { start: 45, end: 48, text: "(I've been playing Dispatch a lot lately)" },
  { start: 48, end: 49, text: "I'm definitely addicted to coffee. ☕" },
  { start: 49, end: 54, text: "I love the gym, reading, writing stories and poems, doing voiceovers.. If you could tell!" },
  { start: 54, end: 56, text: "and— maybe most importantly— cooking and baking." },
  { start: 56, end: 62, text: "I'm a huge Game of Thrones fan — read the books, watched the series… like six times (no shame)." },
  { start: 62, end: 65, text: "And of course, I love anime — Demon Slayer and Attack on Titan are my top picks." },
  { start: 65, end: 70, text: "Anyway, that was me — thanks for stopping by and listening (or reading)." },
  { start: 70, end: 73, text: "I hope my work speaks to you as much as I've spoken here." },
  { start: 73, end: 76, text: "Now go finish stalking— there's a lot of motion waiting for you out there." },
  { start: 76, end: 77, text: "Bybye 👋" },
];

const VoiceNotePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(voiceNoteAudio);
    audioRef.current.addEventListener('loadedmetadata', () => {
      if (audioRef.current) setDuration(audioRef.current.duration);
    });
    audioRef.current.addEventListener('timeupdate', () => {
      if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
    });
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });
    return () => {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    };
  }, []);

  const currentSubtitle = subtitles.find(
    (s) => currentTime >= s.start && currentTime < s.end
  );

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const progress = (currentTime / duration) * 100;
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

        {/* Waveform / Progress */}
        <div className="mb-3">
          <div
            className="relative h-1.5 bg-border/80 rounded-full cursor-pointer group"
            onClick={handleSeek}
          >
            <div
              className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 w-3.5 h-3.5 bg-foreground rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] font-mono text-muted-foreground">{fmt(currentTime)}</span>
            <span className="text-[10px] font-mono text-muted-foreground">{fmt(duration)}</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="min-h-[48px] flex items-center">
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
            {currentSubtitle ? currentSubtitle.text : (
              <span className="text-muted-foreground italic text-sm">Press play to hear from Djamel</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceNotePlayer;
