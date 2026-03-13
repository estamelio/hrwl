import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, CheckCircle, Volume2, Music2, Layers } from "lucide-react";
import { CASES } from "@/data/cases";
import Footer from "@/components/Footer";
import TheOneYouKeepCaseStudy from "@/components/case-studies/TheOneYouKeepCaseStudy";
import HRWLVisualIdentityCaseStudy from "@/components/case-studies/HRWLVisualIdentityCaseStudy";
import GoogleVidsCaseStudy from "@/components/case-studies/GoogleVidsCaseStudy";
import BackToWork from "@/components/BackToWork";

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

  // Coming Soon page for Coinbase
  if (caseData.comingSoon) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <BackToWork />
        
        <section className="pt-32 pb-24 px-6 min-h-screen flex items-center">
          <div className="max-w-[600px] mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full mb-6">
              Coming Soon · {caseData.year}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {caseData.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {caseData.overview}
            </p>
            <Link to="/work">
              <Button variant="outline" className="rounded-full">
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

  // Dedicated case study components
  if (caseData.id === "theoneyoukeep") {
    return <TheOneYouKeepCaseStudy caseData={caseData} nextCase={nextCase} />;
  }

  if (caseData.id === "hrwl") {
    return <HRWLVisualIdentityCaseStudy caseData={caseData} nextCase={nextCase} />;
  }

  if (caseData.id === "google") {
    return <GoogleVidsCaseStudy caseData={caseData} nextCase={nextCase} />;
  }

  // HRWL Launch Campaign - Concise Benchmark
  if (caseData.id === "hrwl-launch") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <BackToWork />

        {/* Hero Section */}
        <section className="pt-24 pb-4 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                Case Study
              </span>
              <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">
              {caseData.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              {caseData.overview}
            </p>
          </div>
        </section>

        {/* Two Films - Primary Focal Point */}
        <section className="px-6 mb-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="aspect-video bg-foreground rounded-lg overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-background ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-end text-background/80">
                  <span className="text-xs font-medium">Film 01</span>
                  <span className="text-xs font-mono">0:15</span>
                </div>
              </div>
              <div className="aspect-video bg-foreground rounded-lg overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-background ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-end text-background/80">
                  <span className="text-xs font-medium">Film 02</span>
                  <span className="text-xs font-mono">0:17</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
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

        {/* Strategy - Concise */}
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

        {/* Process - Compact Grid */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Process</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Visual System</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Limited color for contrast</li>
                  <li>• Geometric simplicity</li>
                  <li>• Negative space as component</li>
                </ul>
              </div>
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Animation</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Standardized motion curves</li>
                  <li>• Structured timing</li>
                  <li>• Transitions over moments</li>
                </ul>
              </div>
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Constraints</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• No voiceover</li>
                  <li>• Single visual system</li>
                  <li>• Digital-first only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration & Sound Design */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Collaboration & Sound Design</h2>
            <div className="bg-surface/30 rounded-lg p-5 border border-border mb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Animation was created first, intentionally off-tempo. <span className="text-foreground font-medium">Yuhui (Kelvin) Jian</span> then brought rhythm, music notes, and sound design that elevated the final result—transforming silent motion into a memorable sonic identity.
              </p>
            </div>
            
            {/* Sound Design Bento Box */}
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-foreground rounded-md overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Music2 className="w-6 h-6 text-background/60" />
                  <span className="text-xs text-background/80 font-medium">Music Only</span>
                </div>
                <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-8 h-8 text-background" />
                </div>
              </div>
              <div className="aspect-square bg-foreground rounded-md overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Volume2 className="w-6 h-6 text-background/60" />
                  <span className="text-xs text-background/80 font-medium">SFX Only</span>
                </div>
                <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-8 h-8 text-background" />
                </div>
              </div>
              <div className="aspect-square bg-foreground rounded-md overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Layers className="w-6 h-6 text-background/60" />
                  <span className="text-xs text-background/80 font-medium">Combined</span>
                </div>
                <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-8 h-8 text-background" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Credits</h2>
            <div className="space-y-2">
              {caseData.credits.map((credit, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground">{credit.role}</span>
                  <span className="font-medium text-sm">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Case CTA */}
        <div className="border-t border-border bg-surface/30 py-10 px-6">
          <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
              <p className="text-lg font-bold">{nextCase.title}</p>
            </div>
            <Link to={`/work/${nextCase.id}`}>
              <Button variant="outline" className="group rounded-full">
                View Case
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Concise Case Study Template for all other cases
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackToWork />

      {/* Hero Section */}
      <section className="pt-24 pb-4 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
              Case Study
            </span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">
            {caseData.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            {caseData.overview}
          </p>
        </div>
      </section>

      {/* Hero Video/Image */}
      <section className="px-6 mb-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-video bg-foreground rounded-lg overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-background ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 mb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-surface/50 rounded-md p-3 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Production</p>
              <p className="font-semibold text-sm">{caseData.production}</p>
            </div>
            <div className="bg-surface/50 rounded-md p-3 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Year</p>
              <p className="font-semibold text-sm">{caseData.year}</p>
            </div>
            <div className="bg-surface/50 rounded-md p-3 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Team</p>
              <p className="font-semibold text-sm">{caseData.credits.length} specialists</p>
            </div>
            <div className="bg-surface/50 rounded-md p-3 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Result</p>
              <p className="font-semibold text-sm truncate">{caseData.result.split(",")[0]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Result Banner */}
      {caseData.keyHighlight && (
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <div className="bg-foreground text-background rounded-lg p-6 md:p-8 text-center">
              <p className="text-base md:text-lg leading-relaxed">
                {caseData.keyHighlight}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Problem */}
      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-3">Problem</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {caseData.problem}
          </p>
        </div>
      </section>

      {/* Solution / Approach */}
      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-3">Solution</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {caseData.solution}
          </p>
          {caseData.approach && (
            <div className="bg-surface/30 rounded-md p-4 border border-border">
              <p className="text-sm text-muted-foreground italic">
                "{caseData.approach}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process - Case-specific content */}
      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Process</h2>
          
          {/* hrwl and theoneyoukeep now have dedicated components */}

          {caseData.id === "noxisros" && (
            <div className="space-y-3">
              {[
                { phase: "Naming", desc: "Created a unique, memorable identity for the collective" },
                { phase: "Logo & Visual Identity", desc: "Developed complete logo system with variations" },
                { phase: "Motion Assets", desc: "Logo animations and Instagram story GIFs" },
                { phase: "Brand Film", desc: "1-month production: script, storyboard, animation, sound" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-surface/50 rounded-md border border-border">
                  <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5">{item.phase}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}


          {caseData.id === "google" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-surface/50 rounded-md p-4 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Before</p>
                  <p className="text-2xl font-bold">$840M/yr</p>
                  <p className="text-xs text-muted-foreground">7M users × $10/mo</p>
                </div>
                <div className="bg-foreground text-background rounded-md p-4">
                  <p className="text-xs text-background/70 mb-1">After Campaign</p>
                  <p className="text-2xl font-bold">$1.152B/yr</p>
                  <p className="text-xs text-background/70">8M users × $12/mo</p>
                </div>
              </div>
              <div className="bg-surface/30 rounded-md p-4 border border-border">
                <p className="text-sm text-center">
                  <span className="font-bold text-lg">+$312M</span>
                  <br />
                  <span className="text-muted-foreground text-xs">Additional annual revenue from one well-placed commercial</span>
                </p>
              </div>
            </div>
          )}

          {!["noxisros", "google"].includes(caseData.id) && (
            <div className="bg-surface/50 rounded-md p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                {caseData.projectOverview}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-3">Outcome</h2>
          <div className="flex gap-3 p-4 bg-surface/50 rounded-md border border-border">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm">{caseData.result}</p>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="px-6 mb-12">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Credits</h2>
          <div className="grid md:grid-cols-2 gap-x-6">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">{credit.role}</span>
                {credit.link ? (
                  <a href={credit.link} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:underline">
                    {credit.name}
                  </a>
                ) : (
                  <span className="font-medium text-sm">{credit.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Case CTA */}
      <div className="border-t border-border bg-surface/30 py-10 px-6">
        <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
            <p className="text-lg font-bold">{nextCase.title}</p>
          </div>
          <Link to={`/work/${nextCase.id}`}>
            <Button variant="outline" className="group rounded-full">
              View Case
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudy;
