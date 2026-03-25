import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowLeft, ArrowRight, Play } from "lucide-react";
import MediaLightbox from "@/components/MediaLightbox";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";

// HRWL Project Assets
import hrwlLogo from "@/assets/hrwl-logo.png";
import hrwlWLogo from "@/assets/hrwl-w-logo.gif";
import hrwlLogoAnimation from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Animations/logo animation 1.webm";
import hrwlEndcard from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/end.webp";
import hrwlCardFront from "@/assets/hrwl-card-front.png";
import hrwlCardBack from "@/assets/hrwl-card-back.png";
import hrwlBusinessCard from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Animations/5.webm";
import hrwl3DSpline from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Animations/spline 3D_1.webm";
import hrwlChibiBatman from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Animations/chibi batman final post post final 1-.webm";

// Storyboard
import viSb1 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 1.webp";
import viSb2 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 2.webp";
import viSb3 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/G 2.webp";
import viSb4 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 4.webp";
import viSb5 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 5.webp";
import viSb6 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 6.webp";
import viSb7 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 7.webp";
import viSb8 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 8-10.webp";
import viSb9 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/scene 9-1.webp";
import viSb10 from "@/assets/Case studies/Hrwl - Visual identity + demo reel/Storyboard/end.webp";

import { useState } from "react";

interface Props {
  caseData: Case;
  nextCase: Case;
}

const HRWLVisualIdentityCaseStudy = ({ caseData, nextCase }: Props) => {
    const [lightbox, setLightbox] = useState({
        isOpen: false,
        index: 0,
        images: [] as string[]
    });

    const openLightbox = (index: number, images: string[]) => {
        setLightbox({ isOpen: true, index, images });
    };

    const sbImages = [viSb1, viSb2, viSb3, viSb4, viSb5, viSb6, viSb7, viSb8, viSb9, viSb10];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 pb-4 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">{caseData.title}</h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
        </div>
      </section>

      {/* Hero Logo */}
      <section className="px-6 mb-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-[21/9] bg-foreground rounded-lg overflow-hidden relative flex items-center justify-center">
            <img src={hrwlLogo} alt="HRWL Logo" className="w-40 md:w-56 opacity-90" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 mb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { label: "Production", value: caseData.production },
              { label: "Year", value: caseData.year },
              { label: "Team", value: `${caseData.credits.length} specialists` },
              { label: "Result", value: "Full identity system" },
            ].map((stat, i) => (
              <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                <p className="font-semibold text-sm">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 mb-12">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">Problem</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{caseData.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Solution</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{caseData.solution}</p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Visual Identity</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="bg-foreground rounded-md p-6 flex items-center justify-center aspect-[16/9]">
              <img src={hrwlLogo} alt="HRWL Main Logo" className="w-full max-w-[120px]" />
            </div>
            <div className="bg-foreground rounded-md overflow-hidden aspect-[16/9]">
              <video src={hrwlLogoAnimation} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Storyboard</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {sbImages.map((img, i) => (
              <div 
                key={i} 
                className="aspect-video bg-surface/50 rounded-md border border-border overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-zoom-in"
                onClick={() => openLightbox(i, sbImages)}
              >
                <img src={img} alt={`Storyboard ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Cards */}
      <section className="px-6 mb-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Business Cards</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="bg-surface/50 rounded-md p-3">
              <img src={hrwlCardFront} alt="Business Card Front" className="w-full rounded" />
            </div>
            <div className="bg-surface/50 rounded-md p-3">
              <img src={hrwlCardBack} alt="Business Card Back" className="w-full rounded" />
            </div>
          </div>
          <div className="bg-foreground rounded-md overflow-hidden">
            <video src={hrwlBusinessCard} autoPlay loop muted playsInline className="w-full" />
          </div>
        </div>
      </section>

      {/* Demo Reel + OC Animations */}
      <section className="px-6 mb-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Demo Reel + OC Animations</h2>

          {/* Demo reel placeholder */}
          <div className="aspect-video bg-black rounded-lg overflow-hidden relative group cursor-pointer mb-4">
            <iframe
              src="https://player.vimeo.com/video/1007931547?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ border: 0 }}
              loading="lazy"
              title="HRWL Demo Reel"
            />
          </div>

          {/* OC Animations */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-surface/50 rounded-md overflow-hidden">
              <video src={hrwl3DSpline} autoPlay loop muted playsInline className="w-full aspect-square object-cover" />
            </div>
            <div className="bg-surface/50 rounded-md overflow-hidden">
              <video src={hrwlChibiBatman} autoPlay loop muted playsInline className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Endcard */}
      <section className="px-6 mb-12">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-foreground rounded-md overflow-hidden">
            <img src={hrwlEndcard} alt="HRWL Endcard" className="w-full" />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 mb-12">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-3">Outcome</h2>
          <p className="text-sm text-muted-foreground">{caseData.result}</p>
        </div>
      </section>

      {/* Credits */}
      <section className="px-6 mb-12">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-4">Credits</h2>
          <div className="grid md:grid-cols-2 gap-x-6">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">{credit.role}</span>
                <span className="font-medium text-sm">{credit.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Case */}
      <div className="border-t border-border bg-surface/30 py-10 px-6">
        <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
            <p className="text-lg font-bold">{nextCase.title}</p>
          </div>
          <Link to={`/work/${nextCase.id}`}>
            <Button variant="outline" className="group rounded-full">
              View Case
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default HRWLVisualIdentityCaseStudy;
