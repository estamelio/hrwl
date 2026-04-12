import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import ProgressiveForm from "@/components/ProgressiveForm";
import { Reveal } from "@/components/Reveal";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden no-scrollbar">
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">


          {/* Header Section */}
          <Reveal delay={0.1} className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground leading-[1.05] whitespace-nowrap">
              Start Your Project
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
                Have a Project in mind ?
              </p>
              <Link to="/inquiry" className="button-cta-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-[15px] font-semibold">
                Start inquiry
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