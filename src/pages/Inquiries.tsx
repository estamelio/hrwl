/**
 * Inquiries Page — /inquiries
 * Brand Film Inquiry Form with embedded form placeholder
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Inquiries() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-6 md:px-12">
        {/* Title */}
        <h1
          className="mt-20 text-center"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(24px, 3vw, 32.44px)",
            lineHeight: "20px",
            color: "hsl(var(--foreground))",
          }}
        >
          Brand Film Inquiry Form
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 text-center mx-auto"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.5vw, 18.47px)",
            lineHeight: "21px",
            color: "#838383",
            maxWidth: 1070,
          }}
        >
          Watch a short intro, then fill the form below (3-4 minutes). You'll be able to schedule a 30-40 minute exploration at the end
        </p>

        {/* Form embed placeholder */}
        <div
          className="mt-10 w-full rounded-3xl"
          style={{
            maxWidth: 820,
            minHeight: 300,
            backgroundColor: "hsl(var(--foreground))",
          }}
        >
          {/* Embedded form will go here */}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[120px]" />

        {/* All other inquiries */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(16px, 1.5vw, 20px)",
              lineHeight: "28px",
              color: "hsl(var(--foreground))",
            }}
          >
            All other inquiries:
          </h2>
          <a
            href="mailto:hi@hrwl.co"
            className="mt-2 inline-block transition-opacity hover:opacity-70"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              color: "hsl(var(--muted-foreground))",
              textDecoration: "none",
            }}
          >
            hi@hrwl.co
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
