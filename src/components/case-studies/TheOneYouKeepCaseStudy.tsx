import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, ChevronDown, ChevronUp, ExternalLink, Quote } from "lucide-react";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";

// SVG Placeholder Component
const Placeholder = ({ className, text }: { className?: string; text?: string }) => (
    <div className={`bg-muted flex items-center justify-center border border-border border-dashed rounded-md ${className}`}>
        <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{text || "Placeholder"}</span>
    </div>
);

const SCRIPT_PREVIEW = `Sometimes, there comes a time… when silence feels too loud,
and the weight in your chest asks for nothing but a pen, a voice, a vow.

A need to speak, not to impress, but to confess, to capture a feeling too complex to compress.

(damn i'm throwing some bars here, ehm ehm)

It's not about sounding wise. It's just that, there are some people you can't define, without sounding like you're exaggerating,

So you simply don't, you just let the silence say it,`;

const SCRIPT_FULL = `Sometimes, there comes a time… when silence feels too loud,
and the weight in your chest asks for nothing but a pen, a voice, a vow.

A need to speak, not to impress, but to confess, to capture a feeling too complex to compress.

(damn i'm throwing some bars here, ehm ehm)

It's not about sounding wise. It's just that, there are some people you can't define, without sounding like you're exaggerating,

So you simply don't, you just let the silence say it,


Or if you're like me… you overthink it, over-edit it, and pretend you're working on a screenplay.

well, there are some humans who just get it.

The ones who never ask you to explain your weirdness, your clumsiness, your stupidness, your brainlessness.

The ones who are always 5 seconds away from roasting you, but 0.5 seconds away from backing you up,

They believed in you when no one else did, they trusted you, they've always been with you.

And sometimes, no gift, no speech, no post can hold the depth of what they mean to you most.

So instead, you just keep them around like a rare collectible Pokémon that you don't show off, but secretly know is priceless.

So all i could do is…

Do nothing and only say:

Happy Birthday, my brother. i wish you all the best in your life and so that you could flourish and blah blah blah…

Don't let it get to your head though I still remember that time you hung up on me in the middle of me saying something important, how dare you >:(`;

interface Props {
    caseData: Case;
    nextCase: Case;
}

const VOPlayer = () => {
    return (
        <div className="flex items-center gap-3 bg-surface/50 rounded-full border border-border px-4 py-2.5">
            <button className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform">
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            </button>
            <div className="flex-1 flex items-center gap-3">
                <div className="flex-1 relative h-1.5 bg-border rounded-full cursor-pointer group">
                    <div className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all" style={{ width: `0%` }} />
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">0:00 / 0:00</span>
            </div>
        </div>
    );
};

const TheOneYouKeepCaseStudy = ({ caseData, nextCase }: Props) => {
    const [scriptExpanded, setScriptExpanded] = useState(false);

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

            {/* Hero Video Section */}
            <section className="px-8 md:px-12 lg:px-20 mb-12 max-w-[1400px] mx-auto">
                <div className="aspect-video bg-foreground dark:bg-[#0A0A0A] rounded-[24px] overflow-hidden relative group cursor-pointer flex items-center justify-center shadow-xl">
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


            {/* Key Highlight - Expanded to 1000px for two-line layout */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1000px] mx-auto">
                <div className="bg-foreground text-background rounded-[32px] p-10 md:p-14 text-center shadow-2xl">
                    <p className="text-xl md:text-2xl lg:text-3xl leading-snug font-medium tracking-tight">
                        If a message as simple as <span className="font-black">"Happy Birthday"</span> can leave a WOW, imagine what I can do for <span className="font-black">your brand's message</span>.
                    </p>
                </div>
            </section>

            {/* Intent + Visual Placeholder */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Intent</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 max-w-3xl">
                    Test whether emotion could be manufactured on demand, using the same rigor typically reserved for commercial work. A proof-of-concept for emotional engineering — produced as a birthday gift but executed at full brand-film production level.
                </p>
                {/* Visual reference area */}
                <div className="grid md:grid-cols-2 gap-4">
                    <Placeholder className="aspect-video w-full rounded-[24px]" text="Reference visual" />
                    <Placeholder className="aspect-video w-full rounded-[24px]" text="Reference visual" />
                </div>
            </section>

            {/* Constraints & Creative Decisions — merged */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Constraints & Creative Decisions</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Constraints</h3>
                        <ul className="space-y-4">
                            {[
                                "Single audience — crafted for one person",
                                "Personal emotion as the sole input",
                                "No commercial brief or brand guidelines",
                                "Budget: zero — only skill and time",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-base md:text-lg text-muted-foreground">
                                    <span className="text-foreground font-bold">·</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Decisions</h3>
                        <ul className="space-y-4">
                            {[
                                "Pixel art over clean vector — nostalgia as emotional shortcut",
                                "Poem-first — visuals serve the writing, not the other way around",
                                "Frame-by-frame animation — intentional imperfection",
                                "Restraint compounds emotion — less is more",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-base md:text-lg text-muted-foreground">
                                    <span className="text-foreground font-bold">·</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Visual break */}
                <div className="mt-12">
                    <Placeholder className="aspect-[21/9] w-full rounded-[24px]" text="Visual Reference" />
                </div>
            </section>

            {/* Production Breakdown */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Production Breakdown</h2>

                {/* Script / Poem */}
                <div className="mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Script / Poem</h3>
                    <div className="bg-surface/30 rounded-[24px] border border-border p-8 md:p-12">
                        <pre className="whitespace-pre-wrap font-serif text-base md:text-lg leading-relaxed text-foreground/90">
                            {scriptExpanded ? SCRIPT_FULL : SCRIPT_PREVIEW}
                        </pre>
                        <button
                            onClick={() => setScriptExpanded(!scriptExpanded)}
                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {scriptExpanded ? (
                                <>Show less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                                <>Click to read the full script <ChevronDown className="w-4 h-4" /></>
                            )}
                        </button>
                    </div>
                </div>

                {/* Voiceover */}
                <div className="mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Voiceover</h3>
                    <p className="text-muted-foreground text-base md:text-lg mb-6">
                        Recorded and directed by Djamel — raw, personal delivery to match the poem's intimacy.
                    </p>
                    <VOPlayer />
                </div>

                {/* Storyboard / Styleframes */}
                <div className="mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Storyboard / Styleframes</h3>
                    <div className="grid grid-cols-4 gap-3">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <Placeholder key={i} className="aspect-video w-full rounded-xl" text={String(i + 1).padStart(2, "0")} />
                        ))}
                    </div>
                </div>

                {/* Animation */}
                <div className="mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Animation</h3>
                    <p className="text-muted-foreground text-base md:text-lg mb-6">
                        Frame-by-frame pixel art animation in Aseprite. Each scene crafted individually to match the poem's emotional beats.
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Placeholder key={i} className="aspect-square w-full rounded-xl" text={`GIF ${i + 1}`} />
                        ))}
                    </div>
                </div>

                {/* Sonic Identity */}
                <div className="mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Sonic Identity</h3>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Sound designed as a narrative layer — voice, texture, silence, and score working together. Sound design by <span className="text-foreground font-bold">John Green</span>, music composition by <span className="text-foreground font-bold">Penrose Audio</span>.
                    </p>
                </div>
            </section>

            {/* R&D — Unused designs */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">R&D</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">Explorations and designs that didn't make the final cut.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Placeholder key={i} className="aspect-square w-full rounded-[24px] shadow-lg" text={`R&D ${i + 1}`} />
                    ))}
                </div>
            </section>

            {/* Impact + Testimonial */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Impact</h2>
                <div className="flex gap-4 p-8 bg-foreground/5 rounded-[24px] border border-border mb-10 items-center justify-center text-center">
                    <p className="text-base md:text-lg font-medium text-foreground/80">{caseData.result}</p>
                </div>

                {/* Testimonial */}
                <div className="bg-surface/30 rounded-[32px] border border-border p-8 md:p-16 shadow-xl">
                    <Quote className="w-10 h-10 text-muted-foreground/20 mb-8" />
                    <p className="text-base md:text-xl leading-relaxed mb-10 text-foreground/90 font-medium">
                        I am honestly flabbegasted… This is way more than just a happy birthday wish, IT'S A WHOLE MASTERPIECE.
                        <br /><br />
                        You took time, the creativity to craft something this beautiful JUST FOR ME and i can't tell you how much that means, every detail shows how much heart you put into it and i felt every second of it.
                        <br /><br />
                        Honestly, you gave me a memory i will hold on onto for a looooooong time, it's rare to receive something so thoughtful so demure, and i genuinely feel grateful and lucky to have someone like you around
                        <br /><br />
                        From the bottom of my heart, thank you ❤️, this made my birthday so much more special.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center text-lg font-bold">
                            YM
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/yasser-moussaoui-9085012b3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-lg hover:underline inline-flex items-center gap-1.5"
                            >
                                Yasser Moussaoui
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-muted-foreground">The one this was made for</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="px-8 md:px-12 lg:px-20 mb-20 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Why This Matters to Brands</h2>
                <div className="bg-foreground/5 rounded-[24px] p-8 md:p-12 border border-border/50 shadow-sm">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                        This project proves that emotional engineering is a predictable, repeatable business asset — not just an artistic choice.
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-center mt-4 tracking-tight">
                        Governing principle: <span className="text-foreground">restraint compounds emotion</span>
                    </p>
                </div>
            </section>

            {/* Credits */}
            <section className="px-8 md:px-12 lg:px-20 mb-24 max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Credits</h2>
                <div className="grid md:grid-cols-2 gap-x-12">
                    {caseData.credits.map((credit, i) => (
                        <div key={i} className="flex items-center justify-between py-6 border-b border-border/50">
                            <span className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{credit.role}</span>
                            {credit.link ? (
                                <a href={credit.link} target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline inline-flex items-center gap-1.5">
                                    {credit.name}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : (
                                <span className="font-bold text-lg">{credit.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Case CTA */}
            <div className="bg-muted/5 py-32 px-8 md:px-12 lg:px-20 border-t border-border/50">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-3">Next Case Study</p>
                        <p className="text-4xl md:text-6xl font-bold tracking-tight">{nextCase.title.split('—')[0]}</p>
                    </div>
                    <Link to={`/work/${nextCase.id}`}>
                        <Button className="rounded-full px-14 py-10 h-auto text-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
                            View Case Study
                            <ArrowRight className="w-8 h-8 ml-3" />
                        </Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TheOneYouKeepCaseStudy;
