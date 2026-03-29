/**
 * CustomScrollbar — Floating overlay scrollbar. Zero layout impact.
 * • Black thumb in light mode, white in dark mode (via --foreground token)
 * • Thin (2px), appears on scroll, auto-hides after 1.5 s
 * • z-index: 100000 — above everything
 */
import { useEffect, useRef, useState } from "react";

export default function CustomScrollbar() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sync = () => {
      const thumb = thumbRef.current;
      if (!thumb) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const ratio = window.innerHeight / document.documentElement.scrollHeight;
      const thumbH = Math.max(28, ratio * window.innerHeight);
      const maxY = window.innerHeight - thumbH;
      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = `translateY(${(scrolled / total) * maxY}px)`;
    };

    const onScroll = () => {
      sync();
      setVisible(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(false), 1500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    sync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        right: "5px",
        bottom: 0,
        width: "2px",
        zIndex: 100000,
        pointerEvents: "none",
      }}
    >
      <div
        ref={thumbRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          borderRadius: "9999px",
          background: "hsl(var(--foreground))",
          opacity: visible ? 0.35 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}
