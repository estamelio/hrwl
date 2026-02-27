/**
 * Work Page — /work
 * Matching Figma: "Work" title + 2-col card grid + CTA + Footer
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import WorkCard from "@/components/WorkCard";
import { ScrollReveal } from "@/components/ScrollReveal";

import { CASES } from "@/data/cases";

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page title */}
      <section className="mx-auto max-w-[1600px] px-6 pt-20 pb-8">
        <ScrollReveal width="fit-content">
          <h1
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 42px)",
              lineHeight: "1.1",
              letterSpacing: "0.2px",
              color: "hsl(var(--foreground))",
            }}
          >
            Work
          </h1>
        </ScrollReveal>
      </section>

      {/* Project grid */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {CASES.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <WorkCard
                title={project.title}
                description={project.overview}
                href={`/work/${project.id}`}
                comingSoon={project.comingSoon}
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
