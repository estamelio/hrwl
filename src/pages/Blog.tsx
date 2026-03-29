import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import blogThumbnail from "@/assets/blog-brand-film-100m.png";

const BLOG_ENTRIES = [
  {
    slug: "100m-brand-film",
    title: "$100M Brand Film",
    subtitle: "Are You Rich Enough to Waste It?",
    date: "March 2026",
    readTime: "4 min read",
    image: blogThumbnail,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">Insights</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Blog</h1>
            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              Thought pieces on motion design, storytelling, and brand strategy.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            {BLOG_ENTRIES.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="rounded-xl overflow-hidden border border-border/60 bg-card card-elevated">
                  <div className="aspect-[577.96/324.53] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono text-muted-foreground/50">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                      <span className="text-[11px] text-muted-foreground/50">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}: {post.subtitle}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTABanner />
      <Footer />
    </div>
  );
}
