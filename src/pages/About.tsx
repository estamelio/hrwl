import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Gamepad2,
  Headphones,
  Mic,
  Tv,
  Brain,
  ChevronDown,
} from "lucide-react";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
import Footer from "@/components/Footer";

// Collapsible section component
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
      <h2 className="text-lg md:text-xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity duration-300">
        {title}
      </h2>
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

const services = [
  { title: "Cinematic Brand Films", description: "Narrative-driven motion pieces that introduce or elevate a brand." },
  { title: "Commercial Motion Design", description: "High-impact animated visuals built for marketing campaigns and product launches." },
  { title: "Creative Direction", description: "Helping brands translate complex ideas into clear and compelling visual stories." },
];

const problems = [
  "A product that is powerful but difficult to explain",
  "Marketing visuals that feel generic or forgettable",
  "A brand story that lacks emotional impact",
  "Complex ideas that need to become clear and engaging",
];

const journey = [
  { year: "2021", title: "AMV Editor", description: "Started creating Anime Music Videos and discovering visual storytelling." },
  { year: "2022", title: "Motion Designer", description: "Transitioned into motion design and began freelancing." },
  { year: "2023", title: "Noxisros Collective", description: "Founded a small motion design collective focused on collaborative work." },
  { year: "2024", title: "HRWL Studios", description: "Developed the HRWL personal brand and cinematic storytelling approach." },
  { year: "Today", title: "Independent", description: "Working independently as a freelance motion designer creating brand films and commercial motion work." },
];

const principles = [
  { title: "Clarity first", description: "If the audience doesn't understand the message, the work has failed." },
  { title: "Emotion matters", description: "People remember how something made them feel long after they forget the visuals." },
  { title: "Sound completes motion", description: "Great animation deserves equally thoughtful sound design." },
  { title: "Quality over volume", description: "Fewer projects, deeper attention, stronger results." },
];

const personalInterests = [
  { icon: Gamepad2, text: "Video games — Mario, Zelda, Sonic, Dispatch, Hollow Knight" },
  { icon: Headphones, text: "Deep appreciation for sound design and music in motion work" },
  { icon: Mic, text: "Voice acting and narration" },
  { icon: Tv, text: "Anime, old TV shows and movies" },
  { icon: Brain, text: "Psychology and human nature" },
];

const collaborators = [
  { name: "Nsihrakhi Pitanta (Incie)", role: "Sound Designer" },
  { name: "Uliania PchelinUley", role: "Sound Designer & Music Producer" },
  { name: "Penrose Audio (Davies)", role: "Sound Designer & Music Producer" },
  { name: "Hichem Ouali", role: "Brand Strategist | Marketer" },
  { name: "Houssem Karim", role: "Artist" },
  { name: "Ilias Lem", role: "Sound Designer" },
  { name: "Nicholas M. Candeias", role: "Motion Designer" },
  { name: "Zucchini Brudarsky", role: "Illustrator & Graphic Designer" },
  { name: "Yuhui (Kelvin) Jian", role: "Composer & Sound Designer" },
];

const About = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sectionKeys = ["whoiam", "whatido", "approach", "beyond"];
  const allOpen = sectionKeys.every((k) => openSections[k]);

  const toggleAll = () => {
    const next: Record<string, boolean> = { ...openSections };
    sectionKeys.forEach((k) => (next[k] = !allOpen));
    setOpenSections(next);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Voice Intro */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-[900px] mx-auto">
          <VoiceNotePlayer />
        </div>
      </section>

      {/* Identity Statement */}
      <section className="px-6 pb-14">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-4 animate-fade-up">
            Djamel Haroual
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 animate-fade-up-delay-1">
            Freelance Motion Designer crafting cinematic brand films.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-lg mx-auto animate-fade-up-delay-2">
            I help ambitious brands turn complex ideas into clear, memorable visuals.
          </p>

        </div>
      </section>

      {/* Collapsible Sections */}
      <section className="px-6 pb-16">
        <div className="max-w-[800px] mx-auto">
          {/* Toggle all */}
          <div className="flex justify-end mb-2">
            <button
              onClick={toggleAll}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
            >
              {allOpen ? "Collapse All" : "Read All"}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${allOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Who I Am — includes identity + problems */}
          <CollapsibleSection title="Who I Am" isOpen={!!openSections.whoiam} onToggle={() => toggleSection("whoiam")}>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Problems I Solve</h3>
                <ul className="space-y-3">
                  {problems.map((p, i) => (
                    <li key={i} className="flex gap-3 text-base text-foreground/90">
                      <span className="text-muted-foreground font-bold mt-0.5">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground border-t border-border pt-4 mt-5">
                  My work focuses on turning complexity into cinematic clarity.
                </p>
              </div>

              {/* Journey */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">The Journey</h3>
                {journey.map((phase, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 py-3 border-b border-border/50 last:border-0">
                    <div className="col-span-3 md:col-span-2">
                      <span className="text-sm font-mono text-muted-foreground">{phase.year}</span>
                    </div>
                    <div className="col-span-9 md:col-span-10">
                      <h4 className="font-semibold text-sm mb-0.5">{phase.title}</h4>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>

          {/* What I Do */}
          <CollapsibleSection title="What I Do" isOpen={!!openSections.whatido} onToggle={() => toggleSection("whatido")}>
            <div className="grid md:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* My Approach */}
          <CollapsibleSection title="My Approach" isOpen={!!openSections.approach} onToggle={() => toggleSection("approach")}>
            <div className="grid md:grid-cols-2 gap-5">
              {principles.map((p, i) => (
                <div key={i} className="p-4 rounded-xl border border-border/60 bg-surface/20">
                  <h3 className="font-semibold text-sm mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Beyond Work */}
          <CollapsibleSection title="Beyond Work" isOpen={!!openSections.beyond} onToggle={() => toggleSection("beyond")}>
            <div className="space-y-8">
              <div className="space-y-3">
                {personalInterests.map((interest, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <interest.icon className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{interest.text}</span>
                  </div>
                ))}
              </div>

              {/* Collaborators */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">People I've Collaborated With</h3>
                <div className="grid md:grid-cols-2 gap-x-10">
                  {collaborators.map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/40">
                      <span className="font-medium text-sm">{c.name}</span>
                      <span className="text-xs text-muted-foreground">{c.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 flex-1 flex items-end">
        <div className="max-w-[800px] mx-auto w-full text-center">
          <p className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
            If you're building something ambitious and want it to be seen clearly, let's talk.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            I take on a limited number of projects to ensure deep attention and quality.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/inquiry">
              <Button className="rounded-full px-6 h-11 font-medium">
                Start an Inquiry
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" className="rounded-full px-6 h-11 font-medium">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
