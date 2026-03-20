import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, ChevronDown } from "lucide-react";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";

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
            <h2 className="text-lg md:text-xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity duration-300">{title}</h2>
            <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "rotate-180" : ""}`}
            />
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
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        context: true,
        production: true,
    });

    const toggleSection = (key: string) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="pt-24 pb-4 px-6">
                <div className="max-w-[900px] mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
                        <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">{caseData.title}</h1>
                    <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
                </div>
            </section>

            {/* Hero Video */}
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

            {/* Quick Stats */}
            <section className="px-6 mb-12">
                <div className="max-w-[1000px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { label: "Format", value: "Brand Film" },
                            { label: "Runtime", value: "44 seconds" },
                            { label: "Production", value: caseData.production },
                            { label: "Roles", value: `${caseData.credits.length} roles` },
                        ].map((stat, i) => (
                            <div key={i} className="bg-surface/40 rounded-lg p-4 border border-border/50">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                                <p className="font-semibold text-base">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collapsible Sections */}
            <section className="px-6 mb-10">
                <div className="max-w-[900px] mx-auto">
                    {/* Context */}
                    <CollapsibleSection title="Project Context" isOpen={!!openSections.context} onToggle={() => toggleSection("context")}>
                        <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Every motion designer creates a showreel. But many of Djamel's projects were under NDA. So instead of making a normal showreel, he created a <strong className="text-foreground">brand film narrative.</strong>
                            </p>
                            <div className="bg-surface/30 rounded-xl border border-border p-5">
                                <h4 className="font-semibold text-foreground text-sm mb-3 uppercase tracking-wider">Story Premise</h4>
                                <ol className="space-y-2 text-base">
                                    <li>A business owner opens his laptop late at night.</li>
                                    <li>He searches: <strong className="text-foreground">"What problems could kill a business?"</strong></li>
                                    <li>Fear builds. He types: <strong className="text-foreground">"How can I solve them?"</strong></li>
                                    <li>The answer: <strong className="text-foreground">Brand Film.</strong></li>
                                    <li>"What is a brand film?" — Examples appear (Djamel's work).</li>
                                    <li>"Who makes these?" — Reveal: <strong className="text-foreground">Djamel Haroual.</strong></li>
                                    <li>Website appears. CTA.</li>
                                </ol>
                            </div>
                            <p className="text-sm text-muted-foreground/80">
                                Entire video length: 44 seconds. Positions Djamel as creative partner, storyteller, strategist, and director — not just an animator.
                            </p>
                        </div>
                    </CollapsibleSection>

                    {/* Production */}
                    <CollapsibleSection title="Production Breakdown" isOpen={!!openSections.production} onToggle={() => toggleSection("production")}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Timeline</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">3 months</strong> — Creative Direction, Storyboard, Design, and Animation by Djamel. Music and sound design by <strong className="text-foreground">Uliania PchelinUley</strong>, who composed music specifically for each section. Not a single drag-and-drop track — each animation beat has its own musical composition.
                                </p>
                            </div>

                            {/* Small animation — 898x772 */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Animation Assets</h3>
                                <div className="bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center mb-3" style={{ aspectRatio: "898 / 772" }}>
                                    <span className="text-xs text-muted-foreground">Animation · 898 × 772</span>
                                </div>
                                {/* Two connected 1920x1080 animations */}
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center" style={{ aspectRatio: "1920 / 1080" }}>
                                        <span className="text-xs text-muted-foreground">Connected 01</span>
                                    </div>
                                    <div className="bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center" style={{ aspectRatio: "1920 / 1080" }}>
                                        <span className="text-xs text-muted-foreground">Connected 02</span>
                                    </div>
                                </div>
                            </div>

                            {/* Storyboard — 12 */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Storyboard</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="aspect-video bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center hover:bg-surface/80 transition-colors duration-300">
                                            <span className="text-[10px] text-muted-foreground/40 font-mono">{String(i + 1).padStart(2, "0")}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* R&D — 12 frames 1920x1080 */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">R&D — Experimental Frames</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center hover:bg-surface/80 transition-colors duration-300" style={{ aspectRatio: "1920 / 1080" }}>
                                            <span className="text-[10px] text-muted-foreground/40 font-mono">R&D {String(i + 1).padStart(2, "0")}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Concept Art — 2303x2148 */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Concept Art</h3>
                                <div className="max-w-[400px] bg-surface/50 rounded-lg border border-border border-dashed flex items-center justify-center" style={{ aspectRatio: "2303 / 2148" }}>
                                    <span className="text-xs text-muted-foreground">Concept Art · 2303 × 2148</span>
                                </div>
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
                            <div key={i} className="flex items-center justify-between py-4 border-b border-border/60">
                                <span className="text-sm text-muted-foreground">{credit.role}</span>
                                <span className="font-semibold text-base">{credit.name}</span>
                            </div>
                        ))}
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
        </div>
    );
};

export default HRWLBrandFilmCaseStudy;
