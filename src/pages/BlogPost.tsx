import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const BLOG_POSTS: Record<string, { title: string; subtitle: string; date: string; readTime: string; content: React.ReactNode }> = {
    "100m-brand-film": {
        title: "$100M Brand Film",
        subtitle: "Are You Rich Enough to Waste It?",
        date: "March 2026",
        readTime: "4 min read",
        content: (
            <div className="space-y-10">
                {/* Lead */}
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                    Companies spend more on brand films than they do on cars. And the ones doing it right? They're not wasting a single frame.
                </p>

                {/* Section: The Reality */}
                <div className="space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">The $100M Reality</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        The world's biggest brands — Netflix, Nike, Apple, Amazon — collectively invest over <strong className="text-foreground">$100M annually</strong> in video content that includes brand films. Not product ads. Not explainer videos. <em>Brand films.</em>
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Why? Because a 45-second brand film can do what 200 pages of brand guidelines never will: <strong className="text-foreground">make someone feel something about your brand.</strong>
                    </p>
                </div>

                {/* Section: What a Brand Film Actually Does */}
                <div className="space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">What a Brand Film Actually Does</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A brand film isn't a commercial. It's not a demo. It's a compressed identity — the <strong className="text-foreground">who, the why, and the how</strong> of your brand, delivered in under a minute.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 my-6">
                        {[
                            { label: "Conversion Rate", value: "Increases landing page conversion by up to 80% when placed above the fold." },
                            { label: "Brand Awareness", value: "Viewers retain 95% of a message when watched vs. 10% when read." },
                            { label: "Premium Positioning", value: "Cinematic quality signals premium pricing — before a single word is read." },
                        ].map((item, i) => (
                            <div key={i} className="bg-surface/40 rounded-xl border border-border/50 p-5">
                                <p className="text-sm font-semibold mb-2">{item.label}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: The Homepage Problem */}
                <div className="space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">The Homepage Problem</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Most homepages are walls of text explaining what a company does. The problem? <strong className="text-foreground">Nobody reads them.</strong>
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A brand film placed at the top of your homepage does the job of every hero section, mission statement, and value proposition — combined. In 45 seconds. With sound. With emotion. With intent.
                    </p>
                    <blockquote className="border-l-2 border-foreground/20 pl-5 py-2 my-6">
                        <p className="text-base text-foreground/80 italic leading-relaxed">
                            "A great brand film doesn't explain your product. It makes your audience <em>want</em> to understand it."
                        </p>
                    </blockquote>
                </div>

                {/* Section: Who, Why, How */}
                <div className="space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Who, Why, How — In Under a Minute</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-base font-semibold mb-1">The Who</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Your brand's personality, distilled into motion. Not a logo reveal — a <em>feeling.</em>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-1">The Why</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                The emotional reason your brand exists. The thing that makes someone choose you over the 47 alternatives.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-1">The How</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Your craft, your process, your standard — shown, not told. Cinematic quality signals that you take your work seriously.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing */}
                <div className="space-y-5 border-t border-border/50 pt-8">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">So, Are You Rich Enough to Waste It?</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        The question isn't whether you can afford a brand film. It's whether you can afford <strong className="text-foreground">not having one</strong> — while your competitors use theirs to convert, position, and be remembered.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A brand film is the single most efficient way to deliver your entire message to a busy audience. It speaks for you when you're not in the room. It sells without selling. It positions without explaining.
                    </p>
                    <p className="text-base text-foreground font-medium">
                        The brands that invest in brand films aren't wasting money. They're buying recall.
                    </p>
                </div>
            </div>
        ),
    },
};

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? BLOG_POSTS[slug] : null;

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col pt-32">
                <div className="flex-1 px-6 text-center">
                    <h1 className="text-3xl font-semibold mb-4">Post not found</h1>
                    <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                        ← Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            {/* Back nav */}
            <div className="max-w-[720px] mx-auto w-full px-6 mb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium text-sm">Back to Blog</span>
                </Link>
            </div>

            {/* Header */}
            <section className="pb-8 px-6">
                <div className="max-w-[720px] mx-auto">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-3">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-snug">
                        {post.subtitle}
                    </p>
                </div>
            </section>

            {/* Content */}
            <article className="px-6 pb-20 flex-1">
                <div className="max-w-[720px] mx-auto">
                    {post.content}
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
