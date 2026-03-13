import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { CASES } from "@/data/cases";
import Footer from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen pt-28 pb-0 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
          Work
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CASES.map((project, index) => (
            <Link
              key={project.id}
              to={project.comingSoon ? "#" : `/work/${project.id}`}
              className={`group block animate-fade-up ${project.comingSoon ? "pointer-events-none" : ""}`}
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={project.comingSoon ? (e) => e.preventDefault() : undefined}
            >
              <div className={`rounded-xl overflow-hidden border border-border bg-surface transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-foreground/20 hover:shadow-lg ${project.comingSoon ? "opacity-50" : ""}`}>
                {/* Thumbnail — 577.96 : 324.53 ratio ≈ 1.781:1 */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "577.96 / 324.53" }}>
                  <div className="absolute inset-0 bg-muted" />
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/3 to-foreground/8" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                      {project.comingSoon ? "Coming Soon" : "Preview"}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="px-5 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-sm leading-snug group-hover:opacity-70 transition-opacity duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground flex-shrink-0 mt-0.5">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">{project.overview}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* CTA Box */}
          <Link
            to="/inquiry"
            className="group block animate-fade-up"
            style={{ animationDelay: `${CASES.length * 80}ms` }}
          >
            <div className="rounded-xl overflow-hidden border border-dashed border-border bg-muted/50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-foreground/30 h-full flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center p-10 gap-4" style={{ minHeight: "calc(324.53 / 577.96 * 100% + 80px)" }}>
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center group-hover:border-foreground/50 transition-colors duration-500">
                  <Plus className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500 text-center">
                  Want to be the next case study?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
