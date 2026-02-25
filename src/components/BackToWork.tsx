/**
 * BackToWork — a slim sub-bar that sits directly below the Navbar on case study pages.
 * Looks like an extension of the navbar with a "← Back to Work" link.
 */
import { Link } from "react-router-dom";

export default function BackToWork() {
  return (
    <div
      className="sticky top-[57px] z-[49] w-full bg-background/95 backdrop-blur-xl"
      style={{ borderBottom: "1px solid hsl(var(--foreground) / 0.06)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 py-2.5 md:px-8">
        <Link
          to="/work"
          onClick={() => window.scrollTo({ top: 0 })}
          className="inline-flex items-center gap-2 no-underline transition-opacity hover:opacity-80"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            color: "hsl(var(--foreground) / 0.5)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4L6 8L10 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Work
        </Link>
      </div>
    </div>
  );
}
