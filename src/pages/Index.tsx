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
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
        {/* Full Viewport Hero Section */}
        <div className="min-h-[105vh] flex flex-col items-center justify-center pt-28">
          <section className="w-full px-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center mb-16"
              style={{ maxWidth: "850px", width: "100%" }}
            >
              {/* Blue glow */}
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
              <div
                className="relative overflow-hidden rounded-[24px] w-full shadow-2xl"
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

                <div className="absolute left-8 top-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#E7E5E4] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Video Reel</span>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Showreel 2024</h3>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <h1
                  className="mb-8"
                  style={{
                    fontFamily: "'Helvetica Now Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(24px, 3vw, 42px)",
                    lineHeight: "1.15",
                    letterSpacing: "0.72px",
                    color: "hsl(var(--foreground))",
                    maxWidth: "1240px",
                    margin: "0 auto 24px auto"
                  }}
                >
                  Cinematic Brand Films
                  <br />
                  That make your product impossible to ignore
                </h1>
                <p
                  className="mb-12 max-w-2xl mx-auto font-medium"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "clamp(14px, 1.3vw, 19px)",
                    lineHeight: "clamp(22px, 2.5vw, 34px)",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  Freelance Motion Designer & Creative Director crafting high-ROI visual stories for ambitious brands.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-5">
                  <Link to="/inquiries" className="px-10 py-4 rounded-full bg-foreground text-background font-bold text-sm shadow-xl transition-all hover:scale-[1.03] active:scale-[0.98]">
                    Start Inquiry
                  </Link>
                  <Link to="/work" className="px-10 py-4 rounded-full bg-muted/30 border border-border/50 text-foreground font-bold text-sm backdrop-blur-sm transition-all hover:bg-muted/50">
                    See Case Studies
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </div>

        {/* Selected Work Grid */}
        <section className="px-8 md:px-12 lg:px-20 py-32 max-w-[1700px] mx-auto border-t border-border/30">
          <ScrollReveal>
            <div className="flex flex-col mb-16">
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-3 px-1">Recent Work</span>
              <div className="flex items-end justify-between">
                <h2
                  className="text-left"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(32px, 5vw, 68px)",
                    lineHeight: "1",
                    letterSpacing: "-3.5px",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  Selected Projects
                </h2>
                <Link to="/work" className="flex items-center gap-1.5 text-xs font-bold opacity-60 hover:opacity-100 transition-all uppercase tracking-widest mt-auto mb-2">
                  View All <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {CASES.slice(0, 3).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <Link to={project.comingSoon ? "#" : `/work/${project.id}`} className="group block relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-muted/20 mb-6 transition-all duration-500 group-hover:scale-[0.98]">
                    <img
                      src={project.comingSoon ? "" : "/placeholder.svg"} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Arrow Circle */}
                    {!project.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-0 transition-opacity group-hover:duration-300 pointer-events-none">
                      <span className="text-8xl font-black text-foreground">0{i + 1}</span>
                    </div>
                    
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="px-5 py-2 rounded-full bg-foreground text-background text-[10px] font-black tracking-widest uppercase">
                          COMING SOON
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors truncate">
                        {project.title.split(" — ")[0]}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground/40">{project.year}</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                      {project.production || "Brand System"}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section className="px-8 md:px-12 lg:px-20 py-32 bg-muted/5">
          <div className="max-w-[1500px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-col items-center text-center mb-24">
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">What I Do</span>
                <h2
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(32px, 5vw, 68px)",
                    lineHeight: "1.05",
                    letterSpacing: "-3.5px",
                    color: "hsl(var(--foreground))",
                    maxWidth: "900px",
                  }}
                >
                  Creative solutions for <br />
                  <span className="text-muted-foreground">business problems.</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {WHAT_I_DO.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-10 rounded-[32px] bg-white dark:bg-[#0E0E0E] border border-border/40 shadow-subtle hover:border-foreground/20 transition-all group min-h-[280px] flex flex-col">
                    <span className="text-2xl font-mono font-bold text-muted-foreground/30 mb-10 block group-hover:text-foreground/50 transition-colors uppercase">{item.num}</span>
                    <h3 className="text-2xl font-bold mb-5 tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground/70 text-base leading-relaxed font-medium">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-8 md:px-12 lg:px-20 py-32 max-w-[1600px] mx-auto">
          <ScrollReveal>
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
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
                <Link to="/inquiries" className="faq-start-inquiry inline-flex">
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
