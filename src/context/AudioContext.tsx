/**
 * AudioContext — global singleton that keeps the About voice note playing
 * across route changes. Consumed by VoiceNotePlayer and AudioMiniPlayer.
 */
import { createContext, useContext, useRef, useState, useEffect, ReactNode } from "react";
import voiceNoteAudio from "@/assets/about-voice-note.mp3";

interface AudioContextValue {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  play: () => void;
  pause: () => void;
  pauseForVideo: () => void; // pause triggered by video playback starting
  close: () => void; // stop + hide mini player
  isFloating: boolean; // true when user navigated away from /about
  setIsFloating: (v: boolean) => void;
}

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [isFloating, setIsFloating] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const audio = new Audio(voiceNoteAudio);
    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setIsFloating(false);
    });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
    setDismissed(false);
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const close = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
    setIsFloating(false);
    setDismissed(true);
  };

  const pauseForVideo = () => {
    if (!audioRef.current || !isPlaying) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <AudioCtx.Provider value={{ isPlaying, currentTime, duration, play, pause, pauseForVideo, close, isFloating, setIsFloating }}>
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
