/**
 * About Page — /about
 */
import React, { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import {
  Heart, Mic, Target, Minimize2,
  CircleDot, Film, Palette, Music, CheckCircle,
  Coffee, Gamepad2, Trophy, Sparkles, Tv,
} from "lucide-react";

/* ── Shared heading style ── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-center"
    style={{
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontWeight: 700,
      fontSize: "clamp(32px, 5vw, 48px)",
      lineHeight: "48px",
      letterSpacing: "-1.2px",
      color: "hsl(var(--foreground))",
    }}
  >
    {children}
  </h2>
);

/* ── Small icon box ── */
const SmallIconBox = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex items-center justify-center rounded-2xl shrink-0"
    style={{ width: 48, height: 48, background: "hsl(var(--foreground) / 0.05)" }}
  >
    {children}
  </div>
);

/* ── Large icon box (for process rows) ── */
const LargeIconBox = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex items-center justify-center rounded-2xl shrink-0"
    style={{ width: 64, height: 64, background: "hsl(var(--foreground) / 0.05)" }}
  >
    {children}
  </div>
);

/* ── Philosophy 2×2 card ── */
const PhilosophyCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div
    className="flex items-center gap-6 rounded-3xl border"
    style={{
      background: "hsl(var(--background))",
      borderColor: "rgba(213,213,213,0.5)",
      padding: "33px",
      minHeight: 126,
    }}
  >
    <SmallIconBox>{icon}</SmallIconBox>
    <div>
      <p
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: "28px",
          letterSpacing: "-0.4px",
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "hsl(var(--muted-foreground))",
          marginTop: 6,
        }}
      >
        {subtitle}
      </p>
    </div>
  </div>
);

/* ── Process step row ── */
const ProcessRow = ({
  num,
  icon,
  title,
  subtitle,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div
    className="flex items-center gap-6 rounded-2xl border"
    style={{
      background: "hsl(var(--background))",
      borderColor: "rgba(213,213,213,0.5)",
      height: 114,
      paddingLeft: 25,
      paddingRight: 25,
    }}
  >
    <LargeIconBox>{icon}</LargeIconBox>
    <div className="flex-1 min-w-0">
      <p
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: "28px",
          letterSpacing: "-0.4px",
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "hsl(var(--muted-foreground))",
          marginTop: 4,
        }}
      >
        {subtitle}
      </p>
    </div>
    <span
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 700,
        fontSize: 36,
        lineHeight: "40px",
        color: "rgba(115,115,115,0.2)",
        minWidth: 48,
        textAlign: "right",
      }}
    >
      {num}
    </span>
  </div>
);

/* ── Fun fact card ── */
const FactCard = ({
  icon,
  title,
  subtitle,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradient: string;
}) => (
  <div
    className="flex flex-col rounded-3xl border backdrop-blur-sm"
    style={{
      background: gradient,
      borderColor: "rgba(213,213,213,0.5)",
      minHeight: 234,
      padding: 33,
    }}
  >
    <div
      className="flex items-center justify-center rounded-2xl"
      style={{
        width: 56,
        height: 56,
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(2px)",
      }}
    >
      {icon}
    </div>
    <div className="mt-auto pt-10">
      <p
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: "28px",
          letterSpacing: "-0.4px",
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "26px",
          color: "hsl(var(--muted-foreground))",
          marginTop: 4,
        }}
      >
        {subtitle}
      </p>
    </div>
  </div>
);

/* ── Voice Note Card with audio player ── */
const VoiceNoteCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const duration = 80; // 1:20 dummy duration

  // Generate a simple tone as a dummy audio via oscillator
  const getAudioContext = useCallback(() => {
    if (!audioRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(220, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start();
      audioRef.current = { ctx, oscillator, gainNode } as any;
    }
    return audioRef.current as any;
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      try { (audioRef.current as any)?.oscillator?.stop(); } catch { }
      try { (audioRef.current as any)?.ctx?.close(); } catch { }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      // Pause
      if (intervalRef.current) clearInterval(intervalRef.current);
      try { (audioRef.current as any)?.gainNode?.gain?.setValueAtTime(0, (audioRef.current as any)?.ctx?.currentTime); } catch { }
      setIsPlaying(false);
    } else {
      // Play
      const audio = getAudioContext();
      try { audio.gainNode.gain.setValueAtTime(0.05, audio.ctx.currentTime); } catch { }
      const startTime = currentTime;
      const startTs = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = startTime + (Date.now() - startTs) / 1000;
        if (elapsed >= duration) {
          clearInterval(intervalRef.current!);
          setIsPlaying(false);
          setProgress(100);
          setCurrentTime(duration);
          try { audio.gainNode.gain.setValueAtTime(0, audio.ctx.currentTime); } catch { }
          return;
        }
        setCurrentTime(elapsed);
        setProgress((elapsed / duration) * 100);
      }, 100);
      setIsPlaying(true);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setProgress(pct * 100);
    setCurrentTime(pct * duration);
  };

  return (
    <section className="mx-auto max-w-[1240px] px-6 md:px-12 pt-16 pb-0">
      <div
        className="mx-auto overflow-hidden rounded-3xl"
        style={{
          background: "hsl(var(--muted))",
          maxWidth: 1100,
          padding: "clamp(24px, 4vw, 48px)",
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Photo */}
          <div
            className="shrink-0 overflow-hidden rounded-2xl"
            style={{ width: "clamp(140px, 22vw, 220px)", aspectRatio: "3/4" }}
          >
            <img
              src="/placeholder.svg"
              alt="Djamel Haroual"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Voice Note
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(22px, 2.5vw, 32px)",
                lineHeight: 1.2,
                color: "hsl(var(--foreground))",
              }}
            >
              A Personal Introduction
            </h2>
            <p
              className="mt-1"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 14,
                color: "hsl(var(--muted-foreground))",
              }}
            >
              Press play to hear from Djamel
            </p>

            {/* Transcript preview */}
            <div className="mt-6">
              <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "clamp(16px, 1.5vw, 20px)", color: "hsl(var(--foreground))" }}>
                Oh, hello there!
              </p>
              <p className="mt-1" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 18px)", color: "hsl(var(--muted-foreground))", opacity: 0.7 }}>
                I hope you're having a lovely day —
              </p>
              <p className="mt-1" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 18px)", fontStyle: "italic", color: "hsl(var(--muted-foreground))", opacity: 0.5 }}>
                {isPlaying ? "Listening..." : "Click play to start..."}
              </p>
            </div>

            {/* Progress bar - clickable */}
            <div className="mt-6 cursor-pointer" onClick={handleProgressClick}>
              <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: "hsl(var(--foreground) / 0.12)" }}>
                <div
                  className="h-1.5 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%`, backgroundColor: "hsl(var(--foreground) / 0.45)" }}
                />
              </div>
            </div>

            {/* Play button + time */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center rounded-full transition-transform hover:scale-105"
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: "hsl(var(--foreground))",
                }}
                aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
              >
                {isPlaying ? (
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <rect x="1" y="1" width="4" height="14" rx="1" fill="hsl(var(--background))" />
                    <rect x="9" y="1" width="4" height="14" rx="1" fill="hsl(var(--background))" />
                  </svg>
                ) : (
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path d="M1 1L15 9L1 17V1Z" fill="hsl(var(--background))" />
                  </svg>
                )}
              </button>
              <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 13, color: "hsl(var(--muted-foreground))" }}>
                {formatTime(currentTime)} &nbsp;/&nbsp; {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════ */

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ══ VOICE NOTE CARD ══ */}
      <VoiceNoteCard />

      {/* ══ HI SECTION ══ */}
      <section className="mx-auto max-w-[1240px] px-6 md:px-12 py-20 text-center">
        {/* Available badge */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2.5 rounded-full"
            style={{
              background: "rgba(244, 244, 244, 0.5)",
              border: "1px solid rgba(213, 213, 213, 0.5)",
              backdropFilter: "blur(2px)",
              padding: "9px 20px",
            }}
          >
            <span className="inline-block rounded-full" style={{ width: 8, height: 8, backgroundColor: "#22C55E" }} />
            <span
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                color: "#000000",
              }}
            >
              Available for Projects
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1
          className="mb-8 mx-auto"
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: "1",
            letterSpacing: "-1.8px",
            color: "hsl(var(--foreground))",
            maxWidth: 1100,
          }}
        >
          Hi — I'm Djamel Haroual,
          <br />
          <span style={{ color: "#A0A0A0" }}>a freelance motion designer</span>
        </h1>

        {/* Body text */}
        <p
          className="mx-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(16px, 1.8vw, 22.39px)",
            lineHeight: "39px",
            color: "hsl(var(--foreground))",
            maxWidth: 1100,
          }}
        >
          I bring <strong style={{ fontWeight: 700 }}>creative solutions</strong> to business problems, not just "pretty videos."
          <br />
          <span style={{ color: "hsl(var(--muted-foreground))" }}>
            I believe understanding <strong style={{ fontWeight: 700, color: "hsl(var(--foreground))" }}>emotion</strong> is the heart of design — and I deliver work I deeply care about.
          </span>
        </p>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <hr className="border-t border-foreground/15" />
      </div>

      {/* ══ ORIGIN ══ */}
      <section className="mx-auto max-w-[1240px] px-6 md:px-12 py-20 text-center">
        <h2
          className="mb-10"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-1.2px",
            color: "hsl(var(--foreground))",
          }}
        >
          My Origin — Why I Chose Motion
        </h2>
        <div className="mx-auto max-w-[800px] text-left space-y-6">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "hsl(var(--muted-foreground))" }}>
            When I was a kid I walked into Disneyland and discovered the animation studio behind Mickey Mouse. I saw storyboards, frame-by-frame sketches, storytelling in motion — and I knew that's what I wanted to do.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "hsl(var(--muted-foreground))" }}>
            I grew up editing AMVs, layering visuals to music, chasing that spark. Eventually I dove headfirst into motion design — a childhood dream realized, now with purpose:
          </p>
        </div>
        <blockquote
          className="mx-auto mt-14 max-w-2xl"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            lineHeight: 1.3,
            letterSpacing: "-0.5px",
            color: "hsl(var(--foreground))",
          }}
        >
          "I don't just want to animate —
          <br />
          I want to solve problems with motion."
        </blockquote>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <hr className="border-t border-foreground/15" />
      </div>

      {/* ══════════════════════════════════════════════
          WHAT I BELIEVE / MY PHILOSOPHY — 2×2 grid
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 md:px-12 py-20">
        <div className="mb-12 text-center">
          <SectionHeading>What I Believe / My Philosophy</SectionHeading>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <PhilosophyCard
            icon={<Heart size={24} strokeWidth={2} />}
            title="Motion is emotion"
            subtitle="Every frame should feel something"
          />
          <PhilosophyCard
            icon={<Mic size={24} strokeWidth={2} />}
            title="No AI scripts or voices"
            subtitle="My creative voice is me"
          />
          <PhilosophyCard
            icon={<Target size={24} strokeWidth={2} />}
            title="Creative solutions"
            subtitle="I partner with clients who value craft"
          />
          <PhilosophyCard
            icon={<Minimize2 size={24} strokeWidth={2} />}
            title="Minimal style"
            subtitle="Inspired by Apple, Google — clarity meets artistry"
          />
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <hr className="border-t border-foreground/15" />
      </div>

      {/* ══════════════════════════════════════════════
          WHAT I DO / HOW I WORK — numbered rows
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 md:px-12 py-20">
        <div className="mb-4 text-center">
          <SectionHeading>What I Do / How I Work</SectionHeading>
        </div>
        <p
          className="text-center mx-auto mb-12"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "32px",
            color: "hsl(var(--muted-foreground))",
            maxWidth: 744,
            marginTop: 16,
          }}
        >
          I build films and commercials for brands that care. My process is human + technical, always intentional:
        </p>
        <div className="flex flex-col gap-4">
          <ProcessRow
            num="01"
            icon={<CircleDot size={32} strokeWidth={2} />}
            title="Discovery"
            subtitle="Understanding your goals"
          />
          <ProcessRow
            num="02"
            icon={<Film size={32} strokeWidth={2} />}
            title="Script & Storyboard"
            subtitle="Ideas mapped visually"
          />
          <ProcessRow
            num="03"
            icon={<Palette size={32} strokeWidth={2} />}
            title="Design & Animation"
            subtitle="Every move matters"
          />
          <ProcessRow
            num="04"
            icon={<Music size={32} strokeWidth={2} />}
            title="Sound & Voice"
            subtitle="Emotion woven in"
          />
          <ProcessRow
            num="05"
            icon={<CheckCircle size={32} strokeWidth={2} />}
            title="Handoff & Cutdowns"
            subtitle="Optimized for socials, web, pitch decks"
          />
        </div>
        <p
          className="text-center mx-auto mt-12"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "28px",
            color: "hsl(var(--muted-foreground))",
            maxWidth: 762,
          }}
        >
          Clients choose me when they want more than visuals — they want{" "}
          <strong style={{ fontStyle: "italic" }}>motion that makes impact</strong>.
        </p>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <hr className="border-t border-foreground/15" />
      </div>

      {/* ══════════════════════════════════════════════
          A FEW THINGS ABOUT ME — colored 3-col grid
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 md:px-12 py-20">
        <div className="mb-3 text-center">
          <SectionHeading>A Few Things About Me</SectionHeading>
        </div>
        <p
          className="text-center mb-12"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "28px",
            color: "hsl(var(--muted-foreground))",
            marginTop: 12,
          }}
        >
          The human side
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <FactCard
            icon={<Coffee size={28} strokeWidth={2} />}
            title="Coffee Addict"
            subtitle="Always grinding"
            gradient="linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(249,115,22,0.1) 100%)"
          />
          <FactCard
            icon={<Gamepad2 size={28} strokeWidth={2} />}
            title="Game Lover"
            subtitle="Pokémon, Sonic, Hollow Knight: Silksong"
            gradient="linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)"
          />
          <FactCard
            icon={<Trophy size={28} strokeWidth={2} />}
            title="Chess & Strategy"
            subtitle="Balance & planning"
            gradient="linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.1) 100%)"
          />
          <FactCard
            icon={<Sparkles size={28} strokeWidth={2} />}
            title="Pixel Art Fanatic"
            subtitle="I sketched my own OC and turned it into sprites"
            gradient="linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(16,185,129,0.1) 100%)"
          />
          <FactCard
            icon={<Tv size={28} strokeWidth={2} />}
            title="TV Show Addiction"
            subtitle="Game of Thrones (yes, I rewatch)"
            gradient="linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(244,63,94,0.1) 100%)"
          />
        </div>
        <p
          className="text-center mx-auto mt-12"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "28px",
            color: "hsl(var(--muted-foreground))",
            maxWidth: 660,
          }}
        >
          These things aren't just hobbies — they're{" "}
          <strong style={{ fontStyle: "italic" }}>sources of inspiration</strong> I bring back into my design.
        </p>
      </section>

      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <hr className="border-t border-foreground/15" />
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
}
