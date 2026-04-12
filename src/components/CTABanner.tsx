/**
 * CTABanner — Clean centered CTA matching Inquiry footer style.
 * File: src/components/CTABanner.tsx
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-[800px] mx-auto text-center pt-12 border-t border-border/10 flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground font-medium tracking-wide">
          Have a Project in mind ?
        </p>
        <Link
          to="/inquiry"
          className="button-cta-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-[15px] font-semibold"
        >
          Start inquiry
          <ArrowRight className="w-4 h-4 opacity-70" />
        </Link>
      </div>
    </section>
  );
}
