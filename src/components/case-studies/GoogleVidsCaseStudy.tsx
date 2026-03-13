import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, ExternalLink, TrendingUp, DollarSign, Users } from "lucide-react";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";
import BackToWork from "@/components/BackToWork";

interface Props {
  caseData: Case;
  nextCase: Case;
}

const GoogleVidsCaseStudy = ({ caseData, nextCase }: Props) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackToWork />

      {/* Hero */}
      <section className="pt-24 pb-8 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4">{caseData.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[640px] leading-relaxed">{caseData.overview}</p>
        </div>
      </section>

      {/* Hero Video */}
      <section className="px-6 mb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-video bg-foreground rounded-xl overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play className="w-7 h-7 text-background ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - The "Reformed" part */}
      <section className="px-6 mb-16">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">Campaign Impact</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-surface/40 rounded-2xl p-8 border border-border/50 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-emerald-500" />
              </div>
              <p className="text-3xl font-bold mb-1">+$312M</p>
              <p className="text-sm text-muted-foreground">Additional ARR</p>
            </div>
            <div className="bg-surface/40 rounded-2xl p-8 border border-border/50 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-3xl font-bold mb-1">+1M</p>
              <p className="text-sm text-muted-foreground">New Active Users</p>
            </div>
            <div className="bg-surface/40 rounded-2xl p-8 border border-border/50 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-3xl font-bold mb-1">20%</p>
              <p className="text-sm text-muted-foreground">LTV Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Banner */}
      <section className="px-6 mb-16">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-foreground text-background rounded-xl p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Strategic Success</h2>
            <p className="text-lg leading-relaxed text-background/80">
              {caseData.result}
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 mb-16">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">The Challenge</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {caseData.problem}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">The Solution</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {caseData.solution}
            </p>
            {caseData.approach && (
              <div className="mt-6 p-5 bg-surface/30 rounded-xl border border-border italic text-muted-foreground">
                "{caseData.approach}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="px-6 mb-20">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-6">Production Credits</h2>
          <div className="grid gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex items-center justify-between py-4 px-6 bg-background">
                <span className="text-sm text-muted-foreground">{credit.role}</span>
                <span className="font-semibold text-sm">{credit.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Case */}
      <div className="border-t border-border bg-surface/20 py-16 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">Next Case Study</p>
            <p className="text-2xl font-bold">{nextCase.title}</p>
          </div>
          <Link to={`/work/${nextCase.id}`}>
            <Button variant="outline" className="group rounded-full px-8 py-6 h-auto text-lg">
              View Case
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GoogleVidsCaseStudy;
