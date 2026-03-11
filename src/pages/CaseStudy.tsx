import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, CheckCircle } from "lucide-react";
import { CASES } from "@/data/cases";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TheOneYouKeepCaseStudy from "@/components/case-studies/TheOneYouKeepCaseStudy";
import HRWLVisualIdentityCaseStudy from "@/components/case-studies/HRWLVisualIdentityCaseStudy";

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

    // Coming Soon page
    if (caseData.comingSoon) {
        return (
            <div className="min-h-screen bg-background">
                <div className="pt-32 pb-24 px-6 min-h-screen flex items-center">
                    <div className="max-w-[600px] mx-auto text-center">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border rounded-full mb-6">
                            Coming Soon · {caseData.year}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
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
                </div>
                <Footer />
            </div>
        );
    }

    // Dedicated case study components
    if (caseData.id === "theoneyoukeep") {
        return (
            <>
                <TheOneYouKeepCaseStudy caseData={caseData} nextCase={nextCase} />
            </>
        );
    }

    if (caseData.id === "hrwl") {
        return (
            <>
                <HRWLVisualIdentityCaseStudy caseData={caseData} nextCase={nextCase} />
            </>
        );
    }

    // Template for other cases (including Google)
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="pt-24 pb-8 px-8 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full">
                {/* Back button top-left */}
                <div className="w-full flex justify-start mb-12">
                    <Link to="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="font-medium text-sm">Back to Work</span>
                    </Link>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                    {/* Labels centered */}
                    <div className="flex items-center gap-4 justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 bg-foreground/5 dark:bg-white/5 px-3 py-1 rounded-full border border-border/50">
                            Case Study
                        </span>
                        <span className="text-[10px] font-mono text-foreground/30">{caseData.year}</span>
                    </div>

                    <h1
                        className="w-full"
                        style={{
                            fontFamily: "'Helvetica Now Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(32px, 4.5vw, 64px)",
                            lineHeight: "0.9",
                            letterSpacing: "-4px",
                            color: "hsl(var(--foreground))",
                            textAlign: "center",
                        }}
                    >
                        {caseData.title}
                    </h1>
                    <p
                        className="text-muted-foreground w-full font-medium mx-auto"
                        style={{
                            fontSize: "clamp(16px, 1.8vw, 24px)",
                            lineHeight: "1.1",
                            letterSpacing: "-0.5px",
                            maxWidth: "100%",
                        }}
                    >
                        {caseData.overview}
                    </p>
                </div>
            </section>

            {/* Hero Media Section */}
            <section className="px-8 md:px-12 lg:px-20 mb-12 max-w-[1400px] mx-auto">
                <div className="aspect-video bg-foreground dark:bg-[#0A0A0A] rounded-[24px] overflow-hidden relative group cursor-pointer flex items-center justify-center shadow-xl mb-4">
                    <div className="w-16 h-16 rounded-full bg-background/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid Below Media */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Format", value: "Brand Film" },
                        { label: "Production", value: caseData.production },
                        { label: "Year", value: caseData.year },
                        { label: "Team", value: `${caseData.credits.length} specialists` }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-[20px] bg-white dark:bg-[#0E0E0E] border border-border/50 flex flex-col justify-center shadow-subtle">
                            <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-1.5">{stat.label}</p>
                            <p className="font-bold text-base tracking-tight text-foreground">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem & Solution merged style */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Problem</h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {caseData.problem}
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Solution</h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                        {caseData.solution}
                    </p>
                    {caseData.keyHighlight && (
                        <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                            <p className="text-base md:text-lg italic text-foreground/80 leading-relaxed font-medium">
                                "{caseData.keyHighlight}"
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Process - Specific for Google */}
            {caseData.id === "google" && (
                <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Process</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/20 rounded-2xl p-10 border border-border/50">
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-2">Before</p>
                            <p className="text-3xl md:text-4xl font-black">$840M/yr</p>
                            <p className="text-sm text-muted-foreground mt-1">7M users × $10/mo</p>
                        </div>
                        <div className="bg-foreground text-background rounded-2xl p-10 shadow-xl">
                            <p className="text-xs opacity-70 uppercase font-bold tracking-widest mb-2 text-white">After Campaign</p>
                            <p className="text-3xl md:text-4xl font-black text-white">$1.152B/yr</p>
                            <p className="text-sm opacity-70 mt-1 text-white">8M users × $12/mo</p>
                        </div>
                    </div>
                    <div className="bg-muted/10 rounded-2xl p-10 border border-border/50 text-center">
                        <p className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-1">+$312M</p>
                        <p className="text-base md:text-lg text-muted-foreground font-medium">Additional annual revenue triggered by cinematic storytelling</p>
                    </div>
                </section>
            )}

            {/* Outcome */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <div className="flex gap-4 p-10 bg-foreground/5 rounded-3xl border border-border/50 items-start">
                    <CheckCircle className="w-8 h-8 text-foreground mt-1 flex-shrink-0" />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Outcome</h2>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{caseData.result}</p>
                    </div>
                </div>
            </section>

            {/* Credits */}
            <section className="px-8 md:px-12 lg:px-20 mb-24 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Credits</h2>
                <div className="grid md:grid-cols-2 gap-x-12">
                    {caseData.credits.map((credit, i) => (
                        <div key={i} className="flex items-center justify-between py-5 border-b border-border/50">
                            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{credit.role}</span>
                            <span className="font-bold text-lg">{credit.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Case CTA */}
            <div className="bg-muted/5 py-24 px-8 md:px-12 lg:px-20 border-t border-border/50">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-2">Next Case Study</p>
                        <p className="text-4xl md:text-5xl font-bold tracking-tight">{nextCase.title.split('—')[0]}</p>
                    </div>
                    <Link to={`/work/${nextCase.id}`}>
                        <Button className="rounded-full px-12 py-8 h-auto text-xl font-bold hover:scale-105 transition-transform">
                            View Case Study
                            <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CaseStudy;
