import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, ChevronDown } from "lucide-react";
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
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const [lightbox, setLightbox] = useState({
        isOpen: false,
        index: 0,
        images: [] as string[]
    });

    const toggleSection = (key: string) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const openLightbox = (index: number, images: string[]) => {
        setLightbox({ isOpen: true, index, images });
    };

    const animImages = [akio, akiowaving, dream31];
    const sbImages = [bfSb1, bfSb2, bfSb3, bfSb4, bfSb5, bfSb6, bfSb7, bfSb8];
    const rdImages = [bfRd1, bfRd2, bfRd3, bfRd4, bfRd5, bfRd6, bfRd7, bfRd8, bfRd9, bfRd10, bfRd11, bfRd13];

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

            <section className="px-6 mb-6">
                <div className="max-w-[1000px] mx-auto">
                    <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                        <video 
                            src={brandFilmVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                        />
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

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Animation Assets</h3>
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

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Storyboard</h3>
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

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">R&D — Experimental Frames</h3>
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

                            {/* Concept Art — 2303x2148 */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Concept Art</h3>
                                <div 
                                    className="max-w-[600px] bg-surface/50 rounded-lg border border-border overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                                    onClick={() => openLightbox(0, [bfRd12])}
                                >
                                    <img src={bfRd12} alt="Concept Art" className="w-full h-auto object-cover" loading="lazy" />
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
