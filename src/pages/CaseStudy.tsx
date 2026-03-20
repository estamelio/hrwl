import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, CheckCircle, Volume2, Music2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { CASES } from "@/data/cases";
import Footer from "@/components/Footer";
import TheOneYouKeepCaseStudy from "@/components/case-studies/TheOneYouKeepCaseStudy";
import HRWLVisualIdentityCaseStudy from "@/components/case-studies/HRWLVisualIdentityCaseStudy";
import HRWLBrandFilmCaseStudy from "@/components/case-studies/HRWLBrandFilmCaseStudy";
import BackToWork from "@/components/BackToWork";

// Mini SFX player
const SFXPlayer = ({ label }: { label: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="flex items-center gap-2 px-4 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity duration-300 group"
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 animate-pulse" />
      ) : (
        <Play className="w-4 h-4 ml-0.5" />
      )}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

const CaseStudy = () => {
  const { id } = useParams();
  const caseData = CASES.find((c) => c.id === id);
  const currentIndex = CASES.findIndex((c) => c.id === id);
  const nextCase = CASES[(currentIndex + 1) % CASES.length];

  if (!caseData) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case not found</h1>
          <Link to="/work">
            <Button variant="outline">Back to Work</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Wrapper function to add BackToWork to any case
  const withNavigation = (content: React.ReactNode) => (
    <div className="min-h-screen bg-background">
      <BackToWork />
      {content}
    </div>
  );

  // Dedicated components
  if (caseData.id === "theoneyoukeep") {
    return withNavigation(<TheOneYouKeepCaseStudy caseData={caseData} nextCase={nextCase} />);
  }
  if (caseData.id === "hrwl") {
    return withNavigation(<HRWLVisualIdentityCaseStudy caseData={caseData} nextCase={nextCase} />);
  }
  if (caseData.id === "hrwl-brand-film") {
    return withNavigation(<HRWLBrandFilmCaseStudy caseData={caseData} nextCase={nextCase} />);
  }

  // Coming Soon — styled placeholder
  if (caseData.comingSoon) {
    return (
      <div className="min-h-screen bg-background">
        <BackToWork />
        <section className="pt-32 pb-24 px-6 min-h-[80vh] flex items-center">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-8">
              <span className="text-background text-2xl font-bold">C</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 tracking-tight text-foreground">{caseData.title}</h1>
            <p className="text-lg text-muted-foreground mb-3">Project coming soon.</p>
            <p className="text-sm text-muted-foreground/60 mb-10 max-w-sm mx-auto">{caseData.overview}</p>
            <Link to="/work">
              <Button variant="outline" className="rounded-full px-6 border-border/60 hover:border-foreground/30 transition-all duration-400">
                View Other Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // HRWL Launch Campaign
  if (caseData.id === "hrwl-launch") {
    return (
      <div className="min-h-screen bg-background">
        <BackToWork />

        <section className="pt-24 pb-4 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
              <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3 text-foreground">{caseData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
          </div>
        </section>

        {/* Two Films */}
        <section className="px-6 mb-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-3">
              {["Film 01", "Film 02"].map((film, i) => (
                <div key={i} className="aspect-video bg-foreground rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-5 h-5 text-background ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-end text-background/80">
                    <span className="text-xs font-medium">{film}</span>
                    <span className="text-xs font-mono">{i === 0 ? "0:15" : "0:17"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 mb-12">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                { label: "Format", value: "Motion Video" },
                { label: "Runtime", value: "15s + 17s" },
                { label: "Production", value: "5 Days" },
                { label: "Purpose", value: "Brand Awareness" },
                { label: "CTA", value: "djamel@hrwl.studio" },
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
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <div className="bg-foreground text-background rounded-lg p-6 md:p-8 text-center">
              <p className="text-base md:text-lg leading-relaxed">
                HRWL entered the market as <span className="font-bold">recognizable before being understood</span>—instant recall, premium perception, and curiosity without explanation.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              Inspired by IBM-style character animation campaigns, the goal was pattern recognition over persuasion. Instead of emotional storytelling or founder narratives, HRWL needed a signal—economical, repeatable, instantly recognizable.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["No story arc", "No emotional hooks", "Only signal"].map((point, i) => (
                <div key={i} className="p-3 bg-surface/50 rounded-md border border-border text-center">
                  <p className="font-medium text-xs">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storyboard — 10 scenes */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Storyboard</h2>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="aspect-video bg-surface/50 rounded-md border border-border border-dashed flex items-center justify-center hover:bg-surface/80 transition-colors duration-300">
                  <span className="text-[10px] text-muted-foreground/40 font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Process</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Visual System</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>· Limited color for contrast</li>
                  <li>· Geometric simplicity</li>
                  <li>· Negative space as component</li>
                </ul>
              </div>
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Animation</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>· Standardized motion curves</li>
                  <li>· Structured timing</li>
                  <li>· Transitions over moments</li>
                </ul>
              </div>
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Constraints</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>· No voiceover</li>
                  <li>· Single visual system</li>
                  <li>· Digital-first only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sound Design + SFX Players */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Collaboration & Sound Design</h2>
            <div className="bg-surface/30 rounded-lg p-5 border border-border mb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Animation was created first, intentionally off-tempo. <span className="text-foreground font-medium">Yuhui (Kelvin) Jian</span> then brought rhythm, music notes, and sound design that elevated the final result—transforming silent motion into a memorable sonic identity.
              </p>
            </div>
            <div className="flex gap-3">
              <SFXPlayer label="Sound Effect 01" />
              <SFXPlayer label="Sound Effect 02" />
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Roles & Credits</h2>
            <div className="space-y-2">
              {caseData.credits.map((credit, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground">{credit.role}</span>
                  <span className="font-medium text-sm text-foreground">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next */}
        <div className="border-t border-border bg-surface/30 py-10 px-6">
          <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
              <p className="text-lg font-bold text-foreground">{nextCase.title}</p>
            </div>
            <Link to={`/work/${nextCase.id}`}>
              <Button variant="outline" className="group rounded-full">
                View Case
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Google — Minimal style (like HRWL Launch)
  if (caseData.id === "google") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <BackToWork />

        <section className="pt-24 pb-4 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
              <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3 text-foreground">{caseData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
          </div>
        </section>

        {/* Final Animation Video */}
        <section className="px-6 mb-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="aspect-video bg-foreground rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-6 h-6 text-background ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 mb-12">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { label: "Production", value: caseData.production },
                { label: "Year", value: caseData.year },
                { label: "Roles", value: `${caseData.credits.length} roles` },
                { label: "Purpose", value: "Case Study Intro" },
              ].map((stat, i) => (
                <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                  <p className="font-semibold text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-3 text-foreground">Problem</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{caseData.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3 text-foreground">Solution</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{caseData.solution}</p>
            </div>
          </div>
        </section>

        {/* Style Frames — 5 */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4 text-foreground">Style Frames</h2>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="aspect-video bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center hover:bg-surface/80 transition-colors duration-300">
                  <span className="text-[10px] text-muted-foreground/40 font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4 text-foreground">Roles & Credits</h2>
            <div className="space-y-2">
              {caseData.credits.map((credit, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground">{credit.role}</span>
                  <span className="font-medium text-sm text-foreground">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next */}
        <div className="border-t border-border bg-surface/30 py-10 px-6">
          <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
              <p className="text-lg font-bold text-foreground">{nextCase.title}</p>
            </div>
            <Link to={`/work/${nextCase.id}`}>
              <Button variant="outline" className="group rounded-full">
                View Case
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Default concise template
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackToWork />

      <section className="pt-24 pb-4 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3 text-foreground">{caseData.title}</h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
        </div>
      </section>

      <section className="px-6 mb-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-video bg-foreground rounded-lg overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play className="w-6 h-6 text-background ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { label: "Production", value: caseData.production },
              { label: "Year", value: caseData.year },
              { label: "Roles", value: `${caseData.credits.length} roles` },
              { label: "Result", value: caseData.result.split(",")[0] },
            ].map((stat, i) => (
              <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                <p className="font-semibold text-sm truncate">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {caseData.keyHighlight && (
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <div className="bg-foreground text-background rounded-lg p-6 md:p-8 text-center">
              <p className="text-base md:text-lg leading-relaxed">{caseData.keyHighlight}</p>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3 text-foreground">Problem</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{caseData.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3 text-foreground">Solution</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{caseData.solution}</p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-3 text-foreground">Outcome</h2>
          <div className="flex gap-3 p-4 bg-surface/50 rounded-md border border-border">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm">{caseData.result}</p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-4 text-foreground">Roles & Credits</h2>
          <div className="grid md:grid-cols-2 gap-x-6">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">{credit.role}</span>
                {credit.link ? (
                  <a href={credit.link} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:underline text-foreground">
                    {credit.name}
                  </a>
                ) : (
                  <span className="font-medium text-sm text-foreground">{credit.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface/30 py-10 px-6">
        <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
            <p className="text-lg font-bold text-foreground">{nextCase.title}</p>
          </div>
          <Link to={`/work/${nextCase.id}`}>
            <Button variant="outline" className="group rounded-full">
              View Case
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudy;
