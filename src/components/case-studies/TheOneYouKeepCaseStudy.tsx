import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, Pause, ChevronDown, ChevronUp, ExternalLink, Quote } from "lucide-react";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";
import MediaLightbox from "@/components/MediaLightbox";
import voiceoverAudio from "@/assets/Case studies/The One You Keep/Yasser's Birthday_Sound Mix_Final_Dials.mp3";

// Storyboard
import sb1 from "@/assets/Case studies/The One You Keep/Storyboard/1.webp";
import sb2 from "@/assets/Case studies/The One You Keep/Storyboard/2.webp";
import sb3 from "@/assets/Case studies/The One You Keep/Storyboard/3.webp";
import sb4 from "@/assets/Case studies/The One You Keep/Storyboard/Credits 1png.webp";
import sb5 from "@/assets/Case studies/The One You Keep/Storyboard/Full frame.webp";
import sb6 from "@/assets/Case studies/The One You Keep/Storyboard/Full shit.webp";
import sb7 from "@/assets/Case studies/The One You Keep/Storyboard/If you're like me.webp";
import sb8 from "@/assets/Case studies/The One You Keep/Storyboard/Library.webp";
import sb9 from "@/assets/Case studies/The One You Keep/Storyboard/Slide 16_9 - 40.webp";
import sb10 from "@/assets/Case studies/The One You Keep/Storyboard/Slide 16_9 - 44.webp";
import sb11 from "@/assets/Case studies/The One You Keep/Storyboard/d.webp";
import sb12 from "@/assets/Case studies/The One You Keep/Storyboard/round 2.webp";

// Videos
import processVid1 from "@/assets/Case studies/The One You Keep/Videos/3.webm";
import processVid2 from "@/assets/Case studies/The One You Keep/Videos/Pixel showcase.webm";

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

const VOPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(voiceoverAudio);
    audioRef.current = audio;
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
    audio.addEventListener("ended", () => { setIsPlaying(false); setCurrentTime(0); });
    return () => { audio.pause(); audioRef.current = null; };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause(); else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-3 bg-surface/50 rounded-full border border-border px-4 py-2.5 max-w-md">
      <button
        onClick={toggle}
        className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 hover:scale-105 active:scale-95 transition-transform duration-300"
      >
        {isPlaying ? <Pause className="w-4 h-4" fill="currentColor" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
      </button>
      <div className="flex-1 flex items-center gap-3">
        <div className="flex-1 relative h-1.5 bg-border rounded-full cursor-pointer group" onClick={seek}>
          <div className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all duration-150" style={{ width: `${progress}%` }} />
          <div
            className="absolute top-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
          />
        </div>
        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{fmt(currentTime)} / {fmt(duration)}</span>
      </div>
    </div>
  );
};

const TheOneYouKeepCaseStudy = ({ caseData, nextCase }: Props) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);
  const [scriptExpanded, setScriptExpanded] = useState(false);

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    index: 0,
    images: [] as string[]
  });

  const openLightbox = (index: number, images: string[]) => {
    setLightbox({ isOpen: true, index, images });
  };

  const sbImages = [sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9, sb10, sb11, sb12];

  const toggleSection = (key: string) => {
    if (expandAll) return;
    setActiveSection(prev => prev === key ? null : key);
  };

  const isSectionOpen = (key: string) => expandAll || activeSection === key;

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-32 pb-6 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1 transition-colors duration-500">Case Study</span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-2xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-4">{caseData.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[640px] leading-relaxed">{caseData.overview}</p>
        </div>
      </section>

      <section className="px-6 mb-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
            <iframe
              src="https://player.vimeo.com/video/1108398165?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ border: 0 }}
              loading="lazy"
              title="The One You Keep"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 mb-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Format", value: "Brand Film" },
              { label: "Production", value: caseData.production },
              { label: "Year", value: caseData.year },
              { label: "Roles", value: `${caseData.credits.length} roles` },
            ].map((stat, i) => (
              <div key={i} className="bg-surface/40 rounded-lg p-4 border border-border/50 transition-colors duration-500">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="font-semibold text-base">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlight */}
      <section className="px-6 mb-10">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-foreground text-background rounded-xl p-8 md:p-10 text-center transition-colors duration-500">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              The film was designed to be <span className="font-bold">remembered, not rewatched.</span>
            </p>
            <p className="text-background/60 text-sm mt-3 max-w-lg mx-auto">
              A message so precisely crafted that it stays with the viewer long after the screen goes dark — lodged not in memory, but in feeling.
            </p>
          </div>
        </div>
      </section>

      {/* Read All Toggle */}
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

      {/* Collapsible Sections */}
      <section className="px-6 mb-10">
        <div className="max-w-[900px] mx-auto">
          {/* Intent */}
          <CollapsibleSection title="Intent" isOpen={isSectionOpen("intent")} onToggle={() => toggleSection("intent")}>
            <div className="space-y-5 max-w-[700px]">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Most brand content fails for one reason: <strong className="text-foreground">it is transactional.</strong> It delivers information, checks boxes, and disappears. It does not stay with the viewer long enough to influence memory, preference, or behavior.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <em>The One You Keep</em> was created to prove the opposite — that <strong className="text-foreground">emotional recall can be deliberately designed.</strong> The film was produced as a birthday gift for my best friend, but executed at full brand-film production level to remove all commercial excuses.
              </p>
              <div className="flex flex-wrap gap-3 my-4">
                {["No brief", "No KPI", "No approval layers", "No safety net"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium transition-colors duration-500">{item}</span>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-6">
                <div
                  className="aspect-video bg-surface/50 rounded-lg border border-border overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(4, sbImages)}
                >
                  <img src={sb5} alt="Full Frame" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div
                  className="aspect-video bg-surface/50 rounded-lg border border-border overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(5, sbImages)}
                >
                  <img src={sb6} alt="Process Visual" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Emotional Objective */}
          <CollapsibleSection title="Emotional Objective" isOpen={isSectionOpen("emotional")} onToggle={() => toggleSection("emotional")}>
            <div className="space-y-5 max-w-[700px]">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium italic">
                "The feeling of realizing someone mattered more than you've ever said out loud."
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                This is the emotional state that drives memorability, loyalty, and long-term attachment — exactly what brands struggle to achieve with surface-level storytelling.
              </p>
            </div>
          </CollapsibleSection>

          {/* Constraints & Creative Decisions */}
          <CollapsibleSection title="Constraints & Creative Decisions" isOpen={isSectionOpen("constraints")} onToggle={() => toggleSection("constraints")}>
            <div className="space-y-8 max-w-[700px]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Constraints</h3>
                  <ul className="space-y-3">
                    {[
                      "One month to complete the project",
                      "No client brief",
                      "Personal initiative outside commercial work",
                      "One creator acting as writer, director, designer, animator, and producer",
                      "One month of overinvestment into a non-monetized outcome",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                        <span className="text-foreground font-bold mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Creative Decisions</h3>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                    <p>Nothing was added to make the film more impressive. Elements were added only if they <strong className="text-foreground">sharpened meaning.</strong></p>
                    <p>If a moment could be felt without being shown, it was removed. If an idea could be implied instead of explained, it was implied.</p>
                    <p>The film avoided spectacle by design. <strong className="text-foreground">No visual flexing. No unnecessary motion.</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Impact & Testimonial */}
          <CollapsibleSection title="Impact & Testimonial" isOpen={isSectionOpen("impact")} onToggle={() => toggleSection("impact")}>
            <div className="space-y-8 max-w-[700px]">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
                The film achieved its primary objective: it stayed with people.
              </p>

              {/* Testimonial */}
              <div className="rounded-xl border border-border p-6 md:p-8 transition-colors duration-500">
                <Quote className="w-8 h-8 text-muted-foreground/20 mb-4" />
                <blockquote className="text-base md:text-lg leading-relaxed mb-6 text-foreground/90 font-serif italic">
                  I am honestly flabbergasted… This is way more than just a happy birthday wish, <strong className="not-italic">IT'S A WHOLE MASTERPIECE.</strong>
                  <br /><br />
                  You took time, the creativity to craft something this beautiful JUST FOR ME and i can't tell you how much that means, every detail shows how much heart you put into it and i felt every second of it.
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-base font-bold transition-colors duration-500">
                    YM
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/yasser-moussaoui-9085012b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-base hover:underline inline-flex items-center gap-1.5"
                    >
                      Yasser Moussaoui
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-sm text-muted-foreground mt-0.5">Project Recipient</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Production Breakdown */}
          <CollapsibleSection title="Production Breakdown" isOpen={isSectionOpen("production")} onToggle={() => toggleSection("production")}>
            <div className="space-y-10">
              {/* Script */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Script / Poem</h3>
                <div className="bg-surface/30 rounded-xl border border-border p-6 md:p-8 transition-colors duration-500">
                  <pre className="whitespace-pre-wrap font-serif text-base md:text-lg leading-relaxed text-foreground/90">
                    {scriptExpanded ? SCRIPT_FULL : SCRIPT_PREVIEW}
                  </pre>
                  <button
                    onClick={() => setScriptExpanded(!scriptExpanded)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
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
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Voiceover</h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Recorded and directed by Djamel — raw, personal delivery.
                </p>
                <VOPlayer />
              </div>

              {/* Process Videos */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Process Shots</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-surface/50 rounded-lg border border-border overflow-hidden">
                    <video src={processVid1} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-surface/50 rounded-lg border border-border overflow-hidden">
                    <video src={processVid2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Storyboard */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Storyboard / Styleframes</h3>
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
            </div>
          </CollapsibleSection>
        </div>
      </section>

      {/* Credits */}
      <section className="px-6 mb-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Roles & Credits</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-border/60">
                <span className="text-sm text-muted-foreground">{credit.role}</span>
                {credit.link ? (
                  <a
                    href={credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base hover:opacity-70 transition-opacity duration-300 inline-flex items-center gap-1.5"
                  >
                    {credit.name}
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                ) : (
                  <span className="font-semibold text-base">{credit.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface/20 py-12 px-6 transition-colors duration-500">
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

export default TheOneYouKeepCaseStudy;
