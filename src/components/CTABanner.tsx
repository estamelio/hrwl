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
        {/* Dark overlay for contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        />

        {/* Decorative Eyes from Screenshot 2 */}
        <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block select-none">
          <div className="flex gap-4">
            <div className="w-16 h-8 bg-white rounded-full blur-[2px]" />
            <div className="w-16 h-8 bg-white rounded-full blur-[2px]" />
          </div>
          <div className="absolute inset-x-0 -bottom-20 text-center">
            <span className="text-[120px] font-black text-white/5 tracking-tighter">HRWL</span>
          </div>
        </div>

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
              href="mailto:work@hrwl.co"
              className="hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
            >
              work@hrwl.co
            </a>
          </p>
          <Link
            to="/inquiries"
            className="faq-start-inquiry"
          >
            Start Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
