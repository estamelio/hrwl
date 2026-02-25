/**
 * CTABanner — dark "Have a Project in mind?" full-width banner with bg image.
 * Used on: Home (/), Work (/work), About (/about)
 */
import ctaBg from "@/assets/cta-bg.png";
import { Link } from "react-router-dom";
export default function CTABanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <div
        className="relative overflow-hidden rounded-2xl cta-banner-card"
        style={{ minHeight: "200px" }}
      >
        {/* Background image (light mode) */}
        <img
          src={ctaBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover dark:opacity-60"
          style={{ backgroundColor: "#0A0A0A" }}
        />
        {/* Dark overlay for contrast */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10,10,10,0.55)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center px-10 py-14 md:px-14">
          <h2
            className="mb-2"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "clamp(22px, 2.8vw, 41.43px)",
              lineHeight: "55.65px",
              letterSpacing: "-1.01px",
              color: "#FFFFFF",
            }}
          >
            Have a Project in mind ?
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.5vw, 20px)",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
              color: "#FFFFFF",
            }}
          >
            New Business:{" "}
            <a
              href="mailto:work@hrwl.co"
              style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
            >
              work@hrwl.co
            </a>
          </p>
          <Link
            to="/inquiries"
            className="inline-flex items-center rounded-full px-8 py-3.5 text-[14px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20"
            style={{
              background: "#FFFFFF",
              color: "#0F0F0F",
              fontFamily: "Inter",
            }}
          >
            Start Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
