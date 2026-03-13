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
} from "lucide-react";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Cinematic Brand Films",
    description: "Narrative-driven motion pieces that introduce or elevate a brand.",
  },
  {
    title: "Commercial Motion Design",
    description: "High-impact animated visuals built for marketing campaigns and product launches.",
  },
  {
    title: "Creative Direction",
    description: "Helping brands translate complex ideas into clear and compelling visual stories.",
  },
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
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 1. Hero Audio Introduction */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <VoiceNotePlayer />
        </div>
      </section>

      {/* 2. Identity Statement */}
      <section className="px-6 pb-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4 animate-fade-up">
            Djamel Haroual
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Freelance Motion Designer crafting cinematic brand films.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
            I help ambitious brands turn complex ideas into clear, memorable visuals.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">Algeria · Available Worldwide</span>
          </div>
        </div>
      </section>

      {/* 3. What I Do */}
      <section className="px-6 py-16 bg-surface/30">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Problems I Solve */}
      <section className="px-6 py-16">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">Problems I Solve</h2>
          <ul className="space-y-4 mb-6">
            {problems.map((problem, i) => (
              <li key={i} className="flex gap-3 text-base md:text-lg text-foreground/90">
                <span className="text-muted-foreground font-bold mt-0.5">·</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground border-t border-border pt-5 mt-8">
            My work focuses on turning complexity into cinematic clarity.
          </p>
        </div>
      </section>

      {/* 5. Journey */}
      <section className="px-6 py-16 bg-surface/30">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">The Journey</h2>
          <div className="space-y-0">
            {journey.map((phase, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 py-5 border-b border-border/60 last:border-0"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="text-sm font-mono text-muted-foreground">{phase.year}</span>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="font-semibold text-base mb-0.5">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Principles */}
      <section className="px-6 py-16">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">How I Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <div key={i} className="p-5 rounded-xl border border-border/60 bg-surface/20">
                <h3 className="font-semibold text-base mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Human Side */}
      <section className="px-6 py-16 bg-surface/30">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">Beyond the Work</h2>
          <div className="space-y-4">
            {personalInterests.map((interest, i) => (
              <div key={i} className="flex items-start gap-3">
                <interest.icon className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{interest.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Collaborators */}
      <section className="px-6 py-16">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">People I've Collaborated With</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {collaborators.map((collab, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border/50">
                <span className="font-medium text-sm">{collab.name}</span>
                <span className="text-xs text-muted-foreground">{collab.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="px-6 py-20 flex-1 flex items-end">
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
