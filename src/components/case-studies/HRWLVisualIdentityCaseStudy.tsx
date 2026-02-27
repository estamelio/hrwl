import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";

// SVG Placeholder Component
const Placeholder = ({ className, text }: { className?: string; text?: string }) => (
    <div className={`bg-muted flex items-center justify-center border border-border border-dashed rounded-md ${className}`}>
        <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{text || "Placeholder"}</span>
    </div>
);

interface Props {
    caseData: Case;
    nextCase: Case;
}

const HRWLVisualIdentityCaseStudy = ({ caseData, nextCase }: Props) => {
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

            {/* Hero Identity Section */}
            <section className="px-8 md:px-12 lg:px-20 mb-12 max-w-[1400px] mx-auto">
                <div className="aspect-[21/9] bg-foreground dark:bg-[#0A0A0A] rounded-[24px] overflow-hidden relative group flex items-center justify-center shadow-xl">
                    <div className="text-background font-black text-6xl md:text-8xl tracking-tighter select-none">HRWL®</div>
                </div>
            </section>

            {/* Quick Stats Grid Below Media */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Production", value: caseData.production },
                        { label: "Year", value: caseData.year },
                        { label: "Team", value: `${caseData.credits.length} specialists` },
                        { label: "Result", value: "Full identity system" },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-[20px] bg-white dark:bg-[#0E0E0E] border border-border/50 flex flex-col justify-center shadow-subtle">
                            <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-1.5">{stat.label}</p>
                            <p className="font-bold text-base tracking-tight text-foreground">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Problem & Solution */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{caseData.problem}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{caseData.solution}</p>
                    </div>
                </div>
            </section>

            {/* Visual Identity — Logo System */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Visual Identity</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-foreground rounded-[24px] p-10 flex items-center justify-center aspect-square shadow-xl">
                        <div className="text-background font-black text-4xl md:text-6xl tracking-tighter">HRWL</div>
                    </div>
                    <div className="bg-foreground rounded-[24px] p-10 flex items-center justify-center aspect-square shadow-xl">
                        <div className="text-background font-black text-7xl md:text-9xl tracking-tighter">W</div>
                    </div>
                    <div className="bg-foreground rounded-[24px] p-10 flex items-center justify-center aspect-square shadow-xl overflow-hidden">
                        <Placeholder className="w-full h-full bg-transparent border-none" text="Logo Animation" />
                    </div>
                </div>
            </section>

            {/* Business Cards */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Business Cards</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Placeholder className="aspect-[3.5/2] w-full rounded-[24px] shadow-lg" text="Card Front" />
                    <Placeholder className="aspect-[3.5/2] w-full rounded-[24px] shadow-lg" text="Card Back" />
                </div>
                <Placeholder className="aspect-video w-full bg-foreground rounded-[32px] shadow-2xl" text="Business Card Motion" />
            </section>

            {/* Demo Reel + OC Animations */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Demo Reel + OC Animations</h2>

                {/* Demo reel placeholder */}
                <div className="aspect-video bg-foreground rounded-[32px] overflow-hidden relative group cursor-pointer mb-8 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                            <Play className="w-8 h-8 text-background ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-8 text-background/80">
                        <span className="text-sm font-bold tracking-widest uppercase">Demo Reel</span>
                    </div>
                </div>

                {/* OC Animations */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Placeholder className="aspect-square w-full rounded-[24px] shadow-lg" text="OC Animation 01" />
                    <Placeholder className="aspect-square w-full rounded-[24px] shadow-lg" text="OC Animation 02" />
                </div>
            </section>

            {/* Endcard */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <Placeholder className="aspect-video w-full bg-foreground rounded-[32px] shadow-2xl" text="Endcard" />
            </section>

            {/* Outcome */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <div className="bg-foreground/5 rounded-[32px] p-10 md:p-16 border border-border/50">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Outcome</h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{caseData.result}</p>
                </div>
            </section>

            {/* Credits */}
            <section className="px-8 md:px-12 lg:px-20 mb-24 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Credits</h2>
                <div className="grid md:grid-cols-2 gap-x-12">
                    {caseData.credits.map((credit, i) => (
                        <div key={i} className="flex items-center justify-between py-6 border-b border-border/50">
                            <span className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{credit.role}</span>
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
                        <Button className="rounded-full px-12 py-8 h-auto text-xl font-bold hover:scale-105 transition-transform shadow-lg">
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

export default HRWLVisualIdentityCaseStudy;
