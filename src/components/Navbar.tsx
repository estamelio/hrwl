/**
 * Navbar — sticky top nav with desktop links + centered logo.
 * Mobile: hamburger → fullscreen overlay menu.
 * File: src/components/Navbar.tsx
 */
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import hrwlLogoBlack from "@/assets/Hrwl-Logo-black.svg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const MOBILE_NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
];

const NAV_STYLE = {
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "17.5px",
  lineHeight: "22px",
  letterSpacing: "-0.01em",
  textDecoration: "none",
};

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
      window.scrollTo({ top: 0 });
    }
  }, [pathname, navigate]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-xl transition-colors ${scrolled ? "border-b border-border/30 py-1" : "border-b border-transparent py-2.5"
          }`}
        style={{ 
          transitionDuration: "300ms", 
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" 
        }}
      >
        <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          {/* ── Left: page links (desktop only) ── */}
          <div className="flex-1">
            <ul className="hidden items-center gap-7 md:flex">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={to}
                    onClick={handleNavClick(to)}
                    style={{
                      ...NAV_STYLE,
                      opacity: pathname === to ? 1 : 0.4,
                      color: "hsl(var(--foreground))",
                    }}
                    className={`transition-all duration-300 relative group hover:opacity-100 ${pathname === to ? "brightness-125" : ""
                      }`}
                  >
                    {label}
                    {pathname === to && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <div className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* ── Left: hamburger (mobile only) ── */}
            <button
              className="flex flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ width: 28, height: 28 }}
            >
              <span
                className="block h-[1.5px] w-6 origin-center rounded-full bg-foreground transition-all duration-300"
                style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-[1.5px] w-6 rounded-full bg-foreground transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-[1.5px] w-6 origin-center rounded-full bg-foreground transition-all duration-300"
                style={{ transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>

          {/* ── Center: logo ── */}
          <Link
            to="/"
            onClick={handleNavClick("/")}
            className="absolute left-1/2 -translate-x-1/2 select-none"
          >
            <img
              src={hrwlLogoBlack}
              alt="HRWL"
              className="h-6 md:h-7 w-auto dark:invert transition-all duration-300 hover:scale-105"
            />
          </Link>

          {/* ── Right: Shop + toggle + Inquiries (desktop) ── */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#"
                style={{ ...NAV_STYLE, opacity: 0.5, color: "hsl(var(--foreground))" }}
                className="transition-opacity hover:opacity-100"
              >
                Shop
              </a>
              <ThemeToggle />
              <Link to="/inquiry" onClick={handleNavClick("/inquiry")} className="inquiry-btn">
                Inquiry
                <span className="inquiry-btn__icon">
                  <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg">
                    <path
                      d="M1 7.5h11M8 3l4.5 4.5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg inquiry-btn__svg--copy">
                    <path
                      d="M1 7.5h11M8 3l4.5 4.5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* ── Right: toggle only on mobile ── */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════════════
          FULLSCREEN MOBILE MENU OVERLAY
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center p-8 md:hidden"
            style={{
              backgroundColor: "hsl(var(--background))",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              {MOBILE_NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl font-semibold transition-all duration-300 ${pathname === link.to
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + MOBILE_NAV_LINKS.length * 0.06,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="mt-6"
              >
                <Link
                  to="/inquiry"
                  onClick={() => setMenuOpen(false)}
                  className="inquiry-btn-mobile"
                >
                  Start Inquiry
                  <span className="inquiry-btn__icon">
                    <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg">
                      <path
                        d="M1 7.5h11M8 3l4.5 4.5L8 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg inquiry-btn__svg--copy">
                      <path
                        d="M1 7.5h11M8 3l4.5 4.5L8 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
