/**
 * Work Page — /work
 * Matching Figma: "Work" title + 2-col card grid + CTA + Footer
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import WorkCard from "@/components/WorkCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const PROJECTS = [
  {
    title: "Hrwl - Visual Identity + Brand Film + OC Animations",
    description: "Personal brand build: identity, cinematic film and original character animations.",
    href: "/work/hrwl-visual-identity",
  },
  {
    title: "Noxisros - Visual Identity + Commercial",
    description: "A complete identity and modular motion system for a creative collective.",
    href: "/work/personal-branding",
  },
  {
    title: "The One You Keep - Brand film",
    description: "A personal cinematic poem about memory and connection.",
    href: "/work/the-one-you-keep",
  },
  {
    title: "Coinbase - Commercial",
    description: "A commercial highlighting speed and clarity of crypto.",
    href: "/work/coinbase-commercial",
  },
  {
    title: "Google — Short Case Study Film",
    description: "A narrative short film that makes technical content approachable.",
  },
  {
    title: "",
    description: "",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page title */}
      <section className="mx-auto max-w-[1400px] px-8 pt-16 pb-10">
        <ScrollReveal width="fit-content">
          <h1
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(42px, 5vw, 58.96px)",
              lineHeight: "64px",
              letterSpacing: "0.87px",
              color: "hsl(var(--foreground))",
            }}
          >
            Work
          </h1>
        </ScrollReveal>
      </section>

      {/* Project grid */}
      <section className="mx-auto max-w-[1400px] px-8 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title || `placeholder-${i}`} delay={i * 0.1}>
              <WorkCard
                title={project.title}
                description={project.description}
                href={(project as any).href}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer catchphrase="Repositioning brand identities through cinematic storytelling." />
    </div>
  );
}
