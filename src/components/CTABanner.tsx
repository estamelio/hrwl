/**
 * CTABanner — dark "Have a Project in mind?" full-width banner with bg image.
 * File: src/components/CTABanner.tsx
 */
import ctaBg from "@/assets/cta-bg.png";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <div
        className="relative overflow-hidden rounded-[32px] cta-banner-card group"
        style={{ minHeight: "280px" }}
      >
        {/* Background image (light mode) */}
        <img
          src={ctaBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover dark:opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
          style={{ backgroundColor: "#0A0A0A" }}
        />
        {/* Contrast overlay (light mode) */}
        <div
          className="cta-banner-overlay absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent transition-opacity duration-500"
        />
        {/* Dark-mode gradient overlay — matches dark-pill-btn style */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: "linear-gradient(190.123deg, rgba(50,50,50,0.82) 13%, rgba(20,20,20,0.92) 109%)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center px-10 py-14 md:px-20 h-full min-h-[280px]">
          <h2
            className="mb-2"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "clamp(26px, 3vw, 42px)",
              lineHeight: "1.2",
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
            }}
          >
            Have a Project in mind ?
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.5vw, 18px)",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            New Business:{" "}
            <a
              href="mailto:djamel@hrwl.studio"
              className="hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
            >
              djamel@hrwl.studio
            </a>
          </p>
          <Link
            to="/inquiry"
            className="dark-pill-btn"
          >
            Start Inquiry
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
