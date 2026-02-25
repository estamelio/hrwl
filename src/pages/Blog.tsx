/**
 * Blog Page — /blog (placeholder)
 * File: src/pages/Blog.tsx
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-8 py-40 text-center">
        <p
          className="mb-4 opacity-35"
          style={{ fontFamily: "Inter", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}
        >
          Coming Soon
        </p>
        <h1
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: "1",
            letterSpacing: "-5.3px",
            color: "hsl(var(--foreground))",
          }}
        >
          Blog
        </h1>
        <p
          className="mt-6 max-w-md opacity-50"
          style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "15px", lineHeight: "1.7" }}
        >
          Thoughts on motion design, creative process, and the business of filmmaking. Coming in 2025.
        </p>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
