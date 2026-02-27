import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Coffee,
  Gamepad2,
  Trophy,
  Tv,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
import djamelPhoto from "@/assets/hero-thumb.png";

const evolution = [
  { year: "2021", phase: "AMV Editor", description: "Started editing Anime Music Videos — learning timing, pacing, and storytelling through music." },
  { year: "2022", phase: "Motion Designer", description: "Transitioned into professional motion design, freelancing on Fiverr while building core skills." },
  { year: "2023", phase: "Noxisros Collective", description: "Co-founded a motion design collective for collaborative, higher-end production work." },
  { year: "2024", phase: "HRWL Studios", description: "Evolved into independent freelance motion designer — cinematic brand films and commercials." },
];

const workApproach = [
  { title: "Strategy First", description: "Every project starts with understanding the problem, not the aesthetic." },
  { title: "Clarity Over Spectacle", description: "Motion should serve the message. If it doesn't clarify, it doesn't stay." },
  { title: "Craft With Purpose", description: "Every frame earns its place. No decoration—only intention." },
  { title: "Collaboration", description: "Working with sound designers when the project demands it." },
];

const personalInterests = [
  { icon: Coffee, title: "Coffee", note: "Definitely addicted" },
  { icon: Gamepad2, title: "Games", note: "Pokémon, Sonic, Zelda, Dispatch" },
  { icon: Trophy, title: "Strategy", note: "Chess & tactical thinking" },
  { icon: BookOpen, title: "Stories", note: "Writing poems & reading" },
  { icon: Tv, title: "Shows", note: "GoT (6 rewatches), Demon Slayer, AoT" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-inter">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-[800px] mx-auto">
            {/* Photo */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mb-6 animate-fade-up">
              <img
                src={djamelPhoto}
                alt="Djamel Haroual"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-[1.15] animate-fade-up" style={{ animationDelay: "100ms" }}>
              Hi, I'm Djamel.{" "}
              <span className="text-muted-foreground">Freelance motion designer at HRWL Studios.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: "150ms" }}>
              I craft cinematic brand films and commercials for brands that value creative solutions to business problems. From complex ideas to clear, memorable stories.
            </p>

            {/* Voice Note & Status */}
            <div className="space-y-8 mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <VoiceNotePlayer />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border w-fit">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs font-medium">Algeria · Available Worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Evolution Timeline */}
        <section className="px-6 py-12 bg-surface/30">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-xl font-bold mb-6">The Journey</h2>

            <div className="space-y-0">
              {evolution.map((phase, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-3 py-4 border-b border-border last:border-0"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-xs font-mono text-muted-foreground">{phase.year}</span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-semibold text-base mb-0.5">{phase.phase}</h3>
                    <p className="text-muted-foreground text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I Do Today */}
        <section className="px-6 py-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-xl font-bold mb-3">What I Do Today</h2>
            <p className="text-base text-muted-foreground mb-8 max-w-xl">
              Cinematic brand films, commercials, and storytelling-led motion work. I collaborate with sound designers when projects demand it.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {workApproach.map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-surface/50 rounded-lg border border-border"
                >
                  <span className="text-xs font-mono text-muted-foreground mb-2 block">0{i + 1}</span>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Side */}
        <section className="px-6 py-12 bg-surface/20">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-xl font-bold mb-6">Beyond the Work</h2>

            <div className="flex flex-wrap gap-2">
              {personalInterests.map((interest, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-background rounded-full border border-border"
                >
                  <interest.icon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-medium text-xs">{interest.title}</span>
                  <span className="text-xs text-muted-foreground">· {interest.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default About;
