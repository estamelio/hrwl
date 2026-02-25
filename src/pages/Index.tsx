/**
 * Home Page — /
 * Sections: Hero card, Headline block, Selected Work grid, FAQ, CTA Banner, Footer
 * File: src/pages/Index.tsx
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroThumb from "@/assets/hero-thumb.png";

const FAQ_ITEMS = [
  {
    q: "What's a Brand film for ?",
    a: "A brand film tells your story cinematically — it communicates your values, builds trust, and makes your product or service impossible to ignore. It's the most powerful content you can invest in.",
  },
  {
    q: "What sets you apart from other creative partners?",
    a: "I handle the entire pipeline — from concept to final delivery. No AI voices, no generic templates. Every project is crafted with intention and precision.",
  },
  {
    q: "How does the pause feature work?",
    a: "If you need to pause a project midway, we can freeze the timeline and resume when you're ready — without losing progress or paying extra.",
  },
  {
    q: "Why wouldn't I just hire a full-time designer?",
    a: "A full-time hire costs 5–10× more when you factor in salary, benefits, equipment, and overhead. I give you senior-level output on demand, without the commitment.",
  },
  {
    q: "Why is it expensive ?",
    a: "Quality cinematic work requires professional equipment, software, creative direction, scripting, animation, sound design, and revisions. You're investing in something that will represent your brand long-term.",
  },
  {
    q: "How to know these services would work ?",
    a: "Check the case studies on the Work page. Real results, real clients. You can also start with a smaller project to test the collaboration.",
  },
  {
    q: "Are there any refunds if I don't like the service?",
    a: "I offer structured revision rounds to ensure you're happy. I don't offer full refunds after creative work has begun, but I will work with you until the result meets expectations.",
  },
  {
    q: "What if I'm not satisfied with the results?",
    a: "Revisions are built into every project. If something isn't right, we fix it. Your satisfaction is part of the deliverable.",
  },
];

const FAQ_LEFT = FAQ_ITEMS.slice(0, 4);
const FAQ_RIGHT = FAQ_ITEMS.slice(4);

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="overflow-x-hidden">

        <div className="min-h-screen flex flex-col justify-center">
          {/* ══════════════════════════════════════════════
          HERO CARD — Demo reel with glow effects
      ══════════════════════════════════════════════ */}
          <section className="w-full px-6 pt-8 pb-0 md:px-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
              style={{ maxWidth: "750px", width: "100%" }}
            >
              {/* Blue glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "120%",
                  height: "80%",
                  bottom: "-20%",
                  left: "-10%",
                  background: "#004BE5",
                  filter: "blur(72px)",
                  opacity: 0.15,
                  borderRadius: "50%",
                }}
              />
              {/* White glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "100%",
                  height: "60%",
                  bottom: "-10%",
                  left: "0",
                  background: "#FFFFFF",
                  filter: "blur(62px)",
                  opacity: 0.08,
                  borderRadius: "50%",
                }}
              />
              <div
                className="relative overflow-hidden rounded-[18px] w-full"
                style={{
                  backgroundColor: "#131211",
                  aspectRatio: "16/9",
                  boxShadow: "-10px 8px 30px 0px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src={heroThumb}
                  alt="Demo reel"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.12)", borderRadius: "18px" }} />
                {/* Video CTA pill */}
                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <div
                    className="flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(3px)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 1L8 5L2 9V1Z" fill="#E7E5E4" />
                    </svg>
                    <span style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.4)" }} />
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "10px",
                        letterSpacing: "0.2px",
                        color: "#FFFFFF",
                      }}
                    >
                      VIDEO
                    </span>
                  </div>
                </div>
                {/* Bottom left — Demo-reel label */}
                <div className="absolute bottom-8 left-8 flex items-center justify-between w-[calc(100%-64px)]">
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "23px",
                      lineHeight: "18px",
                      letterSpacing: "-0.49px",
                      color: "#FFFFFF",
                    }}
                  >
                    Demo-reel
                  </span>
                  {/* Expand button */}
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "37px",
                      height: "31px",
                      background: "rgba(255,255,255,0.2)",
                      opacity: 0.5,
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E7E5E4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.67 }}
                    >
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </div>
                </div >
              </div >
            </motion.div>
          </section >

          {/* ══════════════════════════════════════════════
          HEADLINE BLOCK — Figma specs
      ══════════════════════════════════════════════ */}
          <ScrollReveal delay={0.4}>
            <section className="flex flex-col items-center px-6 pt-10 pb-10 text-center md:px-10">
              <h1
                className="mb-6"
                style={{
                  fontFamily: "'Helvetica Now Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 3vw, 42px)",
                  lineHeight: "1.15",
                  letterSpacing: "0.72px",
                  color: "hsl(var(--foreground))",
                  maxWidth: "1240px",
                }}
              >
                Cinematic Brand Films
                <br />
                That make your product impossible to ignore
              </h1>
              <p
                className="mb-2"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 19px)",
                  lineHeight: "clamp(22px, 2.5vw, 34px)",
                  color: "hsl(var(--muted-foreground))",
                  maxWidth: "920px",
                }}
              >
                Freelance Motion Designer • Brand films &amp; commercials
              </p>
              <p
                className="mb-10"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 19px)",
                  lineHeight: "clamp(22px, 2.5vw, 34px)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Complex, Boring →{" "}
                <strong style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>Clear, Cinematic and High ROI.</strong>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full transition-colors hover:bg-foreground/5"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    color: "hsl(var(--foreground))",
                    fontSize: "clamp(13px, 1vw, 14px)",
                    letterSpacing: "-0.51px",
                    padding: "12px 24px",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(19,18,17,0.08)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  Start your Inquiry
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-1 rounded-full transition-opacity hover:opacity-90 relative"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "clamp(13px, 1vw, 14px)",
                    letterSpacing: "-0.37px",
                    color: "#FFFFFF",
                    padding: "12px 24px",
                    background: "linear-gradient(222deg, #323232 0%, #141414 100%)",
                    boxShadow:
                      "-19px 15px 9px rgba(0,0,0,0.04), -11px 8px 8px rgba(0,0,0,0.13), -5px 4px 5px rgba(0,0,0,0.23), -1px 1px 4px rgba(0,0,0,0.26)",
                  }}
                >
                  <span
                    className="absolute inset-[1px] rounded-full pointer-events-none"
                    style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  />
                  See Case Studies →
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </div>

        {/* ── Divider ── */}
        <ScrollReveal>
          <div className="mx-auto max-w-[1520px] px-8">
            <hr style={{ border: "none", borderTop: "4px solid #929292" }} />
          </div>
        </ScrollReveal>

        {/* ══════════════════════════════════════════════
          SELECTED WORK — asymmetric layout
      ══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1520px] px-8 pt-10 pb-16">
          <ScrollReveal width="fit-content">
            <h2
              className="mb-14 text-left"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 68px)",
                lineHeight: "1",
                letterSpacing: "-3.5px",
                color: "hsl(var(--foreground))",
              }}
            >
              Selected Work
            </h2>
          </ScrollReveal>

          {/* ── DESKTOP asymmetric layout ── */}
          <div className="hidden md:block">
            {/* Row 1 */}
            <div
              className="relative mb-20"
              style={{ display: "grid", gridTemplateColumns: "1.65fr 1fr", gap: "64px", alignItems: "start" }}
            >
              <ScrollReveal delay={0.1}>
                <Link to="/work/the-one-you-keep" className="flex flex-col gap-6 no-underline group" onClick={() => window.scrollTo({ top: 0 })}>
                  <div
                    className="w-full overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    style={{
                      aspectRatio: "3/2.1",
                      backgroundColor: "hsl(var(--foreground) / 0.08)",
                      boxShadow: "0px 40px 100px -20px rgba(0,0,0,0.35)",
                    }}
                  >
                    <img
                      src="/placeholder.svg"
                      alt="The One You Keep"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.6 }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: "clamp(24px, 2.5vw, 42px)",
                        lineHeight: "1.1",
                        letterSpacing: "-1.8px",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      The One You Keep — Brand film
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 1.5vw, 24px)",
                        lineHeight: "1.3",
                        letterSpacing: "-0.5px",
                        color: "hsl(var(--foreground) / 0.5)",
                      }}
                    >
                      A personal cinematic poem about memory and connection.
                    </p>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Right — HRWL Visual Identity (smaller, offset down) */}
              <ScrollReveal delay={0.3}>
                <Link
                  to="/work/hrwl-visual-identity"
                  className="flex flex-col gap-6 no-underline group"
                  style={{ marginTop: "140px" }}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <div
                    className="w-full overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    style={{
                      aspectRatio: "1/1",
                      backgroundColor: "hsl(var(--foreground) / 0.08)",
                      boxShadow: "0px 30px 80px -15px rgba(0,0,0,0.3)",
                    }}
                  >
                    <img
                      src="/placeholder.svg"
                      alt="HRWL Visual Identity"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.6 }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: "clamp(20px, 2vw, 32px)",
                        lineHeight: "1.1",
                        letterSpacing: "-1.2px",
                        color: "hsl(var(--foreground))",
                        maxWidth: "80%"
                      }}
                    >
                      Hrwl - Visual Identity + Brand Film + OC Animations
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 1.2vw, 18px)",
                        lineHeight: "1.3",
                        letterSpacing: "-0.2px",
                        color: "hsl(var(--foreground) / 0.5)",
                      }}
                    >
                      Personal brand build: identity, cinematic film and original character animations.
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>

            {/* Row 2 — Google Case Study (centered ~67%) */}
            <div className="flex justify-center mt-12 pb-10">
              <ScrollReveal delay={0.2}>
                <Link
                  to="/work/coinbase-commercial"
                  className="flex flex-col gap-6 no-underline group"
                  style={{ width: "68%" }}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <div
                    className="w-full overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.005]"
                    style={{
                      aspectRatio: "16/9",
                      backgroundColor: "hsl(var(--foreground) / 0.08)",
                      boxShadow: "0px 50px 120px -30px rgba(0,0,0,0.4)",
                    }}
                  >
                    <img
                      src="/placeholder.svg"
                      alt="Google Short Case Study Film"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.6 }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 800,
                        fontSize: "clamp(24px, 2.5vw, 42px)",
                        lineHeight: "1.1",
                        letterSpacing: "-1.8px",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      Google — Short Case Study Film
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 1.5vw, 24px)",
                        lineHeight: "1.3",
                        letterSpacing: "-0.5px",
                        color: "hsl(var(--foreground) / 0.5)",
                      }}
                    >
                      A narrative short film that makes technical content approachable
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* ── MOBILE: stacked ── */}
          <div className="flex flex-col gap-12 md:hidden">
            {[
              {
                title: "The One You Keep — Brand film",
                description: "A personal cinematic poem about memory and connection.",
                ratio: "3/2.3",
                to: "/work/the-one-you-keep",
              },
              {
                title: "Hrwl - Visual Identity + Brand Film + OC Animations",
                description: "Personal brand build: identity, cinematic film and original character animations.",
                ratio: "16/10",
                to: "/work/hrwl-visual-identity",
              },
              {
                title: "Google — Short Case Study Film",
                description: "A narrative short film that makes technical content approachable",
                ratio: "16/9",
                to: "/work/coinbase-commercial",
              },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="flex flex-col gap-3 no-underline" onClick={() => window.scrollTo({ top: 0 })}>
                <div
                  className="w-full overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: item.ratio,
                    backgroundColor: "hsl(var(--foreground) / 0.08)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src="/placeholder.svg"
                    alt={item.title}
                    className="h-full w-full object-cover"
                    style={{ opacity: 0.4 }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "1.25",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="mx-auto max-w-[1520px] px-8">
          <hr style={{ border: "none", borderTop: "4px solid #929292" }} />
        </div>

        {/* ══════════════════════════════════════════════
          FAQ SECTION — Figma specs
      ══════════════════════════════════════════════ */}
        <ScrollReveal>
          <section id="faq" className="mx-auto max-w-[1400px] px-8 py-20">
            {/* ... contents ... */}
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2
                  style={{
                    fontFamily: "'Helvetica Light', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 4.5vw, 64px)",
                    lineHeight: "1.1",
                    letterSpacing: "-2.45px",
                    color: "hsl(var(--foreground))",
                    textAlign: "left",
                  }}
                >
                  Got any questions?
                </h2>
                <h2
                  style={{
                    fontFamily: "'Helvetica Light', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 4.5vw, 64px)",
                    lineHeight: "1.1",
                    letterSpacing: "-2.45px",
                    color: "#B4B3B1",
                    textAlign: "left",
                    marginTop: "4px",
                  }}
                >
                  I've got answers.
                </h2>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/inquiries"
                  className="faq-start-inquiry inline-flex items-center rounded-full transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "clamp(13px, 1.1vw, 16px)",
                    letterSpacing: "-0.52px",
                    padding: "14px 28px",
                    borderRadius: "2496px",
                    position: "relative" as const,
                  }}
                >
                  Start Inquiry
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                {FAQ_LEFT.map((item, i) => (
                  <Accordion key={i} type="single" collapsible>
                    <AccordionItem
                      value={`left-${i}`}
                      className="rounded-[31px] border-none px-8 faq-card"
                      style={{ borderBottom: "none" }}
                    >
                      <AccordionTrigger
                        className="text-left hover:no-underline py-[28px]"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: "clamp(14px, 1.3vw, 19.98px)",
                          lineHeight: "30.69px",
                          letterSpacing: "-0.82px",
                          color: "hsl(var(--foreground))",
                        }}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "clamp(13px, 1vw, 16px)",
                          lineHeight: "1.7",
                          color: "hsl(var(--foreground))",
                          paddingBottom: "28px",
                        }}
                      >
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                {FAQ_RIGHT.map((item, i) => (
                  <Accordion key={i} type="single" collapsible>
                    <AccordionItem
                      value={`right-${i}`}
                      className="rounded-[31px] border-none px-8 faq-card"
                      style={{ borderBottom: "none" }}
                    >
                      <AccordionTrigger
                        className="text-left hover:no-underline py-[28px]"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: "clamp(14px, 1.3vw, 19.98px)",
                          lineHeight: "30.69px",
                          letterSpacing: "-0.82px",
                          color: "hsl(var(--foreground))",
                        }}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "clamp(13px, 1vw, 16px)",
                          lineHeight: "1.7",
                          color: "hsl(var(--foreground))",
                          paddingBottom: "28px",
                        }}
                      >
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA BANNER */}
        <CTABanner />

      </div>
      <Footer catchphrase="Hire different" />
    </div>
  );
}
