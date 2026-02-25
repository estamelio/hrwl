import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.739l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:djamel@hrwl.co",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
];

interface FooterProps {
  catchphrase?: string;
  variant?: "black" | "white";
}

export default function Footer({
  catchphrase = "Hire Different",
  variant = "black"
}: FooterProps) {
  const isWhite = variant === "white";
  const bgColor = isWhite ? "#FFFFFF" : "#000000";
  const textColor = isWhite ? "#000000" : "#FFFFFF";
  const mutedColor = isWhite ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)";
  const borderColor = isWhite ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)";
  const watermarkColor = isWhite ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)";

  return (
    <footer className="relative w-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="mx-auto max-w-[1240px] px-6 py-12 md:px-10 md:py-16">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">

          {/* Col 1: Catchphrase + Socials */}
          <div className="flex flex-col gap-6">
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "1.2",
                letterSpacing: "-0.84px",
                color: textColor,
              }}
            >
              {catchphrase}
            </h3>
            <div className="flex items-center gap-4">
              {SOCIAL_ICONS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-opacity hover:opacity-100"
                  style={{ color: textColor, opacity: 0.6 }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hidden on mobile: Link Columns */}
          <div className="hidden md:flex flex-col gap-6">
            <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "14px", color: textColor }}>
              Explore
            </span>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Work", to: "/work" },
                { label: "About", to: "/about" },
                { label: "Inquiries", to: "/inquiries" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition-opacity hover:opacity-100"
                    style={{ fontFamily: "Inter", fontSize: "14px", color: mutedColor }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex flex-col gap-6">
            <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "14px", color: textColor }}>
              Services
            </span>
            <ul className="flex flex-col gap-4">
              {["Brand Films", "Commercials", "Motion Design", "Visual Identity"].map((label) => (
                <li key={label}>
                  <span style={{ fontFamily: "Inter", fontSize: "14px", color: mutedColor }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex flex-col gap-6">
            <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "14px", color: textColor }}>
              Contact
            </span>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:djamel@hrwl.co"
                  className="transition-opacity hover:opacity-100"
                  style={{ fontFamily: "Inter", fontSize: "14px", color: mutedColor }}
                >
                  djamel@hrwl.co
                </a>
              </li>
              <li>
                <span style={{ fontFamily: "Inter", fontSize: "14px", color: mutedColor }}>
                  Algeria / Remote
                </span>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div
          className="mt-12 md:mt-16 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderColor: borderColor }}
        >
          <span style={{ fontFamily: "Inter", fontSize: "11px", color: mutedColor }}>
            © 2026 HRWL LTD. All rights reserved.
          </span>

          {/* Dev Link with Tooltip */}
          <div className="flex-1 flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://salahmed-ctrlz.github.io/salaheddine-medkour-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[11px] transition-opacity hover:opacity-100"
                    style={{ color: mutedColor, textDecoration: "none" }}
                  >
                    Dev.
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hello👋🏼, I'm the Developer!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex gap-6">
            <a href="#" style={{ fontFamily: "Inter", fontSize: "11px", color: mutedColor }}>Terms</a>
            <a href="#" style={{ fontFamily: "Inter", fontSize: "11px", color: mutedColor }}>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
