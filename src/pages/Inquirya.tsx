import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Play, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const Inquiry = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden no-scrollbar">
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Founder Video */}
          <div className="aspect-video bg-foreground rounded-2xl mb-16 animate-fade-up flex items-center justify-center overflow-hidden shadow-2xl group cursor-pointer relative">
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

            {/* Subtle grain/texture overlay could go here */}
          </div>

          {/* Header Section */}
          <div className="animate-fade-up mb-12" style={{ animationDelay: "100ms" }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground leading-[0.95]">
              Start Your <br />Project.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Watch a quick intro, then share your vision below (3–4 min). You'll be able to book an exploration call immediately after.
            </p>
          </div>

          {/* Form Section */}
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Full Name</label>
                  <Input
                    placeholder="E.g. Jane Doe"
                    className="h-14 bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-xl focus:ring-1 focus:ring-foreground/10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Email Address</label>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    className="h-14 bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-xl focus:ring-1 focus:ring-foreground/10"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Company / Brand</label>
                  <Input
                    placeholder="Your brand name"
                    className="h-14 bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-xl focus:ring-1 focus:ring-foreground/10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Project Category</label>
                  <Input
                    placeholder="Brand Film, Commercial, etc."
                    className="h-14 bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-xl focus:ring-1 focus:ring-foreground/10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Project Details & Vision</label>
                <Textarea
                  placeholder="Tell us about your goals, specific needs, and what makes this project special..."
                  rows={6}
                  className="bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-2xl p-5 resize-none focus:ring-1 focus:ring-foreground/10"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Ideal Timeline</label>
                  <Input
                    placeholder="Launch date / Deadline"
                    className="h-14 bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-xl focus:ring-1 focus:ring-foreground/10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-1">Budget Range (USD)</label>
                  <Input
                    placeholder="Your Estimated Budget"
                    className="h-14 bg-surface/30 border-border/40 focus:bg-surface/50 transition-all rounded-xl focus:ring-1 focus:ring-foreground/10"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button type="submit" variant="pill" size="lg" className="h-16 flex-1 text-base tracking-tight hover-lift group shadow-lg shadow-foreground/5">
                  Send Inquiry
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="mailto:hello@hrwl.co" className="flex-1">
                  <Button type="button" variant="outline" size="lg" className="w-full h-16 rounded-full border-border/60 hover:bg-surface/20 hover-lift text-base">
                    <Mail className="w-5 h-5 mr-2 opacity-60" />
                    Mail directly
                  </Button>
                </a>
              </div>
            </form>

            {/* Direct Booking Link */}
            <div className="mt-12 text-center pt-8 border-t border-border/10 flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground font-medium">
                Have a Project in mind ?
              </p>
              <a href="#" className="button-cta-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-[15px] font-semibold">
                Start inquiry
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
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
