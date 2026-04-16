import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import ProgressiveForm from "@/components/ProgressiveForm";
import { Reveal } from "@/components/Reveal";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden no-scrollbar">
      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Header Section */}
          <Reveal delay={0.1} className="mb-12">
            <div className="mb-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">Inquiry</p>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                Start Your Project
              </h1>
              <p className="text-base text-muted-foreground max-w-lg mx-auto">
                Share your vision below (3–4 min). And I'll get back to you shortly.
              </p>
            </div>
          </Reveal>

          {/* Progressive Form Section */}
          <Reveal delay={0.2}>
            <ProgressiveForm />

            {/* Case Studies Link */}
            <div className="mt-12 text-center pt-8 border-t border-border/10 flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground font-medium">
                Want to see case studies?
              </p>
              <Link to="/work" className="button-cta-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-[15px] font-semibold">
                See Work
                <ArrowRight className="w-4 h-4 opacity-70" />
              </Link>
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