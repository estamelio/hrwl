/**
 * Home Page — /
 * Sections: Hero (100vh), Headline block, Selected Work grid, What I Do, FAQ, CTA Banner, Footer
 */
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroThumb from "@/assets/hero-thumb.png";
import WorkCard from "@/components/WorkCard";
import { CASES } from "@/data/cases";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const WHAT_I_DO = [
  {
    num: "01",
    title: "Brand Films",
    description: "Cinematic stories that transform how audiences perceive your brand.",
  },
  {
    num: "02",
    title: "Commercials",
    description: "Strategic ads that sell without feeling like selling.",
  },
  {
    num: "03",
    title: "Motion Design",
    description: "Product demos, explainers, and UI animations that clarify.",
  },
];

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
  const [openFaq, setOpenFaq] = useState<string>("");

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <main className="overflow-x-hidden">
        {/* ═══ First Viewport: Hero Video Only ═══ */}
        <div className="min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden relative">
          {/* Ambient glow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 opacity-20 blur-[120px] bg-gradient-to-r from-primary/30 to-blue-500/20 rounded-full" />
          </div>

          <section className="w-full px-4 sm:px-6 md:px-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center w-full"
              style={{ maxWidth: "1100px" }}
            >
              {/* Blue glow behind video */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "120%",
                  height: "80%",
                  bottom: "-20%",
                  left: "-10%",
                  background: "#004BE4",
                  filter: "blur(80px)",
                  opacity: 0.12,
                  borderRadius: "50%",
                }}
              />
              {/* Video container — ready for <video> embed */}
              <div
                className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] w-full shadow-2xl"
                style={{
                  backgroundColor: "#0F0F0F",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src={heroThumb}
                  alt="Demo reel"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute left-4 top-4 sm:left-6 sm:top-6 md:left-8 md:top-8">
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E7E5E4] animate-pulse" />
                    <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] text-white uppercase">Video Reel</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 flex items-center justify-between">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight">Showreel 2024</h3>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-5 sm:h-5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>

        {/* ═══ Headline + CTA (below the fold) ═══ */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal delay={0.15}>
            <div className="text-center max-w-[1240px] mx-auto">
              <h1
                className="mb-6 md:mb-8"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 3vw, 42px)",
                  lineHeight: "1.15",
                  letterSpacing: "0.72px",
                  color: "hsl(var(--foreground))",
                }}
              >
                Cinematic Brand Films
                <br />
                That make your product impossible to ignore
              </h1>
              <p
                className="mb-10 md:mb-12 max-w-2xl mx-auto font-medium"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 19px)",
                  lineHeight: "clamp(22px, 2.5vw, 34px)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Freelance Motion Designer &amp; Creative Director crafting high-ROI visual stories for ambitious brands.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/inquiry" className="min-w-[220px] text-center px-10 py-5 rounded-full bg-foreground text-background font-bold text-base shadow-xl transition-all hover:scale-[1.03] active:scale-[0.98]">
                  Start Inquiry
                </Link>
                <Link to="/work" className="min-w-[220px] text-center px-10 py-5 rounded-full bg-muted/30 border border-border/50 text-foreground font-bold text-base backdrop-blur-sm transition-all hover:bg-muted/50">
                  See Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Selected Work */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                  Recent Work
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Projects</h2>
              </div>
              <Link
                to="/work"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                View All
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {CASES.filter(c => !c.comingSoon).slice(0, 3).map((project, i) => (
                <Link key={project.id} to={`/work/${project.id}`} className="group block">
                  <div className="aspect-[4/3] bg-muted rounded-xl mb-3 overflow-hidden relative card-elevated">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 to-foreground flex items-center justify-center">
                        <span className="text-4xl font-bold text-background/8 group-hover:text-background/15 transition-colors duration-500">
                          0{i + 1}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold mb-0.5 group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title.split(" — ")[0]}
                      </h3>
                      <p className="text-xs text-muted-foreground">{project.production || "Brand System"}</p>
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground/60">{project.year}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to="/work"
              className="md:hidden flex items-center justify-center gap-2 text-sm font-medium mt-10 text-muted-foreground"
            >
              View All Work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* What I Do  */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                What I Do
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Creative solutions for business problems.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {WHAT_I_DO.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-card rounded-xl border border-border/60 card-elevated"
                >
                  <span className="text-[11px] font-mono text-muted-foreground/50">{item.num}</span>
                  <h3 className="text-base font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-8 md:px-12 lg:px-20 py-20 max-w-[1600px] mx-auto">
          <ScrollReveal>
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div>
                <h2
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
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
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
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
                <Link to="/inquiry" className="faq-start-inquiry inline-flex">
                  Start Inquiry
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 items-start">
              <div className="flex flex-col gap-6">
                {FAQ_LEFT.map((item, i) => {
                  const itemValue = `left-${i}`;
                  return (
                    <Accordion
                      key={i}
                      type="single"
                      collapsible
                      value={openFaq === itemValue ? itemValue : ""}
                      onValueChange={(val) => setOpenFaq(val || "")}
                      className="w-full"
                    >
                      <AccordionItem
                        value={itemValue}
                        className="faq-card border-none rounded-[32px] overflow-hidden px-8"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-8 text-lg font-bold tracking-tight">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-8">
                          <div className="faq-answer-bounce">
                            {item.a}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
              </div>

              <div className="flex flex-col gap-6">
                {FAQ_RIGHT.map((item, i) => {
                  const itemValue = `right-${i}`;
                  return (
                    <Accordion
                      key={i}
                      type="single"
                      collapsible
                      value={openFaq === itemValue ? itemValue : ""}
                      onValueChange={(val) => setOpenFaq(val || "")}
                      className="w-full"
                    >
                      <AccordionItem
                        value={itemValue}
                        className="faq-card border-none rounded-[32px] overflow-hidden px-8"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-8 text-lg font-bold tracking-tight">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-8">
                          <div className="faq-answer-bounce">
                            {item.a}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <CTABanner />

      </main>
      <Footer catchphrase="Hire different" />
    </div>
  );
}
