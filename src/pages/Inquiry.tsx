import { Play, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import ProgressiveForm from "@/components/ProgressiveForm";
import { Reveal } from "@/components/Reveal";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden no-scrollbar">
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Founder Video */}
          {/* Founder Video */}
          <Reveal>
            <div className="aspect-video bg-foreground rounded-2xl mb-16 flex items-center justify-center overflow-hidden shadow-2xl group cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 to-foreground group-hover:from-foreground/90 group-hover:to-foreground/95 transition-all duration-500" />

              {/* Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 text-center text-background flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 mb-6 rounded-full bg-background/5 backdrop-blur-md border border-background/10 flex items-center justify-center group-hover:bg-background/15 group-hover:scale-105 transition-all duration-500">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium tracking-wide text-background/80">Founder Introduction</p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/40">Djamel Haroual — 1:45</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Header Section */}
          <Reveal delay={0.1} className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground leading-[0.95]">
              Start Your <br />Project.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Watch a quick intro, then share your vision below (3–4 min). You'll be able to book an exploration call immediately after.
            </p>
          </Reveal>

          {/* Progressive Form Section */}
          <Reveal delay={0.2}>
            <ProgressiveForm />

            {/* Direct Booking Link */}
            <div className="mt-12 text-center pt-8 border-t border-border/10 flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground font-medium">
                Want to skip the form?
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface/50 border border-border/40 text-sm font-semibold hover:bg-surface transition-all duration-300">
                Book a direct call
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer catchphrase="Let's build your visual legacy." />

      {/* Hide scrollbar styles if needed specifically for this page */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Inquiry;