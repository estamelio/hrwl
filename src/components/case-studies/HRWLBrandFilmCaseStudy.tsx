import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, Music, ChevronDown } from "lucide-react";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";
import MediaLightbox from "@/components/MediaLightbox";

// Animation Assets
import akiowaving from "@/assets/Case studies/Hrwl - Brand Film/Animation/Akiowavinganimation.gif";
import dream31 from "@/assets/Case studies/Hrwl - Brand Film/Animation/Dream_31.gif";
import akio from "@/assets/Case studies/Hrwl - Brand Film/Animation/akio.gif";
import brandFilmVideo from "@/assets/Case studies/Hrwl - Brand Film/Animation/hrwl_djamel_1727540225_3467177420635114078_67547052611.mp4";

// Storyboard (8)
import bfSb1 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/scene 1.webp";
import bfSb2 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/Frame 1.webp";
import bfSb3 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/frame 2.webp";
import bfSb4 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/scene 5.webp";
import bfSb5 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/The one you keep.webp";
import bfSb6 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/coinbase.webp";
import bfSb7 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/Yaaay.webp";
import bfSb8 from "@/assets/Case studies/Hrwl - Brand Film/Storyboard/CTA 1.webp";

// R&D (13)
import bfRd1 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/scene 3.webp";
import bfRd2 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/scene 4.webp";
import bfRd3 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/frame 5.webp";
import bfRd4 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/Hrwl.webp";
import bfRd5 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/Google .webp";
import bfRd6 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/Noxsiros.webp";
import bfRd7 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/RMM5.webp";
import bfRd8 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/Yooopiiii.webp";
import bfRd9 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/impact frame 1.webp";
import bfRd10 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/impact frame 2.webp";
import bfRd11 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/impact frame 4.webp";
import bfRd12 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/Frame 2147226525.webp";
import bfRd13 from "@/assets/Case studies/Hrwl - Brand Film/R&Ds/CTA 3.webp";

interface Props {
  caseData: Case;
  nextCase: Case;
}

const CollapsibleSection = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-border/60 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left group"
    >
      <h3 className="text-lg md:text-xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity duration-300">
        {title}
      </h3>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isOpen ? "Collapse" : "Read"}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
    </button>
    <div
      className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
    >
      <div className="overflow-hidden">
        <div className="pb-8">{children}</div>
      </div>
    </div>
  </div>
);

const HRWLBrandFilmCaseStudy = ({ caseData, nextCase }: Props) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    index: 0,
    images: [] as string[]
  });

  const animImages = [akio, akiowaving, dream31];
  const sbImages = [bfSb1, bfSb2, bfSb3, bfSb4, bfSb5, bfSb6, bfSb7, bfSb8];
  const rdImages = [bfRd1, bfRd2, bfRd3, bfRd4, bfRd5, bfRd6, bfRd7, bfRd8, bfRd9, bfRd10, bfRd11, bfRd13];

  const toggleSection = (key: string) => {
    if (expandAll) {
      // If expand all is enabled, we don't do anything special here as they are all open
      // or we could possibly allow individual closing, but user said "disable open one by one"
      return;
    }
    setActiveSection(prev => prev === key ? null : key);
  };

  const openLightbox = (index: number, images: string[]) => {
    setLightbox({ isOpen: true, index, images });
  };

  const isSectionOpen = (key: string) => expandAll || activeSection === key;

  return (
    <div className="min-h-screen bg-background">


      {/* Hero */}
      <section className="pt-24 pb-4 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-2xl md:text-5xl font-semibold leading-tight tracking-tight mb-4">{caseData.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[650px] leading-relaxed">{caseData.overview}</p>
        </div>
      </section>

      {/* Hero Video */}
      <section className="px-6 mb-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
            <iframe
              src="https://player.vimeo.com/video/1179505050?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title="HRWL - Brand Film"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 mb-14">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              { label: "Format", value: "Brand Film" },
              { label: "Runtime", value: "44 seconds" },
              { label: "Production", value: "3 months" },
              { label: "Year", value: caseData.year },
              { label: "Roles", value: `${caseData.credits.length} roles` },
            ].map((stat, i) => (
              <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                <p className="font-semibold text-sm">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Result */}
      <section className="px-6 mb-14">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-foreground text-background rounded-lg p-6 md:p-8 text-center">
            <p className="text-base md:text-lg leading-relaxed">
              Positioned Djamel as a <span className="font-bold">creative partner, storyteller, strategist, and director</span> — not just an animator.
            </p>
          </div>
        </div>
      </section>

      {/* Expand All Toggle */}
      <section className="px-6 mb-2">
        <div className="max-w-[900px] mx-auto flex justify-end">
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
          >
            {expandAll ? "Collapse All" : "Read All Sections"}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expandAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      {/* Collapsible Content Sections */}
      <section className="px-6 mb-14">
        <div className="max-w-[900px] mx-auto">

          {/* Purpose & Context */}
          <CollapsibleSection title="Purpose & Context" isOpen={isSectionOpen("context")} onToggle={() => toggleSection("context")}>
            <div className="max-w-[700px]">
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Create a 44-second brand film that positions HRWL as both artistically sharp and strategically essential. The goal is to show skill, personality, and proof — blending cinematic flair with business clarity.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every motion designer creates a showreel. But many of Djamel's projects were under NDA. So instead of making a normal showreel, he created a <strong className="text-foreground">brand film narrative</strong> — a 44-second cinematic piece that tells a story instead of listing work. The viewer discovers the creator through the story itself.
              </p>
            </div>
          </CollapsibleSection>

          {/* Story Premise */}
          <CollapsibleSection title="Story Premise" isOpen={isSectionOpen("story")} onToggle={() => toggleSection("story")}>
            <div className="max-w-[700px]">
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                The film visually represents a problem–solution journey, framed through color psychology and emotional pacing.
              </p>
              <div className="bg-surface/30 rounded-lg border border-border p-5">
                <ol className="space-y-3">
                  {[
                    "A business owner opens his laptop late at night.",
                    <>He searches: <strong className="text-foreground">"What problems could kill a business?"</strong></>,
                    "The screen floods with chaotic results. Fear builds.",
                    <>He types: <strong className="text-foreground">"How can I solve them?"</strong> — The answer: <strong className="text-foreground">Brand Film.</strong></>,
                    <><strong className="text-foreground">"What is a brand film?"</strong> — Examples appear. These are Djamel's work.</>,
                    <><strong className="text-foreground">"Who makes these?"</strong> — Reveal: Djamel Haroual. Website. CTA.</>,
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-foreground font-mono text-sm mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base text-muted-foreground">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </CollapsibleSection>

          {/* Color & Narrative Arc */}
          <CollapsibleSection title="Color & Narrative Arc" isOpen={isSectionOpen("color")} onToggle={() => toggleSection("color")}>
            <div className="max-w-[700px]">
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Each phase of the film evolves with purposeful pacing, motivated transitions, and sound-driven energy shifts. The audience should feel: <em>"There's a problem... oh—this solves it... wow, who made this?"</em>
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg border border-border bg-surface/30">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/40" />
                    <h4 className="font-semibold text-base">Grey Phase — Silence & Curiosity</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    The film opens in a neutral world, asking a powerful question. Intrigue, suspense, setup.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-surface/30">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                    <h4 className="font-semibold text-base">Red Phase — Chaos & Stress</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dramatic, chaotic, and intentionally unsettling. The music invokes urgency as the business owner confronts problems that could kill his business. Tension peaks.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-surface/30">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500/80" />
                    <h4 className="font-semibold text-base">Blue Phase — Resolve & Clarity</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    The direct contrast to chaos. As case studies appear on screen, the music shifts to a theme of resolve — flutes, clarity, and confidence. The viewer feels relief.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-surface/30">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-foreground/60" />
                    <h4 className="font-semibold text-base">Reveal — Combination & CTA</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Both phases merge into a final crescendo that reveals the creator and ends with a bold, poster-like CTA. The whole piece comes together like an orchestra.
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Creative Direction */}
          <CollapsibleSection title="Creative Direction" isOpen={isSectionOpen("direction")} onToggle={() => toggleSection("direction")}>
            <div className="max-w-[700px]">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-surface/30 rounded-lg border border-border">
                  <h4 className="font-semibold text-base mb-2">Narrative Strategy</h4>
                  <ul className="text-base text-muted-foreground space-y-1.5">
                    <li>· Story-driven, not portfolio-driven</li>
                    <li>· Viewer discovers creator through plot</li>
                    <li>· Problem → Solution → Reveal</li>
                  </ul>
                </div>
                <div className="p-4 bg-surface/30 rounded-lg border border-border">
                  <h4 className="font-semibold text-base mb-2">Visual System</h4>
                  <ul className="text-base text-muted-foreground space-y-1.5">
                    <li>· Three-phase color architecture</li>
                    <li>· Grey → Red → Blue → Reveal</li>
                    <li>· Intentional contrast between moods</li>
                  </ul>
                </div>
                <div className="p-4 bg-surface/30 rounded-lg border border-border">
                  <h4 className="font-semibold text-base mb-2">Constraints</h4>
                  <ul className="text-base text-muted-foreground space-y-1.5">
                    <li>· 44 seconds maximum</li>
                    <li>· No voiceover or text explanation</li>
                    <li>· Must work without sound context</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 p-4 bg-foreground/5 rounded-lg border border-border/40">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Final note:</strong> Keep pacing deliberate — start fast, spike in chaos, resolve smoothly. The last frame must visually feel like a poster — static, bold, iconic.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Process & Production Breakdown */}
          <CollapsibleSection title="Process & Production Breakdown" isOpen={isSectionOpen("process")} onToggle={() => toggleSection("process")}>
            <div className="space-y-10">
              <div className="max-w-[700px]">
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  The project followed a structured creative pipeline from concept to delivery. <strong className="text-foreground">3 months</strong> of work from Creative Direction to Animation.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { step: "01", label: "Brainstorming" },
                    { step: "02", label: "Narrative Building" },
                    { step: "03", label: "Moodboarding" },
                    { step: "04", label: "Storyboarding" },
                    { step: "05", label: "Styleframe Design" },
                    { step: "06", label: "Animation" },
                  ].map((item) => (
                    <div key={item.step} className="p-4 bg-surface/30 rounded-lg border border-border text-center">
                      <span className="text-xs font-mono text-muted-foreground/50 block mb-1">{item.step}</span>
                      <p className="font-semibold text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animation Assets */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Animation Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  {animImages.map((img, i) => (
                    <div
                      key={i}
                      className="bg-surface/50 rounded-lg overflow-hidden border border-border aspect-square cursor-zoom-in hover:opacity-80 transition-opacity"
                      onClick={() => openLightbox(i, animImages)}
                    >
                      <img src={img} alt="Animation Asset" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Storyboard */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Storyboard</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {sbImages.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-video bg-surface/50 rounded-lg border border-border overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-zoom-in"
                      onClick={() => openLightbox(i, sbImages)}
                    >
                      <img src={img} alt={`Storyboard ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* R&D */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">R&D — Experimental Frames</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {rdImages.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-video bg-surface/50 rounded-lg border border-border overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-zoom-in"
                      onClick={() => openLightbox(i, rdImages)}
                    >
                      <img src={img} alt={`R&D ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Concept Art */}
              <div className="max-w-[500px]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Concept Art</h3>
                <div
                  className="bg-surface/50 rounded-lg border border-border overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(0, [bfRd12])}
                >
                  <img src={bfRd12} alt="Concept Art" className="w-full h-auto object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Sound Design */}
          <CollapsibleSection title="Sound Design & Original Score" isOpen={isSectionOpen("sound")} onToggle={() => toggleSection("sound")}>
            <div className="max-w-[700px]">
              <div className="mb-6 flex items-center gap-3">
                <Music className="w-5 h-5 text-muted-foreground" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  Composed by <strong className="text-foreground">Uliania PchelinUley</strong>
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-base mb-2">The Brief</h4>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Music that is <strong className="text-foreground">off-tempo, has no fixed BPM, and feels intentional</strong> — where every note matches every animation beat precisely. No stock music or SFX libraries were used.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-surface/30 rounded-lg border border-border">
                    <h4 className="font-semibold text-base mb-2">The Challenge</h4>
                    <ul className="text-base text-muted-foreground space-y-1.5">
                      <li>· No fixed BPM — context-driven</li>
                      <li>· Note-to-motion synchronization</li>
                      <li>· Tailored Foley for every scene</li>
                      <li>· Score breathes with animation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-surface/30 rounded-lg border border-border">
                    <h4 className="font-semibold text-base mb-2">Emotional Phases</h4>
                    <ul className="text-base text-muted-foreground space-y-1.5">
                      <li>· Tension Peaks (Red Phase)</li>
                      <li>· Relief & Flutes (Blue Phase)</li>
                      <li>· Orchestral Finale (Reveal)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-foreground text-background rounded-lg p-6 text-center">
                <p className="text-base leading-relaxed">
                  Uley didn't just add music — she <span className="font-bold">authored the sonic identity</span> of the film.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </section>

      {/* Credits */}
      <section className="px-6 mb-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Roles & Credits</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-1 sm:gap-4 border-b border-border/60 last:border-0">
                {credit.link ? (
                  <a
                    href={credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm flex items-start sm:items-center gap-1.5 hover:opacity-70 transition-opacity duration-200 group text-foreground"
                  >
                    <span className="leading-tight">{credit.name}</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-80 transition-opacity mt-0.5 sm:mt-0 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                ) : (
                  <span className="font-medium text-sm leading-tight text-foreground">{credit.name}</span>
                )}
                <span className="text-xs text-muted-foreground text-left sm:text-right">{credit.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No AI Signature */}
      <section className="px-6 mb-14">
        <div className="max-w-[900px] mx-auto flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-surface/30">
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">No AI was used in this project</span>
          </div>
        </div>
      </section>

      {/* Next */}
      <div className="border-t border-border bg-surface/20 py-12 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Next Case Study</p>
            <p className="text-xl font-bold">{nextCase.title}</p>
          </div>
          <Link to={`/work/${nextCase.id}`}>
            <Button variant="outline" className="group rounded-full px-6">
              View Case
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>

      <MediaLightbox
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        initialIndex={lightbox.index}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
      />
    </div>
  );
};

export default HRWLBrandFilmCaseStudy;
