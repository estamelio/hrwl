/**
 * Navbar — sticky top nav with desktop links + centered logo.
 * Mobile: hamburger → fullscreen overlay menu.
 * File: src/components/Navbar.tsx
 */
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const NAV_STYLE = {
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "16.5px",
  lineHeight: "21px",
  letterSpacing: "-0.01em",
  textDecoration: "none",
};

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/10">
        <nav className="flex w-full items-center justify-between px-6 py-6 md:px-10 lg:px-12">
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
                      opacity: pathname === to ? 1 : 0.5,
                      color: "hsl(var(--foreground))",
                    }}
                    className="transition-opacity hover:opacity-100 relative group"
                  >
                    {label}
                    {pathname === to && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
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
            className="absolute left-1/2 -translate-x-1/2 select-none text-foreground no-underline"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "20px",
              letterSpacing: "1.5px",
            }}
          >
            HRWL®
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
              <Link to="/inquiries" onClick={handleNavClick("/inquiries")} className="inquiry-btn">
                Inquiries
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
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{
              backgroundColor: "hsl(var(--background))",
            }}
          >
            {/* Spacer for navbar height */}
            <div className="h-[65px] flex-shrink-0" />

            {/* Nav links — large typography */}
            <div className="flex flex-1 flex-col justify-center px-8">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map(({ label, to }, i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      to={to}
                      onClick={handleNavClick(to)}
                      className="block py-3 transition-opacity hover:opacity-60"
                      style={{
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(36px, 10vw, 56px)",
                        lineHeight: "1.1",
                        letterSpacing: "-1px",
                        color: "hsl(var(--foreground))",
                        textDecoration: "none",
                        opacity: pathname === to ? 1 : 0.35,
                      }}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6 }}
                className="my-8 w-12 origin-left"
                style={{ height: "1px", backgroundColor: "hsl(var(--foreground) / 0.15)" }}
              />

              {/* Bottom links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-4"
              >
                <a
                  href="#"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "15px",
                    color: "hsl(var(--foreground))",
                    textDecoration: "none",
                    opacity: 0.5,
                  }}
                >
                  Shop
                </a>
                <Link to="/inquiries" onClick={handleNavClick("/inquiries")} className="inquiry-btn" style={{ fontSize: "14px" }}>
                  Inquiries
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

            {/* Footer of overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="px-8 pb-10"
              style={{
                borderTop: "1px solid hsl(var(--foreground) / 0.08)",
                paddingTop: "24px",
              }}
            >
              <p style={{ fontFamily: "Inter", fontSize: "13px", color: "hsl(var(--foreground))", opacity: 0.35 }}>
                djamel@hrwl.co
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
